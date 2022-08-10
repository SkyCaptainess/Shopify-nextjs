import { useQuery } from "@apollo/react-hooks"
import QUERY_GET_PRODUCTS, { ProductsQueryData } from "../queries/QUERY_GET_PRODUCTS"


const useProducts = (): [ProductsQueryData, boolean] => {
    const { data, loading } = useQuery<ProductsQueryData>(QUERY_GET_PRODUCTS)

    return [data, loading]
}

export default useProducts