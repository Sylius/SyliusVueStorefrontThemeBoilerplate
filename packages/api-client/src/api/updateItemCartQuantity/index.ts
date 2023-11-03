import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const updateItemCartQuantity: Endpoints['updateItemCartQuantity'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopChangeQuantityOrderItem(...params)
      return data
    };
