import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function completeOrder(...params: Parameters<OrderApi['shopCompleteOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopCompleteOrderItem']>>['data']>('completeOrder', ...params);
return data
}
