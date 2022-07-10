<?php


namespace App\Service;


use Symfony\Contracts\HttpClient\HttpClientInterface;

class GgselApiService
{

    private static $gamesUrl = 'https://api.ggsel.com/api/v1/goods';
    private static $categoryUrl = 'https://api.ggsel.com/api/v1/categories';
    private static $token = 's3g2xhywcMqXVyGf';

    private $client;

    private $page = 1;
    private $maxPage = null;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getCategoryPage(int $page) {
        $request = $this->client->request('GET', self::$categoryUrl . '?token=' . self::$token . "&page=$page");
        return $request->toArray();
//        7595
    }

    public function getNextCategoryPage(): ?array
    {
        $content = null;
        if ($this->maxPage === null) {
            $content = $this->getCategoryPage($this->page);
            $this->maxPage = $content['pages'];
        }
        if ($this->page > $this->maxPage) {
            return null;
        }
        if (!$content) {
            $content = $this->getCategoryPage($this->page);
        }
        $this->page++;
        return $content;
    }


    public function getNextPage(): ?array
    {
        $content = null;
        if ($this->maxPage === null) {
            $content = $this->getPage($this->page);
            $this->maxPage = $content['pages'];
        }
        if ($this->page > $this->maxPage) {
            return null;
        }
        if (!$content) {
            $content = $this->getPage($this->page);
        }
        $this->page++;
        return $content;
    }

    public function getCurrentPage(): int
    {
        return $this->page;
    }

    public function getPage(int $page): array
    {
        $request = $this->client->request('GET', self::$gamesUrl . '?token=' . self::$token . "&page=$page");
        return $request->toArray();
    }

}