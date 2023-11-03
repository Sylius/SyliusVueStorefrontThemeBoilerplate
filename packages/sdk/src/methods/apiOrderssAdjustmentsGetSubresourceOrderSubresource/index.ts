import {client, TInferFromPromise} from '../../client';
import { AdjustmentApi } from "sylius-ts-sdk";

export async function apiOrderssAdjustmentsGetSubresourceOrderSubresource(...params: Parameters<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']>('apiOrderssAdjustmentsGetSubresourceOrderSubresource', ...params);
return data
}
