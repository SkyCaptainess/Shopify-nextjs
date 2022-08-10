

const QUERY_GET_PRODUCT_AVAILABILITY = /* GraphQL */ `
    query QUERY_GET_PRODUCT_AVAILABILITY($handle: String!) {
        productByHandle(handle: $handle) {
            id
            availableForSale
            totalInventory 
        }
    }
`


export interface GetProductAvailabilityType {
    productByHandle: {
        id: string,
        availableForSale: boolean,
        totalInventory: number
    }
}

export default QUERY_GET_PRODUCT_AVAILABILITY