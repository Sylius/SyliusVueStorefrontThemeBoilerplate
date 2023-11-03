import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function updateOrder(...params: Parameters<OrderApi['shopPutOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopPutOrderItem']>>['data']>('updateOrder', ...params);
return data
}
