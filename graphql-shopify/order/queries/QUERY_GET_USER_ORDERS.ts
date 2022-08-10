

export const QUERY_GET_USER_ORDERS =  /* GraphQL */ `
query QUERY_GET_USER_ORDERS($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    orders(first: 250) {
      edges {
        node {
          id
          totalPriceV2 {
            amount
            currencyCode
          }
          processedAt
          fulfillmentStatus
        }
      }
    }
  }
}
`;