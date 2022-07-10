<?php

namespace App\Repository;

use App\Entity\SellerPriority;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SellerPriority|null find($id, $lockMode = null, $lockVersion = null)
 * @method SellerPriority|null findOneBy(array $criteria, array $orderBy = null)
 * @method SellerPriority[]    findAll()
 * @method SellerPriority[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SellerPriorityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SellerPriority::class);
    }

    // /**
    //  * @return SellerPriority[] Returns an array of SellerPriority objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SellerPriority
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
