import gql from "graphql-tag"

const MUTATION_REMOVE_FROM_CART = gql`
    mutation MUTATION_REMOVE_FROM_CART($itemId: String!) {
        removeFromCart(itemId: $itemId) {
            success
            message
            data
        }
    }
`

export default MUTATION_REMOVE_FROM_CART