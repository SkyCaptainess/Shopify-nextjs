import { GraphQLClient } from 'graphql-request'


export const createShopifyGraphql = () => {
    return new GraphQLClient(
        process.env.SHOPIFY_GRAPHQL_ENDPOINT, {
        headers: {
            "X-Shopify-Storefront-Access-Token": process.env.STOREFRONT_ACCESS_TOKEN,
        },
    }
    )
}

export interface Context {
    req: any;
    res: any;
    shopifyGraphql: GraphQLClient
}

export function createContext(ctx): Context {
    return {
        req: ctx.req,
        res: ctx.res,
        shopifyGraphql: createShopifyGraphql()
    };
}