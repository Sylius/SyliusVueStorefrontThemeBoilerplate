import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const changePaymentMethod: Endpoints['changePaymentMethod'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAccountChangePaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAccountChangePaymentMethodOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopAccountChangePaymentMethodOrderItem(...params)
      return data
    };
