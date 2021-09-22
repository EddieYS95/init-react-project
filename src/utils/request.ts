import axios, { AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

export const api = axios.create({ baseURL: process.env.REACT_APP_API_PATH });

interface ResponseData<D> {
  data: D;
}

interface Response<Data> {
  data?: Data;
  response: SWRResponse<ResponseData<Data>, Error>;
}

export const request = {
  get: function get<D>(url: string, arg?: SWRConfiguration): Response<D> {
    const { data, ...response } = useSWR<ResponseData<D>>(url, api.get, arg);
    return { data: data?.data, response };
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: async function post<D, Body = any>(url: string, body?: Body): Promise<AxiosResponse<D>> {
    const response = await api.post(url, body);
    return response;
  },
};
