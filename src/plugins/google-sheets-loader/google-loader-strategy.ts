import { RequestContext, Injector } from '@vendure/core';
import {
    GoogleSheetDataStrategy,
    SheetContent,
} from '@pinelab/vendure-plugin-google-sheet-loader';

export class GoogleDataLoadingStrategy implements GoogleSheetDataStrategy {
    code = 'MyDataLoadingStrategy';

    getSheetMetadata() {
        return {
            sheets: ['My tab'],
            spreadSheetId: '1jbihCHLfoHr7uRDafA6kmhuEm9xTy8O78SaOsRRSzko',
        };
    }

    validateSheetData(
        ctx: RequestContext,
        sheets: SheetContent[]
    ): boolean | string {
        // Single sheet example
        const sheet = sheets[0];
        const headerRow = sheet.data[0];
        if (headerRow[0] !== 'My Header Column') {
            return 'Expected "My Header Column" for column 1';
        }
        return true;
    }

    async handleSheetData(
        ctx: RequestContext,
        injector: Injector,
        sheets: SheetContent[]
    ): Promise<string> {

        const a = sheets.forEach((e) => e.data)
        // Do whatever you want with the data here
        // This part is executed in the worker
        return `Successfully processed ${sheets[0].data.length} rows`;
    }
}