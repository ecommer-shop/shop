import { Inject, Injectable } from '@nestjs/common';
import { RequestContext } from '@vendure/core';
import { WOMPI_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';
import { v4 as uuid } from 'uuid';
import crypto from 'crypto';

@Injectable()
export class WompiService {
    constructor(@Inject(WOMPI_PLUGIN_OPTIONS) private options: PluginInitOptions) { }

    async getSignature(ctx: RequestContext, amountInCents: number): Promise<string> {
        if (!this.options.secretKey) {
            throw new Error('WOMPI_INTEGRITY_SECRET_KEY environment variable is not set');
        }
        const concatenated = `${uuid()}${amountInCents}${this.options.currency}${this.options.secretKey}`; // todo: add expiration time
        const hash = crypto.createHmac('sha256', this.options.secretKey)
            .update(concatenated)
            .digest('hex');
        return hash;
    }
}
