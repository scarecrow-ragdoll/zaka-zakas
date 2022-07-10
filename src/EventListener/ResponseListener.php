<?php


namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpFoundation\Cookie;

class ResponseListener
{
    public function onKernelResponse(ResponseEvent $event)
    {
        $request = $event->getRequest();
        if($partner = $request->query->get('partner', null)) {
            $response = $event->getResponse();
            $response->headers->setCookie(Cookie::create('partner', $partner));
        }
    }
}