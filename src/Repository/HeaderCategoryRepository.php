<?php

namespace App\Repository;

use App\Entity\HeaderCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method HeaderCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method HeaderCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method HeaderCategory[]    findAll()
 * @method HeaderCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HeaderCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HeaderCategory::class);
    }

    // /**
    //  * @return HeaderCategory[] Returns an array of HeaderCategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HeaderCategory
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
