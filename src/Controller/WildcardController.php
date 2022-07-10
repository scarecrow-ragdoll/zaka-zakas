<?php

namespace App\Controller;

use App\Entity\Active;
use App\Entity\Category;
use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

class WildcardController extends AbstractController
{

    private $entityManager;
    private $staticPages = [
        'selleragreement',
        'howbuy',
        'contacts',
        'privacy',
        'sellerinstruction',
    ];

    private $sections = [
        'steam' => 'steam',
        'origin' => 'origin',
        'uplay' => 'uplay',
        'minecraft' => 'minecraft',
        'udacha' => 'random-keys-1',
        'Fortnite' => 'fortnite',
        'egs' => 'akkaunty-1264',
        'microsoft' => 'xbox',
        'cs' => 'counter-strike-global-offensive-1',
    ];

    private $category = [
        'steam' => [
            'keys' => 'keys-and-gifts-steam',
            'accounts' => 'accounts-steam',
            'dota_2_invent' => 'dota-2-1131',
            'csgo_invent' => 'inventar-csgo-first',
            'randomkeys' => 'random-keys-1',
            'arma' => 'arma-3',
            'batman' => 'batman-arkham-knight-1884',
            'bioshock' => 'bioshock-infinite-1494',
            'borderlands' => 'borderlands-3-1902',
            'cod' => 'call-of-duty-vanguard-9073',
            'civilization' => 'sid-meiers-civilization-vi',
            'soulslike' => 'dark-souls-iii-1',
            'dayz' => 'dayz',
            'dead-island' => 'dead-island-riptide',
            'dirt' => 'dirt-5-5223',
            'elder-scrolls' => 'the-elder-scrolls-v-skyrim',
            'farming-simulator' => 'farming-simulator-19-1603',
            'gta' => 'grand-theft-auto-5-accounts-first',
            'hitman' => 'hitman-3',
            'just-cause' => 'just-cause-4-1634',
            'killing-floor' => 'killing-floor-2',
            'left-4-dead' => 'left-4-dead-2',
            'mafia' => 'mafia-trilogy-accounts-first',
            'metro' => 'metro-exodus',
            'mortal-kombat' => 'mortal-kombat-11',
            'nba' => 'nba-2k22-accounts-first',
            'payday' => 'payday-2-1',
            'pubg' => 'playerunknown180s-battlegrounds',
            'resident-evil' => 'resident-evil-village-accounts-first',
            'sniper-elite' => 'sniper-elite-4',
            'team-fortress' => 'team-fortress-2',
            'the-witcher-cyperpunk' => 'cyberpunk-2077-accounts-first',
            'tomb-raider' => 'shadow-of-the-tomb-raider',
            'total-war' => 'total-war-three-kingdoms',
            'warhammer' => 'total-war-warhammer-ii + total-war-warhammer',
        ],
        'origin' => [
            'keys' => 'key-origin',
            'accounts' => 'accounts-origin',
            'battlefield' => 'battlefield-6-first',
            'fifa' => 'fifa-22-accounts-first',
            'apex-legends' => 'apex-legends',
            'crysis' => 'crysis-remastered-accounts-first',
            'dead-space' => 'dead-space-3',
            'dragon-age' => 'dragon-age-inquisition',
            'mass-effect' => 'mass-effect-legendary-edition-account-first',
            'need-for-speed' => 'need-for-speed-heat',
            'pvz' => 'plants-vs.-zombies:-battle-for-neighborville-accounts-first',
            'sims' => 'the-sims-4',
            'titanfall' => 'titanfall-2',
        ],
        'uplay' => [
            'keys' => 'keys-uplay',
            'accounts' => 'accounts-uplay',
            'anno' => 'anno-1800',
            'assassins-creed' => 'assassins-creed-valhalla-accounts-first',
            'farcry' => 'far-cry-6-8826',
            'ghostrecon' => 'tom-clancys-ghost-recon-breakpoint-account-first',
            'might-magic' => 'heroes-of-might-and-magic-iii-the-restoration-of-erathia-vozrozhdenie-erafii',
            'rainbow-six' => 'tcrss-accounts-first',
            'splinter-cell' => 'tom-clancys-splinter-cell-blacklist',
            'the-crew' => 'the-crew-2-1126',
            'division' => 'tom-clancyacutes-the-division-2',
            'trials' => 'trials-rising-account-first',
            'watch_dogs' => 'watch-dogs-legion-accounts-first',
        ],
        'minecraft' => [
            'keys' => 'keys-minecraft',
        ],
        'Fortnite' => [
            'accounts' => 'accounts',
        ],
        'egs' => [
            'accounts' => 'akkaunty-1264',
        ],

    ];

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/{section}", name="wildcard_section")
     */
    public function wildcard1Section($section): Response
    {
        //game

        if (in_array($section, $this->staticPages)) {
            return $this->forward("App\Controller\StaticController::$section", []);
        }
        if (key_exists($section, $this->sections)) {
            $url = $this->sections[$section];
            return $this->redirectToRoute('catalog', ['url' => $url], 301);
        }
        throw new NotFoundHttpException();
    }

    /**
     * @Route("/{section}/{category}", name="wildcard_category")
     */
    public function wildcardCategory($section, $category): Response
    {
        if ($section == 'search') {
            return $this->forward("App\Controller\DefaultController::search", [
                'search' => $category
            ]);
        }
        if (key_exists($section, $this->category) and key_exists($category, $this->category[$section])) {
            $url = $this->category[$section][$category];
            return $this->redirectToRoute('catalog', ['url' => $url], 301);
        }
        throw new NotFoundHttpException();
    }
}
