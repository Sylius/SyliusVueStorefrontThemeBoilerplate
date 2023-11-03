import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ShippingMethodApi } from "sylius-ts-sdk";


export const getShippingMethod: Endpoints['getShippingMethod'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodItem']>>['data']> => {
      const {data} = await context.client<ShippingMethodApi>(ShippingMethodApi).shopGetShippingMethodItem(...params)
      return data
    };
