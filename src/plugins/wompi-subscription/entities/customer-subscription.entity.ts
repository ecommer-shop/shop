import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { Administrator } from '@vendure/core';

export enum SubscriptionStatus {
    ACTIVE = 'ACTIVE',
    PENDING_PAYMENT = 'PENDING_PAYMENT',
    GRACE_PERIOD = 'GRACE_PERIOD',
    SUSPENDED = 'SUSPENDED',
    CANCELLED = 'CANCELLED',
}

@Entity('customer_subscription')
export class CustomerSubscription {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'administrator_id', type: 'int', unique: true })
    administratorId: number;

    @Column({ name: 'plan_id', type: 'int' })
    planId: number;

    @Column({ type: 'enum', enum: SubscriptionStatus, default: SubscriptionStatus.ACTIVE })
    status: SubscriptionStatus;

    @Column({ type: 'timestamp', nullable: true })
    startsAt: Date;

    @Column({ type: 'timestamp', nullable: true })
    endsAt: Date | null;

    @Column({ type: 'timestamp', nullable: true })
    gracePeriodStart: Date | null;

    @Column({ type: 'boolean', default: true })
    autoRenew: boolean;

    @Column({ name: 'billing_payment_source_id', type: 'varchar', nullable: true })
    billingPaymentSourceId: string | null;

    @Column({ name: 'billing_customer_email', type: 'varchar', nullable: true })
    billingCustomerEmail: string;

    @Column({ name: 'billing_customer_id', type: 'varchar', nullable: true })
    billingCustomerId: string;

    @Column({ name: 'payment_method_type', type: 'varchar', nullable: true })
    paymentMethodType: string;

    @Column({ name: 'payment_flow_type', type: 'varchar', nullable: true })
    paymentFlowType: string;

    @Column({ name: 'pending_payment_reference', type: 'varchar', nullable: true })
    pendingPaymentReference: string | null;

    @Column({ name: 'last_payment_at', type: 'timestamp', nullable: true })
    lastPaymentAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Plan, (plan) => plan.subscriptions)
    @JoinColumn({ name: 'plan_id' })
    plan: Plan;

    @ManyToOne(() => Administrator)
    @JoinColumn({ name: 'administrator_id' })
    administrator: Administrator;
}
