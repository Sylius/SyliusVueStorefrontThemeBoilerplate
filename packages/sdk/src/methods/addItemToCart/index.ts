import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function addItemToCart(...params: Parameters<OrderApi['shopAddItemOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopAddItemOrderItem']>>['data']>('addItemToCart', ...params);
return data
}
