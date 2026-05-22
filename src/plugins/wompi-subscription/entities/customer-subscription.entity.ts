import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Plan } from './plan.entity';
import { Customer } from '@vendure/core';

export enum SubscriptionStatus {
    ACTIVE = 'ACTIVE',
    GRACE_PERIOD = 'GRACE_PERIOD',
    SUSPENDED = 'SUSPENDED',
    CANCELLED = 'CANCELLED',
}

@Entity('customer_subscription')
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
    gracePeriodStart: Date | null;

    @Column({ default: true })
    autoRenew: boolean;

    @Column({ name: 'billing_payment_source_id', nullable: true })
    billingPaymentSourceId: string;

    @Column({ name: 'billing_customer_email', nullable: true })
    billingCustomerEmail: string;

    @Column({ name: 'billing_customer_id', nullable: true })
    billingCustomerId: string;

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