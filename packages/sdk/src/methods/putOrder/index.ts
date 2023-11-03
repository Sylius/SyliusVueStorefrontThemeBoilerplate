import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function putOrder(...params: Parameters<OrderApi['shopPutOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopPutOrderItem']>>['data']>('putOrder', ...params);
return data
}
