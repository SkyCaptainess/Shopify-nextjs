import { checkoutDetailsFragment } from '../queries/QUERY_GET_CHECKOUT'

const mutationCheckoutItemAdd = /* GraphQL */ `
  mutation($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ${checkoutDetailsFragment}
      }
    }
  }
`
export default mutationCheckoutItemAdd
