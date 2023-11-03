import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const deleteOrder: Endpoints['deleteOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopDeleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopDeleteOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopDeleteOrderItem(...params)
      return data
    };
