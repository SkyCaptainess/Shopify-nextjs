import gql from "graphql-tag"
import { NexusGenObjects } from "../../../generated/nexus-typegen";


const QUERY_GET_PRODUCTS = gql`
  query QUERY_GET_PRODUCTS {
    products {
      id
      title
      image
      price
      handle
      description
      category {
        id
        title
        handle
      }
    }
  }
`;

export interface ProductsQueryData {
    products: Array<NexusGenObjects["Product"]>
}

export default QUERY_GET_PRODUCTS