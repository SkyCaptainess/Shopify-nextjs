import { useMutation } from "react-apollo";
import MUTATION_UPDATE_QUANTITY from "../mutations/MUTATION_UPDATE_CART_ITEM";
import QUERY_GET_CART from "../queries/QUERY_GET_CART";

const useUpdateItem = (): [any, boolean] => {
    const [updateCartQuantity, { loading }] = useMutation(
        MUTATION_UPDATE_QUANTITY, {
        refetchQueries: [{ query: QUERY_GET_CART }],
    });


    return [updateCartQuantity, loading]
}

export default useUpdateItem