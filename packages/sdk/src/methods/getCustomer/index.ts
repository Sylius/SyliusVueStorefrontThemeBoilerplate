import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function getCustomer(...params: Parameters<CustomerApi['shopGetCustomerItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopGetCustomerItem']>>['data']>('getCustomer', ...params);
return data
}
