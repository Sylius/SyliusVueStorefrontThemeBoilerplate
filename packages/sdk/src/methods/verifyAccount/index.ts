import {client, TInferFromPromise} from '../../client';
import { VerifyCustomerAccountApi } from "sylius-ts-sdk";

export async function verifyAccount(...params: Parameters<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>>['data']>('verifyAccount', ...params);
return data
}
