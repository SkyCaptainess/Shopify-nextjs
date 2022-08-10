import { serialize, parse } from "cookie";

const TOKEN_NAME = "lmn_token";

export const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function setTokenCookie(res, token) {

  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 30)

  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: expirationDate,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function removeTokenCookie(res) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
}

export function parseCookies(req) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies;

  // For pages we do need to parse the cookies.
  const cookie = req.headers?.cookie;
  return parse(cookie || "");
}

export function getTokenCookie(req) {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}
