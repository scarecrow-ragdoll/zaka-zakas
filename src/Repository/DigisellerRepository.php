<?php

namespace App\Repository;

use App\Entity\Digiseller;
use App\Repository\Traits\ExecuteSqlTrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Contracts\Cache\ItemInterface;

/**
 * @method Digiseller|null find($id, $lockMode = null, $lockVersion = null)
 * @method Digiseller|null findOneBy(array $criteria, array $orderBy = null)
 * @method Digiseller[]    findAll()
 * @method Digiseller[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DigisellerRepository extends ServiceEntityRepository
{

    use ExecuteSqlTrait;

    private $cache;

    public function __construct(ManagerRegistry $registry)
    {
        $this->cache = new FilesystemAdapter();
        parent::__construct($registry, Digiseller::class);
    }

    public function getGames()
    {
        return $this->createQueryBuilder('d')
            ->setMaxResults(15)
            ->getQuery()
            ->getResult();
    }

    public function getByCriterias(array $criterias, string $curr = 'wmr')
    {
        $ids = $this->getIds($criterias);
        return $this->createQueryBuilder('a')
            ->andWhere('a.id IN (:ids)')
            ->setParameter('ids', $ids)
            ->orderBy('FIELD(a.id, :ids)')
            ->getQuery()
            ->getResult();
    }


    public function getHighPrice($categoryId, $curr = 'wmr'): string
    {
        return $this->cache->get($categoryId . '_max_price_' . $curr, function (ItemInterface $item) use ($categoryId, $curr) {
            $item->expiresAfter(86400);
            $where = ['wmr is not null and wmr <> 0 and available > 0 and sales > 0'];
            $categoryIds = $this->executeSqlIds('SELECT child_id from child_id where category_id = :category', ['category' => $categoryId], 'child_id');
            $categoryIds = array_merge($categoryIds, [$categoryId]);
            $where[] = "category IN ( '" . implode('\',\'', $categoryIds) . "')";
            $where = implode(' AND ', $where);
            $sql = "SELECT $curr
                FROM digiseller
                WHERE $where
                ORDER BY CONVERT($curr, UNSIGNED) DESC LIMIT 1";
            $result = $this->executeSql($sql);
            if (key_exists(0, $result)) {
                return $result[0][$curr];
            } else {
                $where = str_replace('and sales > 0', '', $where);
                $sql = "SELECT d.$curr
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where
                ORDER BY sp.priority DESC LIMIT 0, 1";
                $result = $this->executeSql($sql);
                return key_exists(0, $result) ? $result[0][$curr] : 7;
            }
        });
    }

    public function getMinPrice($categoryId, $curr = 'wmr'): string
    {
        return $this->cache->get($categoryId . '_min_price_' . $curr, function (ItemInterface $item) use ($categoryId, $curr) {
            $item->expiresAfter(86400);

            $where = ['wmr is not null and wmr <> 0 and available > 0 and sales > 0'];
            $categoryIds = $this->executeSqlIds('SELECT child_id from child_id where category_id = :category', ['category' => $categoryId], 'child_id');
            $categoryIds = array_merge($categoryIds, [$categoryId]);
            $where[] = "category IN ( '" . implode('\',\'', $categoryIds) . "')";
            $where = implode(' AND ', $where);
            $sql = "SELECT $curr
                FROM digiseller
                WHERE $where
                ORDER BY CONVERT($curr, UNSIGNED) LIMIT 1";
            $result = $this->executeSql($sql);
            if (key_exists(0, $result)) {
                return $result[0][$curr];
            } else {
                $where = str_replace('and sales > 0', '', $where);
                $sql = "SELECT d.$curr
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where
                ORDER BY sp.priority DESC LIMIT 0, 1";
                $result = $this->executeSql($sql);
                return key_exists(0, $result) ? $result[0][$curr] : 7;
            }
        });
    }

    public function getMinPriceSeller($seller, $curr = 'wmr'): string
    {
        return $this->cache->get($seller . '_seller_min_price_' . $curr, function (ItemInterface $item) use ($seller, $curr) {
            $item->expiresAfter(86400);

            $where = ['wmr is not null and wmr <> 0 and available > 0 and sales > 0'];
            $where[] = "seller = " . $seller;
            $where = implode(' AND ', $where);
            $sql = "SELECT $curr
                FROM digiseller
                WHERE $where
                ORDER BY CONVERT($curr, UNSIGNED) LIMIT 1";
            $result = $this->executeSql($sql);
            if (key_exists(0, $result)) {
                return $result[0][$curr];
            } else {
                $where = str_replace('and sales > 0', '', $where);
                $sql = "SELECT d.$curr
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where
                ORDER BY sp.priority DESC LIMIT 0, 1";
                $result = $this->executeSql($sql);
                return key_exists(0, $result) ? $result[0][$curr] : 5;
            }
        });
    }

    public
    function getIds(array $criterias, bool $isCount = false): array
    {
        $where = ['wmr is not null and wmr <> 0 and available > 0 and sales > 0'];
        $params = [
            'limit' => 12,
            'offset' => 0
        ];

        if (key_exists('name', $criterias) and !empty($criterias['name'])) {
            $name = $criterias['name'];
            $name = $this->clean($name);
            $categoryIds = $this->executeSqlIds("SELECT digi_catalog FROM ggsel_category WHERE " . $this->searchByName($name, 'tags'), [], 'digi_catalog');
            $categoryIds = implode("','", $categoryIds);
            $nameSearch = $this->searchByName($name, 'title');
            if (!empty($categoryIds)) {
                $where[] = "($nameSearch OR category IN ('$categoryIds'))";
            } else {
                $where[] = "$nameSearch";
            }
//                preg_match('#' . $name . '(.+?)?\=(.+)#iS', $keys, $key) ? "title REGEXP ('" . rtrim($key[2]) . "')" :
//                "`title` LIKE UPPER('%$name%')";
        }

        if (key_exists('seller', $criterias)) {
            $where[] = "d.seller = " . $criterias['seller'];
        }

        if (key_exists('category', $criterias)) {
            $categoryIds = $this->executeSqlIds('SELECT child_id from child_id where category_id = :category', ['category' => $criterias['category']], 'child_id');
            $categoryIds = array_merge($categoryIds, [$criterias['category']]);
            $where[] = "category IN ( '" . implode('\',\'', $categoryIds) . "')";
        }
        if (key_exists('limit', $criterias) and intval($criterias['limit']) < 16) {
            $params['limit'] = $criterias['limit'];
        }
        if (key_exists('page', $criterias)) {
            $offset = intval($criterias['page']) * $params['limit'];
            $params['offset'] = $offset;
        }
        if (key_exists('minprice', $criterias)) {
            $curr = $criterias['curr'];
            $symbols = 2;
            if (!in_array($criterias['curr'], ['wmr', 'wmz', 'wme'])) {
                $curr = 'wmr';
            }
            if ($curr == 'wmr') {
                $symbols = 0;
            }
            if (!empty($criterias['minprice'])) {
                $where[] = "TRUNCATE($curr, $symbols) >= " . $criterias['minprice'];
            }
            if (!empty($criterias['maxprice'])) {
                $where[] = "TRUNCATE($curr, $symbols) <= " . $criterias['maxprice'];
            }
        }

        if (key_exists('sections', $criterias)) {
            $sections = implode("','", $criterias['sections']);
            $where[] = "section in ('$sections')";
        }

        $order = 'sales';
        $orderAsc = 'DESC';
        if (key_exists('order', $criterias) and array_search($criterias['order'], ['wmr', 'wmz', 'wme', 'seller']) !== false) {
            $order = $criterias['order'];
        }

        if (key_exists('by', $criterias) and array_search($criterias['by'], ['ASC', 'DESC']) !== false) {
            $orderAsc = $criterias['by'];
        }

        if ($order == 'sales') {
            $order = "$order $orderAsc";
        } elseif (array_search($order == 'wmr', ['wmr', 'wmz', 'wme']) !== false) {
            if ($order == 'wmr') {
                $order = "CONVERT($order, UNSIGNED) $orderAsc";
            } else {
                $order = "$order $orderAsc";
            }
        } elseif($order == 'seller'){
            $order = 'sp.priority DESC';
        } else {
            $order = "$order $orderAsc, sp.priority DESC";
        }

        $where = implode(' AND ', $where);

        if ($isCount) {
            $sql = "SELECT COUNT(d.id) as cnt 
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where";
            return $this->executeSql($sql, $params)[0];
        } else {
            $sql = "SELECT d.id
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where
                ORDER BY $order LIMIT " . $params['offset'] . ", " . $params['limit'];
            $result = $this->executeSqlIds($sql, $params);
            if (count($result) === 0 and $params['offset'] == 0) {
                $where = str_replace('and sales > 0', '', $where);
                $sql = "SELECT d.id
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where
                ORDER BY $order LIMIT " . 0 . ", " . 1;
                $result = $this->executeSqlIds($sql, $params);
            }
            return $result;
        }
    }

    public
    function getAllSections(array $criterias): array
    {
        $where = ['wmr is not null and wmr <> 0 and available > 0 and sales > 0'];

        if (key_exists('name', $criterias) and !empty($criterias['name'])) {
            $name = $criterias['name'];
            $name = str_replace('\'', '', $name);
            $categoryIds = $this->executeSqlIds("SELECT digi_catalog FROM ggsel_category WHERE tags LIKE '%$name%'", [], 'digi_catalog');
            $categoryIds = implode("','", $categoryIds);
            if (!empty($categoryIds)) {
                $where[] = "(title LIKE UPPER('%$name%') OR category IN ('$categoryIds'))";
            } else {
                $where[] = "title LIKE UPPER('%$name%')";
            }
//                preg_match('#' . $name . '(.+?)?\=(.+)#iS', $keys, $key) ? "title REGEXP ('" . rtrim($key[2]) . "')" :
//                "`title` LIKE UPPER('%$name%')";
        }

        if (key_exists('seller', $criterias)) {
            $where[] = "d.seller = " . $criterias['seller'];
        }

        if (key_exists('category', $criterias)) {
            $categoryIds = $this->executeSqlIds('SELECT child_id from child_id where category_id = :category', ['category' => $criterias['category']], 'child_id');
            $categoryIds = array_merge($categoryIds, [$criterias['category']]);
            $where[] = "category IN ( '" . implode('\',\'', $categoryIds) . "')";
        }

        $where = implode(' AND ', $where);

        $sql = "SELECT d.section section, COUNT(d.id) as count
                FROM digiseller d
                LEFT JOIN seller_priority sp ON sp.seller = d.seller
                WHERE $where GROUP BY d.section";
        return $this->executeSql($sql);
    }

    public
    function getRelated(Digiseller $digiseller)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.category = :category')
            ->andWhere('a.id != :id')
            ->andWhere('a.available > 0')
            ->setParameter('category', $digiseller->getCategory())
            ->setParameter('id', $digiseller->getId())
            ->setMaxResults(12)
            ->getQuery()
            ->getResult();
    }

    public function setUnavailable()
    {
        $this->executeSqlNoFetch('UPDATE digiseller SET available = 0');
    }

    public function hideLowWmrDimikey()
    {
        $this->executeSqlNoFetch("UPDATE digiseller SET available = 0 WHERE wmr < 1");
    }

    public function deleteDuplicates()
    {
        $result = $this->executeSql('SELECT game_id, COUNT(*) AS cnt FROM digiseller GROUP BY game_id HAVING cnt > 1');
        foreach ($result as $row) {
            $this->executeSqlNoFetch('DELETE FROM digiseller WHERE game_id =' . $row['game_id'] . ' AND sales = 0');
        }
    }

    public function platiruSales()
    {
        $this->executeSqlNoFetch("UPDATE digiseller SET sales = 0 where seller = 0 and sales > 0");
    }

    function clean($string): string
    {
        return preg_replace('/[\@\.\;\""]+/', '', $string);
    }

    function searchByName($search, $field)
    {
        $words = explode(' ', $search);
        $where = [];
        foreach ($words as $word) {
            $where[] = "$field LIKE UPPER('%$word%')";
        }
        return implode($where, " AND ");
    }
}
