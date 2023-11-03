import {client, TInferFromPromise} from '../../client';
import { PaymentApi } from "sylius-ts-sdk";

export async function getPayment(...params: Parameters<PaymentApi['shopGetPaymentItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<PaymentApi['shopGetPaymentItem']>>['data']>('getPayment', ...params);
return data
}
