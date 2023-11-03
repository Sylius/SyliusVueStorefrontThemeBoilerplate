import {client, TInferFromPromise} from '../../client';
import { ProductApi } from "sylius-ts-sdk";

export async function getProduct(...params: Parameters<ProductApi['shopGetProductItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductApi['shopGetProductItem']>>['data']>('getProduct', ...params);
return data
}
