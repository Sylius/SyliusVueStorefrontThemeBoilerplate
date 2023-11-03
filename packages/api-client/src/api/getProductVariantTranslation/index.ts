import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductVariantTranslationApi } from "sylius-ts-sdk";


export const getProductVariantTranslation: Endpoints['getProductVariantTranslation'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>>['data']> => {
      const {data} = await context.client<ProductVariantTranslationApi>(ProductVariantTranslationApi).shopGetProductVariantTranslationItem(...params)
      return data
    };
