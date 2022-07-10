<?php

namespace App\Controller\Admin;

use App\Entity\Section;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class SectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Section::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Все %entity_label_plural%')
            ->setPageTitle('edit', fn (Section $section) => sprintf('Редактирование <b>%s</b>', $section->getName()))
            ->setEntityLabelInSingular('Раздел')
            ->setEntityLabelInPlural('Разделы')
            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'Название раздела')->setHelp('Например Steam'),
            TextField::new('url', 'URL'),
            TextField::new('title', 'Тайтл раздела')->setHelp('Например steam вашсайт.ру'),
            TextField::new('h1', 'H1'),
            TextareaField::new('description')->onlyOnForms(),
            TextareaField::new('keywords')->onlyOnForms(),
            TextareaField::new('moreinfo')->onlyOnForms(),
        ];
    }
}
