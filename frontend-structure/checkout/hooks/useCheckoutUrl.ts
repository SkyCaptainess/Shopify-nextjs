import { useQuery } from "@apollo/react-hooks"
import QUERY_GET_CHECKOUT_URL from "../queries/QUERY_GET_CHECKOUT_URL"


const useCheckoutUrl = (): [any, boolean] => {
    const { data, loading } = useQuery(QUERY_GET_CHECKOUT_URL)

    return [data, loading]
}


export default useCheckoutUrl