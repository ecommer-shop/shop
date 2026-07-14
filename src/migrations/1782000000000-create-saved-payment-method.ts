import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateSavedPaymentMethod1782000000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'saved_payment_method',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'customer_id', type: 'varchar', isNullable: false },
                    { name: 'type', type: 'varchar', default: "'CARD'" },
                    { name: 'wompi_payment_source_id', type: 'varchar', isUnique: true, isNullable: false },
                    { name: 'last_four', type: 'varchar', length: '4', isNullable: true },
                    { name: 'brand', type: 'varchar', isNullable: true },
                    { name: 'expiry_month', type: 'varchar', length: '2', isNullable: true },
                    { name: 'expiry_year', type: 'varchar', length: '2', isNullable: true },
                    { name: 'card_holder_name', type: 'varchar', isNullable: true },
                    { name: 'is_default', type: 'boolean', default: false },
                    { name: 'channel_token', type: 'varchar', isNullable: false },
                    { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            }),
            true,
        );

        await queryRunner.createIndex(
            'saved_payment_method',
            new TableIndex({ name: 'IDX_saved_payment_method_channel_token', columnNames: ['channel_token'] }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('saved_payment_method', 'IDX_saved_payment_method_channel_token');
        await queryRunner.dropTable('saved_payment_method');
    }
}
