import {client, TInferFromPromise} from '../../client';
import { ProductApi } from "sylius-ts-sdk";

export async function getBySlugProduct(...params: Parameters<ProductApi['shopGetBySlugProductItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductApi['shopGetBySlugProductItem']>>['data']>('getBySlugProduct', ...params);
return data
}
