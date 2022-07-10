<?php

namespace App\Entity;

use App\Repository\SellerRepository;
use App\Util\AppUtil;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SellerRepository::class)
 */
class Seller
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
    private $sellerId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="json")
     */
    private $statistics = [];

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $attestat;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $wmid;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $date;

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSellerId(): ?string
    {
        return $this->sellerId;
    }

    public function setSellerId(string $sellerId): self
    {
        $this->sellerId = $sellerId;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStatistics(): ?array
    {
        return $this->statistics;
    }

    public function setStatistics(array $statistics): self
    {
        $this->statistics = $statistics;

        return $this;
    }

    public function getAttestat(): ?bool
    {
        return $this->attestat;
    }

    public function setAttestat(?bool $attestat): self
    {
        $this->attestat = $attestat;

        return $this;
    }

    public function getWmid(): ?string
    {
        return $this->wmid;
    }

    public function setWmid(?string $wmid): self
    {
        $this->wmid = $wmid;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getRating()
    {
        $countSell = $this->statistics['cnt_sell'];
        $countReturn = $this->statistics['cnt_return'];
        $countBad = $this->statistics['cnt_bad_responses'];
        return ($countSell == 0 and $countReturn == 0 and $countBad == 0) ? 0 : round(100 - (($countBad + $countReturn) / $countSell * 100));
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getCuteDate()
    {
        $now = AppUtil::getNow();
        $diff = $now->diff($this->date);
        if ($diff->y > 0) {
            return $diff->y . ($diff->y > 4 ? ' лет' : ' года');
        } elseif ($diff->m > 0) {
            return $diff->m . ' месяцев';
        } elseif ($diff->d > 0) {
            return $diff->d . ' дней';
        }
    }
}
