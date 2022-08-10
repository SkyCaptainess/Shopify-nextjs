import { Collection } from "../../../generated/shopify.model"

const queryGetCollection = /* GraphQL */ `
  query queryGetCollection($slug: String!) {
    collectionByHandle(handle: $slug) {
        id
        title
        description
        handle
        image {
          originalSrc
          altText
        }
        products (first: 250) {
            edges {
                node {
                    id
                    title
                    handle
                    description
                    collections (first: 10){
                      edges {
                        node {
                          id
                          title
                          handle
                        }
                      }
                    }
                    priceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    images(first: 250) {
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
        }
    }
  }
`

export interface QueryGetCollectionProp {
  collectionByHandle: Collection
}

export default queryGetCollection
