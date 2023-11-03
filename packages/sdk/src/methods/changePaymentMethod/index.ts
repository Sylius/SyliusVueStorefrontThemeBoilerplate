import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function changePaymentMethod(...params: Parameters<OrderApi['shopAccountChangePaymentMethodOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopAccountChangePaymentMethodOrderItem']>>['data']>('changePaymentMethod', ...params);
return data
}
