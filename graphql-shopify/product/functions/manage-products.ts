import { NexusGenObjects } from "../../../generated/nexus-typegen"
import { Product, ProductConnection, ProductEdge } from "../../../generated/shopify.model"
import { ProductImage, ProductNormalized } from "../product-interface"
import { normalizeProduct } from "../utils/normalize"


const manageProducts = async (productConnection: ProductConnection): Promise<Array<NexusGenObjects["Product"]>> => {
    const products: Array<NexusGenObjects["Product"]> = await Promise.all(productConnection?.edges?.map(async ({ node }: ProductEdge) => await manageProduct(node))) ?? []
    return products
}

export const manageProduct = async (productData: Product): Promise<NexusGenObjects["Product"]> => {
    const pn: ProductNormalized = normalizeProduct(productData)
    const [firstImage, ...additionalImgs] = pn.images
    const image = manageProductImage(firstImage)

    const collection = pn.collections ? pn.collections[0] : null

    let additionalImages: Array<NexusGenObjects["ProductImage"]> = []
    if (pn.images.length > 1) {
        additionalImages = additionalImgs.map(img => manageProductImage(img))
    }

    const id: string = (pn.variants && pn.variants.length) ? pn.variants[0].id : pn.id

    const product: NexusGenObjects["Product"] = {
        id,
        price: pn.price?.value,
        handle: pn.handle,
        image,
        additionalImages,
        title: pn.name,
        description: pn.description,
    }

    if (collection) {
        product.categoryHandle = collection.handle
        product.category = {
            id: collection.id,
            title: collection.title,
            handle: collection.handle
        };
    }

    return product
}

const manageProductImage = (normalizedProductImage: ProductImage): NexusGenObjects["ProductImage"] => {
    return {
        url: normalizedProductImage.url,
        alt: normalizedProductImage.alt ? normalizedProductImage.alt : null
    }
}


export default manageProducts