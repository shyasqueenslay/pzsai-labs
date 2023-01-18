import {MigrationInterface, QueryRunner} from "typeorm";

export class productEntity1674045822817 implements MigrationInterface {
    name = 'productEntity1674045822817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, "description" integer NOT NULL, "imgUrl" integer NOT NULL, "code" character varying NOT NULL, "brand" character varying NOT NULL, "inventoryCount" integer NOT NULL, "inStock" boolean NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
