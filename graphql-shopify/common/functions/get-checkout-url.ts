import { getUserSession } from "../../../lib/auth/auth-session";
import { Context } from "../../context";


const getCheckoutUrl = async (ctx: Context): Promise<string> => {
    const session = await getUserSession(ctx.req)
    if (session?.checkoutUrl) {
        // TODO: Manage cookie expiration date
        // if (session.expiresAt < Date.now()) {
        //     return null;
        // }
        return session.checkoutUrl
    }

    return null;
}

export default getCheckoutUrl