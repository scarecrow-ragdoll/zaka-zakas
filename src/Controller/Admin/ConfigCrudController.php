<?php

namespace App\Controller\Admin;

use App\Entity\Config;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ConfigCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Config::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Все %entity_label_plural%')
            ->setPageTitle('edit', 'Редактирование')
            ->setEntityLabelInSingular('Настройка')
            ->setEntityLabelInPlural('Настройки')
            ;
    }


    public function configureFields(string $pageName): iterable
    {
            yield TextField::new('id', 'Ключ');
            yield TextareaField::new('value', 'Значение');
    }

}
