import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";

export async function apiOrdersAdjustmentsGetSubresourceOrderSubresource(...params: Parameters<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']>('apiOrdersAdjustmentsGetSubresourceOrderSubresource', ...params);
return data
}
