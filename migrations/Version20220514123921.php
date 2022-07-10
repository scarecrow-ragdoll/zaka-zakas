<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220514123921 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE digiseller CHANGE id id INT UNSIGNED NOT NULL, CHANGE wmr wmr DOUBLE PRECISION NOT NULL, CHANGE wmz wmz DOUBLE PRECISION NOT NULL, CHANGE wme wme DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE digiseller CHANGE id id INT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE wmr wmr VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_0900_ai_ci`, CHANGE wmz wmz VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_0900_ai_ci`, CHANGE wme wme VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_0900_ai_ci`');

    }
}
