import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ShopBillingDataApi } from "sylius-ts-sdk";


export const apiChannelsShopBillingDataGetSubresourceChannelSubresource: Endpoints['apiChannelsShopBillingDataGetSubresourceChannelSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>): Promise<TInferFromPromise<ReturnType<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']> => {
      const {data} = await context.client<ShopBillingDataApi>(ShopBillingDataApi).apiChannelsShopBillingDataGetSubresourceChannelSubresource(...params)
      return data
    };
