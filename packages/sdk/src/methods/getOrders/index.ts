import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function getOrders(...params: Parameters<OrderApi['shopGetOrderCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopGetOrderCollection']>>['data']>('getOrders', ...params);
return data
}
