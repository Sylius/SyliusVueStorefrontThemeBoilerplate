import {client, TInferFromPromise} from '../../client';
import { OrderItemApi } from "sylius-ts-sdk";

export async function getOrderItem(...params: Parameters<OrderItemApi['shopGetOrderItemItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderItemApi['shopGetOrderItemItem']>>['data']>('getOrderItem', ...params);
return data
}
