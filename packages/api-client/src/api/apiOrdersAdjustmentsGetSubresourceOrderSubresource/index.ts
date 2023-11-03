import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const apiOrdersAdjustmentsGetSubresourceOrderSubresource: Endpoints['apiOrdersAdjustmentsGetSubresourceOrderSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).apiOrdersAdjustmentsGetSubresourceOrderSubresource(...params)
      return data
    };
