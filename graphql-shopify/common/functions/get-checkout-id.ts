import { getUserSession } from "../../../lib/auth/auth-session";
import { Context } from "../../context";

const getCheckoutId = async (ctx: Context): Promise<string> => {
    const session = await getUserSession(ctx.req)
    if (session?.checkoutId) {
        // TODO: Manage cookie expiration date
        // if (session.expiresAt < Date.now()) {
        //     return null;
        // }
        return session.checkoutId
    }

    return null;
}

export default getCheckoutId