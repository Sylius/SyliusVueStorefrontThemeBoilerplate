import {client, TInferFromPromise} from '../../client';
import { ShippingMethodApi } from "sylius-ts-sdk";

export async function getShippingMethod(...params: Parameters<ShippingMethodApi['shopGetShippingMethodItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodItem']>>['data']>('getShippingMethod', ...params);
return data
}
