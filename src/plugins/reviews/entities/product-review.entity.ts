import {
    Customer,
    DeepPartial,
    HasCustomFields,
    Product,
    ProductVariant,
    VendureEntity,
} from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ReviewState } from '../types';

export class CustomReviewFields {}

@Entity()
export class ProductReview extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<ProductReview>) {
        super(input);
    }

    @ManyToOne(type => Product, { onDelete: 'CASCADE' })
    product: Product;

    @ManyToOne(type => ProductVariant, { nullable: true })
    productVariant: ProductVariant | null;

    @Column()
    summary: string;

    @Column('text')
    body: string;

    @Column('decimal', { precision: 2, scale: 1 })
    rating: number;

    @Column({ default: false })
    verifiedPurchase: boolean;

    @ManyToOne(type => Customer, { nullable: true, onDelete: 'SET NULL' })
    author: Customer | null;

    @Column()
    authorName: string;

    @Column({ nullable: true })
    authorLocation: string;

    @Column({ default: 0 })
    upvotes: number;

    @Column({ default: 0 })
    downvotes: number;

    @Column('varchar')
    state: ReviewState;

    @Column('text', { nullable: true, default: null })
    response: string;

    @Column({ nullable: true, default: null })
    responseCreatedAt: Date;

    @Column(type => CustomReviewFields)
    customFields: CustomReviewFields;
}
