import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const changeQuantityOrder: Endpoints['changeQuantityOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopChangeQuantityOrderItem(...params)
      return data
    };
