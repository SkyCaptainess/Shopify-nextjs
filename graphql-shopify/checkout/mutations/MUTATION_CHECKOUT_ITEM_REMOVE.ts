import { checkoutDetailsFragment } from '../queries/QUERY_GET_CHECKOUT'

const mutationCheckoutItemRemove = /* GraphQL */ `
  mutation($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
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
export default mutationCheckoutItemRemove
