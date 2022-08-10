import { useMutation } from "@apollo/react-hooks"
import MUTATION_CHECKOUT_ADDRESS from "../mutations/MUTATION_CHECKOUT_ADDRESS"


const usePopulateCheckoutAddress = (): [(_) => Promise<any>, boolean] => {

    const [populateCheckout, { loading }] = useMutation(MUTATION_CHECKOUT_ADDRESS)

    return [populateCheckout, loading]
}

export default usePopulateCheckoutAddress