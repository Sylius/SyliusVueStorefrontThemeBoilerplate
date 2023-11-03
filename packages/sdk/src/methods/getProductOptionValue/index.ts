import {client, TInferFromPromise} from '../../client';
import { ProductOptionValueApi } from "sylius-ts-sdk";

export async function getProductOptionValue(...params: Parameters<ProductOptionValueApi['shopGetProductOptionValueItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductOptionValueApi['shopGetProductOptionValueItem']>>['data']>('getProductOptionValue', ...params);
return data
}
