import { Injectable, Inject } from '@nestjs/common';
import { ID, Product, RequestContext, TransactionalConnection } from '@vendure/core';
import { MY_NEW_FEATURE_PLUGIN_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class MyService {
    constructor(private connection: TransactionalConnection, @Inject(MY_NEW_FEATURE_PLUGIN_OPTIONS) private options: PluginInitOptions) {}

    async exampleMethod(ctx: RequestContext, id: ID) {
        // Add your method logic here
        const result = await this.connection.getRepository(ctx, Product).findOne({ where: { id } });
        return result;
    }
}
