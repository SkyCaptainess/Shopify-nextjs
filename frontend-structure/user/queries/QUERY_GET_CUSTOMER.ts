import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
    query CURRENT_USER_QUERY {
        me {
            id
            firstName
            lastName
            email
            displayName
        }
    }
`;

export default CURRENT_USER_QUERY