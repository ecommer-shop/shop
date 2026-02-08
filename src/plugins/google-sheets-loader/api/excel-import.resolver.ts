import { Resolver, Mutation, Args, ObjectType, Field, InputType } from '@nestjs/graphql';
import { Allow, Ctx, Permission, RequestContext } from '@vendure/core';
import { ExcelImportService, ImportProduct } from '../services/excel-import.service';

@InputType()
export class ImportProductInputType {
    @Field()
    sku: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;
}

@ObjectType()
export class ImportProductsResultType {
    @Field()
    success: boolean;

    @Field()
    message: string;
}

@Resolver()
export class ExcelImportResolver {

    constructor(
        private excelImportService: ExcelImportService,
    ) { }

    @Mutation(() => ImportProductsResultType)
    async importProductsFromExcel(
        @Ctx() ctx: RequestContext,
        @Args('products', { type: () => [ImportProductInputType] }) products: ImportProduct[],
    ) {
        const result = await this.excelImportService.importProducts(ctx, products);
        return result;
    }
}
