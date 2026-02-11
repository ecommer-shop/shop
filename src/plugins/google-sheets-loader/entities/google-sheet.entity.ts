import {
    DeepPartial,
    HasCustomFields,
    LocaleString,
    Translatable,
    Translation,
    VendureEntity,
} from '@vendure/core';
import { Column, Entity, OneToMany } from 'typeorm';

import { GoogleSheetTranslation } from './google-sheet-translation.entity';

export class GoogleSheetCustomFields {}

@Entity()
export class GoogleSheet extends VendureEntity implements Translatable, HasCustomFields {
    constructor(input?: DeepPartial<GoogleSheet>) {
        super(input);
    }

    @Column()
    code: string;

    @Column(type => GoogleSheetCustomFields)
    customFields: GoogleSheetCustomFields;

    localizedName: LocaleString;

    @OneToMany(type => GoogleSheetTranslation, translation => translation.base, { eager: true })
    translations: Array<Translation<GoogleSheet>>;
}
