import {client, TInferFromPromise} from '../../client';
import { ShippingMethodTranslationApi } from "sylius-ts-sdk";

export async function getShippingMethodTranslation(...params: Parameters<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>>['data']>('getShippingMethodTranslation', ...params);
return data
}
