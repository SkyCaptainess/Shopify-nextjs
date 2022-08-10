import { useQuery } from "react-apollo";
import QUERY_GET_CART, { CartQueryData } from "../queries/QUERY_GET_CART";


const useCart = (): [CartQueryData, boolean] => {
    const { data, loading } = useQuery<CartQueryData>(QUERY_GET_CART);

    return [data, loading]
}

export default useCart