import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const apiOrdersPaymentsGetSubresourceOrderSubresource: Endpoints['apiOrdersPaymentsGetSubresourceOrderSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).apiOrdersPaymentsGetSubresourceOrderSubresource(...params)
      return data
    };
