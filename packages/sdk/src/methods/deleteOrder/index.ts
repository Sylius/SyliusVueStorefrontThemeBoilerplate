import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function deleteOrder(...params: Parameters<OrderApi['shopDeleteOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopDeleteOrderItem']>>['data']>('deleteOrder', ...params);
return data
}
