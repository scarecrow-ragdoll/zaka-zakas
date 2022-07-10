<?php

namespace App\Controller\Admin;

use App\Entity\About;
use App\Entity\IndexCategory;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

class IndexCategoryCrudController extends AbstractCrudController
{

    private $adminContextProvider;

    public function __construct(
        AdminContextProvider $adminContextProvider
    )
    {
        $this->adminContextProvider = $adminContextProvider;
    }

    public static function getEntityFqcn(): string
    {
        return IndexCategory::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Категории на главной');
    }


    public function configureFields(string $pageName): iterable
    {
        $entity = $this->adminContextProvider->getContext()->getEntity()->getInstance();
        yield Field::new('name', 'Название');
        yield Field::new('url', 'Ссылка')->setHelp('Например /catalog/steam');
        yield Field::new('position', 'Порядок')->setHelp('Чем меньше число, тем выше приоритет');
        yield ChoiceField::new('type', 'Тип')->setChoices(IndexCategory::getAllTypies());
        if ($pageName == Crud::PAGE_EDIT) {
            file_put_contents('icon.txt', $entity->getImage());
            yield ImageField::new('image', 'Картинка')->setFormattedValue(111)
                ->setUploadDir('/public/uploads')
                ->setUploadedFileNamePattern('/uploads/[randomhash].[extension]')
                ->setHelp($entity->getImage() ? '<img style="max-width:100px; back" src="' . $entity->getImage() . '">' : '');
        }
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if (!$entityInstance->getImage()) {
            $entityInstance->setImage(file_get_contents('icon.txt'));
        }
        parent::updateEntity($entityManager, $entityInstance);
    }


}
