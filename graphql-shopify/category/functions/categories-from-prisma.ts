import React from "react";
import { NexusGenObjects } from "../../../generated/nexus-typegen";
import { Collection } from "../../../generated/shopify.model";


const categoriesFromPrisma = (prismaCategories: Array<NexusGenObjects["Category"]>, shopifyCategories: Collection[]): Array<NexusGenObjects["Category"]> => {

    return prismaCategories.map(cat => {
        const foundCat = shopifyCategories.find(x => x.id === cat.id);
        if (foundCat) {
            const image = foundCat.image?.originalSrc
            return {
                id: foundCat.id,
                title: foundCat.title,
                description: foundCat.description,
                handle: foundCat.handle,
                image: image
            }

        }
    })
}

export default categoriesFromPrisma