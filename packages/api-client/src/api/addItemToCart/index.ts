import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const addItemToCart: Endpoints['addItemToCart'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAddItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAddItemOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopAddItemOrderItem(...params)
      return data
    };
