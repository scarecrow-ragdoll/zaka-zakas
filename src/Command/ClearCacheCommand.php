<?php

namespace App\Command;

use App\Service\CacheStorage;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ClearCacheCommand extends Command
{
    protected static $defaultName = 'app:clear-cache';
    protected static $defaultDescription = 'Add a short description for your command';

    protected function configure(): void
    {
        $this
            ->setDescription(self::$defaultDescription)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $cache = new FilesystemAdapter();
        $caches = CacheStorage::getConstants();
        foreach ($caches as $cacheKey) {
            $cache->delete($cacheKey);
        }

        return Command::SUCCESS;
    }
}
