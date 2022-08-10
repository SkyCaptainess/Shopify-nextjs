import { CheckoutCustomerDisassociateV2Payload } from "../../../generated/shopify.model"


const mutationUserDisssociateCheckout = /* GraphQL */ `
    mutation mutationUserDisssociateCheckout($checkoutId: ID!) {
        checkoutCustomerDisassociateV2(checkoutId: $checkoutId) {
            checkout {
                id
            }
            checkoutUserErrors {
                code
                field
                message
            }
        }
    }
`

export interface CheckoutCustomerDisassociateType {
    checkoutCustomerAssociateV2: CheckoutCustomerDisassociateV2Payload
}

export default mutationUserDisssociateCheckout