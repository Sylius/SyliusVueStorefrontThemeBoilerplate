import {client, TInferFromPromise} from '../../client';
import { ShopBillingDataApi } from "sylius-ts-sdk";

export async function apiChannelsShopBillingDataGetSubresourceChannelSubresource(...params: Parameters<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']>('apiChannelsShopBillingDataGetSubresourceChannelSubresource', ...params);
return data
}
