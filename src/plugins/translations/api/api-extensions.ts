import gql from 'graphql-tag';

export const translationsApiExtensions = gql`
    extend type Mutation {
        fixProductTranslations(dryRun: Boolean! = false): FixTranslationsResult!
    }

    type FixTranslationsResult {
        productsScanned: Int!
        productsFixed: Int!
        variantsScanned: Int!
        variantsFixed: Int!
    }
`;
