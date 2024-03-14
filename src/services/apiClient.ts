import axios, { type AxiosError, isAxiosError as isAxiosAppError } from "axios";

import { DEFAULT_REVALIDATE } from "@/common/constants/common";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5_000,
});

/** API routes or Route handlers 용 */
export const apiClientLocal = axios.create({
  baseURL: "/",
  timeout: 5_000,
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

interface FetchClientOptions {
  revalidate?: number;
  tags?: string[];
}

export const fetchClient = (endpoint: string, options?: FetchClientOptions) =>
  fetch(endpoint, { next: { revalidate: options?.revalidate ?? DEFAULT_REVALIDATE, tags: options?.tags } });

export const isAxiosError = <T, U = any>(error: AxiosError<T, U> | undefined): error is AxiosError<T, U> => {
  return isAxiosAppError(error);
};
