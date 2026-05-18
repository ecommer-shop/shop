import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { Feature } from './feature.entity';

@Entity('wompi_subscription_plan_feature')
export class PlanFeature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'plan_id' })
    planId: number;

    @Column({ name: 'feature_id' })
    featureId: number;

    @Column({ type: 'varchar', length: 255 })
    value: string;

    @ManyToOne(() => Plan, (plan) => plan.planFeatures)
    @JoinColumn({ name: 'plan_id' })
    plan: Plan;

    @ManyToOne(() => Feature, (feature) => feature.planFeatures)
    @JoinColumn({ name: 'feature_id' })
    feature: Feature;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}