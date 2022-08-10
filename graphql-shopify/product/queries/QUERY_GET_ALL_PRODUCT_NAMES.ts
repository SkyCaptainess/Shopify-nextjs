

const QUERY_GET_ALL_PRODUCT_NAMES = /* GraphQL */ `
  query {
    products(first: 250) {
      edges {
        node {
          handle
          collections(first: 1) {
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
`;

export default QUERY_GET_ALL_PRODUCT_NAMES