import gql from "graphql-tag"
import { NexusGenObjects } from "../../../generated/nexus-typegen"



const QUERY_GET_CART = gql`
  query QUERY_GET_CART {
    cart {
      id
      cartItems {
        id
        title
        description
        handle
        categoryHandle
        quantityAvailable
        quantity
        image
        price
        note
      }
    }
  }
`

export interface CartQueryData {
  cart: NexusGenObjects["Cart"]
}

export default QUERY_GET_CART