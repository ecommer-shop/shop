import {
    DeepPartial,
    HasCustomFields,
    VendureEntity
} from '@vendure/core';
import { Column, Entity } from 'typeorm';


export class PaymentSCustomFields {}

@Entity()
export class PaymentS extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<PaymentS>) {
        super(input);
    }

    @Column()
    code: string;

    @Column(type => PaymentSCustomFields)
    customFields: PaymentSCustomFields;
}
