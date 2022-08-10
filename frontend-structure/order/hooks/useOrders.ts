import { useQuery } from "@apollo/react-hooks";
import { OrdersQueryData, QUERY_GET_ORDERS } from "../queries/QUERY_GET_ORDERS";


const useOrders = (): [OrdersQueryData, boolean] => {
    const { data, loading } = useQuery<OrdersQueryData>(QUERY_GET_ORDERS);

    return [data, loading]
}

export default useOrders