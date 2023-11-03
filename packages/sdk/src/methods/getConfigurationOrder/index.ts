import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function getConfigurationOrder(...params: Parameters<OrderApi['getConfigurationOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['getConfigurationOrderItem']>>['data']>('getConfigurationOrder', ...params);
return data
}
