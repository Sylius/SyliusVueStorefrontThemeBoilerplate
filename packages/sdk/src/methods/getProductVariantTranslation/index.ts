import {client, TInferFromPromise} from '../../client';
import { ProductVariantTranslationApi } from "sylius-ts-sdk";

export async function getProductVariantTranslation(...params: Parameters<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>>['data']>('getProductVariantTranslation', ...params);
return data
}
