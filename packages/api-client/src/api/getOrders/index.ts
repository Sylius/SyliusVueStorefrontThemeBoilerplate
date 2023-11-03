import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const getOrders: Endpoints['getOrders'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderCollection']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopGetOrderCollection(...params)
      return data
    };
