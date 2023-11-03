import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function selectPaymentMethod(...params: Parameters<OrderApi['shopSelectPaymentMethodOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopSelectPaymentMethodOrderItem']>>['data']>('selectPaymentMethod', ...params);
return data
}
