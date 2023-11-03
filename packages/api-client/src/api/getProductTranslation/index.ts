import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductTranslationApi } from "sylius-ts-sdk";


export const getProductTranslation: Endpoints['getProductTranslation'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductTranslationApi['shopGetProductTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductTranslationApi['shopGetProductTranslationItem']>>['data']> => {
      const {data} = await context.client<ProductTranslationApi>(ProductTranslationApi).shopGetProductTranslationItem(...params)
      return data
    };
