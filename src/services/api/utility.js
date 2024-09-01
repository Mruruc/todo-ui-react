/**
 * Utility class, represents the http header enum.
 */

export const AUTHORIZATION = "Authorization";
export const CONTENT_TYPE = "Content-Type";

export function getHeader(headerMaps = new Map(), token = undefined) {
  const headers = new Headers();
  headerMaps.size > 0 &&
    headerMaps.forEach((value, key) => headers.append(key, value));
  token && headers.append(AUTHORIZATION, token);
  return headers;
}

export function validateToken(token) {
  if (!token) throw new Error("Token has falsy value!");
}
