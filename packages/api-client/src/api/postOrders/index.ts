import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const postOrders: Endpoints['postOrders'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPostOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPostOrderCollection']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopPostOrderCollection(...params)
      return data
    };
