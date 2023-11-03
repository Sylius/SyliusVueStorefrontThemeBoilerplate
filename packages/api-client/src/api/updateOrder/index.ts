import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const updateOrder: Endpoints['updateOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPutOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPutOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopPutOrderItem(...params)
      return data
    };
