import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Product as ProductShopify, Collection, ProductEdge } from "../../generated/shopify.model"
import { NexusGenObjects } from "../../generated/nexus-typegen"
import QUERY_GET_PRODUCTS from "../product/queries/QUERY_GET_PRODUCTS";
import { normalizeProduct } from "../product/utils/normalize";
import { ProductNormalized } from "../product/product-interface";
// import { Product as ShopifyProduct } from '../../generated/shopify.model'
import { manageProducts } from '../product/functions/'
import QUERY_GET_PRODUCT_AVAILABILITY, { GetProductAvailabilityType } from "../product/queries/QUERY_GET_PRODUCT_AVAILABILITY";


export const ProductQuery = extendType({
    type: 'Query',
    definition: t => {
        t.nonNull.list.field('products', {
            type: 'Product',
            async resolve(parent, args, ctx) {

                const productData = await ctx.shopifyGraphql.request(QUERY_GET_PRODUCTS, { query: "tag:featured" })
                const products = await manageProducts(productData)
                return products
            }
        })
        t.field('productAvailability', {
            type: 'ProductAvailability',
            args: { handle: nonNull(stringArg()) },
            async resolve(parent, { handle }, ctx) {
                const productData = await ctx.shopifyGraphql.request<GetProductAvailabilityType>(QUERY_GET_PRODUCT_AVAILABILITY, { handle: handle })

                return productData.productByHandle
            }
        })
    }
})

export const Product = objectType({
    name: 'Product',
    definition(t) {
        t.string('id');
        t.string('title');
        t.field('image', {
            type: 'ProductImage'
        });
        t.list.field('additionalImages', {
            type: 'ProductImage'
        })
        t.string('handle');
        t.string('description');
        t.float('price');
        t.field('category', {
            type: 'Category',
        });
        t.string('categoryHandle');
    }
})

export const ProductImage = objectType({
    name: 'ProductImage',
    definition(t) {
        t.string('url');
        t.string('alt')
    }
})

export const ProductAvailability = objectType({
    name: 'ProductAvailability',
    definition(t) {
        t.string('id')
        t.boolean('availableForSale')
        t.int('totalInventory');
    }
})