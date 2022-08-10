import Iron from '@hapi/iron'
import { getTokenCookie, MAX_AGE, setTokenCookie } from './auth-cookies'

const COOKIE_CRYPT = process.env.COOKIE_CRYPT

export async function setUserSession(ctx, session) {

    const savedSession = await getUserSession(ctx.req)
    const obj: Session = { ...savedSession, ...session }

    const token = await Iron.seal(obj, COOKIE_CRYPT, Iron.defaults)

    setTokenCookie(ctx.res, token)
}

export async function getUserSession(req): Promise<Session> {
    const token = getTokenCookie(req)
    if (!token) return

    const session: Session = await Iron.unseal(token, COOKIE_CRYPT, Iron.defaults)

    // if (Date.now() > session.expiresAt) {
    //     //throw new Error('Sessione scaduta')
    //     return null
    // }

    return session
}

export type Session = {
    accessToken: string
    checkoutId: string
    checkoutUrl: string
}