import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function updateCustomer(...params: Parameters<CustomerApi['shopPutCustomerItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPutCustomerItem']>>['data']>('updateCustomer', ...params);
return data
}
