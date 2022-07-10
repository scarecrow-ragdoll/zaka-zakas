<?php

namespace App\Repository;

use App\Entity\ChildId;
use App\Repository\Traits\ExecuteSqlTrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ChildId|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChildId|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChildId[]    findAll()
 * @method ChildId[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChildIdRepository extends ServiceEntityRepository
{

    use ExecuteSqlTrait;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChildId::class);
    }

    public function delete() {
        $this->executeSqlNoFetch('DELETE FROM child_id');
    }

    // /**
    //  * @return ChildId[] Returns an array of ChildId objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ChildId
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
