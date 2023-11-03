import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function postOrders(...params: Parameters<OrderApi['shopPostOrderCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopPostOrderCollection']>>['data']>('postOrders', ...params);
return data
}
