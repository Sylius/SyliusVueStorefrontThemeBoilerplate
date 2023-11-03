import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AdjustmentApi } from "sylius-ts-sdk";


export const apiOrderssAdjustmentsGetSubresourceOrderSubresource: Endpoints['apiOrderssAdjustmentsGetSubresourceOrderSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']> => {
      const {data} = await context.client<AdjustmentApi>(AdjustmentApi).apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource(...params)
      return data
    };
