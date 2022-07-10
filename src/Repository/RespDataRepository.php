<?php

namespace App\Repository;

use App\Entity\RespData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RespData|null find($id, $lockMode = null, $lockVersion = null)
 * @method RespData|null findOneBy(array $criteria, array $orderBy = null)
 * @method RespData[]    findAll()
 * @method RespData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RespDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RespData::class);
    }

    public function findLasResp()
    {
        return $this->createQueryBuilder('r')
            ->orderBy('r.id', 'DESC')
            ->setMaxResults(20)
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return RespData[] Returns an array of RespData objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RespData
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
