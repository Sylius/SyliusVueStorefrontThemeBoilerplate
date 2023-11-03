import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { OrderApi } from "sylius-ts-sdk";


export const getOrderConfiguration: Endpoints['getOrderConfiguration'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<OrderApi['getConfigurationOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['getConfigurationOrderItem']>>['data']> => {
      const {data} = await context.client<OrderApi>(OrderApi).getConfigurationOrderItem(...params)
      return data
    };
