import { useQuery } from "@apollo/react-hooks";
import QUERY_GET_ADDRESSES, { QueryGetAddressType } from "../queries/QUERY_GET_ADDRESSES";


const useAddresses = (): [QueryGetAddressType, boolean] => {
    const { data, loading } = useQuery<QueryGetAddressType>(QUERY_GET_ADDRESSES);

    return [data, loading]
}

export default useAddresses