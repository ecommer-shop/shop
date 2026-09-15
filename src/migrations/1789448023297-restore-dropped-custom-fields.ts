import {MigrationInterface, QueryRunner} from "typeorm";

/**
 * Recrea columnas de custom fields que TypeORM `synchronize` eliminó en la BD compartida
 * mientras corría el código posterior al revert 583d2d1 / downmerge #171.
 *
 * `IF NOT EXISTS` porque en BDs donde nunca se perdieron (p. ej. producción) ya existen.
 * `down` no hace nada: las columnas pertenecen a sus migraciones originales, y
 * eliminarlas aquí borraría datos reales en esas BDs.
 */
export class RestoreDroppedCustomFields1789448023297 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviapickupnumber" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviapickupdate" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviapickuptimefrom" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviapickuptimeto" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviapickupfee" double precision`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnvialabelurl" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "fulfillment" ADD COLUMN IF NOT EXISTS "customFieldsEnviatrackurl" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "order" ADD COLUMN IF NOT EXISTS "customFieldsInvoicelastfailedat" TIMESTAMP(6)`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsStorepickuppostalcode" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsPickuptimefrom" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "administrator" ADD COLUMN IF NOT EXISTS "customFieldsPickuptimeto" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutlegalidtype" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutlegalid" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutaccounttype" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutaccountnumber" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutbankcode" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutbrebkey" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutbrebkeytype" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD COLUMN IF NOT EXISTS "customFieldsPayoutbrebverified" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "channel" ADD COLUMN IF NOT EXISTS "customFieldsOwndeliveryenabled" boolean DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "customer_subscription" ADD COLUMN IF NOT EXISTS "last_transaction_id" character varying`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        // Intencionalmente vacío: ver comentario de la clase.
   }

}
