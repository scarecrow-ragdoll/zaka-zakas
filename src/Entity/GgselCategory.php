<?php

namespace App\Entity;

use App\Repository\GgselCategoryRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=GgselCategoryRepository::class)
 */
class GgselCategory
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $digiCatalog;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $parentId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $breadcrumbsTitle;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isBaseGame;

    /**
     * @ORM\Column(type="string", length=511, nullable=true)
     */
    private $url;

    /**
     * @ORM\Column(type="integer")
     */
    private $cntGoods;

    /**
     * @ORM\Column(type="string", length=512, nullable=true)
     */
    private $seoDesc;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $seoTitle;

    /**
     * @ORM\Column(type="string", length=512, nullable=true)
     */
    private $seoKeywords;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isCatalog;

    /**
     * @ORM\Column(type="boolean")
     */
    private $subcatDigi;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isVirtual;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $minPrice;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $discount;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isSale;

    /**
     * @ORM\Column(type="integer")
     */
    private $typeId;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $hideInGames;

    /**
     * @ORM\Column(type="string", length=2048, nullable=true)
     */
    private $tags;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getDigiCatalog(): ?string
    {
        return $this->digiCatalog;
    }

    public function setDigiCatalog(string $digiCatalog): self
    {
        $this->digiCatalog = $digiCatalog;

        return $this;
    }

    public function getParentId(): ?string
    {
        return $this->parentId;
    }

    public function setParentId(?string $parentId): self
    {
        $this->parentId = $parentId;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function getTitleSeo(): ?string
    {
        $title = str_replace('Купить ', '', $this->title);
        $title = str_replace('ключ', 'ключи', $title);
        $title = str_replace('аккаунт', 'аккаунты', $title);
        return $title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBreadcrumbsTitle(): ?string
    {
        return $this->breadcrumbsTitle;
    }

    public function setBreadcrumbsTitle(?string $breadcrumbsTitle): self
    {
        $this->breadcrumbsTitle = $breadcrumbsTitle;

        return $this;
    }

    public function getIsBaseGame(): ?bool
    {
        return $this->isBaseGame;
    }

    public function setIsBaseGame(bool $isBaseGame): self
    {
        $this->isBaseGame = $isBaseGame;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getCntGoods(): ?int
    {
        return $this->cntGoods;
    }

    public function setCntGoods(int $cntGoods): self
    {
        $this->cntGoods = $cntGoods;

        return $this;
    }

    public function getSeoDesc(): ?string
    {
        return $this->seoDesc;
    }

    public function setSeoDesc(?string $seoDesc): self
    {
        $this->seoDesc = $seoDesc;

        return $this;
    }

    public function getSeoTitle(): ?string
    {
        return $this->seoTitle;
    }

    public function setSeoTitle(?string $seoTitle): self
    {
        $this->seoTitle = $seoTitle;

        return $this;
    }

    public function getSeoKeywords(): ?string
    {
        return $this->seoKeywords;
    }

    public function setSeoKeywords(?string $seoKeywords): self
    {
        $this->seoKeywords = $seoKeywords;

        return $this;
    }

    public function getIsCatalog(): ?bool
    {
        return $this->isCatalog;
    }

    public function setIsCatalog(bool $isCatalog): self
    {
        $this->isCatalog = $isCatalog;

        return $this;
    }

    public function getSubcatDigi(): ?bool
    {
        return $this->subcatDigi;
    }

    public function setSubcatDigi(bool $subcatDigi): self
    {
        $this->subcatDigi = $subcatDigi;

        return $this;
    }

    public function getIsVirtual(): ?bool
    {
        return $this->isVirtual;
    }

    public function setIsVirtual(?bool $isVirtual): self
    {
        $this->isVirtual = $isVirtual;

        return $this;
    }

    public function getMinPrice(): ?int
    {
        return $this->minPrice;
    }

    public function setMinPrice(?int $minPrice): self
    {
        $this->minPrice = $minPrice;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(?int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getIsSale(): ?bool
    {
        return $this->isSale;
    }

    public function setIsSale(bool $isSale): self
    {
        $this->isSale = $isSale;

        return $this;
    }

    public function getTypeId(): ?int
    {
        return $this->typeId;
    }

    public function setTypeId(int $typeId): self
    {
        $this->typeId = $typeId;

        return $this;
    }

    public function getHideInGames(): ?bool
    {
        return $this->hideInGames;
    }

    public function setHideInGames(?bool $hideInGames): self
    {
        $this->hideInGames = $hideInGames;

        return $this;
    }

    public function getTags(): ?string
    {
        return $this->tags;
    }

    public function setTags(?string $tags): self
    {
        $this->tags = $tags;

        return $this;
    }
}
