import {client, TInferFromPromise} from '../../client';
import { AdjustmentApi } from "sylius-ts-sdk";

export async function apiOrdersAdjustmentsGetSubresourceOrderItemSubresource(...params: Parameters<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']>('apiOrdersAdjustmentsGetSubresourceOrderItemSubresource', ...params);
return data
}
