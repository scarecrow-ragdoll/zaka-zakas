<?php

namespace App\Controller;

use App\Entity\Digiseller;
use App\Entity\Seller;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\GgselCategory;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Contracts\Cache\ItemInterface;

class CatalogController extends AbstractController
{

    public static $contentType = [
        0 => ['name' => 'Игры', 'url' => 'all-games'],
        4 => ['name' => 'Программное обеспечение', 'url' => 'software'],
        5 => ['name' => 'Цифровые товары', 'url' => 'digital-goods'],
        8 => ['name' => 'Предзаказы', 'url' => 'pre-orders-first'],
        9 => ['name' => 'Сервисы подписки и соц.сети', 'url' => 'subscription-services'],
    ];

    private $entityManager;

    private $cache;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->cache = new FilesystemAdapter();
    }


//    /**
//     * @Route("/catalog", name="catalog_index")
//     */
//    public function catalogIndex()
//    {
//        return $this->catalog('games');
//    }

    /**
     * @Route("/catalog/{url}", name="catalog")
     */
    public function catalog(string $url)
    {
        if ($url == 'igry-po-nazvaniyu')
            return $this->redirectToRoute('all-games');
        if ($url == 'everspace-2-first')
            return $this->redirectToRoute('catalog', ['url' => 'everspace-2-20908'], 301);

        $ggselCategory = $this->entityManager->getRepository(GgselCategory::class)->findOneBy(['url' => $url]);
        if (!$ggselCategory) {
            throw $this->createNotFoundException();
        }

        $childCategories = $this->entityManager->getRepository(GgselCategory::class)->findChildOne($ggselCategory->getDigiCatalog());
        $games = $this->entityManager->getRepository(Digiseller::class)->getByCriterias(['category' => $ggselCategory->getDigiCatalog()]);
        $count = $this->entityManager->getRepository(Digiseller::class)->getIds(['category' => $ggselCategory->getDigiCatalog()], true)['cnt'];

        return $this->render('category.html.twig', [
            'games' => $games,
            'childCategories' => $childCategories,
            'category' => $ggselCategory,
            'count' => $count
        ]);
    }

    /**
     * @Route("/all-games/{type}", name="all-games-type")
     */
    public function allGameType(string $type)
    {
        if ($type == 'all-games') {
            return $this->redirectToRoute('all-games');
        }
        foreach (self::$contentType as $id => $contentType) {
            if ($contentType['url'] == $type)
                return $this->allGame($id);
        }
        return $this->createNotFoundException();
    }

    /**
     * @Route("/all-games", name="all-games")
     */
    public function allGame(int $typeId = 0)
    {
        $result = [];
        $categories = $this->entityManager->getRepository(GgselCategory::class)->getBase($typeId);

        $childrenSorted = $this->cache->get('all_games_' . $typeId, function (ItemInterface $item) use ($typeId) {
            $item->expiresAfter(86400);
             $children = $this->entityManager->getRepository(GgselCategory::class)->findBaseChildSql($typeId);
             $childrenIds = $this->entityManager->getRepository(GgselCategory::class)->getBaseCategoryIdsChild($typeId);
             $childrenSorted = [];
             foreach ($children as $child) if (key_exists($child['digi_catalog'], $childrenIds)) {
                 foreach ($childrenIds[$child['digi_catalog']] as $cid) {
                     $childrenSorted[$cid][] = $child;
                 }
             }
             return $childrenSorted;
        });

        foreach ($categories as $category)
        {
            $literal = strtoupper(mb_substr($category->getBreadcrumbsTitle(), 0, 1));
            if (!is_numeric($literal) and !empty($literal)) {
                $result[$literal][] = [
                    'category' => $category,
                    'children' => key_exists($category->getDigiCatalog(), $childrenSorted) ? $childrenSorted[$category->getDigiCatalog()] : []
                ];
            }
        }
        return $this->render('all_games.html.twig', [
            'games' => $result,
            'contentType' => self::$contentType,
            'typeId' => $typeId
        ]);
    }

    /**
     * @Route("/seller/{seller}", name="seller")
     * @ParamConverter("seller", options={"mapping": {"seller": "sellerId"}})
     */
    public function seller(Seller $seller)
    {
        $criterias = ['seller' => $seller->getSellerId()];
        $games = $this->entityManager->getRepository(Digiseller::class)->getByCriterias(['seller' => $seller->getSellerId(), 'limit' => 15]);
        $count = $this->entityManager->getRepository(Digiseller::class)->getIds($criterias, true)['cnt'];
        return $this->render('seller.html.twig', [
            'seller' => $seller,
            'games' => $games,
            'count' => $count,
        ]);
    }
}
