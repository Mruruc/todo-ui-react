import {
  AUTHORIZATION,
  CONTENT_TYPE,
  validateToken,
  getHeader,
} from "./utility.js";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

export async function postOrPutRequest(
  url,
  data,
  setToken = undefined,
  token = undefined,
  method = "POST"
) {
  try {
    const response = await fetch(
      new Request(`${BASE_URL}${url}`, {
        method: method,
        headers: getHeader(new Map([[CONTENT_TYPE, "application/json"]]),token),
        token,
        body: JSON.stringify(data),
      })
    );

    const httpStatus = response.status;
    if (httpStatus === 400) {
      return {
        ...(await response.json()),
        status: httpStatus,
      };
    }

    validateAndSetToken(response.headers.get(AUTHORIZATION), setToken);

    return { status: httpStatus };
  } catch (exception) {
    throw exception;
  }
}

export async function getRequest(url, token = undefined) {
  try {
    validateToken(token);
    const response = await fetch(
      new Request(`${BASE_URL}${url}`, {
        method: "GET",
        headers: getHeader(new Map(), token),
      })
    );

    if (response.status === 200) {
      return await response.json();
    }
    throw new Error(`Invalid response : ${response.status}`);
  } catch (error) {
    throw error;
  }
}

export async function deleteRequest(url, token) {
  try {
    validateToken(token);
    const response = await fetch(
      new Request(`${BASE_URL}${url}`, {
        method: "DELETE",
        headers: getHeader(new Map(), token),
      })
    );
    if (response.status === 204) {
      return 204;
    }
    throw new Error("Deletion unsuccessful!");
  } catch (error) {
    throw error;
  }
}

function validateAndSetToken(token, setToken) {
  if (token && setToken) {
    setToken(token);
  }
}
