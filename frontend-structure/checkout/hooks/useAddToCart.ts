import { useMutation } from "react-apollo";
import MUTATION_ADD_TO_CART from "../mutations/MUTATION_ADD_TO_CART";
import QUERY_GET_CART from "../queries/QUERY_GET_CART";

const useAddToCart = (): [any, boolean] => {
    const [addToCart, { loading }] = useMutation(MUTATION_ADD_TO_CART, {
        refetchQueries: [{ query: QUERY_GET_CART }],
    });

    return [addToCart, loading]
}

export default useAddToCart