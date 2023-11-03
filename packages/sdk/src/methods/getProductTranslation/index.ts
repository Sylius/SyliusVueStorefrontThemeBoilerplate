import {client, TInferFromPromise} from '../../client';
import { ProductTranslationApi } from "sylius-ts-sdk";

export async function getProductTranslation(...params: Parameters<ProductTranslationApi['shopGetProductTranslationItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductTranslationApi['shopGetProductTranslationItem']>>['data']>('getProductTranslation', ...params);
return data
}
