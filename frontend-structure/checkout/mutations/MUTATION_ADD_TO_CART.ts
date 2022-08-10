import gql from "graphql-tag"



const MUTATION_ADD_TO_CART = gql`
  mutation MUTATION_ADD_TO_CART($variantId: String!, $quantity: Int!, $note: String) {
    addToCart(variantId: $variantId, quantity: $quantity, note: $note) {
      success
      message
      data
    }
  }
`

export default MUTATION_ADD_TO_CART