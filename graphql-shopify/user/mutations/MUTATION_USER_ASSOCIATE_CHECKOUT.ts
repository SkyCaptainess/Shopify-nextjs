import { CheckoutCustomerAssociateV2Payload } from "../../../generated/shopify.model"


const mutationUserAssociateCheckout = /* GraphQL */ `
    mutation mutationUserAssociateCheckout($checkoutId: ID!, $customerAccessToken: String!) {
        checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
            checkout {
                id
            }
            checkoutUserErrors {
                code
                field
                message
            }
            customer {
                id
            }
        }
    }
`

export interface CheckoutCustomerAssociateType {
    checkoutCustomerAssociateV2: CheckoutCustomerAssociateV2Payload
}

export default mutationUserAssociateCheckout