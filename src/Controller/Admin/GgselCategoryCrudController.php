<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\GgselCategory;
use App\Entity\Section;
use Doctrine\ORM\EntityManagerInterface;
use DoctrineExtensions\Query\Mysql\Field;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Provider\AdminContextProvider;

class GgselCategoryCrudController extends AbstractCrudController
{

    private $entityManager;
    private $adminContextProvider;

    public function __construct(EntityManagerInterface $entityManager, AdminContextProvider $adminContextProvider)
    {
        $this->entityManager = $entityManager;
        $this->adminContextProvider = $adminContextProvider;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Все %entity_label_plural%')
            ->setPageTitle('edit', fn (GgselCategory $category) => sprintf('Редактирование <b>%s</b>', $category->getName()))
            ->setEntityLabelInSingular('Категория')
            ->setEntityLabelInPlural('Категории')
            ;
    }


    public static function getEntityFqcn(): string
    {
        return GgselCategory::class;
    }


    public function configureFields(string $pageName): iterable
    {
        $entity = $this->adminContextProvider->getContext()->getEntity()->getInstance();
        $sellers = $this->entityManager->getRepository(GgselCategory::class)->getSellers($entity);
        return [
            TextField::new('digiCatalog', 'Digi Catalog'),
            TextField::new('name', 'Название'),
            TextField::new('url', 'URL')->setHelp($sellers),
        ];
    }

}
