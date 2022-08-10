import { useLazyQuery, useQuery } from "@apollo/react-hooks"
import QUERY_GET_ORDER, { QueryGetOrderType } from "../queries/QUERY_GET_ORDER"


const useOrder = (orderId): [QueryGetOrderType, boolean] => {
    const { data, loading } = useQuery<QueryGetOrderType>(QUERY_GET_ORDER, { variables: { orderId: orderId } })

    return [data, loading]
}

export default useOrder