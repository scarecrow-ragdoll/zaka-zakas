<?php


namespace App\Service;


class CacheStorage
{
    const INDEX_HEADER = 'index_header';
    const INDEX_GAMES = 'index_games';
    const INDEX_TOP_GAMES = 'index_top_games';
    const INDEX_CATEGORY = 'index_category';

    static function getConstants() {
        $oClass = new \ReflectionClass(__CLASS__);
        return $oClass->getConstants();
    }
}