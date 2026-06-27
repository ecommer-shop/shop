import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixOrphanShippingLines1781830000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM "shipping_line"
             WHERE "shippingMethodId" IS NULL
                OR NOT EXISTS (SELECT 1 FROM "shipping_method" WHERE "id" = "shipping_line"."shippingMethodId")`,
        );
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ALTER COLUMN "shippingMethodId" SET NOT NULL`,
        );
        await queryRunner.query(
            `INSERT INTO "shipping_method_channels_channel" ("shippingMethodId", "channelId")
             SELECT DISTINCT sl."shippingMethodId", occ."channelId"
             FROM "shipping_line" sl
             JOIN "order" o ON o.id = sl."orderId"
             JOIN "order_channels_channel" occ ON o.id = occ."orderId"
             LEFT JOIN "shipping_method_channels_channel" smcc
               ON sl."shippingMethodId" = smcc."shippingMethodId"
               AND occ."channelId" = smcc."channelId"
             WHERE smcc."shippingMethodId" IS NULL
             ON CONFLICT DO NOTHING`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "shipping_line" ALTER COLUMN "shippingMethodId" DROP NOT NULL`,
        );
    }
}
