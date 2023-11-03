import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const apiOrdersShipmentsGetSubresourceOrderSubresource: Endpoints['apiOrdersShipmentsGetSubresourceOrderSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).apiOrdersShipmentsGetSubresourceOrderSubresource(...params)
      return data
    };
