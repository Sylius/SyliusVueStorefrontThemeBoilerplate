import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const getOrder: Endpoints['getOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopGetOrderItem(...params)
      return data
    };
