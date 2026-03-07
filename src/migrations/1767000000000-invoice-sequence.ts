import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class InvoiceSequence1767000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invoice_sequence',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'prefix',
            type: 'varchar',
            length: '32',
          },
          {
            name: 'last_number',
            type: 'integer',
            default: 0,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'invoice_sequence',
      new TableIndex({
        name: 'UQ_invoice_sequence_prefix',
        columnNames: ['prefix'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('invoice_sequence');
  }
}
