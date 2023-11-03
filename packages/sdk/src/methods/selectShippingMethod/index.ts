import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function selectShippingMethod(...params: Parameters<OrderApi['shopSelectShippingMethodOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopSelectShippingMethodOrderItem']>>['data']>('selectShippingMethod', ...params);
return data
}
