import { extendType, objectType } from "nexus";
import { NexusGenObjects } from "../../generated/nexus-typegen";
import { manageCollectionConnection } from "../category/functions/manage-collection";
import QUERY_GET_COLLECTIONS, { QueryGetCollectionsType } from "../category/queries/QUERY_GET_COLLECTIONS";

export const Category = objectType({
    name: 'Category',
    definition(t) {
        t.string('id');
        t.string('title');
        t.string('description');
        t.string('image');
        t.string('handle');
        t.list.field('products', {
            type: 'Product'
        })
    }
})

export const CategoryQuery = extendType({
    type: 'Query',
    definition: t => {
        t.nonNull.list.field('frontCategories', {
            type: 'Category',
            async resolve(parent, args, ctx) {

                let frontCategories: Array<NexusGenObjects["Category"]> = []
                const collectionsData = await ctx.shopifyGraphql.request<QueryGetCollectionsType>(QUERY_GET_COLLECTIONS)
                frontCategories = await manageCollectionConnection(collectionsData.collections)

                return frontCategories
            }
        })
    }
})