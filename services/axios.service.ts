import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const HEADER_DATA_FORM_FILE = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
};

class FormDataService {
    axios: any;
    constructor(axios: any) {
        this.axios = axios;
    }

    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.axios.post(url, data, config);
    }
}

const defaultConfig = (headers: any) => ({
    baseURL: process.env.BASE_URL,
    headers: { ...headers },
    withCredentials: true,
});

const configInterceptors = (axiosClient: any) => {
    axiosClient.interceptors.response.use(
        (res: AxiosResponse) => res.data,
        (res: any) => Promise.reject(res.response?.data)
    );
    return axiosClient;
};

const axiosClientFormFile = configInterceptors(
    axios.create(defaultConfig(HEADER_DATA_FORM_FILE))
);

export const ApiClientFormFile = new FormDataService(axiosClientFormFile);