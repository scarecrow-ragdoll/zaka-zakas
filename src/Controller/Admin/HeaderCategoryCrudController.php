<?php

namespace App\Controller\Admin;

use App\Entity\About;
use App\Entity\Header;
use App\Entity\HeaderCategory;
use App\Service\DigisellerApiService;
use Doctrine\ORM\EntityManagerInterface;
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

class HeaderCategoryCrudController extends AbstractCrudController
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
        return HeaderCategory::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Категории в шапке сайта');
    }


    public function configureFields(string $pageName): iterable
    {
        $entity = $this->adminContextProvider->getContext()->getEntity()->getInstance();
        yield Field::new('name', 'Название');
        yield Field::new('url', 'Ссылка');
        if ($pageName == Crud::PAGE_EDIT) {
            file_put_contents('icon.txt', $entity->getIcon());
            yield ImageField::new('icon', 'Картинка')->setFormattedValue(111)
                ->setUploadDir('/public/uploads')
                ->setUploadedFileNamePattern('/uploads/[randomhash].[extension]')
                ->setHelp($entity->getIcon() ? '<img style="max-width:450px; back" src="' . $entity->getIcon() . '">' : '');
        }
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance->getIcon()) {
            $entityInstance->setIcon(file_get_contents('icon.txt'));
        }
        parent::updateEntity($entityManager, $entityInstance);
    }


}
