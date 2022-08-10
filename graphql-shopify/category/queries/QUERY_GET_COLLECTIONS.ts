import { CollectionConnection } from "../../../generated/shopify.model"

const queryGetCollections = /* GraphQL */ `
  query queryGetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            originalSrc
          }
        }
      }
    }
  }
`

export interface QueryGetCollectionsType {
  collections: CollectionConnection
}


export default queryGetCollections
