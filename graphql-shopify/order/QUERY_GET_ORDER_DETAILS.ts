import { Order } from "../../generated/shopify.model"


const getOrderDetails = /* GraphQL */ `
query($orderId: ID!) {
  node(id: $orderId) {
    ... on Order {
        id
        fulfillmentStatus
        financialStatus
        lineItems(first:250) {
            edges {
                node {
                    title
                    quantity
                    discountedTotalPrice {
                        amount
                        currencyCode
                    }
                    variant {
                        image {
                            originalSrc
                        }
                        product {
                            handle
                            collections (first:250) {
                                edges {
                                    node {
                                        handle
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }
}
`

export interface GetOrderDetailsType {
    node: Order
}

export default getOrderDetails