import { useMutation } from "react-apollo";
import MUTATION_REMOVE_FROM_CART from "../mutations/MUTATION_REMOVE_FROM_CART";
import QUERY_GET_CART from "../queries/QUERY_GET_CART";


const useRemoveFromCart = (): [any, boolean] => {
    const [removeFromCart, { loading }] = useMutation(MUTATION_REMOVE_FROM_CART, {
        refetchQueries: [{ query: QUERY_GET_CART }],
    });

    return [removeFromCart, loading]
}

export default useRemoveFromCart