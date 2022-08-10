import { useMutation } from "react-apollo";
import MUTATION_SIGNUP_EMAIL from "../mutations/MUTATION_SIGNUP_EMAIL";
import QUERY_GET_CUSTOMER from "../queries/QUERY_GET_CUSTOMER";

const useSignup = (): [any, boolean] => {
    const [signupCustomer, { loading }] = useMutation(MUTATION_SIGNUP_EMAIL, {
        refetchQueries: [{ query: QUERY_GET_CUSTOMER }]
    });

    return [signupCustomer, loading]
}

export default useSignup