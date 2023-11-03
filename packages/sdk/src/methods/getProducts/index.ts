import {client, TInferFromPromise} from '../../client';
import { ProductApi } from "sylius-ts-sdk";

export async function getProducts(...params: Parameters<ProductApi['shopGetProductCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductApi['shopGetProductCollection']>>['data']>('getProducts', ...params);
return data
}
