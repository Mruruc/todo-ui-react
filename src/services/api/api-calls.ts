import { Todo } from "../../pages/private/types.js";
import { LoginCredentials, User } from "../../pages/public/types.js";
import { SetTokenFunction } from "../../auth/AuthContext.js";
import {
  AUTHORIZATION,
  CONTENT_TYPE,
  validateToken,
  setHeader,
} from "./utility.js";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

export async function postOrPutRequest<T>(
  url: string,
  data: User | LoginCredentials | Todo,
  setToken: SetTokenFunction | undefined = undefined,
  token: string | undefined = undefined,
  method: "POST" | "PUT" = "POST"
): Promise<T | void> {
  
  console.log(BASE_URL + url);
  
  try {
    const response = await fetch(
      new Request(`${BASE_URL}${url}`, {
        method: method,
        headers: setHeader(
          new Map([[CONTENT_TYPE, "application/json"]]),token
        ),
        body: JSON.stringify(data),
      })
    );

    if (response.status === 400) {
      const rawData: T = await response.json();
      throw rawData;
    }
    const authHeader = response.headers.get(AUTHORIZATION);
    authHeader && validateAndSetToken(authHeader, setToken!);
  } catch (exception) {
    throw exception;
  }
}

export async function getRequest<T>(url: string, token: string): Promise<T> {
  try {
    validateToken(token);
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: setHeader(new Map(), token),
    });

    if (response.status === 200) {
      const rawData: T = await response.json();
      return rawData;
    }

    throw new Error(`Invalid response : ${response.status}`);
  } catch (error) {
    throw error;
  }
}

export async function deleteRequest(url: string, token: string) {
  try {
    validateToken(token);
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: setHeader(new Map(), token),
    });
    if (response.status === 204) {
      return 204;
    }
    throw new Error("Deletion unsuccessful, please try again!");
  } catch (error) {
    throw error;
  }
}

function validateAndSetToken(token: string, setToken: SetTokenFunction): void {
  if (token && setToken) {
    setToken(token);
  }
}
