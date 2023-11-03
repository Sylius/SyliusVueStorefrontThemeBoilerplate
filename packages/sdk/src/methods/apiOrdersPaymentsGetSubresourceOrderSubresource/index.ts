import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function apiOrdersPaymentsGetSubresourceOrderSubresource(...params: Parameters<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']>('apiOrdersPaymentsGetSubresourceOrderSubresource', ...params);
return data
}
