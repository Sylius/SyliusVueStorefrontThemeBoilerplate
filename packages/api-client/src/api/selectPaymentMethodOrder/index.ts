import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const selectPaymentMethodOrder: Endpoints['selectPaymentMethodOrder'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectPaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectPaymentMethodOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).shopSelectPaymentMethodOrderItem(...params)
      return data
    };
