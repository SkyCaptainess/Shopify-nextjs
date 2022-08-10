import { Checkout, Maybe } from "../../../generated/shopify.model"
import { CartCheckout } from "../checkout-interface"
import { normalizeCart } from "./normalize"


const transfromCheckoutToCart = (checkout?: Maybe<Checkout>): CartCheckout => {
    if (!checkout) {
        //TODO: Throw new error
        return;
    }

    return normalizeCart(checkout)
}

export default transfromCheckoutToCart