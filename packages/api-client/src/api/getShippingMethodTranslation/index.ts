import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ShippingMethodTranslationApi } from "sylius-ts-sdk";


export const getShippingMethodTranslation: Endpoints['getShippingMethodTranslation'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>>['data']> => {
      const {data} = await context.client<ShippingMethodTranslationApi>(ShippingMethodTranslationApi).shopGetShippingMethodTranslationItem(...params)
      return data
    };
