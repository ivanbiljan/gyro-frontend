import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface GyroAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
    config: GyroAxiosRequestConfig<D>;
}

export interface GyroAxiosError<T = any, D = any> extends AxiosError<T, D> {
    config: GyroAxiosRequestConfig<D>;
    response: GyroAxiosResponse<T, D>;
}

export interface GyroAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
    successMessage?: string;
    errorMessage?: string;
}
