import gql from "graphql-tag";

const MUTATION_UPDATE_QUANTITY = gql`
  mutation MUTATION_UPDATE_QUANTITY($itemId: String!, $quantity: Int!) {
    updateCartQuantity(itemId: $itemId, quantity: $quantity) {
        success
        message
        data
    }
  }
`;

export default MUTATION_UPDATE_QUANTITY