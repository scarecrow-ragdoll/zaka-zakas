<?php


namespace App\Util;


use Gedmo\Sluggable\Util\Urlizer;

class AppUtil
{

    public static function urlize($text, $separator = '-')
    {
        $convertTable = array('а' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'e', 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'y', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch', 'ь' => '', 'ы' => 'y', 'ъ' => '', 'э' => 'e', 'ю' => 'yu', 'я' => 'ya');
        $text = strtr(trim(mb_strtolower($text, 'UTF-8')), $convertTable);
        return Urlizer::urlize($text, $separator);
    }

    public static function getNow()
    {
        return new \DateTime('Europe/Moscow');
    }

}