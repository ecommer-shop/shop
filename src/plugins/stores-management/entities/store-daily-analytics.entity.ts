import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('store_daily_analytics')
@Index(['channelId', 'date'], { unique: true })
export class StoreDailyAnalytics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    channelId: number;

    @Column('date')
    date: Date;

    @Column('int')
    totalOrders: number;

    @Column('int')
    totalRevenue: number;

    @Column('int')
    totalUnits: number;

    @Column('float')
    avgOrderValue: number;

    @Column('int')
    newCustomers: number;

    @Column('int')
    productsSold: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
