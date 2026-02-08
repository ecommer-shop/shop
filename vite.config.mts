import { vendureDashboardPlugin } from '@vendure/dashboard/vite';
import { dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { defineConfig } from 'vite';
import { IS_DEV } from './src/config/environment';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: '/dashboard',
    build: {
        outDir: `${__dirname}/dist/dashboard`,
        emptyOutDir: true,
    },
    plugins: [
        vendureDashboardPlugin({
            // The vendureDashboardPlugin will scan your configuration in order
            // to find any plugins which have dashboard extensions, as well as
            // to introspect the GraphQL schema based on any API extensions
            // and custom fields that are configured.
            vendureConfigPath: pathToFileURL('./src/vendure-config.ts'),
            // Points to the location of your Vendure server.
            api: IS_DEV
                ? { host: 'http://localhost', port: 3000 }
                : {
                    host: 'https://admin.ecommer.shop'
                },
            // When you start the Vite server, your Admin API schema will
            // be introspected and the types will be generated in this location.
            // These types can be used in your dashboard extensions to provide
            // type safety when writing queries and mutations.
            gqlOutputPath: './src/gql',
        }),
    ],
    resolve: {
        alias: {
            // This allows all plugins to reference a shared set of
            // GraphQL types.
            '@/gql': `${__dirname}/src/gql/graphql.ts`,
        },
    },
});