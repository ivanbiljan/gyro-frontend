import apiClient from "utils/axios/apiClient";
import { GyroAxiosRequestConfig } from "utils/axios/apiModels";
import { devConsoleLog } from "utils/logging";
import { getUserLocalStorageData } from "utils/localStorage";
import { RequestConfig } from "./servicesModels";

export const getToken = () => {
    const storage = getUserLocalStorageData();

    return storage?.data?.token;
};

export const executeHttpGetAuthorized = async (url: string, params?: any, requestConfig?: RequestConfig) => {
    let config: GyroAxiosRequestConfig = {
        params: params,
        successMessage: requestConfig?.successMessage,
        errorMessage: requestConfig?.errorMessage,
    };
    
    config.headers = { Authorization: `Bearer ${getToken()}` };
    const response = await apiClient.get(url, config);

    return response;
};

export const executeHttpPostAuthorized = async (url: string, data?: any, requestConfig?: RequestConfig) => {
    let config: GyroAxiosRequestConfig = {
        successMessage: requestConfig?.successMessage,
        errorMessage: requestConfig?.errorMessage,
    };

    config.headers = { Authorization: `Bearer ${getToken()}` };
    const response = await apiClient.post(url, data, config);

    return response;
};

export const executeHttpDeleteAuthorized = async (url: string, data?: any, requestConfig?: RequestConfig) => {
    let config: GyroAxiosRequestConfig = {
        successMessage: requestConfig?.successMessage,
        errorMessage: requestConfig?.errorMessage,
        data: data,
    };

    config.headers = { Authorization: `Bearer ${getToken()}` };
    const response = await apiClient.delete(url, config);

    return response;
};

export const executeUnauthorizedRequest = async (request: Promise<any>) => {
    try {
        await request;
    } catch (e) {
        devConsoleLog(e);
    }
};
