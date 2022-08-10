import { useMutation } from "react-apollo";
import MUTATION_SIGNIN_EMAIL from "../mutations/MUTATION_SIGNIN_EMAIL";
import QUERY_GET_CUSTOMER from "../queries/QUERY_GET_CUSTOMER";


const useLogin = (): [any, boolean] => {
    const [signinEmail, { loading }] = useMutation(MUTATION_SIGNIN_EMAIL, {
        refetchQueries: [{ query: QUERY_GET_CUSTOMER }]
    });

    return [signinEmail, loading]
}

export default useLogin