

interface Entity {
    id: string
    [prop: string]: any
}

export interface ProductNormalized extends Entity {
    name: string
    description: string
    slug?: string
    handle?: string
    collections: ProductCollection[]
    images: ProductImage[]
    variants: ProductVariant2[]
    price: ProductPrice
    options: ProductOption[]
    sku?: string
}

interface ProductCollection {
    id: string
    title: string
    handle: string
}

interface ProductOption extends Entity {
    displayName: string
    values: ProductOptionValues[]
}

interface ProductOptionValues {
    label: string
    hexColors?: string[]
}

export interface ProductImage {
    url: string
    alt?: string
}

interface ProductVariant2 {
    id: string
    options: ProductOption[]
}

interface ProductPrice {
    value: number
    currencyCode: 'USD' | 'ARS' | string | undefined
    retailPrice?: number
    salePrice?: number
    listPrice?: number
    extendedSalePrice?: number
    extendedListPrice?: number
}