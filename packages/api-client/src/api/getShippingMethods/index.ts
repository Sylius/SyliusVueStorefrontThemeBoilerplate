import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ShippingMethodApi } from "sylius-ts-sdk";


export const getShippingMethods: Endpoints['getShippingMethods'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodCollection']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodCollection']>>['data']> => {
      const {data} = await context.client<ShippingMethodApi>(ShippingMethodApi).shopGetShippingMethodCollection(...params)
      return data
    };
