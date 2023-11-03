import {client, TInferFromPromise} from '../../client';
import { ProductOptionApi } from "sylius-ts-sdk";

export async function getProductOption(...params: Parameters<ProductOptionApi['shopGetProductOptionItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductOptionApi['shopGetProductOptionItem']>>['data']>('getProductOption', ...params);
return data
}
