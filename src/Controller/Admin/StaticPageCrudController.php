<?php

namespace App\Controller\Admin;

use App\Entity\About;
use App\Entity\StaticPage;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;

class StaticPageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return StaticPage::class;
    }

    public function configureAssets(Assets $assets): Assets
    {
        return $assets->addHtmlContentToBody("<script src=\"https://cdn.tiny.cloud/1/198rvzgqdqilhwxfv9w282jwbx5po3rnlt0bqlmihytnnua3/tinymce/5/tinymce.min.js\"
        referrerpolicy=\"origin\"></script>
<script>
    tinymce.init({
        selector: '#StaticPage_message',
        extended_valid_elements: 'span',
        plugins: [
            //'image',
            'link',
            'code',
            //'charmap',
        ],
        entity_encoding: \"raw\",
        content_css: \"/css/main.css\",
        link_context_toolbar: true,
        //automatic_uploads: true,
        //images_upload_url: '/upload_image',
    });
</script>");
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Статические страницы')
            ->setPageTitle('edit', 'Редактирование')
            ->setEntityLabelInSingular('Статические страницы')
            ->setEntityLabelInPlural('Статические страницы')
            ;
    }


    public function configureFields(string $pageName): iterable
    {
        yield Field::new('title', 'Название модуля');
        yield Field::new('description', 'Описание модуля');
        yield Field::new('keywords', 'Ключевые слова');
        yield TextareaField::new('message', 'Полный текст')->onlyOnForms();
    }
}
