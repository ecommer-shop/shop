import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Plan } from './plan.entity';
import { Customer } from '@vendure/core';

export enum SubscriptionStatus {
    ACTIVE = 'ACTIVE',
    GRACE_PERIOD = 'GRACE_PERIOD',
    SUSPENDED = 'SUSPENDED',
    CANCELLED = 'CANCELLED',
}

@Entity('wompi_customer_subscription')
export class CustomerSubscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'customer_id', unique: true })
    customerId: number;

    @Column({ name: 'plan_id' })
    planId: number;

    @Column({ type: 'enum', enum: SubscriptionStatus, default: SubscriptionStatus.ACTIVE })
    status: SubscriptionStatus;

    @Column({ type: 'timestamp', nullable: true })
    startsAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    endsAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    gracePeriodStart: Date;

    @Column({ default: true })
    autoRenew: boolean;

    @Column({ name: 'wompi_payment_source_id', nullable: true })
    wompiPaymentSourceId: string;

    @Column({ name: 'wompi_customer_email', nullable: true })
    wompiCustomerEmail: string;

    @Column({ name: 'wompi_customer_id', nullable: true })
    wompiCustomerId: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Plan, (plan) => plan.subscriptions)
    @JoinColumn({ name: 'plan_id' })
    plan: Plan;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;
}