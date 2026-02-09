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

    @Field(type => Number)
    price: number;

    @Field()
    stock: number;
}

@ObjectType()
export class ImportProductErrorDetailType {
    @Field()
    sku: string;

    @Field()
    error: string;
}

@ObjectType()
export class ImportProductSkippedDetailType {
    @Field()
    sku: string;

    @Field()
    reason: string;
}

@ObjectType()
export class ImportProductsResultType {
    @Field()
    success: boolean;

    @Field()
    message: string;

    @Field()
    importedCount: number;

    @Field()
    updatedCount: number;

    @Field()
    failedCount: number;

    @Field()
    skippedCount: number;

    @Field(() => [ImportProductErrorDetailType], { nullable: true })
    errors?: ImportProductErrorDetailType[];

    @Field(() => [ImportProductSkippedDetailType], { nullable: true })
    skipped?: ImportProductSkippedDetailType[];
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
        @Args('channelToken') channelToken: string,
    ) {
        const result = await this.excelImportService.importProducts(ctx, channelToken, products);
        return result;
    }
}
