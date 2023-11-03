import {client, TInferFromPromise} from '../../client';
import { ProductVariantApi } from "sylius-ts-sdk";

export async function getProductVariants(...params: Parameters<ProductVariantApi['shopGetProductVariantCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantCollection']>>['data']>('getProductVariants', ...params);
return data
}
