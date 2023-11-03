import {client, TInferFromPromise} from '../../client';
import { OrderItemUnitApi } from "sylius-ts-sdk";

export async function getOrderUnitItem(...params: Parameters<OrderItemUnitApi['shopGetOrderItemUnitItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderItemUnitApi['shopGetOrderItemUnitItem']>>['data']>('getOrderUnitItem', ...params);
return data
}
