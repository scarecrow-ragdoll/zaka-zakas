<?php


namespace App\Twig;

use App\Entity\Config;
use App\Entity\Digiseller;
use App\Entity\GgselCategory;
use App\Entity\HeaderCategory;
use App\Entity\SellerPriority;
use App\Util\AppUtil;
use App\Entity\Active;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Cache\ItemInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{

    private $entityManager;
    private $requestStack;
    private $urlGenerator;
    private $cache;

    private const CATALOG_ROUTES = [
        'catalog',
        'course',
        'course_tariff',
        'pay_success_poll',
        'pay_success',
        'pay_error'
    ];

    private $discounts = [];

    public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, UrlGeneratorInterface $urlGenerator)
    {
        $this->entityManager = $entityManager;
        $this->requestStack = $requestStack;
        $this->urlGenerator = $urlGenerator;
        $this->cache = new FilesystemAdapter();
    }

    public function getFilters()
    {
        return [
            new TwigFilter('goodSection', [$this, 'goodSection']),
            new TwigFilter('noFlow', [$this, 'noFlow']),
            new TwigFilter('productDeclination', [$this, 'productDeclination']),
        ];
    }


    public function getFunctions()
    {
        return [
            new TwigFunction('calculate_price_discount', [$this, 'calculatePriceDiscount']),
            new TwigFunction('get_curr_symbol', [$this, 'getCurrSymbol']),
            new TwigFunction('count_of_all_games', [$this, 'countOfAllGames']),
            new TwigFunction('get_header_games', [$this, 'getHeaderGames']),
            new TwigFunction('get_configs', [$this, 'getConfigs']),
            new TwigFunction('get_config', [$this, 'getConfig']),
            new TwigFunction('get_header_section', [$this, 'getHeaderSection']),
            new TwigFunction('get_discount', [$this, 'getDiscount']),
            new TwigFunction('get_header_category', [$this, 'getHeaderCategory']),
            new TwigFunction('get_category_title', [$this, 'getCategoryTitle']),
            new TwigFunction('get_min_price', [$this, 'getMinPrice']),
            new TwigFunction('get_max_price', [$this, 'getMaxPrice']),
            new TwigFunction('get_static_meta', [$this, 'getStaticMeta']),
            new TwigFunction('get_all_games_meta', [$this, 'getAllGamesMeta']),
            new TwigFunction('get_sellers', [$this, 'getSellers']),
            new TwigFunction('get_rand_top_game', [$this, 'getRandTopGame']),
            new TwigFunction('get_header_price_by_url', [$this, 'getHeaderPriceByUrl']),
            new TwigFunction('get_recomended_games', [$this, 'getRecomendedGames']),
            new TwigFunction('count_of_category', [$this, 'countOfCategory']),
        ];
    }

    public function countOfAllGames()
    {
        return $this->cache->get('all-games-count', function (ItemInterface $item) {
            $item->expiresAfter(86400);
            return $this->entityManager->getRepository(Digiseller::class)->executeSql("SELECT count(id) count from digiseller where sales > 0")[0]['count'];
        });
    }

    public function countOfCategory(GgselCategory $category)
    {
        return $this->cache->get($category->getDigiCatalog() . '_count', function (ItemInterface $item) use ($category) {
            $item->expiresAfter(86400);
            return $this->entityManager->getRepository(Digiseller::class)->getIds(['category' => $category->getDigiCatalog()], true)['cnt'];
        });
    }


    public function calculatePriceDiscount($price, int $discount)
    {
        return $price + ($price * $discount / 100);
    }

    public function getCurrSymbol(string $curr)
    {
        if ($curr == 'wmz')
            return '$';
        if ($curr == 'wmu')
            return '₴';
        if ($curr == 'wme')
            return '€';
        return '₽';
    }

    public function getHeaderGames()
    {
        $gamesIds = ['3232454', '3232466', '3232417', '3232451', '2372504'];
        $games = $this->entityManager->getRepository(Digiseller::class)->findBy(['gameId' => $gamesIds]);
        return $games;
    }

    public function getConfigs()
    {
        $result = [];
        $configs = $this->cache->get('site_config', function (ItemInterface $item) {
            $item->expiresAfter(86400);
            return $this->entityManager->getRepository(Config::class)->findAll();
        });
        foreach ($configs as $config) {
            $result[$config->getId()] = $config->getValue();
        }
        return $result;
    }

    public function getConfig(string $id)
    {
        return $this->entityManager->getRepository(Config::class)->findOneBy(['id' => $id]);
    }

    public function getHeaderSection($route): string
    {
        if (str_contains($route, '/catalog')) {
            $route = str_replace('/catalog/', '', $route);
        }
        $request = $this->requestStack->getCurrentRequest();
        $name = $request->getRequestUri();
        if (strpos($name, $route) !== false)
            return 'active';
        return '';
    }

    public function goodSection(string $section)
    {
        if (strpos(strtolower($section), 'ккаунт') !== false) {
            return 'Аккаунт';
        }
        if (strpos(strtolower($section), 'ключ') !== false) {
            return 'Ключ';
        }
        return $section;
    }

    public function getDiscount(Digiseller $digiseller, ?GgselCategory $ggselCategory, string $currency = 'wmr')
    {
        return $this->cache->get('dicount' . $digiseller->getGameId() . '_' . $currency, function (ItemInterface $item) use ($digiseller, $currency) {
            $item->expiresAfter(86400);
            $result = ['price' => 0, 'percent' => 0, 'discountPrice' => $digiseller->getPrice($currency)];
            if (key_exists($digiseller->getCategory(), $this->discounts)) {
                $ggselCategory = $this->discounts[$digiseller->getCategory()];
            } else {
                $ggselCategory = $this->entityManager->getRepository(GgselCategory::class)->findOneBy(['digiCatalog' => $digiseller->getCategory()]);
                $this->discounts[$digiseller->getCategory()] = $ggselCategory;
            }
            if ($ggselCategory) {
                if ($ggselCategory->getIsSale()) {
                    if ($digiseller->getSalePercent() and (new \DateTime($digiseller->getSaleEnd())) > AppUtil::getNow()) {
                        $result['price'] = $digiseller->getSalePrice($currency);
                        $result['percent'] = $digiseller->getSalePercent();

                        return $result;
                    }
                }

                if ($result['price'] == 0 and $result['discountPrice'] < $ggselCategory->getDiscount()) {
                    $result['price'] = $ggselCategory->getDiscount();
                    $result['percent'] = 100 - floor($digiseller->getWmr() / $result['price'] * 100);
                    if ($result['percent'] == 100) {
                        $result['percent'] = 99;
                    }
                    if ($currency != 'wmr') {
                        $result['price'] = number_format($digiseller->getPrice($currency) * 100 / (100 - $result['percent']), 2);
                    }
                }
            }

            return $result;
        });
    }

    public function getHeaderCategory()
    {
        return $this->cache->get('header_category', function (ItemInterface $item) {
            $item->expiresAfter(86400);
            return $this->entityManager->getRepository(HeaderCategory::class)->findAll();
        });
    }

    public function getCategoryTitle(GgselCategory $category)
    {
        if ($category->getTitle()) {
            return $category->getTitleSeo();
        }
        $parent = $this->entityManager->getRepository(GgselCategory::class)->findOneBy(['digiCatalog' => $category->getParentId()]);
        if ($parent)
            return $category->getBreadcrumbsTitle() . ' ' . $parent->getBreadcrumbsTitle();
        return $category->getBreadcrumbsTitle();
    }

    public function productDeclination(int $count)
    {
        if($count == 1) {
            return 'товар';
        }
        if($count == 2 or $count == 3 or $count == 4) {
            return 'товара';
        }
        return 'товаров';
    }

    public function noFlow(string $desc)
    {
        return str_replace("<a ", '<a rel="nofollow" ', $desc);
    }

    public function getMinPrice(GgselCategory $category, $curr = 'wmr')
    {
        $minPrice = $this->entityManager->getRepository(Digiseller::class)->getMinPrice($category->getDigiCatalog(), $curr);
        if($curr == 'wmr') {
            return intval($minPrice);
        }
        return $minPrice;
    }

    public function getMaxPrice(GgselCategory $category, $curr = 'wmr')
    {
        $maxPrice = $this->entityManager->getRepository(Digiseller::class)->getHighPrice($category->getDigiCatalog(), $curr);
        if($curr == 'wmr') {
            return intval($maxPrice);
        }
        return $maxPrice;
    }

    public function getAllGamesMeta($url, $meta)
    {
        if ($meta == 'title') {
            if ($url == 'all-games') {
                return 'Купить игры по скидкам до 95%!';
            }
            if ($url == 'software') {
                return 'Купить лицензионное ПО по скидкам до 95%!';
            }
            if ($url == 'subscription-services') {
                return 'Оформить подписку на сервисах по скидкам до 95%!';
            }
            if ($url == 'pre-orders-first') {
                return 'Оформить предзаказы игр по скидкам до 95%!';
            }
            if ($url == 'digital-goods') {
                return 'Купить цифровые товары по скидкам до 95%!';
            }
        }
        if ($meta == 'description') {
            if ($url == 'all-games') {
                return 'Покупайте видеоигры для Стим, Xbox, Origin по максимально низким ценам на Zaka-zakas! Гарантия моментального получения для каждой покупки! Заходите и выбирайте!';
            }
            if ($url == 'software') {
                return 'Покупайте лицензионные ключи Windows, MS Office, NordVPN по максимально низким ценам на Zaka-zakas! Гарантия моментального получения для каждой покупки! Заходите и выбирайте!';
            }
            if ($url == 'subscription-services') {
                return 'Оформляйте подписку Нетфликс, Спотифай, Винк по максимально низким ценам на Zaka-zakas! Гарантия моментального получения для каждой покупки! Заходите и выбирайте!';
            }
            if ($url == 'pre-orders-first') {
                return 'Оформляйте предзаказы видеоигр для Стим, Xbox, Origin по максимально низким ценам на Zaka-zakas! Гарантия моментального получения для каждой покупки! Заходите и выбирайте!';
            }
            if ($url == 'digital-goods') {
                return 'Покупайте цифровые товары по максимально низким ценам на Zaka-zakas! Гарантия моментального получения для каждой покупки! Заходите и выбирайте!';
            }
        }

        return '';
    }

    public function getStaticMeta($url, $meta, $default)
    {
        if ($meta == 'title') {
            if ($url == 'howbuy') {
                return 'Инструкция для покупателей Zaka-zakas.com';
            }
            if ($url == 'contacts') {
                return 'Контакты Zaka-zakas.com';
            }
        }
        if ($meta == 'description') {
            if ($url == 'howbuy') {
                return 'FAQ для покупателей. Подробно расскажем, как выбрать интересующий товар и совершить покупку на Стимбайс. При возникновении трудностей, наша техподдержка с радостью поможет Вам!';
            }
            if ($url == 'contacts') {
                return 'Техническая поддержка Zaka-zakas для покупателей и продавцов. По всем вопросам обращайтесь по почте help@zaka-zakas.com или в чат поддержки.';
            }
        }

        return $default;
    }

    public function getSellers()
    {
        $sellers = $this->entityManager->getRepository(SellerPriority::class)->findAll();
        $result = [];
        foreach ($sellers as $seller) {
            $result[$seller->getSeller()] = $seller;
        }
        return $result;
    }

    public function getRandTopGame(GgselCategory $ggselCategory)
    {
        $games = $this->entityManager->getRepository(Digiseller::class)->getByCriterias(['category' => $ggselCategory->getDigiCatalog()]);
        if ($games) {
            return $games[array_rand($games, 1)];
        }
        return null;
    }

    public function getHeaderPriceByUrl(string $url, string $curr)
    {
        $url = substr($url, strpos($url, "catalog/") + 8);
        $minPrice = $this->cache->get($curr . '_min_' . $url, function (ItemInterface $item) use ($url, $curr) {
            $item->expiresAfter(86400);
            $category = $this->entityManager->getRepository(GgselCategory::class)->findOneBy(['url' => $url]);
            $minPrice = $this->entityManager->getRepository(Digiseller::class)->getMinPrice($category->getDigiCatalog(), $curr);
            if($curr == 'wmr') {
                $minPrice = number_format($minPrice);
            } else {
                $minPrice = number_format($minPrice, 2);
            }
            return $minPrice;
        });


        return $minPrice;
    }

    public function getRecomendedGames()
    {
        return $this->entityManager->getRepository(Digiseller::class)->getByCriterias([]);
    }
}