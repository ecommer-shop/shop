import { Args, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, RequestContext, User, TransactionalConnection } from '@vendure/core';
import { Permission } from '@vendure/common/lib/generated-types';
import { RequireRoles } from '../../auth0/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';
import { Servientrega } from '../services/servientrega';
import { Roles } from '../../auth0/constants/roles.enum';

@Resolver()
export class ServientregaShopResolver {
    constructor(
        private readonly servientrega: Servientrega,
        private readonly connection: TransactionalConnection
    ) { }

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.CUSTOMER)
    async getCitiesDepartament(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesDepartament(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.CUSTOMER)
    async getCitiesOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string }): Promise<any> {
        return this.servientrega.getCitiesOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.CUSTOMER)
    async getCitiesAutocompleteOrigin(@Ctx() ctx: RequestContext, @Args() args: { countryId: number, productID: number, language: string, cityName?: string }): Promise<any> {
        return this.servientrega.getCitiesAutocompleteOrigin(ctx, args);
    }

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.CUSTOMER)
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
    @RequireRoles(Roles.CUSTOMER)
    async getRestrictions(@Ctx() ctx: RequestContext): Promise<any> {
        return this.servientrega.getRestrictions(ctx);
    }

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.CUSTOMER, Roles.VENDOR)
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

    @Query()
    @Allow(Permission.Authenticated)
    @RequireRoles(Roles.ADMIN)
    async adminOnlyEndpoint() {
        return this.servientrega.adminOnlyEndpoint();
    }

    @Query()
    @Allow(Permission.Public)
    async debugUserRoles(@Ctx() ctx: RequestContext) {
        console.log('Debug - Session:', {
            hasSession: !!ctx.session,
            activeUserId: ctx.activeUserId,
            authStrategy: ctx.session?.authenticationStrategy,
            token: ctx.session?.token ? 'Present' : 'None'
        });

        if (!ctx.session?.token) {
            return {
                error: 'No session token found. Make sure to include the session token in the Authorization header.',
                example: 'Authorization: Bearer YOUR_TOKEN_HERE'
            };
        }

        const user = await this.connection.getRepository(ctx, User)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles', 'roles')
            .where('user.id = :userId', { userId: ctx.activeUserId })
            .getOne();

        console.log('Debug - User found:', {
            userId: user?.id,
            hasRoles: !!user?.roles?.length,
            roles: user?.roles?.map(r => r.code)
        });

        return {
            userId: ctx.activeUserId,
            isAuthenticated: !!ctx.activeUserId,
            roles: user?.roles?.map(role => ({
                code: role.code
            })) || [],
            session: {
                token: !!ctx.session?.token,
                channelId: ctx.channelId,
                languageCode: ctx.languageCode,
                strategy: ctx.session?.authenticationStrategy
            }
        };
    }
}
