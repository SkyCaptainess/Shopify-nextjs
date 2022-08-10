import { checkoutDetailsFragment } from '../queries/QUERY_GET_CHECKOUT'

const mutationCheckoutCreate = /* GraphQL */ `
  mutation {
    checkoutCreate(input: {}) {
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
export default mutationCheckoutCreate
