<?php


namespace App\Repository\Traits;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

trait ExecuteSqlTrait
{

    /**
     * @param string $sql
     * @param array $params
     * @return array
     */
    public function executeSql(String $sql, array $params = []): array
    {
        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->executeQuery($sql, $params);
        return $stmt->fetchAll();
    }

    /**
     * @param string $sql
     * @param array $params
     * @return array
     */
    public function executeSqlIds(String $sql, array $params = [], $id = 'id'): array
    {
        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->executeQuery($sql, $params);
        $result = [];
        foreach ($stmt->fetchAll() as $res) {
            $result[] = $res[$id];
        }
        return $result;
    }

    /**
     * @param string $sql
     * @param array $params
     * @return array
     */
    public function executeSqlNoFetch(String $sql, array $params = []): void
    {
        $em = $this->getEntityManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute($params);
    }
}
