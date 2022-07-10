<?php

namespace App\Controller\Admin;

use App\Entity\About;
use App\Entity\Header;
use App\Service\DigisellerApiService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\DomCrawler\Field\FileFormField;
use Symfony\Component\Form\FormInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;

class HeaderCrudController extends AbstractCrudController
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

    public function configureAssets(Assets $assets): Assets
    {
        return $assets->addHtmlContentToBody("
<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"
  integrity=\"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=\"
  crossorigin=\"anonymous\"></script>
<script>
    $('.action-delete').each(function( index ) {
        $( this ).attr('formaction', $( this ).attr('formaction').replace('http:', 'https:'))
    })
</script>");
    }

    public static function getEntityFqcn(): string
    {
        return Header::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Шапка сайта')
            ->setPageTitle('edit', 'Редактирование шапки сайта')
            ->setEntityLabelInSingular('Шапка сайта')
            ->setEntityLabelInPlural('Шапка сайта');
    }


    public function configureFields(string $pageName): iterable
    {
        $entity = $this->adminContextProvider->getContext()->getEntity()->getInstance();
        yield Field::new('name', 'Название');
        yield Field::new('url', 'Ссылка')->setHelp('Например /catalog/steam');
        if ($pageName == Crud::PAGE_EDIT) {
            file_put_contents('image.txt', $entity->getImage());
            yield ImageField::new('image', 'Картинка')
                ->setUploadDir('/public/uploads')
                ->setUploadedFileNamePattern('/uploads/[randomhash].[extension]')
                ->setHelp($entity->getImage() ? '<img style="max-width:450px; back" src="' . $entity->getImage() . '">' : '');
        }
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance->getImage()){
            $entityInstance->setImage(file_get_contents('image.txt'));
        }
        parent::updateEntity($entityManager, $entityInstance);
    }


}
