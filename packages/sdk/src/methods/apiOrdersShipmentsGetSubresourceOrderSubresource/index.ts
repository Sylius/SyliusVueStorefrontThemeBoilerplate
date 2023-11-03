import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function apiOrdersShipmentsGetSubresourceOrderSubresource(...params: Parameters<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']>('apiOrdersShipmentsGetSubresourceOrderSubresource', ...params);
return data
}
