import gql from "graphql-tag";




const QUERY_GET_CHECKOUT_URL = gql`
    query QUERY_GET_CHECKOUT_URL {
        checkoutUrl
    }
`


export default QUERY_GET_CHECKOUT_URL