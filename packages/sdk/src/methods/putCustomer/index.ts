import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function putCustomer(...params: Parameters<CustomerApi['shopPutCustomerItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPutCustomerItem']>>['data']>('putCustomer', ...params);
return data
}
