import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function changeQuantityOrder(...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']>('changeQuantityOrder', ...params);
return data
}
