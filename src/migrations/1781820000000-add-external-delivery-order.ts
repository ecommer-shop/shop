import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddExternalDeliveryOrder1781820000000 implements MigrationInterface {
    name = 'AddExternalDeliveryOrder1781820000000';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "external_delivery_order" (
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "id" SERIAL NOT NULL,
                "orderId" character varying,
                "orderCode" character varying,
                "sellerChannelCode" character varying,
                "sellerName" character varying,
                "provider" character varying NOT NULL DEFAULT 'messenger-domis',
                "providerDocumentId" character varying,
                "status" character varying NOT NULL DEFAULT 'CREATED',
                "statusLabel" character varying,
                "trackingUrl" character varying,
                "statusUpdatedAt" TIMESTAMP,
                "lastPayload" text,
                CONSTRAINT "PK_external_delivery_order_id" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX IF NOT EXISTS "IDX_external_delivery_order_order_code"
            ON "external_delivery_order" ("orderCode")
        `);
        await queryRunner.query(`
            CREATE INDEX IF NOT EXISTS "IDX_external_delivery_order_provider_document"
            ON "external_delivery_order" ("provider", "providerDocumentId")
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX IF NOT EXISTS "UQ_external_delivery_order_provider_document"
            ON "external_delivery_order" ("provider", "providerDocumentId")
            WHERE "providerDocumentId" IS NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP INDEX IF EXISTS "UQ_external_delivery_order_provider_document"');
        await queryRunner.query('DROP INDEX IF EXISTS "IDX_external_delivery_order_provider_document"');
        await queryRunner.query('DROP INDEX IF EXISTS "IDX_external_delivery_order_order_code"');
        await queryRunner.query('DROP TABLE IF EXISTS "external_delivery_order"');
    }
}
