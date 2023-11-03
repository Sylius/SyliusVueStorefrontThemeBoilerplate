import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const removeOrderItem: Endpoints['removeOrderItem'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopRemoveItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopRemoveItemOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopRemoveItemOrderItem(...params)
      return data
    };
