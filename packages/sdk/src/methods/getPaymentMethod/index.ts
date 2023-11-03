import {client, TInferFromPromise} from '../../client';
import { PaymentMethodApi } from "sylius-ts-sdk";

export async function getPaymentMethod(...params: Parameters<PaymentMethodApi['shopGetPaymentMethodItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodItem']>>['data']>('getPaymentMethod', ...params);
return data
}
