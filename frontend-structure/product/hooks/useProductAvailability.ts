import { useQuery } from "@apollo/react-hooks"
import { NexusGenObjects } from "../../../generated/nexus-typegen"
import QUERY_GET_PRODUCT_AVAILABILITY, { GetProductAvailabilityType } from "../queries/QUERY_GET_PRODUCT_AVAILABILITY"


const useProductAvailability = (handle: string): NexusGenObjects["ProductAvailability"] => {
    const { data, loading } = useQuery<GetProductAvailabilityType>(QUERY_GET_PRODUCT_AVAILABILITY, { variables: { handle: handle } })

    if (data) {
        return data.productAvailability
    }
    return null
}

export default useProductAvailability