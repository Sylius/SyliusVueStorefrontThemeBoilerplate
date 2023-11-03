import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function getOrder(...params: Parameters<OrderApi['shopGetOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopGetOrderItem']>>['data']>('getOrder', ...params);
return data
}
