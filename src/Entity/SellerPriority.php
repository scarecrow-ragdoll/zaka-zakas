<?php

namespace App\Entity;

use App\Repository\SellerPriorityRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SellerPriorityRepository::class)
 */
class SellerPriority
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
    private $seller;

    /**
     * @ORM\Column(type="integer")
     */
    private $priority;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $percent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSeller(): ?string
    {
        return $this->seller;
    }

    public function setSeller(string $seller): self
    {
        $this->seller = $seller;

        return $this;
    }

    public function getPriority(): ?int
    {
        return $this->priority;
    }

    public function setPriority(int $priority): self
    {
        $this->priority = $priority;

        return $this;
    }

    public function getPercent(): ?int
    {
        return $this->percent;
    }

    public function setPercent(?int $percent): self
    {
        $this->percent = $percent;

        return $this;
    }
}
