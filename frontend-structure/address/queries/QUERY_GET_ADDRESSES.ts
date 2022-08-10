import gql from "graphql-tag";
import { NexusGenObjects } from "../../../generated/nexus-typegen";

const QUERY_GET_ADDRESSES = gql`
query QUERY_GET_ADDRESSES {
  addresses {
    id
    address1
    address2
    city
    country
    province
    zip
    firstName
    lastName
    active
  }
}
`;

export interface QueryGetAddressType {
  addresses: Array<NexusGenObjects["Address"]>
}

export default QUERY_GET_ADDRESSES