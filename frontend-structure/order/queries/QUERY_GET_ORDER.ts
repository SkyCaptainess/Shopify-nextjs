import gql from "graphql-tag";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

const QUERY_GET_ORDER = gql`
  query QUERY_GET_ORDER($orderId: String!) {
    order(orderId: $orderId) {
        id
        orderItems {
          quantity
          title
          image
          total
          productHandle
          categoryHandle
        }
    }
  }
`;

export interface QueryGetOrderType {
  order: NexusGenObjects["Order"]
}

export default QUERY_GET_ORDER