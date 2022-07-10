<?php

namespace App\Command;

use App\Entity\Digiseller;
use App\Entity\GgselCategory;
use App\Util\AppUtil;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class OldUrlCommand extends Command
{
    protected static $defaultName = 'app:old-url';

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

        $result = [['Название', 'GameId']];
        $file = fopen('dimikey.csv', 'r');
        while (($line = fgetcsv($file)) !== FALSE) {
            $game = $this->entityManager->getRepository(Digiseller::class)->findOneBy(['gameId' => $line[10]]);
            if(!$game){
                $result[] = ['name' => $line[2], 'gameId' => $line[10]];
            }
        }

        $fp = fopen('result.csv', 'w');
        foreach ($result as $fields) {
            fputcsv($fp, $fields);
        }
        fclose($fp);

        echo count($result);

        $io->success('OK');

        return Command::SUCCESS;
    }
}
