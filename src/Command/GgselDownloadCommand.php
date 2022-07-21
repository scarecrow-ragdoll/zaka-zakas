<?php

namespace App\Command;

use App\Service\Ggsel\GgselApi;
use App\Service\GgselApiService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Process\Process;

class GgselDownloadCommand extends Command
{
    protected static $defaultName = 'app:ggsel-download';

    private $ggselApi;

    public function __construct(
        string $name = null,
        GgselApi $ggselApi
    )
    {
        parent::__construct($name);
        $this->ggselApi = $ggselApi;
    }


    protected function configure(): void
    {
        $this
            ->addArgument('scope', InputArgument::REQUIRED, 'Scope of download command')
            ->addArgument('page', InputArgument::OPTIONAL, 'page')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $scope = $input->getArgument('scope');
        $page = $input->getArgument('page');

        if($scope == 'category') {
            $maxSellerPage = $this->ggselApi->getMaxPageCategory();
            $sellerBar = new ProgressBar($output, $maxSellerPage);
            $sellerBar->start();
            for ($i = 1; $i <= $maxSellerPage; $i++) {
                $this->ggselApi->getCategoryPage($i);
                $sellerBar->advance();
            }
            $sellerBar->finish();
            $io->success('Category download success');
        }

        if($scope == 'game') {
            if($page) {
                $this->ggselApi->getGoodsPage($page);
                echo $page . PHP_EOL;
            } else {
                $maxGamePage = $this->ggselApi->getMaxPageGame();
                $gameBar = new ProgressBar($output, $maxGamePage);
                $gameBar->start();
                for ($i = 1; $i <= $maxGamePage; $i++) {
                    $this->ggselApi->getGoodsPage($i);
                    $gameBar->advance();
                }
                $gameBar->finish();
                $io->success('Game download success');
            }
        }

        if($scope == 'seller') {
            $maxSellerPage = $this->ggselApi->getMaxPageSeller();
            $sellerBar = new ProgressBar($output, $maxSellerPage);
            $sellerBar->start();
            for ($i = 1; $i <= $maxSellerPage; $i++) {
                $this->ggselApi->getSellerPage($i);
                $sellerBar->advance();
            }
            $sellerBar->finish();
            $io->success('Seller download success');
        }

        if($scope == 'clean') {
            $categories = $this->ggselApi->getDeleteDimikeyCategories();
            $this->ggselApi->clearDuplicates();
            $bar = new ProgressBar($output, count($categories));
            $bar->start();
            for ($i = 0; $i < count($categories); $i++) {
                $this->ggselApi->deleteDimikey($categories[$i]);
                $bar->advance();
            }
            $this->ggselApi->clean();
            $bar->finish();
            $io->success('Game clean games');
        }

        if($scope == 'cnt') {
            $categories = $this->ggselApi->cntGoodCategories();
            $cntBar = new ProgressBar($output, count($categories));
            $cntBar->start();
            foreach ($categories as $category) {
                $this->ggselApi->updateCategoryCnt($category);
                $cntBar->advance();
            }
            $cntBar->finish();
            $this->ggselApi->deleteEmptyCategory();
        }

        if($scope == 'page') {
            echo $this->ggselApi->getMaxPageGame();
        }

        return Command::SUCCESS;
    }
}
