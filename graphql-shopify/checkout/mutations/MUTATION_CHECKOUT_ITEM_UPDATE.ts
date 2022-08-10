import { checkoutDetailsFragment } from '../queries/QUERY_GET_CHECKOUT'

const mutationCheckoutItemUpdate = /* GraphQL */ `
  mutation($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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
export default mutationCheckoutItemUpdate
