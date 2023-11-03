import {client, TInferFromPromise} from '../../client';
import { ProductApi } from "sylius-ts-sdk";

export async function getProductBySlug(...params: Parameters<ProductApi['shopGetBySlugProductItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductApi['shopGetBySlugProductItem']>>['data']>('getProductBySlug', ...params);
return data
}
