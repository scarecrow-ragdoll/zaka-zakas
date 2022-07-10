<?php

namespace App\Entity;

use App\Repository\ChildIdRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ChildIdRepository::class)
 */
class ChildId
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $categoryId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $childId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategoryId(): ?string
    {
        return $this->categoryId;
    }

    public function setCategoryId(string $categoryId): self
    {
        $this->categoryId = $categoryId;

        return $this;
    }

    public function getChildId(): ?string
    {
        return $this->childId;
    }

    public function setChildId(string $childId): self
    {
        $this->childId = $childId;

        return $this;
    }
}
