import {
    Product,
    ImageConnection,
    ProductVariantConnection,
    ProductOption,
    SelectedOption,
    CollectionConnection
} from "../../../generated/shopify.model"
import { money } from "../../common/utils/normalize"
import { ProductNormalized } from "../product-interface"


export function normalizeProduct(productNode: Product): ProductNormalized {
    const {
        id,
        title: name,
        vendor,
        collections,
        images,
        variants,
        description,
        handle,
        priceRange,
        options,
        ...rest
    } = productNode

    const product = {
        id,
        name,
        vendor,
        description,
        handle: handle,
        slug: handle?.replace(/^\/+|\/+$/g, ''),
        collections: collections ? normalizeProductCollections(collections) : [],
        price: priceRange ? money(priceRange?.minVariantPrice) : null,
        images: images ? normalizeProductImages(images) : [],
        variants: variants ? normalizeProductVariants(variants) : [],
        options: options ? options.map((o) => normalizeProductOption(o)) : [],
        ...rest,
    }

    return product
}

export const normalizeProductCollections = ({ edges }: CollectionConnection) => {
    return edges?.map(
        ({
            node: { id, title, handle },
        }) => ({
            id,
            title,
            handle
        })
    )
}

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
    return edges?.map(
        ({
            node: { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 },
        }) => ({
            id,
            name: title,
            sku: sku ?? id,
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requiresShipping: true,
            options: selectedOptions.map(({ name, value }: SelectedOption) =>
                normalizeProductOption({
                    id,
                    name,
                    values: [value],
                })
            ),
        })
    )
}

const normalizeProductOption = ({
    id,
    name: displayName,
    values,
}: ProductOption) => {
    return {
        __typename: 'MultipleChoiceOption',
        id,
        displayName,
        values: values.map((value) => {
            let output: any = {
                label: value,
            }
            if (displayName === 'Color') {
                output = {
                    ...output,
                    hexColors: [value],
                }
            }
            return output
        }),
    }
}


const normalizeProductImages = ({ edges }: ImageConnection) =>
    edges?.map(({ node: { originalSrc: url, ...rest } }) => ({
        url,
        ...rest,
    }))