import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios";

import {API_URL} from "@/lib/configs/global";

import {ApiError} from "@/lib/types/http-errors.interface";
import {errorHandler, networkErrorStrategy} from "@/lib/services/http/http-errors-strategies";


const instance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error?.response) {
            const statusCode = error?.response?.status;
            if (statusCode >= 400) {
                const errorData: ApiError = error.response?.data;
                if (errorHandler[statusCode]) {
                    errorHandler[statusCode](errorData);
                } else {
                    errorHandler[999](errorData);
                }
            }
        } else {
            networkErrorStrategy();
        }
        return Promise.reject(error);
    }
);

async function apiBase<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse = await instance(url, options);
    return response.data as T;
}

async function readData<T>(url: string, headers?: AxiosRequestHeaders): Promise<T> {
    const options: AxiosRequestConfig = {
        headers: headers,
        method: 'GET'
    }
    return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(url: string, data: TModel, headers?: AxiosRequestHeaders): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers: headers,
        data: JSON.stringify(data)
    };
    return await apiBase<TResult>(url, options);
}

async function updateData<TModel, TResult>(url: string, data: TModel, headers?: AxiosRequestHeaders): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'PUT',
        headers: headers,
        data: JSON.stringify(data)
    };
    return await apiBase<TResult>(url, options);
}

async function deleteData(url: string, headers?: AxiosRequestHeaders): Promise<void> {
    const options: AxiosRequestConfig = {
        method: "DELETE",
        headers: headers,
    };
    return await apiBase(url, options);
}

export const httpService = {
    get: readData,
    put: updateData,
    delete: deleteData,
    post: createData,
}

