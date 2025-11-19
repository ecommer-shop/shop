import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, RequestContext, User, TransactionalConnection, AuthService } from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';
import { forwardRef, Inject, Injectable, UseGuards } from '@nestjs/common';
import { Servientrega } from '../services/servientrega';
import { AuthorizationService } from '../../auth0/service/auth.service';
import { Roles } from '../../auth0/constants/roles.enum';

@Injectable()
@Resolver()
export class ServientregaShopResolver {
    constructor(
        private readonly servientrega: Servientrega,
        private readonly connection: TransactionalConnection,
        @Inject(forwardRef(() => AuthorizationService))
        private authService: AuthorizationService
    ) { }

    @Query()
    @Allow(Permission.Authenticated)
    async getCitiesDepartament(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesDepartament(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    async getCitiesOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    async getCitiesAutocompleteOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string, cityName?: string }): Promise<any> {
        return this.servientrega.getCitiesAutocompleteOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
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
        return this.servientrega.getQuote(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    async getRestrictions(@Ctx() ctx: RequestContext): Promise<any> {
        return this.servientrega.getRestrictions(ctx);
    }

    @Query()
    @Allow(Permission.Authenticated)
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
