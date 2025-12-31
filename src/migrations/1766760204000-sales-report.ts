import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class SalesReport1766760204000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'sales_report',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'userId',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'customerId',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'periodStart',
            type: 'timestamp',
          },
          {
            name: 'periodEnd',
            type: 'timestamp',
          },
          {
            name: 'reportDate',
            type: 'timestamp',
          },
          {
            name: 'totalSales',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'totalSoldOrPending',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'salesDetails',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'paymentMethods',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'observations',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'month',
            type: 'integer',
          },
          {
            name: 'year',
            type: 'integer',
          },
          {
            name: 'biweekly',
            type: 'integer',
          },
        ],
      }),
      true,
    );

    // Crear índices para mejorar el rendimiento de las consultas
    await queryRunner.createIndex(
      'sales_report',
      new TableIndex({
        name: 'IDX_sales_report_user_period',
        columnNames: ['userId', 'periodStart', 'periodEnd'],
      }),
    );

    await queryRunner.createIndex(
      'sales_report',
      new TableIndex({
        name: 'IDX_sales_report_customer_period',
        columnNames: ['customerId', 'periodStart', 'periodEnd'],
      }),
    );

    await queryRunner.createIndex(
      'sales_report',
      new TableIndex({
        name: 'IDX_sales_report_year_month',
        columnNames: ['year', 'month'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('sales_report');
  }
}

