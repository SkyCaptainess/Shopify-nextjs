import { ProductConnection } from "../../../generated/shopify.model"

export const productConnection = `
pageInfo {
  hasNextPage
  hasPreviousPage
}
edges {
  node {
    id
    title
    vendor
    handle
    description
    collections(first:1) {
      edges {
          node {
              id
              title
              handle
          }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          originalSrc
          altText
          width
          height
        }
      }
    }
  }
}
`

export const productsFragment = `
    products(
        first: $first
        sortKey: $sortKey
        reverse: $reverse
        query: $query
    ) {
        ${productConnection}
    }
`

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 250
    $query: String = ""
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    ${productsFragment}
  }
`


export interface GetAllProductsQueryType {
  products: ProductConnection
}
export default getAllProductsQuery
