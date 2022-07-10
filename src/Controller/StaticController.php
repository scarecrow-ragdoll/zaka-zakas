<?php

namespace App\Controller;

use App\Entity\About;
use App\Entity\Agreement;
use App\Entity\Guaranty;
use App\Entity\Howbuy;
use App\Entity\Resp;
use App\Entity\RespData;
use App\Entity\StaticPage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

class StaticController extends AbstractController
{

    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/{static}", name="static-page")
     * @ParamConverter("staticPage", options={"mapping": {"static": "url"}})
     */
    public function static(StaticPage $staticPage): Response
    {
        return $this->render('static.html.twig', [
            'staticPage' => $staticPage,
        ]);
    }

}
