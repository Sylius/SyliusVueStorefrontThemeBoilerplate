import {client, TInferFromPromise} from '../../client';
import { PaymentMethodApi } from "sylius-ts-sdk";

export async function getPaymentMethods(...params: Parameters<PaymentMethodApi['shopGetPaymentMethodCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodCollection']>>['data']>('getPaymentMethods', ...params);
return data
}
