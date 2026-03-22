import { LanguageCode } from '@vendure/common/lib/generated-types';
import { DeepPartial } from '@vendure/common/lib/shared-types';
import { HasCustomFields, Translation, VendureEntity } from '@vendure/core';
import { Column, Entity, Index, ManyToOne } from 'typeorm';

import { GoogleSheet } from './google-sheet.entity';

export class GoogleSheetCustomFieldsTranslation {}

@Entity()
export class GoogleSheetTranslation
    extends VendureEntity
    implements Translation<GoogleSheet>, HasCustomFields
{
    constructor(input?: DeepPartial<Translation<GoogleSheetTranslation>>) {
        super(input);
    }

    @Column('varchar') languageCode: LanguageCode;

    @Column() localizedName: string;

    @Index()
    @ManyToOne(type => GoogleSheet, base => base.translations, { onDelete: 'CASCADE' })
    base: GoogleSheet;

    @Column(type => GoogleSheetCustomFieldsTranslation)
    customFields: GoogleSheetCustomFieldsTranslation;
}
