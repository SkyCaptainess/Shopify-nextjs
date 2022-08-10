import { Context } from '../../context';
import MUTATION_CHECKOUT_CREATE from '../mutations/MUTATION_CHECKOUT_CREATE';
import { Checkout } from '../../../generated/shopify.model'
import { setUserSession } from '../../../lib/auth/auth-session';



export const checkoutCreate = async (ctx: Context): Promise<Checkout> => {
    const data = await ctx.shopifyGraphql.request(MUTATION_CHECKOUT_CREATE)

    const checkout: Checkout = data.checkoutCreate?.checkout
    const checkoutId = checkout?.id

    if (checkoutId) {
        await setUserSession(ctx, {
            checkoutId: checkout.id,
            checkoutUrl: checkout.webUrl
        })
    }

    return checkout
}
