import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const apiOrderssGetSubresourceOrderSubresource: Endpoints['apiOrderssGetSubresourceOrderSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).apiOrdersItemsGetSubresourceOrderSubresource(...params)
      return data
    };
