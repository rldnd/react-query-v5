import axios, { type AxiosError, isAxiosError as isAxiosAppError } from "axios";

export const apiClient = axios.create({
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

export const isAxiosError = <T, U = any>(error: AxiosError<T, U> | undefined): error is AxiosError<T, U> => {
  return isAxiosAppError(error);
};
