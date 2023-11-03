import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function postCustomers(...params: Parameters<CustomerApi['shopPostCustomerCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPostCustomerCollection']>>['data']>('postCustomers', ...params);
return data
}
