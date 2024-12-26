/**
 * API utility, represents the http header enum.
 */

export const AUTHORIZATION = "Authorization";
export const CONTENT_TYPE = "Content-Type";

export function setHeader(headerMaps: Map<string, string> = new Map(), 
                          token: string | undefined = undefined): Headers {
  const headers = new Headers();
  headerMaps.size > 0 &&
    headerMaps.forEach((value, key) => headers.append(key, value));
  token && headers.append(AUTHORIZATION, token);
  return headers;
}

export function validateToken(token: string) {
  if (!token) throw new Error("Token has falsy value!");
}
