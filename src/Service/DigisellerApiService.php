<?php


namespace App\Service;


use App\Entity\Digiseller;
use Doctrine\ORM\EntityManagerInterface;

class DigisellerApiService
{
    private $entityManager;
    private $digisellerApi;

    public function __construct(EntityManagerInterface $entityManager, DigisellerApi $digisellerApi)
    {
        $this->entityManager = $entityManager;
        $this->digisellerApi = $digisellerApi;
    }

    public function updateProduct(Digiseller $digiseller, bool $isFlush = true, $withImg = true)
    {
        $info_order = $this->digisellerApi->InfoOrder($digiseller->getGameId());
        $digiseller->setAvailable(1);
        if ($info_order->product->in_stock == "0") {
            $digiseller->setInStock(0);
        } elseif ($info_order->product) {
            $digiseller->setTitle($info_order->product->name);
            $digiseller->setTitle1($info_order->product->name);
            $digiseller->setWmr($info_order->product->prices->wmr);
            $digiseller->setWme($info_order->product->prices->wme);
            $digiseller->setWmz($info_order->product->prices->wmz);
            $digiseller->setWmu($info_order->product->prices->wmu);
            $digiseller->setSales(intval($info_order->product->statistics->sales));
            $digiseller->setDiscounts(intval($info_order->product->discounts->discount->percent));
            $digiseller->setMessage(htmlspecialchars($info_order->product->info->asXml()));
            $digiseller->setMoreinfo(htmlspecialchars($info_order->product->add_info));
            if ($withImg) {
                $digiseller->setImgSmall($info_order->product->previews_img->preview_img->img_small);
                $digiseller->setImgReal($info_order->product->previews_img->preview_img->img_real);
            }
            $digiseller->setInStock(1);
        }
        $this->entityManager->persist($digiseller);
        if ($isFlush)
            $this->entityManager->flush();
    }

    public function updateProductStock(Digiseller $digiseller, bool $isFlush = true)
    {
        $info_order = $this->digisellerApi->InfoOrder($digiseller->getGameId());
        $digiseller->setAvailable(1);
        if ($info_order->product->in_stock == "0") {
            $digiseller->setInStock(0);
        } elseif ($info_order->product) {
            $digiseller->setInStock(1);
        }
        $this->entityManager->persist($digiseller);
        if ($isFlush)
            $this->entityManager->flush();
    }

    public function addProduct($order, $subs = 0): Digiseller
    {
        $game = new Digiseller();
        $game->setTitle($order->product->name);
        $game->setTitle1($order->product->name);
        $game->setSeller(intval($order->product->seller->id));
        $game->setSales(intval($order->product->statistics->sales));
        $game->setGameId(intval($order->product->id));
        $game->setAvailable(1);
        $game->setInStock(intval($order->product->in_stock));
        $game->setWmr($order->product->prices->wmr);
        $game->setWme($order->product->prices->wme);
        $game->setWmz($order->product->prices->wmz);
        $game->setWmu($order->product->prices->wmu);
        $game->setDiscounts(intval($order->product->discounts->discount->percent));
        $game->setImgSmall($order->product->previews_img->preview_img->img_small);
        $game->setImgReal($order->product->previews_img->preview_img->img_real);
        $game->setMessage(htmlspecialchars($order->product->info->asXml()));
        $game->setMoreinfo(htmlspecialchars($order->product->add_info));
        $game->setSubs($subs);
        $game->setSection('');
        $game->setCategory('');
        $game->setDescription('');
        $game->setKeywords('');
        $game->setSysinfo('');
        $game->setImageSmall('');
        $game->setImageReal('');
        $game->setDiscount(0);
        $game->setBanned(0);
        $game->setGameId2(0);
        $game->setGameIdz1(0);
        $game->setGameIdz2(0);
        $game->setGameIdz3(0);
        $game->setGameIdz4(0);
        return $game;
    }
}