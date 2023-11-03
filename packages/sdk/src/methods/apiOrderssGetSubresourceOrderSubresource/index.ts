import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function apiOrderssGetSubresourceOrderSubresource(...params: Parameters<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']>('apiOrderssGetSubresourceOrderSubresource', ...params);
return data
}
