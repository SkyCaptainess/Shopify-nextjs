import { CollectionConnection } from "../../../generated/shopify.model"


const QUERY_GET_ALL_COLLECTIONS_NAMES = /* GraphQL */ `
    query QUERY_GET_ALL_COLLECTIONS_NAMES {
        collections (first:250) {
            edges {
                node {
                    id
                    handle
                }
            }
        }
    }
`

export interface QueryAllCollectionNamesType {
    collections: CollectionConnection
}


export default QUERY_GET_ALL_COLLECTIONS_NAMES