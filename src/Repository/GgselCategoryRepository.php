<?php

namespace App\Repository;

use App\Entity\GgselCategory;
use App\Repository\Traits\ExecuteSqlTrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GgselCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method GgselCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method GgselCategory[]    findAll()
 * @method GgselCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GgselCategoryRepository extends ServiceEntityRepository
{

    use ExecuteSqlTrait;

    const NAMES = [
        "Battle.net",
        "Battlefield 2042",
        "Battlefield 3",
        "Bethesda",
        "Battlefield 5",
        "Biomutant",
        "Control",
        "EpicGames",
        "GOG.com",
        "Microsoft Store",
        "Origin",
        "Rockstar Games Social Club",
        "Steam",
        "Uplay",
        "XboX",
        "Видеосервисы",
        "Испытай удачу",
        "Stalker",
        "Фогейм",
    ];

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GgselCategory::class);
    }

    public function getBaseCategoryIdsChild($typeId = 0): array
    {
        $names = '(\'' . implode('\',\'', self::NAMES) . '\')';
        if ($typeId == 0) {
            $sql = $this->executeSql("SELECT * from child_id WHERE category_id in (SELECT digi_catalog from ggsel_category WHERE is_base_game = 1 and type_id = $typeId AND name not in $names)");
        } else {
            $sql = $this->executeSql("SELECT * from child_id WHERE category_id in (SELECT digi_catalog from ggsel_category WHERE (type_id = $typeId or type_id = 0) and name not in $names)");
        }
        $result = [];
        foreach ($sql as $row) {
            $result[$row['child_id']][] = $row['category_id'];
        }
        return $result;
    }

    public function getBaseCategoryIds($typeId = 0): array
    {
        if ($typeId == 0) {
//            return $this->executeSqlIds("SELECT child_id from child_id WHERE category_id in (SELECT digi_catalog from ggsel_category WHERE is_base_game = 1 AND cnt_goods > 0 AND type_id = $typeId)", [], 'child_id');
            return $this->executeSqlIds("SELECT digi_catalog from ggsel_category WHERE is_base_game = 1 AND cnt_goods > 0 AND type_id = $typeId", [], 'digi_catalog');
        }
        return $this->executeSqlIds("SELECT child_id from child_id WHERE category_id in (SELECT digi_catalog from ggsel_category WHERE cnt_goods > 0 AND (type_id = $typeId or type_id = 0))", [], 'child_id');
    }

    public function findBaseChild($typeId = 0)
    {
        $parenIds = $this->getBaseCategoryIds($typeId);
        return $this->createQueryBuilder('g')
            ->andWhere('g.digiCatalog in (:ids)')
            ->andWhere('g.url IS NOT NULL')
            ->andWhere('g.cntGoods > 0')
            ->andWhere('g.typeId = :typeId')
            ->setParameter('ids', $parenIds)
//            ->setParameter('typeId', $typeId)
            ->getQuery()
            ->getResult();
    }

    public function findBaseChildSql($typeId = 0)
    {
        $parenIds = $this->getBaseCategoryIds($typeId);

        $parenIds = '(\'' . implode('\',\'', $parenIds) . '\')';
//        return $this->executeSql("SELECT url, breadcrumbs_title, digi_catalog FROM ggsel_category WHERE cnt_goods > 0 AND url IS NOT NULL AND digi_catalog in $parenIds");
        return $this->executeSql("SELECT url, breadcrumbs_title, digi_catalog FROM ggsel_category WHERE cnt_goods > 0 AND url IS NOT NULL AND parent_id in $parenIds");
    }

    public function findChild(string $category)
    {
        $ids = $this->executeSqlIds("SELECT child_id from child_id WHERE category_id = :category", ['category' => $category], 'child_id');

        return $this->createQueryBuilder('g')
            ->andWhere('g.digiCatalog in (:ids)')
            ->andWhere('g.url IS NOT NULL')
            ->andWhere('g.cntGoods > 0')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult();
    }

    public function findChildOne(string $category)
    {
//        $ids = $this->executeSqlIds("SELECT child_id from child_id WHERE category_id = :category", ['category' => $category], 'child_id');

        return $this->createQueryBuilder('g')
            ->andWhere('g.parentId = :id')
            ->andWhere('g.url IS NOT NULL')
            ->andWhere('g.cntGoods > 0')
            ->setParameter('id', $category)
            ->orderBy('g.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getBreadcrumb(int $digiCatalog)
    {
        $result = $this->executeSql("SELECT parent_id, url, breadcrumbs_title FROM ggsel_category WHERE digi_catalog = $digiCatalog");
        if (empty($result))
            return null;
        return $result[0];
    }

    public function deleteDimkey($category)
    {
        $categoryId = $category['category'];
        $minPrice = $category['price'];
        $this->executeSqlNoFetch("DELETE FROM digiseller where category = '$categoryId' and wmr <= $minPrice and seller <> 311971");
    }

    public function getCategoryForDelete(): array
    {
        return $this->executeSql('SELECT category, MIN(wmr) as price from digiseller WHERE seller = 311971 GROUP BY category', []);
    }

    public function getBase($typeId)
    {
        $query = $this->createQueryBuilder('g')
            ->andWhere('g.typeId = :typeId')
            ->andWhere('g.cntGoods > 0')
            ->andWhere('g.hideInGames = false')
            ->setParameter('typeId', $typeId)
            ->addOrderBy('g.breadcrumbsTitle', 'ASC')
            ->andWhere('g.isBaseGame = true');

        return $query
            ->getQuery()
            ->getResult();
    }

    public function getSellers(?GgselCategory $ggselCategory): string
    {
        $result = "";
        if (!$ggselCategory)
            return $result;
        $digi = $ggselCategory->getDigiCatalog();
        $sql = $this->executeSql("SELECT sp.seller seller, sp.percent percent FROM digiseller d JOIN seller_priority sp on d.seller = sp.seller WHERE d.category = '$digi' GROUP BY sp.id");
        foreach ($sql as $item) {
            $result .= $item['seller'] . ' - ' . $item['percent'] . '<br>';
        }
        return $result;
    }

    public function getlAllCategorySeller()
    {
        $result = [];
        $sql = $this->executeSql("SELECT c.digi_catalog digi, GROUP_CONCAT(sp.id) seller, c.name name, c.url url
FROM ggsel_category c
LEFT JOIN digiseller d on d.category COLLATE utf8mb4_general_ci = c.digi_catalog
LEFT JOIN seller_priority sp on d.seller = sp.seller GROUP BY c.id");
        foreach ($sql as $item) {
            $row = $item;
            $row['sellers'] = array_unique(explode(',', $row['seller']));
            $result[$row['digi']] = $row;
        }
        return $result;
    }

    // /**
    //  * @return GgselCategory[] Returns an array of GgselCategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GgselCategory
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
