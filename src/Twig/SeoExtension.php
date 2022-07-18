<?php


namespace App\Twig;


use App\Entity\Digiseller;
use App\Entity\GgselCategory;
use App\Util\AppUtil;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class SeoExtension extends AbstractExtension
{
    private $entityManager;
    private $requestStack;
    private $urlGenerator;

    const PARENT_CATALOG = '7595';

    public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, UrlGeneratorInterface $urlGenerator)
    {
        $this->entityManager = $entityManager;
        $this->requestStack = $requestStack;
        $this->urlGenerator = $urlGenerator;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('get_seo_discount', [$this, 'getSeoDiscount']),
            new TwigFunction('get_seo_discount_category', [$this, 'getSeoDiscountCategory']),
            new TwigFunction('get_ld_product', [$this, 'getLdProduct']),
            new TwigFunction('get_ld_catalog', [$this, 'getLdCatalog']),
            new TwigFunction('get_ld_product_breadcrumb', [$this, 'getLdProductBreadcrumb']),
            new TwigFunction('get_ld_catalog_breadcrumb', [$this, 'getLdCatalogBreadcrumb']),
            new TwigFunction('get_catalog_bredcrumbs', [$this, 'getCatalogBreadcrumbs']),
            new TwigFunction('get_game_bredcrumbs', [$this, 'getGameBreadcrumbs']),
            new TwigFunction('get_slug', [$this, 'getSlug']),
            new TwigFunction('get_game_title', [$this, 'getGameTitle']),
            new TwigFunction('get_min_price_seller', [$this, 'getMinPriceSeller']),
        ];
    }

    public function getSlug(string $title): string
    {
        return AppUtil::urlize($title);
    }

    public function getSeoDiscount($length, ?string $discount)
    {
        if ($discount and $discount != '0')
            return $discount;
        if ($length >= 25)
            $length = round($length / 25);
        return 95 - $length;
    }

    public function getMinPriceSeller($seller)
    {
        return number_format($this->entityManager->getRepository(Digiseller::class)->getMinPriceSeller($seller), 2);
    }

    public function getSeoDiscountCategory(GgselCategory $category)
    {
        $minPrice = $this->entityManager->getRepository(Digiseller::class)->getMinPrice($category->getDigiCatalog());
        if ($category->getDiscount()) {
            return floor(100 - (100 * $minPrice / $category->getDiscount()));
        }
        return $this->getSeoDiscount(strlen($category->getName()), null);
    }

    public function getLdProduct(Digiseller $digiseller)
    {
        return [
            "@context" => "https://schema.org/",
            "@type" => "Product",
            "name" => $digiseller->getTitle(),
            "image" => [
                $digiseller->getImageReal()
            ],
            "description" => $digiseller->getTitle() . "успей купить только на Dimikey! Полная гарантия, работаем с 2013 года! Товар в наличии! Техподдержка 24/7",
            "sku" => $digiseller->getId(),
            "mpn" => $digiseller->getGameId(),
            "brand" => [
                "@type" => "Brand",
                "name" => "DIMIKEY"
            ],
            "review" => [
                "@type" => "Review",
                "reviewRating" => [
                    "@type" => "Rating",
                    "ratingValue" => 5,
                    "bestRating" => "5"
                ],
                "author" => [
                    "@type" => "Person",
                    "name" => "\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0438 GGSEL"
                ]
            ],
            "aggregateRating" => [
                "@type" => "AggregateRating",
                "ratingValue" => 5,
                "reviewCount" => $digiseller->getCntGoodresponses() > 0 ? $digiseller->getCntGoodresponses() : 5,
                "ratingCount" => $digiseller->getCntGoodresponses() > 0 ? $digiseller->getCntGoodresponses() : 5,
            ],
            "offers" => [
                "@type" => "Offer",
                "url" => $this->urlGenerator->generate('game', ['digiseller' => $digiseller->getGameId(), 'slug' => $this->getSlug($digiseller->getTitle())], UrlGeneratorInterface::ABSOLUTE_URL),
                "priceCurrency" => "RUB",
                "price" => $digiseller->getPrice(),
                "priceValidUntil" => AppUtil::getNow()->modify('+3 day')->format("Y-m-d"),
                "itemCondition" => "https://schema.org/NewCondition",
                "availability" => "http://schema.org/InStock",
                "seller" => [
                    "@type" => "Organization",
                    "name" => "AN Sale Games"
                ]
            ]
        ];
    }

    public function getLdCatalog(GgselCategory $category)
    {
        return [
            "@context" => "https://schema.org/",
            "@type" => "Product",
            "name" => $category->getName(),
            "image" => [
                "https://graph.digiseller.ru/img.ashx?id_d=1"
            ],
            "description" => "На Dimikey собраны лучшие предложения по покупке " . $category->getName() . " сейчас действует скидка " . $this->getSeoDiscountCategory($category) . "%. Моментальная доставка, полная гарантия.",
            "sku" => $category->getId(),
            "mpn" => $category->getDigiCatalog(),
            "brand" => [
                "@type" => "Brand",
                "name" => "ZAKA-ZAKAS"
            ],
            "review" => [
                "@type" => "Review",
                "reviewRating" => [
                    "@type" => "Rating",
                    "ratingValue" => 5,
                    "bestRating" => "5"
                ],
                "author" => [
                    "@type" => "Person",
                    "name" => "\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0438 GGSEL"
                ]
            ],
            "aggregateRating" => [
                "@type" => "AggregateRating",
                "ratingValue" => 5,
                "reviewCount" => $category->getId() % 150,
            ],
            "offers" => [
                "@type" => "AggregateOffer",
                "highPrice" => $this->entityManager->getRepository(Digiseller::class)->getHighPrice($category->getDigiCatalog()),
                "lowPrice" => number_format($this->entityManager->getRepository(Digiseller::class)->getMinPrice($category->getDigiCatalog()), 2),
                "offerCount" => $category->getCntGoods(),
                "priceCurrency" => "RUB"
            ]
        ];
    }

    public function getLdProductBreadcrumb(Digiseller $digiseller)
    {
        $breadcrumbs = $this->getGameBreadcrumbs($digiseller);
        $result = [
            "@context" => "https://schema.org/",
            "@type" => "BreadcrumbList",
            "itemListElement" => [],
        ];

        $i = 1;
        foreach ($breadcrumbs as $breadcrumb) if (key_exists('url', $breadcrumb)) {
            $result['itemListElement'][] = [
                "@type" => "ListItem",
                "position" => $i,
                "item" => [
                    "@id" => "https://zaka-zakas.com" . $breadcrumb['url'],
                    "name" => $breadcrumb['name']
                ]
            ];
            $i++;
        }

        return $result;
    }

    public function getLdCatalogBreadcrumb(GgselCategory $category)
    {
        $breadcrumbs = $this->getCatalogBreadcrumbs($category);
        $result = [
            "@context" => "https://schema.org/",
            "@type" => "BreadcrumbList",
            "itemListElement" => [],
        ];

        $i = 1;
        foreach ($breadcrumbs as $breadcrumb) if (key_exists('url', $breadcrumb)) {
            $result['itemListElement'][] = [
                "@type" => "ListItem",
                "position" => $i,
                "item" => [
                    "@id" => "https://zaka-zakas.com" . $breadcrumb['url'],
                    "name" => $breadcrumb['name']
                ]
            ];
            $i++;
        }

        return $result;
    }

    public function getGameTitle(Digiseller $game)
    {
        $title = "Купить на Zaka-zaka " . $game->getTitle() . " по цене " . number_format($game->getWmr()) . " руб.";
        if (strlen($title) > 60) {
            $title = "Купить на Zaka-zaka " . $game->getTitle();
        }
        return $title;
    }

    public function getCatalogBreadcrumbs(GgselCategory $ggselCategory, $isUrl = false): array
    {
        if ($ggselCategory->getDigiCatalog() != '22820') {
            $c = ['name' => $ggselCategory->getBreadcrumbsTitle()];
            if ($isUrl) {
                $c['url'] = '/catalog/' . $ggselCategory->getUrl();
            }
            $result = [$c];
            if ($ggselCategory->getDigiCatalog() != self::PARENT_CATALOG and $ggselCategory->getParentId() != 0) {
                $cat = ['parent_id' => $ggselCategory->getParentId()];
                do {
                    $cat = $this->entityManager->getRepository(GgselCategory::class)->getBreadcrumb($cat['parent_id']);
                    if ($cat)
                        $result[] = ['name' => $cat['breadcrumbs_title'], 'url' => '/catalog/' . $cat['url']];
                } while ($cat and $cat['parent_id'] != self::PARENT_CATALOG and $cat['parent_id'] != 0);
            }
//            $result[] = ['name' => 'Каталог', 'url' => '/catalog'];
        }

        $result[] = ['name' => 'Главная', 'url' => '/'];
        return array_reverse($result);
    }

    public function getGameBreadcrumbs(Digiseller $digiseller): array
    {
        $cat = $this->entityManager->getRepository(GgselCategory::class)->findOneBy(['digiCatalog' => $digiseller->getCategory()]);
        $result = $this->getCatalogBreadcrumbs($cat, true);
        $result[] = ['name' => $digiseller->getTitle()];
        return $result;
    }
}