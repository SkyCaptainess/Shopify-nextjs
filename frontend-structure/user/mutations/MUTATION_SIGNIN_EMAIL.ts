import gql from "graphql-tag";


const MUTATION_SIGNIN_EMAIL = gql`
  mutation MUTATION_SIGNIN_EMAIL($email: String!, $password: String!) {
    signinEmail(email: $email, password: $password) {
      success
      message
      data
    }
  }
`;

export default MUTATION_SIGNIN_EMAIL