import { NexusGenObjects } from "../../../generated/nexus-typegen"
import { Collection, CollectionConnection, ProductConnection } from "../../../generated/shopify.model"
import { manageProduct, manageProducts } from "../../product/functions";


export const manageCollection = async (collection: Collection): Promise<NexusGenObjects["Category"]> => {
    const category: NexusGenObjects["Category"] = {
        id: collection.id,
        handle: collection.handle,
        title: collection.title,
        image: collection.image?.originalSrc ?? null,
        description: collection.description,
    };

    if (collection?.products?.edges.length) {
        category.products = await manageProducts(collection?.products)
    }
    return category
}

export const manageCollectionConnection = async (collectionConn: CollectionConnection): Promise<Array<NexusGenObjects["Category"]>> => {
    return await Promise.all(collectionConn?.edges?.map(async ({ node }) => await manageCollection(node)));
}