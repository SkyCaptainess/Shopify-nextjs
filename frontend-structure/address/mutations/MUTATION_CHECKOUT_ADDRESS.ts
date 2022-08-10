import gql from "graphql-tag"



const MUTATION_CHECKOUT_ADDRESS = gql`
  mutation MUTATION_CHECKOUT_ADDRESS($shippingAddress: ShippingAddressInput) {
    populateCheckout(shippingAddress: $shippingAddress) {
      success
      message
      data
    }
  }
`

export default MUTATION_CHECKOUT_ADDRESS