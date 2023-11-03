import {client, TInferFromPromise} from '../../client';
import { CustomerApi } from "sylius-ts-sdk";

export async function updatePassword(...params: Parameters<CustomerApi['shopPasswordUpdateCustomerItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CustomerApi['shopPasswordUpdateCustomerItem']>>['data']>('updatePassword', ...params);
return data
}
