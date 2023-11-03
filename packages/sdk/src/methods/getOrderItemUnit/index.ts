import {client, TInferFromPromise} from '../../client';
import { OrderItemUnitApi } from "sylius-ts-sdk";

export async function getOrderItemUnit(...params: Parameters<OrderItemUnitApi['shopGetOrderItemUnitItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderItemUnitApi['shopGetOrderItemUnitItem']>>['data']>('getOrderItemUnit', ...params);
return data
}
