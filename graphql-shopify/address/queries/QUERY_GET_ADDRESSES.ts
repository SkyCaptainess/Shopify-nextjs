import { Customer } from "../../../generated/shopify.model";



export const QUERY_GET_ADDRESSES =  /* GraphQL */ `
query QUERY_GET_ADDRESSES($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    defaultAddress {
      id
      address1
      address2
      city
      country
      province
      zip
      firstName
      lastName
    }
    addresses (first:250) {
        edges{
            node {
                id
                address1
                address2
                city
                country
                province
                zip
                firstName
                lastName
            }   
        }
    }
  }
}
`;

export interface QueryGetAddressType {
  customer: Customer
}