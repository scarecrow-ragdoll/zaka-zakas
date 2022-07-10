<?php

namespace App\Controller\Admin;

use App\Entity\Digiseller;
use App\Service\DigisellerApiService;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

class DigisellerCrudController extends AbstractCrudController
{

    private $adminUrlGenerator;
    private $digisellerApiService;
    private $adminContextProvider;

    public function __construct(
        AdminUrlGenerator $adminUrlGenerator,
        DigisellerApiService $digisellerApiService,
        AdminContextProvider $adminContextProvider
    )
    {
        $this->adminUrlGenerator = $adminUrlGenerator;
        $this->digisellerApiService = $digisellerApiService;
        $this->adminContextProvider = $adminContextProvider;
    }

    public static function getEntityFqcn(): string
    {
        return Digiseller::class;
    }

    public function configureAssets(Assets $assets): Assets
    {
        return $assets->addHtmlContentToBody("<script src=\"https://cdn.tiny.cloud/1/198rvzgqdqilhwxfv9w282jwbx5po3rnlt0bqlmihytnnua3/tinymce/5/tinymce.min.js\"
        referrerpolicy=\"origin\"></script>
<script>
    tinymce.init({
        selector: '#Digiseller_message',
        extended_valid_elements: 'span',
        plugins: [
            'link',
        ],
        entity_encoding: \"raw\",
        content_css: \"/css/static.css\",
        link_context_toolbar: true,
    });
    tinymce.init({
        selector: '#Digiseller_moreinfo',
        extended_valid_elements: 'span',
        plugins: [
            'link',
        ],
        entity_encoding: \"raw\",
        content_css: \" / css /static.css\",
        link_context_toolbar: true,
    });
    tinymce.init({
        selector: '#Digiseller_sysinfo',
        extended_valid_elements: 'span',
        plugins: [
            'link',
        ],
        entity_encoding: \"raw\",
        content_css: \" / css /static.css\",
        link_context_toolbar: true,
    });
</script>");
    }

    public function configureActions(Actions $actions): Actions
    {
        $update = Action::new('update', 'Обновить', 'fas fa-arrow-alt-circle-up')
            ->linkToCrudAction('update')
            ->addCssClass('btn');
        return $actions
            ->add(Crud::PAGE_EDIT, $update);
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Все %entity_label_plural%')
            ->setPageTitle('edit', fn(Digiseller $digiseller) => sprintf('Редактирование <b>%s</b>', $digiseller->getTitle()))
            ->setSearchFields(['title', 'title1', 'actives.sec', 'actives.cat'])
            ->setPaginatorPageSize(30)
            ->setPaginatorRangeSize(5)
            ->setEntityLabelInSingular('Товар')
            ->setEntityLabelInPlural('Товары');
    }


    public function configureFields(string $pageName): iterable
    {
//        yield Field::new('id');
        yield Field::new('title', 'Название');
        yield Field::new('title1', 'Название товара в материале')->onlyOnForms();
        yield Field::new('gameId', '№ товара');
        yield Field::new('gameId2', '№ товара 2')->onlyOnForms();
        yield Field::new('seller', '№ продавца');
        if ($pageName == Crud::PAGE_EDIT) {
            $entity = $this->adminContextProvider->getContext()->getEntity()->getInstance();
            yield ImageField::new('imageSmall', 'Превью картинка')
                ->setBasePath('/')
                ->setUploadDir('/public/uploads/users')
                ->setFormType(FileUploadType::class)
                ->setUploadedFileNamePattern('/uploads/users/[randomhash].[extension]')
                ->setRequired(false)->setHelp($entity->getImageSmall() ? '<img style="max-width:250px; back" src="'. $entity->getImageSmall() .'">' : '');

            yield ImageField::new('imageReal', 'Оригинальная картинка')
                ->setBasePath('/')
                ->setUploadDir('/public/uploads/users')
                ->setFormType(FileUploadType::class)
                ->setUploadedFileNamePattern('/uploads/users/[randomhash].[extension]')
                ->setRequired(false)->setHelp($entity->getImageReal() ? '<img style="max-width:450px; back" src="'. $entity->getImageReal() .'">' : '');

            yield Field::new('gameIdz1', 'Id товара замены 1');
            yield Field::new('gameIdz2', 'Id товара замены 2');
            yield Field::new('gameIdz3', 'Id товара замены 3');
            yield Field::new('gameIdz4', 'Id товара замены 4');
            yield TextareaField::new('description', 'Описание модуля')->setRequired(false);
            yield TextareaField::new('keywords', 'Ключевые слова')->setRequired(false);
            yield TextareaField::new('message', 'Полное описание товара')->setRequired(false);
            yield TextareaField::new('moreinfo', 'Дополнительная информация')->setRequired(false);
            yield TextareaField::new('sysinfo', 'Системная информация')->setRequired(false);
        }
    }


    public function update(AdminContext $context)
    {
        $object = $context->getEntity()->getInstance();

        $this->digisellerApiService->updateProduct($object);

        $url = $this->adminUrlGenerator
            ->setController(DigisellerCrudController::class)
            ->setAction(Action::EDIT)
            ->setEntityId($object->getId())
            ->generateUrl();
        return $this->redirect($url);
    }
}
