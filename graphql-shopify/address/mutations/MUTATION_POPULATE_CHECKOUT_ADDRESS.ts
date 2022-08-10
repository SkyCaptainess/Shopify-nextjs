import { CheckoutShippingAddressUpdateV2Payload } from '../../../generated/shopify.model'

const mutationPopulateCheckoutAddress = /* GraphQL */ `
mutation mutationPopulateCheckoutAddress($shippingAddress: MailingAddressInput!, $checkoutId: ID!) {
    checkoutShippingAddressUpdateV2(shippingAddress: $shippingAddress, checkoutId: $checkoutId) {
      checkoutUserErrors {
        code
        field
        message
      }
      checkout {
        id
        shippingAddress {
          firstName
          lastName
          address1
          province
          country
          zip
        }
      }
    }
  }
`

export interface PopulateCheckoutAddressType {
  checkoutShippingAddressUpdateV2: CheckoutShippingAddressUpdateV2Payload
}

export default mutationPopulateCheckoutAddress