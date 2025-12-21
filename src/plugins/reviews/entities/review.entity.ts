import {
    DeepPartial,
    HasCustomFields,
    VendureEntity,
    Customer,
    Product
} from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';


export class ReviewCustomFields {}

@Entity()
export class Review extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<Review>) {
        super(input);
    }

    @Column()
    code: string;

    @Column(type => ReviewCustomFields)
    customFields: ReviewCustomFields;

    @Column()
    rating: number;

    @Column({ type: 'text' })
    comment: string;

    @Column({ default: false })
    approved: boolean;

    @ManyToOne(() => Customer, { nullable: false })
    customer: Customer;

    @ManyToOne(() => Product, { nullable: false })
    product: Product;
}
