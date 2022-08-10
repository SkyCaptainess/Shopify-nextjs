import gql from "graphql-tag";
import { NexusGenObjects } from "../../../generated/nexus-typegen";


const QUERY_GET_PRODUCT_AVAILABILITY = gql`
    query QUERY_GET_PRODUCT_AVAILABILITY($handle: String!) {
        productAvailability(handle: $handle) {
            id
            availableForSale
            totalInventory 
        }
    }
`

export interface GetProductAvailabilityType {
    productAvailability: NexusGenObjects["ProductAvailability"]
}
export default QUERY_GET_PRODUCT_AVAILABILITY