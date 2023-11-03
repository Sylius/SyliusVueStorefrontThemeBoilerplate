import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const selectShippingMethod: Endpoints['selectShippingMethod'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectShippingMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectShippingMethodOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopSelectShippingMethodOrderItem(...params)
      return data
    };
