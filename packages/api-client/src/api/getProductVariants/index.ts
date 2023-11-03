import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductVariantApi } from "sylius-ts-sdk";


export const getProductVariants: Endpoints['getProductVariants'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantCollection']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantCollection']>>['data']> => {
      const {data} = await context.client<ProductVariantApi>(ProductVariantApi).shopGetProductVariantCollection(...params)
      return data
    };
