import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1674113387133 implements MigrationInterface {
    name = 'initialMigration1674113387133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`academics_class\` DROP FOREIGN KEY \`FK_41d8f7406a74c3dfb87538e01c9\``);
        await queryRunner.query(`ALTER TABLE \`academics_class\` CHANGE \`class_in_charge_id\` \`class_in_charge_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`academics_class\` ADD CONSTRAINT \`FK_41d8f7406a74c3dfb87538e01c9\` FOREIGN KEY (\`class_in_charge_id\`) REFERENCES \`academics_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`academics_class\` DROP FOREIGN KEY \`FK_41d8f7406a74c3dfb87538e01c9\``);
        await queryRunner.query(`ALTER TABLE \`academics_class\` CHANGE \`class_in_charge_id\` \`class_in_charge_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`academics_class\` ADD CONSTRAINT \`FK_41d8f7406a74c3dfb87538e01c9\` FOREIGN KEY (\`class_in_charge_id\`) REFERENCES \`academics_user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
