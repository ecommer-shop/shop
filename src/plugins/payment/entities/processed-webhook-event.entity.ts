import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('processed_webhook_event')
export class ProcessedWebhookEvent {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column({ name: 'wompi_transaction_id', type: 'varchar' })
    wompiTransactionId: string;

    @Column({ name: 'event_type', type: 'varchar' })
    eventType: string;

    @Column({ name: 'order_code', type: 'varchar', nullable: true })
    orderCode: string;

    @CreateDateColumn()
    processedAt: Date;
}
