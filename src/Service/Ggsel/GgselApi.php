<?php


namespace App\Service\Ggsel;


use App\Entity\ChildId;
use App\Entity\Digiseller;
use App\Entity\Seller;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class GgselApi
{
    private $ggselGoods;
    private $ggselCategory;
    private $ggselSeller;
    private $serializer;
    private $entityManager;

    const CONTENT_TYPE = [
        '1' => 'Аккаунт',
        '2' => 'Ключ',
        '3' => 'Инвентарь',
        '4' => 'Прокачка',
        '5' => 'Другое',
        '6' => 'Баланс',
        '7' => 'Чит',
        '8' => 'Карта оплаты',
        '9' => 'Валюта',
        '10' => 'Предметы',
        '11' => 'Услуга',
        '12' => 'Игра',
        '13' => 'Платформа',
        '14' => 'Регион',
        '16' => 'Валюта',
        '17' => 'Товар',
        '18' => 'Подписка',
        '19' => 'DLC',
        '20' => 'Подписчики',
        '21' => 'Лайки',
        '22' => 'Продвижение',
        '29' => 'Рандом ключ',
        '30' => 'Рандом аккаунт',
    ];

    public function __construct(
        GgselGoods $ggselGoods,
        GgselCategory $ggselCategory,
        GgselSeller $ggselSeller,
        SerializerInterface $serializer,
        EntityManagerInterface $entityManager
    )
    {
        $this->ggselGoods = $ggselGoods;
        $this->ggselCategory = $ggselCategory;
        $this->ggselSeller = $ggselSeller;
        $this->serializer = $serializer;
        $this->entityManager = $entityManager;
    }

    public function getGoodsPage(int $page)
    {
        if ($page == 1) {
            $this->entityManager->getRepository(Digiseller::class)->setUnavailable();
        }
        $pageJson = $this->ggselGoods->getPage($page);
        $content = $pageJson['goods'];
        foreach ($content as $data) {
            if($data['id_seller'] == 0 or $data['id_seller'] == '0')
                continue;
            $this->entityManager->merge($this->getGood($data));
        }
        $this->entityManager->flush();
    }

    public function getDeleteDimikeyCategories()
    {
        return $this->entityManager->getRepository(\App\Entity\GgselCategory::class)->getCategoryForDelete();
    }

    public function cntGoodCategories()
    {
        return $this->entityManager->getRepository(\App\Entity\GgselCategory::class)->getNotEmptyCategories();
    }

    public function updateCategoryCnt($category)
    {
        $cnt = $this->entityManager->getRepository(Digiseller::class)->getCount($category);
        $this->entityManager->getRepository(\App\Entity\GgselCategory::class)->updateCount($category, $cnt);
    }

    public function deleteEmptyCategory()
    {
        return $this->entityManager->getRepository(\App\Entity\GgselCategory::class)->deleteEmptyCategory();
    }


    public function deleteDimikey($category)
    {
        $this->entityManager->getRepository(\App\Entity\GgselCategory::class)->deleteDimkey($category);
    }

    public function clearDuplicates()
    {
        $this->entityManager->getRepository(Digiseller::class)->deleteDuplicates();
    }

    public function clean()
    {
        $this->entityManager->getRepository(Digiseller::class)->hideLowWmrDimikey();
        $this->entityManager->getRepository(Digiseller::class)->platiruSales();
    }

    public function getCategoryPage(int $page)
    {
        $pageJson = $this->ggselCategory->getPage($page);
        $content = $pageJson['goods'];
        foreach ($content as $data) {
                $dataJson = json_encode($data);
                $category = $this->serializer->deserialize($dataJson, \App\Entity\GgselCategory::class, 'json', [AbstractNormalizer::IGNORED_ATTRIBUTES => ['tags']]);
                $category->setUrl($category->getUrl() . '-zaka-zaka');
            if (!empty($data['tags'])) {
                $tags = [];
                foreach ($data['tags'] as $tag) {
                    $tags[] = $tag['name'];
                }
                $category->setTags(implode(',', $tags));
            }
                $this->entityManager->merge($category);
                if ($data['child_ids'] != null) {
                    foreach ($data['child_ids'] as $section) {
                        $child = new ChildId();
                        $child->setCategoryId($data['digi_catalog']);
                        $child->setChildId($section);
                        $this->entityManager->merge($child);
                    }
                }
        }
        if ($page == 1) {
            $this->entityManager->getRepository(ChildId::class)->delete();
        }
        $this->entityManager->flush();
    }

    public function getMaxPageGame()
    {
        $this->ggselGoods->getNextPage();
        return $this->ggselGoods->maxPage;
    }

    public function getMaxPageCategory()
    {
        $this->ggselCategory->getNextPage();
        return $this->ggselCategory->maxPage;
    }

    public function getMaxPageSeller()
    {
        $this->ggselSeller->getNextPage('sellers');
        return $this->ggselSeller->maxPage;
    }

    public function getGoods(): array
    {
        $result = [];
        while ($content = $this->ggselGoods->getNextPage()) {
            foreach ($content as $data) {
                $this->entityManager->merge($this->getGood($data));
            }
            $this->entityManager->flush();
        }
        return $result;
    }

    private function getGood(array $data): Digiseller
    {
        $game = new Digiseller();

        $game->setId($data['id']);
        $game->setTitle(str_replace('?', '', $data['name']));
        $game->setTitle1(str_replace('?', '', $data['name']));
        $game->setSeller($data['id_seller']);
        $game->setSales($data['cnt_sell']);
        $game->setGameId($data['id_goods']);
        $game->setAvailable($data['available']);
        $game->setInStock(1);
        $game->setWmr($data['price_wmr']);
        $game->setWme($data['price_wme']);
        $game->setWmz($data['price_wmz']);
        $game->setWmu($data['price_wmz']);
        $game->setDiscounts(0);
        $img = "";
        if (key_exists('images', $data) and !empty($data['images'])) {
            $img = $this->replaceExtension(reset($data['images']), 'webp');

        }
        $game->setImgSmall($img);
        $game->setImgReal($img);
        $game->setMessage($data['info']);
        $game->setMoreinfo($data['add_info']);

        $game->setSection("");
        if (key_exists('category', $data)) {
            $game->setCategory($data['category']['digi_catalog']);

            if (key_exists('content_type_id', $data['category']) and key_exists($data['category']['content_type_id'], self::CONTENT_TYPE)) {
                $game->setSection(self::CONTENT_TYPE[$data['category']['content_type_id']]);
            }
        }

        if (key_exists('cnt_badresponses', $data) and $data['cnt_badresponses'] > 0)
            $game->setRating($this->getRating($data));
        $game->setCntGoodresponses($data['cnt_goodresponses']);
        $game->setCntBadresponses($data['cnt_badresponses']);
        $game->setCntSyncResponses($data['cnt_sync_responses']);
        if (key_exists('sale', $data) and $data['sale']) {
            $game->setSaleEnd($data['sale']['sale_end']);
            $game->setSalePercent($data['sale']['sale_percent']);
            $game->setSaleWmr($data['sale']['common_price_rur']);
            $game->setSaleWmz($data['sale']['common_price_usd']);
            $game->setSaleWme($data['sale']['common_price_eur']);
        }


        $game->setSubs(0);
        $game->setDescription('');
        $game->setKeywords('');
        $game->setSysinfo('');
        $game->setImageSmall('');
        $game->setImageReal('');
        $game->setDiscount(0);
        $game->setBanned(0);
        $game->setGameId2(0);
        $game->setGameIdz1(0);
        $game->setGameIdz2(0);
        $game->setGameIdz3(0);
        $game->setGameIdz4(0);
        return $game;
    }

    public function getRating(array $data): int
    {
        $countSell = $data['cnt_sell'];
        $countReturn = $data['cnt_return'];
        $countBad = $data['cnt_badresponses'];
        return ($countSell == 0 and $countReturn == 0 and $countBad == 0) ? 0 : round(100 - (($countBad + $countReturn) / $countSell * 100));

    }

    public function getCategories(): array
    {
        $result = [];
        foreach ($this->ggselCategory->getAllData() as $data) {
            $data = json_encode($data);
            $result[] = $this->serializer->deserialize($data, \App\Entity\GgselCategory::class, 'json');
        }
        return $result;
    }

    public function getSellerPage(int $page)
    {
        if ($page == 1) {
            $this->entityManager->getRepository(Seller::class)->delete();
        }
        $pageJson = $this->ggselSeller->getPage($page);
        $content = $pageJson['sellers'];
        foreach ($content as $data) {
            $seller = new Seller();
            $seller->setId($data['id']);
            $seller->setEmail($data['email']);
            $seller->setSellerId($data['id_seller']);
            $seller->setName($data['name_seller']);
            $seller->setStatistics($data['statistics']);
            $seller->setAttestat($data['attestat'] == 'yes' ? true : false);
            $seller->setDate(new \DateTime($data['date_registration']));
            $seller->setWmid($data['wmid']);
            $this->entityManager->persist($seller);
        }
        $this->entityManager->flush();
    }

    function replaceExtension($filename, $new_extension): string
    {
        $info = pathinfo($filename);
        return DIRECTORY_SEPARATOR . $info['filename'] . '.' . $new_extension;
    }

}