import axios, { AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

export const api = axios.create({ baseURL: process.env.REACT_APP_API_PATH });

interface ResponseData<D> {
  data: D;
}

interface Response<Data> {
  data?: Data;
}

export const request = {
  get: function get<D>(url: string, arg?: SWRConfiguration): Response<D> {
    const response = useSWR<ResponseData<D>>(url, api.get, arg);
    return { data: response.data?.data };
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: async function post<D, Body = any>(url: string, body?: Body): Promise<AxiosResponse<D>> {
    const response = await api.post(url, body);
    return response;
  },
};
