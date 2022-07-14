<?php

namespace App\Command;

use App\Entity\Digiseller;
use App\Entity\GgselCategory;
use App\Entity\Seller;
use App\Util\AppUtil;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class GenerateSitemapCommand extends Command
{
    protected static $defaultName = 'app:generate-sitemap';

    private $result = [];

    private $parent = [];

    private $entityManager;
    private $urlGenerator;

    public function __construct(
        string $name = null,
        EntityManagerInterface $entityManager,
        UrlGeneratorInterface $urlGenerator
    )
    {
        parent::__construct($name);
        $this->entityManager = $entityManager;
        $this->urlGenerator = $urlGenerator;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->addRow($this->gen('index'), 0.9);
        $ggselCategories = $this->entityManager->getRepository(GgselCategory::class)->findAll();
        foreach ($ggselCategories as $category) if ($category->getUrl()) {
            $this->addRow($this->gen('catalog', ['url' => $category->getUrl()]), 0.8);
        }
        $this->writeToFile('category');

        $digisellers = $this->entityManager->getRepository(Digiseller::class)->findAll();
        $idx = 1;
        foreach ($digisellers as $digiseller) if (!empty(AppUtil::urlize($digiseller->getTitle()))) {
            $this->addRow($this->gen('game', ['digiseller' => $digiseller->getGameId(), 'slug' => AppUtil::urlize($digiseller->getTitle())]), 0.7);
            if (count($this->result) == 40000) {
                $this->writeToFile('game' . $idx);
                $idx++;
            }
        }
        $this->writeToFile('game' . $idx);

        $sellers = $this->entityManager->getRepository(Seller::class)->findAll();
        foreach ($sellers as $seller) {
            $this->addRow($this->gen('seller', ['seller' => $seller->getSellerId()]), 0.6);
        }
        $this->writeToFile('seller');

        $this->addRow($this->gen('all-games'), 0.6);
        $this->addRow($this->gen('all-games-type', ['type' => 'software']), 0.6);
        $this->addRow($this->gen('all-games-type', ['type' => 'digital-goods']), 0.6);
        $this->addRow($this->gen('all-games-type', ['type' => 'pre-orders-first']), 0.6);
        $this->addRow($this->gen('all-games-type', ['type' => 'subscription-services']), 0.6);
        $this->addRow($this->gen('static-page', ['static' => 'howbuy']), 0.5);
        $this->addRow($this->gen('static-page', ['static' => 'sellerinstruction']), 0.5);
        $this->addRow($this->gen('static-page', ['static' => 'contacts']), 0.5);
        $this->writeToFile('static');
        $this->writeParent();


        $io->success('Sitemap success generate');

        return Command::SUCCESS;
    }

    private function addRow(string $url, float $priority)
    {
        $this->result[] = [
            'url' => $url,
            'priority' => $priority
        ];
    }

    private function gen(string $name, array $params = []): string
    {
        return 'https://zaka-zakas.com' . $this->urlGenerator->generate($name, $params);
    }

    private function writeToFile($name)
    {
        $content = '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . PHP_EOL;
        foreach ($this->result as $row) {
            $content .= '<url><loc>' . $row['url'] . '</loc></url>' .
//                '<priority>' . $row['priority'] . '</priority></url> '.
                PHP_EOL;
        }
        $content .= '</urlset>';
        file_put_contents("public/$name.xml", $content);
        $this->parent[] = $name;
        unset($this->result);
    }

    private function writeParent()
    {
        $content = '<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . PHP_EOL;
        foreach ($this->parent as $row) {
            $content .= '<sitemap><loc>https://zaka-zakas.com/' . $row . '.xml</loc></sitemap>' .
//                '<priority>' . $row['priority'] . '</priority></url> '.
                PHP_EOL;
        }
        $content .= '</sitemapindex>';
        file_put_contents("public/sitemap.xml", $content);
    }
}
