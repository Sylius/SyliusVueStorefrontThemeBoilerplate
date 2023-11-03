import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function createCustomer(...params: Parameters<CustomerApi['shopPostCustomerCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPostCustomerCollection']>>['data']>('createCustomer', ...params);
return data
}
