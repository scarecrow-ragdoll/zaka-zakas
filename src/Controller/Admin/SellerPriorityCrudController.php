<?php

namespace App\Controller\Admin;

use App\Entity\Config;
use App\Entity\SellerPriority;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SellerPriorityCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SellerPriority::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Все %entity_label_plural%')
            ->setPageTitle('edit', 'Редактирование')
            ->setEntityLabelInSingular('Продавец')
            ->setEntityLabelInPlural('Продавцы')
            ;
    }


    public function configureFields(string $pageName): iterable
    {
            yield TextField::new('seller', 'Продавец');
            yield Field::new('priority', 'Приоритет(Чем больше значение, тем выше приоритет)');
            yield Field::new('percent', 'Процент');
    }

}
