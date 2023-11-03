import {client, TInferFromPromise} from '../../client';
import { ShippingMethodApi } from "sylius-ts-sdk";

export async function getShippingMethods(...params: Parameters<ShippingMethodApi['shopGetShippingMethodCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodCollection']>>['data']>('getShippingMethods', ...params);
return data
}
