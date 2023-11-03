import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderItemApi } from "sylius-ts-sdk";


export const getOrderItem: Endpoints['getOrderItem'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['shopGetOrderItemItem']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['shopGetOrderItemItem']>>['data']> => {
      const {data} = await context.client<OrderItemApi>(OrderItemApi).shopGetOrderItemItem(...params)
      return data
    };
