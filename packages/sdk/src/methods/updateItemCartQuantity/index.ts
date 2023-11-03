import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function updateItemCartQuantity(...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']>('updateItemCartQuantity', ...params);
return data
}
