<?php


namespace App\Service\Ggsel;


use Symfony\Contracts\HttpClient\HttpClientInterface;

class GgselSeller extends GgselApiReader
{

    const API_URL = 'sellers';

    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getPage(int $page): array
    {
        $params = http_build_query([
            'token' => $this->token,
            'page' => $page
        ]);
        $request = $this->client->request('GET', $this->basePath . self::API_URL . "?$params");
        return $request->toArray();
    }
}