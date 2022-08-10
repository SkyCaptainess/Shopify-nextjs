import { useEffect } from "react"
import Router from "next/router"
import { useQuery } from "react-apollo";
import CURRENT_USER_QUERY from "../queries/QUERY_GET_CUSTOMER"
import { NexusGenObjects } from "../../../generated/nexus-typegen";


const useCustomer = ({
    redirectTo = null,
    redirectIfFound = false
} = {}): [NexusGenObjects["User"], boolean] => {

    const { data, loading } = useQuery(CURRENT_USER_QUERY)
    const user = data?.me
    const finished = Boolean(data)
    const hasUser = Boolean(user)

    useEffect(() => {
        if (!redirectTo || !finished) return
        if ((redirectTo && !redirectIfFound && !hasUser) || (redirectIfFound && hasUser)) {
            Router.push(redirectTo)
        }
    }, [redirectIfFound, redirectTo, finished, hasUser])

    return [user, hasUser]
}

export default useCustomer