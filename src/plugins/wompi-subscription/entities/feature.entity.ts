import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PlanFeature } from './plan-feature.entity';

export enum FeatureType {
    NUMERIC = 'numeric',
    BOOLEAN = 'boolean',
}

@Entity('wompi_subscription_feature')
export class Feature {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ type: 'enum', enum: FeatureType, default: FeatureType.BOOLEAN })
    type: FeatureType;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => PlanFeature, (planFeature) => planFeature.feature)
    planFeatures: PlanFeature[];
}