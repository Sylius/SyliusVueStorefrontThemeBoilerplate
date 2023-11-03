import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function passwordUpdateCustomer(...params: Parameters<CustomerApi['shopPasswordUpdateCustomerItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPasswordUpdateCustomerItem']>>['data']>('passwordUpdateCustomer', ...params);
return data
}
