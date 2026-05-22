import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CustomerSubscription } from './customer-subscription.entity';
import { PlanFeature } from './plan-feature.entity';

export enum BillingInterval {
    MONTHLY = 'monthly',
    YEARLY = 'yearly',
}

@Entity('subscription_plan')
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number;

    @Column({ type: 'enum', enum: BillingInterval, default: BillingInterval.MONTHLY })
    billingInterval: BillingInterval;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => PlanFeature, (planFeature) => planFeature.plan)
    planFeatures: PlanFeature[];

    @OneToMany(() => CustomerSubscription, (subscription) => subscription.plan)
    subscriptions: CustomerSubscription[];
}