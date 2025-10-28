import { Args, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { Allow, Ctx, RequestContext } from '@vendure/core';
import { Servientrega } from '../services/servientrega';

@Resolver()
export class ServientregaShopResolver {
    constructor(private readonly servientrega: Servientrega) { }

    @Query()
    @Allow(Permission.Public)
    async getCitiesDepartament(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesDepartament(ctx, args);
    }

    @Query()
    @Allow(Permission.Public)
    async getCitiesOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Public)
    async getCitiesAutocompleteOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string, cityName?: string }): Promise<any> {
        return this.servientrega.getCitiesAutocompleteOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Public)
    async getQuote(
        @Ctx() ctx: RequestContext,
        @Args() args: {
            originCityId: number,
            destinationCityId: number,
            largoCm: number,
            altoCm: number,
            anchoCm: number,
            pesoKg: number,
            valorDeclaradoCOP: number,
            productId: number,
            language: string
        }
    ): Promise<any> {
        console.log(args)
        return this.servientrega.getQuote(ctx, args);
    }

    @Query()
    @Allow(Permission.Public)
    async getRestrictions(@Ctx() ctx: RequestContext): Promise<any> {
        return this.servientrega.getRestrictions(ctx);
    }

    @Query()
    @Allow(Permission.Public)
    async getNetworkRestrictions(@Ctx() ctx: RequestContext, @Args() args: {
        paisOrigen: number, ciudadOrigen: number, paisDestino: number, ciudadDestino: number,
        productId: number, peso: number, largo: number, alto: number, ancho: number
    }): Promise<any> {
        return this.servientrega.getNetworkRestrictions(args);
    }

    @Query()
    @Allow(Permission.Public)
    async servientregaProducts(@Ctx() ctx: RequestContext): Promise<any> {
        return this.servientrega.servientregaProducts(ctx);
    }


}
