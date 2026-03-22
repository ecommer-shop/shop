import { Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';

import { GoogleTokenVerificationService } from './google-token-verification.service';
import { SellerOnboardingService } from './seller-onboarding.service';
import { GoogleSellerRegistrationResult, RegisterSellerWithGoogleInput } from '../types';

@Injectable()
export class GoogleAuthService {
    constructor(
        private googleTokenVerificationService: GoogleTokenVerificationService,
        private sellerOnboardingService: SellerOnboardingService,
    ) { }

    //Registra un nuevo vendedor usando la información del token de Google
    async registerSellerWithGoogle(
        ctx: RequestContext,
        input: RegisterSellerWithGoogleInput,
    ): Promise<GoogleSellerRegistrationResult> {
        const payload = await this.googleTokenVerificationService.verifyGoogleToken(input.token);
        const email = payload.email!;
        const firstName = payload.given_name || email.split('@')[0];
        const lastName = payload.family_name || '';

        return this.sellerOnboardingService.registerSeller(ctx, {
            shopName: input.shopName,
            emailAddress: email,
            firstName,
            lastName,
        });
    }
}