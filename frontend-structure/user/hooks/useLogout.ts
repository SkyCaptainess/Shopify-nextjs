import { useMutation } from "react-apollo";
import MUTATION_SIGNOUT from "../mutations/MUTATION_SIGNOUT";
import QUERY_GET_CUSTOMER from "../queries/QUERY_GET_CUSTOMER";


const useLogout = (): [any, boolean] => {
    const [signout, { loading }] = useMutation(MUTATION_SIGNOUT, {
        refetchQueries: [{ query: QUERY_GET_CUSTOMER }],
    });

    return [signout, loading]
}

export default useLogout