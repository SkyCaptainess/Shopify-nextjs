import gql from "graphql-tag";


const MUTATION_SIGNUP_CUSTOMER = gql`
  mutation MUTATION_SIGNUP_CUSTOMER($email: String!, $password: String!) {
    signupCustomer(email: $email, password: $password) {
      success
      message
      data
    }
  }
`;

export default MUTATION_SIGNUP_CUSTOMER