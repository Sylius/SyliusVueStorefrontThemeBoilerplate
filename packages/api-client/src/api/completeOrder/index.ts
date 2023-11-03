import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const completeOrder: Endpoints['completeOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopCompleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopCompleteOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopCompleteOrderItem(...params)
      return data
    };
