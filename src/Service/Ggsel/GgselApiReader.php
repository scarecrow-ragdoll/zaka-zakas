<?php


namespace App\Service\Ggsel;


use Symfony\Contracts\HttpClient\HttpClientInterface;

abstract class GgselApiReader
{

    public $page = 1;
    public $maxPage = null;

    protected $token = 's3g2xhywcMqXVyGf';
    protected $basePath = 'https://api.ggsel.com/api/v1/';

    abstract function getPage(int $page): array;

    public function getCurrentPage(): int
    {
        return $this->page;
    }

    public function getNextPage($name = 'goods'): ?array
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
        return $content[$name];
    }

    public function getAllData(): array
    {
        $result = [];
        while ($content = $this->getNextPage()) {
            $result = array_merge($result, $content);
        }
        return $result;
    }

    public function getNextPageData(): array
    {
        return $this->getNextPage();
    }

}