import { API_BASE_URL } from "astro:env/server";

const baseURL = API_BASE_URL;

const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const getRequestUrl = (url: string) =>
  !!["http", "https"].find((i) => url.indexOf(`${i}://`) > -1)
    ? url
    : `${baseURL}${url}`;

export const get = async <T = unknown, D = unknown>(
  url: string,
  // options?: AxiosRequestConfig<D>,
): Promise<T> => {
  const requestUrl = getRequestUrl(url);
  const result = await fetch(requestUrl /* options */);

  if (result && !result.ok) {
    throw new Error(result.statusText);
  }

  return (await result.json()) as T;
};

export const post = async <T = unknown, B = unknown, O = unknown>(
  url: string,
  body?: B,
  // options?: AxiosRequestConfig<O>,
) => {
  const requestUrl = getRequestUrl(url);
  const result = await fetch(
    requestUrl,
    {
      method: POST,
      body: JSON.stringify(body),
    } /* options */,
  );

  if (!result.ok) {
    throw new Error(result.statusText);
  }
  return (await result?.json()) as T;
};

export const put = async <T = unknown, B = unknown, O = unknown>(
  url: string,
  body: B,
  // options?: AxiosRequestConfig<O>,
) => {
  const requestUrl = getRequestUrl(url);
  const result = await fetch(
    requestUrl,
    {
      method: PUT,
      body: JSON.stringify(body),
    } /* options */,
  );

  if (!result.ok) {
    throw new Error(result.statusText);
  }
  return (await result?.json()) as T;
};

export const del = async <T = unknown, O = unknown>(
  url: string,
  //options?: AxiosRequestConfig<O>,
) => {
  const requestUrl = getRequestUrl(url);
  const result = await fetch(
    requestUrl,
    {
      method: DELETE,
    } /* options */,
  );

  if (!result.ok) {
    throw new Error(result.statusText);
  }
  return (await result?.json()) as T;
};
