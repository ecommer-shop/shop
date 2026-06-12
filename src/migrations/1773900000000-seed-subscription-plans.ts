import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedSubscriptionPlans1773900000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Update Free plan features: max_variations from '10' to '250'
        await queryRunner.query(`
            UPDATE "subscription_plan_feature"
            SET "value" = '250'
            WHERE "plan_id" = (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Free')
            AND "feature_id" = (SELECT "id" FROM "subscription_feature" WHERE "code" = 'max_variations')
        `);

        // Rename 'Pro' plan to 'Tienda' and update price/description
        await queryRunner.query(`
            UPDATE "subscription_plan"
            SET "name" = 'Tienda', "price" = 29900, "description" = 'Plan para tiendas con hasta 500 productos'
            WHERE "name" = 'Pro'
        `);

        // Update Tienda plan features
        const featureUpdates = [
            { code: 'max_products', value: '500' },
            { code: 'max_variations', value: '5000' },
            { code: 'ai_access', value: 'true' },
            { code: 'electronic_billing', value: 'true' },
        ];
        for (const f of featureUpdates) {
            await queryRunner.query(`
                UPDATE "subscription_plan_feature"
                SET "value" = '${f.value}'
                WHERE "plan_id" = (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Tienda')
                AND "feature_id" = (SELECT "id" FROM "subscription_feature" WHERE "code" = '${f.code}')
            `);
        }

        // Create Omnichannel plan if not exists
        const existingOmnichannel = await queryRunner.query(`SELECT "id" FROM "subscription_plan" WHERE "name" = 'Omnichannel'`);
        if (existingOmnichannel.length === 0) {
            await queryRunner.query(`
                INSERT INTO "subscription_plan" ("name", "price", "billingInterval", "isActive", "description", "createdAt", "updatedAt")
                VALUES ('Omnichannel', 99900, 'monthly', true, 'Plan multicanal con hasta 1.500 productos', NOW(), NOW())
            `);

            const featureCodes = ['max_products', 'max_variations', 'ai_access', 'electronic_billing'];
            const featureValues: Record<string, string> = {
                max_products: '1500',
                max_variations: '15000',
                ai_access: 'true',
                electronic_billing: 'true',
            };

            for (const code of featureCodes) {
                await queryRunner.query(`
                    INSERT INTO "subscription_plan_feature" ("plan_id", "feature_id", "value", "createdAt", "updatedAt")
                    VALUES (
                        (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Omnichannel'),
                        (SELECT "id" FROM "subscription_feature" WHERE "code" = '${code}'),
                        '${featureValues[code]}',
                        NOW(),
                        NOW()
                    )
                `);
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove Omnichannel plan
        await queryRunner.query(`DELETE FROM "subscription_plan_feature" WHERE "plan_id" = (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Omnichannel')`);
        await queryRunner.query(`DELETE FROM "subscription_plan" WHERE "name" = 'Omnichannel'`);

        // Revert Tienda back to Pro
        await queryRunner.query(`
            UPDATE "subscription_plan"
            SET "name" = 'Pro', "price" = 30000, "description" = 'Plan profesional con características mucho más amplias'
            WHERE "name" = 'Tienda'
        `);

        // Restore Tienda plan features to Pro values (999999)
        const featureRestores = [
            { code: 'max_products', value: '999999' },
            { code: 'max_variations', value: '999999' },
            { code: 'ai_access', value: 'true' },
            { code: 'electronic_billing', value: 'true' },
        ];
        for (const f of featureRestores) {
            await queryRunner.query(`
                UPDATE "subscription_plan_feature"
                SET "value" = '${f.value}'
                WHERE "plan_id" = (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Pro')
                AND "feature_id" = (SELECT "id" FROM "subscription_feature" WHERE "code" = '${f.code}')
            `);
        }

        // Revert Free plan features
        await queryRunner.query(`
            UPDATE "subscription_plan_feature"
            SET "value" = '10'
            WHERE "plan_id" = (SELECT "id" FROM "subscription_plan" WHERE "name" = 'Free')
            AND "feature_id" = (SELECT "id" FROM "subscription_feature" WHERE "code" = 'max_variations')
        `);
    }
}
