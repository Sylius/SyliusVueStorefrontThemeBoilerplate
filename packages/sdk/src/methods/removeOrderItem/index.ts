import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function removeOrderItem(...params: Parameters<OrderApi['shopRemoveItemOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopRemoveItemOrderItem']>>['data']>('removeOrderItem', ...params);
return data
}
