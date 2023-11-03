import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AdjustmentApi } from "sylius-ts-sdk";


export const apiOrdersAdjustmentsGetSubresourceOrderItemSubresource: Endpoints['apiOrdersAdjustmentsGetSubresourceOrderItemSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']> => {
      const {data} = await context.client<AdjustmentApi>(AdjustmentApi).apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource(...params)
      return data
    };
