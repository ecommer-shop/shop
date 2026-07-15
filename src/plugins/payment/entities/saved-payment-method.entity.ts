import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('saved_payment_method')
export class SavedPaymentMethod {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'customer_id', type: 'varchar' })
    customerId: string;

    @Column({ type: 'varchar', default: 'CARD' })
    type: string;

    @Column({ name: 'wompi_payment_source_id', type: 'varchar', unique: true })
    wompiPaymentSourceId: string;

    @Column({ name: 'last_four', type: 'varchar', length: 4 })
    lastFour: string;

    @Column({ type: 'varchar' })
    brand: string;

    @Column({ name: 'expiry_month', type: 'varchar', length: 2 })
    expiryMonth: string;

    @Column({ name: 'expiry_year', type: 'varchar', length: 2 })
    expiryYear: string;

    @Column({ name: 'card_holder_name', type: 'varchar', nullable: true })
    cardHolderName: string;

    @Column({ name: 'is_default', type: 'boolean', default: false })
    isDefault: boolean;

    @Index()
    @Column({ name: 'channel_token', type: 'varchar' })
    channelToken: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
