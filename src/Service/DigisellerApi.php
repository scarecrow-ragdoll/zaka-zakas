<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class DigisellerApi
{
    private $ch;
    private $url;
    private $api = 'http://shop.digiseller.ru/xml/';
    private $proxy = [];
    private $proxyAuth = [];
    private $proxyIndex = 0;

    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
//        $proxy_file = fopen('proxy.txt', 'r');
//        if($proxy_file) {
//            while (($buffer = fgets($handle, 4096)) !== false) {
//                $proxyElement = explode(' ', $buffer);
//                array_push($proxy, $proxyElement[0]);
//                array_push($proxyAuth, $proxyElement[1]);
//            }
//        } else {
//            $proxy = null;
//        }
    }

//    public function nextProxy() {
//        $proxyIndex = ($proxyIndex + 1) % (count($proxy)+1);
//    }

    private function CurlConnect($url, $request)
    {
        if ($url != $this->url) {
            if ($this->ch) {
                curl_close($this->ch);
            }
            $this->url = $url;
            $this->ch = curl_init($url);
            curl_setopt($this->ch, CURLOPT_HEADER, 0);
            curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($this->ch, CURLOPT_TIMEOUT, 30);
//            if($proxyIndex != 0) {
//                curl_setopt($this->ch, CURLOPT_PROXY, $proxy[proxyIndex-1]);
//                curl_setopt($this->ch, CURLOPT_PROXYUSERPWD, $proxyAuth[proxyIndex-1]);
//            }
            curl_setopt($this->ch, CURLOPT_HTTPHEADER, array(
                "Content-Type: text/xml"
            ));
            return $this->SendRequest($request);
        } else {
            return $this->SendRequest($request);
        }
    }


    private function SendRequest($request)
    {
        curl_setopt($this->ch, CURLOPT_POSTFIELDS, $request);
        $result = curl_exec($this->ch);
        return $result;
    }

    public function GetGroupsOrders($id_seller)
    {
        $request = '<?xml version="1.0" encoding="utf-8"?>
        <digiseller.request>
	        <seller>
	        	<id>' . $id_seller . '</id>
	        </seller>
	        <category> 
	        	<id></id>
	        </category>
        </digiseller.request>';
        try {
            $data = new \SimpleXMLElement($this->CurlConnect($this->api . 'shop_categories.asp', $request), null, false);
        } catch (Exception $e) {
            $d = false;
        }
        return $data;
    }

    public function GetOrders($id_group, $seller, $page = 1, $rows = 200)
    {
        $request = '<?xml version="1.0" encoding="utf-8"?>
        <digiseller.request>
	        <category>
	        	<id>' . $id_group . '</id>
	        </category>
	        <seller>
	        	<id>' . $seller . '</id>
	        </seller>
	        <pages>
	        	<num>' . $page . '</num>
	        	<rows>' . $rows . '</rows>
	        </pages>
        </digiseller.request>';
        try {
            $data = $this->CurlConnect($this->api . 'shop_products.asp', $request);
            $data = str_replace('👻', '', $data);
            $data = new \SimpleXMLElement($data, null, false);
        } catch (Exception $e) {
            $d = false;
        }
        return $data;
    }

    public function InfoOrders($id_order)
    {
        $request = '<?xml version="1.0" encoding="utf-8"?>
			<digiseller.request>
				<product>
					<id>' . $id_order . '</id>
				</product>
			</digiseller.request>';
        // error_log('[VSVSVS] '.$this->CurlConnect($this->api . 'shop_product_info.asp', $request));

        try {
            $data = new \SimpleXMLElement($this->CurlConnect($this->api . 'shop_product_info.asp', $request), null, false);
        } catch (Exception $e) {
            $data = false;
        }
        return $data;
    }

    public function InfoOrder($id_order)
    {
        $request = '<?xml version="1.0" encoding="utf-8"?>
			<digiseller.request>
				<product>
					<id>' . $id_order . '</id>
				</product>
			</digiseller.request>';
        //$data    = preg_replace('/<\!\[CDATA\[|<\!\[CDATA\[👻|\]\]>/iU', '', $this->CurlConnect($this->api . 'shop_product_info.asp', $request));
        $data = $this->CurlConnect($this->api . 'shop_product_info.asp', $request);
        // $data = preg_replace('/<\!\[CDATA\[|\]\]>/iU', '', $data);
        $data = str_replace('👻', '', $data);
        //$data = str_replace("<attention>", "", $data);
        //$data = str_replace("</attention>", "", $data);
        //$data = str_replace("<delivery>", "", $data);
        //$data = str_replace("</delivery>", "", $data);
        //$data = str_replace("&", "&amp;", $data);

        try {
            $d = new \SimpleXMLElement($data);
        } catch (Exception $e) {
            $d = false;
        }
        return $d;
    }

    public function desOrders($id_order)
    {
        $request = '<?xml version="1.0" encoding="utf-8"?>
        <digiseller.request>
        	<id_goods>' . $id_order . '</id_goods>
        </digiseller.request>';
        $data = new \SimpleXMLElement($this->CurlConnect($this->api . 'personal_goods_info.asp', $request));
        return $data;
    }

    public function getComments($seller, $game, $page)
    {
        $params = http_build_query([
            'seller_id' => $seller,
            'product_id' => $game,
            'type' => 'all',
            'rows' => 20,
            'page' => $page,
        ]);
        $request = $this->client->request('GET', 'https://api.digiseller.ru/api/reviews' . "?$params", [
            'headers' => [
                'Accept' => 'application/json',
            ]]);
        return $request->toArray();
    }

//    public function GetComments($id_seller, $id = false)
//    {
//        $request = '<digiseller.request>
//        <seller>
//        	<id>' . $id_seller . '</id>
//        	</seller>
//        <product>
//        	<id>' . $id . '</id>
//        	</product>
//        <pages>
//        	<num>1</num>
//        	<rows>1000</rows>
//        	</pages>
//        </digiseller.request>';
//        $data    = new \SimpleXMLElement($this->CurlConnect($this->api . 'shop_reviews.asp', $request));
//        return $data;
//    }

    function get_last_sale($id_seller)
    {
        $request = "<digiseller.request>
        <id_seller>" . $id_seller . "</id_seller>
        </digiseller.request>";
        $data = new \SimpleXMLElement($this->CurlConnect($this->api . 'last_sale.asp', $request));
        return $data;
    }
}

?>