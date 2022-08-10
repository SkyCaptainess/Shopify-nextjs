import gql from "graphql-tag";
import { NexusGenObjects } from "../../../generated/nexus-typegen";


export const QUERY_GET_ORDERS = gql`
query QUERY_GET_ORDERS {
  getUserOrders {
    id
    processedAt
    amount
    fulfillment
  }
}
`;

export interface OrdersQueryData {
  getUserOrders: Array<NexusGenObjects["Order"]>
}