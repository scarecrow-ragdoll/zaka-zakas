<?php

namespace App\Controller\Admin;

use App\Controller\CatalogController;
use App\Entity\About;
use App\Entity\Active;
use App\Entity\Agreement;
use App\Entity\Category;
use App\Entity\Config;
use App\Entity\Digiseller;
use App\Entity\GgselCategory;
use App\Entity\Guaranty;
use App\Entity\Header;
use App\Entity\HeaderCategory;
use App\Entity\Howbuy;
use App\Entity\IndexCategory;
use App\Entity\RespData;
use App\Entity\Section;
use App\Entity\SellerPriority;
use App\Entity\Sellers;
use App\Entity\StaticPage;
use App\Service\DigisellerApi;
use App\Service\DigisellerApiService;
use App\Service\Ggsel\GgselApi;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class DashboardController extends AbstractDashboardController
{

    private $entityManager;
    private $digisellerApi;
    private $digisellerApiService;
    private $adminUrlGenerator;
    private $ggselApi;

    public function __construct(
        EntityManagerInterface $entityManager,
        DigisellerApi $digisellerApi,
        DigisellerApiService $digisellerApiService,
        AdminUrlGenerator $adminUrlGenerator,
        GgselApi $ggselApi
    )
    {
        $this->entityManager = $entityManager;
        $this->digisellerApi = $digisellerApi;
        $this->digisellerApiService = $digisellerApiService;
        $this->adminUrlGenerator = $adminUrlGenerator;
        $this->ggselApi = $ggselApi;
    }


    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    /**
     * @Route("/admin/update", name="admin_update")
     */
    public function adminUpdate(): Response
    {
        return $this->render('admin/update.html.twig', [
        ]);
    }

    /**
     * @Route("/admin/ggsel", name="admin_ggsel")
     */
    public function adminGgsel(): Response
    {
        $maxPageGame = $this->ggselApi->getMaxPageGame();
        $maxPageCategory = $this->ggselApi->getMaxPageCategory();
        return $this->render('admin/ggsel.html.twig', [
            'maxPageGame' => $maxPageGame,
            'maxPageCategory' => $maxPageCategory,
        ]);
    }

    /**
     * @Route("/admin/ggsel-update/{param}", name="admin_ggsel_update")
     */
    public function adminGgselUpdate(string $param): Response
    {
        if ($param) {
            if ($param == 'category') {
                foreach ($this->ggselApi->getCategories() as $category) if ($category->getDigiCatalog()) {
                    $category->setId($category->getDigiCatalog());
                    $category->setUrl($category->getUrl() . '-stembuy');
                    $this->entityManager->merge($category);
                }
                $this->entityManager->flush();
                return new Response('Категории успешно обновлены!');
            }
            if ($param == 'goods') {
                $this->ggselApi->getGoods();
                return new Response('Товары успешно обновлены!');
            }
        }
        return new Response('Ошибка запроса');
    }

    /**
     * @Route("/admin/ggsel-update-category/{page}", name="admin_ggsel_update_category")
     */
    public function adminGgselUpdatCategory(string $page): Response
    {
        $this->ggselApi->getCategoryPage(intval($page));
        return new Response('Товары успешно обновлены!');
    }

    /**
     * @Route("/admin/ggsel-update-game/{page}", name="admin_ggsel_update_game")
     */
    public function adminGgselUpdateGame(string $page): Response
    {
        $this->ggselApi->getGoodsPage(intval($page));
        return new Response('Товары успешно обновлены!');
    }

    /**
     * @Route("/admin/update/reviews", name="admin_update_reviews")
     */
    public function adminUpdateReviews(Request $request)
    {
        $sellers = $this->entityManager->getRepository(Sellers::class)->findAll();
        foreach ($sellers as $seller) {
            $resps = $this->digisellerApi->GetComments($seller->getId());
            foreach ($resps->reviews->review as $resp) {
                $order = $this->entityManager->getRepository(RespData::class)->find($resp->attributes()->id);
                if (!$order)
                    $order = new RespData();
                $order->setType($resp->type);
                $order->setDate($resp->date);
                $order->setInfo($resp->info);
                $this->entityManager->persist($order);
            }
            $this->entityManager->flush();
        }
        return new Response('Отзывы покупателей, Успешно обновлены.');
    }

    /**
     * @Route("/admin/update/order", name="admin_update_order")
     */
    public function adminUpdateOrder(Request $request)
    {
        $games = $this->entityManager->getRepository(Digiseller::class)->findAll();
        foreach ($games as $game) {
            $this->digisellerApiService->updateProductStock($game, false);
        }
        $this->entityManager->flush();
        return new Response('Товары успешно обновлены.');
    }

    /**
     * @Route("/admin/update/desc", name="admin_update_order_desc")
     */
    public function adminUpdateOrderDesc(Request $request)
    {
        $games = $this->entityManager->getRepository(Digiseller::class)->findAll();
        foreach ($games as $game) {
            $this->digisellerApiService->updateProduct($game, false);
        }
        $this->entityManager->flush();
        return new Response('Товары успешно обновлены.');
    }

    /**
     * @Route("/admin/update/desc_img", name="admin_update_order_desc")
     */
    public function adminUpdateOrdeDescImg(Request $request)
    {
        $games = $this->entityManager->getRepository(Digiseller::class)->findAll();
        foreach ($games as $game) {
            $this->digisellerApiService->updateProduct($game, false, false);
        }
        $this->entityManager->flush();
        return new Response('Товары успешно обновлены.');
    }

    /**
     * @Route("/admin/sellercategory", name="admin_seller_category")
     */
    public function adminSellerCategory(Request $request)
    {
        $sellersOriginal = $this->entityManager->getRepository(SellerPriority::class)->findAll();
        $sellers = [];
        foreach ($sellersOriginal as $seller) {
            $sellers[$seller->getId()] = $seller;
        }

        $request = [];
        foreach (CatalogController::$contentType as $id => $type) {
            $result[] = $this->allGame($id);
        }

        $category = $this->entityManager->getRepository(GgselCategory::class)->getlAllCategorySeller();
        return $this->render('admin/seller_category.html.twig', [
            'categories' => $result,
            'sellerCategory' => $category,
            'sellers' => $sellers,
        ]);
    }

    public function allGame(int $typeId): array
    {
        $result = [];
        $categories = $this->entityManager->getRepository(GgselCategory::class)->getBase($typeId);

        $children = $this->entityManager->getRepository(GgselCategory::class)->findBaseChildSql($typeId);

        $childrenIds = $this->entityManager->getRepository(GgselCategory::class)->getBaseCategoryIdsChild($typeId);

        $childrenSorted = [];
        foreach ($children as $child) if (key_exists($child['digi_catalog'], $childrenIds)) {
            foreach ($childrenIds[$child['digi_catalog']] as $cid) {
                $childrenSorted[$cid][] = $child;
            }
        }

        foreach ($categories as $category) {
            $result[] = [
                'category' => $category,
                'children' => key_exists($category->getDigiCatalog(), $childrenSorted) ? $childrenSorted[$category->getDigiCatalog()] : []
            ];
        }

        return $result;
    }

    /**
     * @Route("/admin/cache", name="admin_cache")
     */
    public function adminCache(Request $request)
    {
        try {
            exec('cd ../var/cache && rm -rf prod && rm -rf dev');
        } catch (\Exception $exception) {
            $exception->getTrace();
        }

        return $this->redirectToRoute('admin');
    }

    /**
     * @Route("/admin/add", name="admin_add")
     */
    public function adminUpdateAdd(Request $request)
    {
        $message = '';
        if ($request->getMethod() == 'POST') {
            $message = 'Что то пошло не так';
            $fields = $request->request->all();
            if (key_exists('game', $fields)) {
                $digi = $this->entityManager->getRepository(Digiseller::class)->findOneBy(['gameId' => $fields['game']]);
                if ($digi) {
                    $message = 'Товар уже есть на сайте';
                } else {
                    $order = $this->digisellerApi->InfoOrder($fields['game']);
                    if ($order->retval == 0) {
                        $game = $this->digisellerApiService->addProduct($order, key_exists('subs', $fields) ? 1 : 0);
                        $this->entityManager->persist($game);
                        $this->entityManager->flush();
                        $message = 'Товар успешно добавлен';
                    }
                }
            }
        }
        return $this->render('admin/add.html.twig', [
            'message' => $message,
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Dimikey')
            ->renderContentMaximized();
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::section('Модуль каталог');
        yield MenuItem::linktoDashboard('Дашборд', 'fa fa-home');
        yield MenuItem::linkToCrud('Все товары', 'fa fa-list', Digiseller::class);
        yield MenuItem::linkToCrud('Управление категориями', 'fa fa-list-alt', GgselCategory::class);
        yield MenuItem::linkToUrl('Категории и продавцы', 'fa fa-list-alt', '/admin/sellercategory');
        yield MenuItem::linkToUrl('Ggsel', 'fas fa-arrow-alt-circle-up', '/admin/ggsel');
//        yield MenuItem::linkToCrud('Активные товары', 'fa fa-list', Active::class);
//        yield MenuItem::linkToCrud('Управление разделами', 'fa fa-clipboard-list', Section::class);

        yield MenuItem::section('Контент');
        yield MenuItem::linkToCrud('Шапка сайта', 'fas fa-cog', Header::class);
        yield MenuItem::linkToCrud('Категории в шапка', 'fas fa-cog', HeaderCategory::class);
        yield MenuItem::linkToCrud('Категории на главной', 'fas fa-cog', IndexCategory::class);

        yield MenuItem::section('Настройки');
        yield MenuItem::linkToCrud('Настройки', 'fas fa-cog', Config::class);
        yield MenuItem::linkToCrud('Приоритеты продавцов', 'fas fa-cog', SellerPriority::class);
//        yield MenuItem::linkToUrl('Очистка кеша', 'fas fa-cog', '/admin/cache');

        yield MenuItem::section('Модули');
        yield MenuItem::linkToCrud('Статические страницы', 'fa fa-file-text', StaticPage::class);
    }
}
