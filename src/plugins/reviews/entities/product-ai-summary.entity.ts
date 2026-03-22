import {
    DeepPartial,
    ID,
    Product,
    Translatable,
    Translation,
    VendureEntity,
} from '@vendure/core';
import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';

import { ProductAISummaryTranslation } from './product-ai-summary-translation.entity';

@Entity()
export class ProductAISummary extends VendureEntity implements Translatable {
    constructor(input?: DeepPartial<ProductAISummary>) {
        super(input);
    }

    @Column()
    productId: ID;

    @Index()
    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    product: Product;

    @Column('int')
    basedOnReviewsCount: number;

    @Column('decimal', { precision: 2, scale: 1 })
    averageRatingWhenGenerated: number;

    @Column({ type: 'varchar', nullable: true })
    lastReviewIdIncluded: ID | null;

    @Column()
    generatedAt: Date;

    @OneToMany(() => ProductAISummaryTranslation, translation => translation.base, { eager: true })
    translations: Array<Translation<ProductAISummary>>;
}
