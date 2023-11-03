import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function addOrderItem(...params: Parameters<OrderApi['shopAddItemOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopAddItemOrderItem']>>['data']>('addOrderItem', ...params);
return data
}
