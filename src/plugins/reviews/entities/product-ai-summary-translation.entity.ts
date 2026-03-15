import { DeepPartial } from '@vendure/common/lib/shared-types';
import { LanguageCode, Translation, VendureEntity } from '@vendure/core';
import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { ProductAISummary } from './product-ai-summary.entity';

@Entity()
export class ProductAISummaryTranslation extends VendureEntity implements Translation<ProductAISummary> {
    constructor(input?: DeepPartial<ProductAISummaryTranslation>) {
        super(input);
    }

    @Column('varchar')
    languageCode: LanguageCode;

    @Column('text')
    title: string;

    @Column('text')
    summary: string;

    @Index()
    @ManyToOne(() => ProductAISummary, base => base.translations, { onDelete: 'CASCADE' })
    base: ProductAISummary;
}
