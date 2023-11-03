import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function selectPaymentMethodOrder(...params: Parameters<OrderApi['shopSelectPaymentMethodOrderItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['shopSelectPaymentMethodOrderItem']>>['data']>('selectPaymentMethodOrder', ...params);
return data
}
