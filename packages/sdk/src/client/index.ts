import axios, {AxiosResponse} from 'axios';

export type TInferFromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never;
export type TInferFromAxiosResponse<P> = P extends AxiosResponse<infer T> ? T : never;

export const client = axios.create();