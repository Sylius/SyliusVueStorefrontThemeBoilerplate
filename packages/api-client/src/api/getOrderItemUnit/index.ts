import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderItemUnitApi } from "sylius-ts-sdk";


export const getOrderItemUnit: Endpoints['getOrderItemUnit'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderItemUnitApi['shopGetOrderItemUnitItem']>): Promise<TInferFromPromise<ReturnType<OrderItemUnitApi['shopGetOrderItemUnitItem']>>['data']> => {
      const {data} = await context.client<OrderItemUnitApi>(OrderItemUnitApi).shopGetOrderItemUnitItem(...params)
      return data
    };
