<?php

namespace App\Entity;

use App\Util\AppUtil;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Digiseller
 *
 * @ORM\Table(name="digiseller", options={"charset":"utf8mb4", "collate":"utf8mb4_unicode_ci"}, indexes={@ORM\Index(name="game_id", columns={"game_id"}), @ORM\Index(name="game_ide", columns={"game_id"}), @ORM\Index(name="title", columns={"title"}), @ORM\Index(name="title1", columns={"title1"})})
 * @ORM\Entity(repositoryClass="App\Repository\DigisellerRepository")
 */
class Digiseller
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="subs", type="integer", nullable=false)
     */
    private $subs = '0';

    /**
     * @var string|null
     *
     * @ORM\Column(name="title", type="string", length=230, nullable=true)
     */
    private $title;

    /**
     * @var string|null
     *
     * @ORM\Column(name="title1", type="string", length=200, nullable=true)
     */
    private $title1;

    /**
     * @var string
     *
     * @ORM\Column(name="section", type="string", length=255, nullable=false)
     */
    private $section;

    /**
     * @var string
     *
     * @ORM\Column(name="category", type="string", length=255, nullable=false)
     */
    private $category;

    /**
     * @var int
     *
     * @ORM\Column(name="seller", type="integer", nullable=false)
     */
    private $seller;

    /**
     * @var int|null
     *
     * @ORM\Column(name="sales", type="integer", nullable=true)
     */
    private $sales;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="keywords", type="text", length=65535, nullable=true)
     */
    private $keywords;

    /**
     * @var int
     *
     * @ORM\Column(name="game_id", type="integer", nullable=false)
     */
    private $gameId;

    /**
     * @var int
     *
     * @ORM\Column(name="game_id2", type="integer", nullable=false)
     */
    private $gameId2;

    /**
     * @var int
     *
     * @ORM\Column(name="banned", type="integer", nullable=false)
     */
    private $banned;

    /**
     * @var int
     *
     * @ORM\Column(name="available", type="integer", nullable=false)
     */
    private $available;

    /**
     * @var string
     *
     * @ORM\Column(name="wmr", type="float", nullable=false)
     */
    private $wmr;

    /**
     * @var string
     *
     * @ORM\Column(name="wmz", type="float", nullable=false)
     */
    private $wmz;

    /**
     * @var string
     *
     * @ORM\Column(name="wmu", type="string", length=10, nullable=false)
     */
    private $wmu;

    /**
     * @var string
     *
     * @ORM\Column(name="wme", type="float", nullable=false)
     */
    private $wme;

    /**
     * @var int
     *
     * @ORM\Column(name="discount", type="integer", nullable=false)
     */
    private $discount;

    /**
     * @var int
     *
     * @ORM\Column(name="discounts", type="integer", nullable=false)
     */
    private $discounts;

    /**
     * @var string
     *
     * @ORM\Column(name="message", type="text", length=65535, nullable=true)
     */
    private $message;

    /**
     * @var string
     *
     * @ORM\Column(name="moreinfo", type="text", length=65535, nullable=true)
     */
    private $moreinfo;

    /**
     * @var string
     *
     * @ORM\Column(name="sysinfo", type="text", length=65535, nullable=true)
     */
    private $sysinfo;

    /**
     * @var string
     *
     * @ORM\Column(name="img_small", type="text", length=65535, nullable=false)
     */
    private $imgSmall;

    /**
     * @var string
     *
     * @ORM\Column(name="img_real", type="text", length=65535, nullable=false)
     */
    private $imgReal;

    /**
     * @var string
     *
     * @ORM\Column(name="image_small", type="text", length=65535, nullable=false)
     */
    private $imageSmall;

    /**
     * @var string
     *
     * @ORM\Column(name="image_real", type="text", length=65535, nullable=false)
     */
    private $imageReal;

    /**
     * @var int
     *
     * @ORM\Column(name="game_idz1", type="integer", nullable=false)
     */
    private $gameIdz1;

    /**
     * @var int
     *
     * @ORM\Column(name="game_idz2", type="integer", nullable=false)
     */
    private $gameIdz2;

    /**
     * @var int
     *
     * @ORM\Column(name="game_idz3", type="integer", nullable=false)
     */
    private $gameIdz3;

    /**
     * @var int
     *
     * @ORM\Column(name="game_idz4", type="integer", nullable=false)
     */
    private $gameIdz4;

    /**
     * @var int
     *
     * @ORM\Column(name="in_stock", type="smallint", nullable=false)
     */
    private $inStock = '0';

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rating;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cntGoodresponses;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cntSyncResponses;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $cntBadresponses;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $saleEnd;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $salePercent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $saleWmr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $saleWmz;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $saleWme;

    public function __toString()
    {
        return $this->gameId . ' ' . $this->title;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubs(): ?int
    {
        return $this->subs;
    }

    public function setSubs(int $subs): self
    {
        $this->subs = $subs;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title1 ?? $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTitle1(): ?string
    {
        return $this->title1;
    }

    public function setTitle1(?string $title1): self
    {
        $this->title1 = $title1;

        return $this;
    }

    public function getSection(): ?string
    {
        return $this->section;
    }

    public function setSection(string $section): self
    {
        $this->section = $section;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getSeller(): ?int
    {
        return $this->seller;
    }

    public function setSeller(int $seller): self
    {
        $this->seller = $seller;

        return $this;
    }

    public function getSales(): ?int
    {
        return $this->sales;
    }

    public function setSales(?int $sales): self
    {
        $this->sales = $sales;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getKeywords(): ?string
    {
        return $this->keywords;
    }

    public function setKeywords(?string $keywords): self
    {
        $this->keywords = $keywords;

        return $this;
    }

    public function getGameId(): ?int
    {
        return $this->gameId;
    }

    public function setGameId(int $gameId): self
    {
        $this->gameId = $gameId;

        return $this;
    }

    public function getGameId2(): ?int
    {
        return $this->gameId2;
    }

    public function setGameId2(int $gameId2): self
    {
        $this->gameId2 = $gameId2;

        return $this;
    }

    public function getBanned(): ?int
    {
        return $this->banned;
    }

    public function setBanned(int $banned): self
    {
        $this->banned = $banned;

        return $this;
    }

    public function getAvailable(): ?int
    {
        return $this->available;
    }

    public function setAvailable(int $available): self
    {
        $this->available = $available;

        return $this;
    }

    public function getWmr(): ?float
    {
        return $this->wmr;
    }

    public function setWmr(float $wmr): self
    {
        $this->wmr = $wmr;

        return $this;
    }

    public function getWmz(): ?float
    {
        return $this->wmz;
    }

    public function setWmz(float $wmz): self
    {
        $this->wmz = $wmz;

        return $this;
    }

    public function getWmu(): ?string
    {
        return $this->wmu;
    }

    public function setWmu(string $wmu): self
    {
        $this->wmu = $wmu;

        return $this;
    }

    public function getWme(): ?float
    {
        return $this->wme;
    }

    public function setWme(float $wme): self
    {
        $this->wme = $wme;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getDiscounts(): ?int
    {
        return $this->discounts;
    }

    public function setDiscounts(int $discounts): self
    {
        $this->discounts = $discounts;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getMoreinfo(): ?string
    {
        return $this->moreinfo;
    }

    public function setMoreinfo(?string $moreinfo): self
    {
        $this->moreinfo = $moreinfo;

        return $this;
    }

    public function getSysinfo(): ?string
    {
        return $this->sysinfo;
    }

    public function setSysinfo(?string $sysinfo): self
    {
        $this->sysinfo = $sysinfo;

        return $this;
    }

    public function getImg(string $width = 'AUTO', string $height = 'AUTO')
    {
        if (empty($this->imgSmall)) {
            return '/img/empty.png';
        }
        $img = str_starts_with($this->imgSmall, '/') ? $this->imgSmall : '/' . $this->imgSmall;
        return "https://images.ggsel.ru/" . $this->gameId . "/original/" . $height . "x" . $width . $img;
    }

    public function getImgSmall(): ?string
    {
        return !empty($this->imgSmall) ? 'https://ggsel.com/products_images/' . $this->gameId . '/medium/' . $this->imgSmall : '/img/empty.png';
    }

    public function getImgBig(): ?string
    {
        return $this->imgSmall ? 'https://ggsel.com/products_images/' . $this->gameId . '/big/' . $this->imgSmall : '/img/empty.png';
    }

    public function getImgReall(): ?string
    {
        return !empty($this->imgReal) ? 'https://ggsel.com/products_images/' . $this->gameId . '/original/' . $this->imgReal : '/img/empty.png';
    }

    public function setImgSmall(string $imgSmall): self
    {
        $this->imgSmall = $imgSmall;

        return $this;
    }

    public function setImgReal(string $imgReal): self
    {
        $this->imgReal = $imgReal;

        return $this;
    }

    public function getImageSmall(): ?string
    {
        return $this->imgSmall ? 'https://ggsel.com/products_images/' . $this->gameId . '/medium/' . $this->imgSmall : '/empty.png';
    }

    public function setImageSmall(string $imageSmall): self
    {
        $this->imageSmall = $imageSmall;

        return $this;
    }

    public function getImageReal(): ?string
    {
        return $this->imgReal ? 'https://ggsel.com/products_images/' . $this->gameId . '/original/' . $this->imgReal : '/empty.png';
    }

    public function setImageReal(string $imageReal): self
    {
        $this->imageReal = $imageReal;

        return $this;
    }

    public function getGameIdz1(): ?int
    {
        return $this->gameIdz1;
    }

    public function setGameIdz1(int $gameIdz1): self
    {
        $this->gameIdz1 = $gameIdz1;

        return $this;
    }

    public function getGameIdz2(): ?int
    {
        return $this->gameIdz2;
    }

    public function setGameIdz2(int $gameIdz2): self
    {
        $this->gameIdz2 = $gameIdz2;

        return $this;
    }

    public function getGameIdz3(): ?int
    {
        return $this->gameIdz3;
    }

    public function setGameIdz3(int $gameIdz3): self
    {
        $this->gameIdz3 = $gameIdz3;

        return $this;
    }

    public function getGameIdz4(): ?int
    {
        return $this->gameIdz4;
    }

    public function setGameIdz4(int $gameIdz4): self
    {
        $this->gameIdz4 = $gameIdz4;

        return $this;
    }

    public function getInStock(): ?int
    {
        return $this->inStock;
    }

    public function setInStock(int $inStock): self
    {
        $this->inStock = $inStock;

        return $this;
    }


    public function getPrice(string $curr = 'wmr')
    {
        if ($curr == 'wmz')
            return $this->wmz;
        if ($curr == 'wmu')
            return $this->wmu;
        if ($curr == 'wme')
            return $this->wme;
        return floor($this->wmr);
    }

    public function getSalePrice(string $curr = 'wmr')
    {
        if ($curr == 'wmz')
            return $this->saleWmz;
        if ($curr == 'wme')
            return $this->saleWme;
        return $this->saleWmr;
    }

    public function getRating(): ?int
    {
        return $this->rating ?? 100;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getCntGoodresponses(): ?int
    {
        return $this->cntGoodresponses;
    }

    public function setCntGoodresponses(?int $cntGoodresponses): self
    {
        $this->cntGoodresponses = $cntGoodresponses;

        return $this;
    }

    public function getCntSyncResponses(): ?int
    {
        return $this->cntSyncResponses;
    }

    public function setCntSyncResponses(?int $cntSyncResponses): self
    {
        $this->cntSyncResponses = $cntSyncResponses;

        return $this;
    }

    public function getCntBadresponses(): ?int
    {
        return $this->cntBadresponses;
    }

    public function setCntBadresponses(?int $cntBadresponses): self
    {
        $this->cntBadresponses = $cntBadresponses;

        return $this;
    }

    public function getSaleEnd(): ?string
    {
        return $this->saleEnd;
    }

    public function getSaleEndDate(): ?\DateTime
    {
        return new \DateTime($this->saleEnd);
    }

    public function getSaleEndInterval(): ?\DateInterval
    {
        return (new \DateTime($this->saleEnd))->diff(AppUtil::getNow());
    }

    public function getSaleEndIntervalCustom(): ?\DateInterval
    {
        return (new \DateTime('tomorrow'))->diff(AppUtil::getNow());
    }

    public function getIsSaleEnd(): bool
    {
        return (new \DateTime($this->saleEnd)) > AppUtil::getNow();
    }

    public function setSaleEnd(?string $saleEnd): self
    {
        $this->saleEnd = $saleEnd;

        return $this;
    }

    public function getSalePercent(): ?string
    {
        return $this->salePercent;
    }

    public function setSalePercent(?string $salePercent): self
    {
        $this->salePercent = $salePercent;

        return $this;
    }

    public function getSaleWmr(): ?string
    {
        return $this->saleWmr;
    }

    public function setSaleWmr(?string $saleWmr): self
    {
        $this->saleWmr = $saleWmr;

        return $this;
    }

    public function getSaleWmz(): ?string
    {
        return $this->saleWmz;
    }

    public function setSaleWmz(?string $saleWmz): self
    {
        $this->saleWmz = $saleWmz;

        return $this;
    }

    public function getSaleWme(): ?string
    {
        return $this->saleWme;
    }

    public function setSaleWme(?string $saleWme): self
    {
        $this->saleWme = $saleWme;

        return $this;
    }


}
