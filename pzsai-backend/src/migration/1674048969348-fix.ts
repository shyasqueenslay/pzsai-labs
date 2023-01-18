import {MigrationInterface, QueryRunner} from "typeorm";

export class fix1674048969348 implements MigrationInterface {
    name = 'fix1674048969348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "imgUrl"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "imgUrl" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "imgUrl"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "imgUrl" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" integer NOT NULL`);
    }

}
