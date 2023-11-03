import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function accountChangePaymentMethodOrder(...params: Parameters<OrderApi['shopAccountChangePaymentMethodOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopAccountChangePaymentMethodOrderItem']>>['data']>('accountChangePaymentMethodOrder', ...params);
return data
}
