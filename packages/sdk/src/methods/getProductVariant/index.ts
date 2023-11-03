import {client, TInferFromPromise} from '../../client';
import { ProductVariantApi } from "sylius-ts-sdk";

export async function getProductVariant(...params: Parameters<ProductVariantApi['shopGetProductVariantItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantItem']>>['data']>('getProductVariant', ...params);
return data
}
