import gql from "graphql-tag";

const MUTATION_SIGNOUT = gql`
  mutation MUTATION_SIGNOUT {
    signout {
      success
      message
      data
    }
  }
`;

export default MUTATION_SIGNOUT