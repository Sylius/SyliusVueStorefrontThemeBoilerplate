import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductVariantApi } from "sylius-ts-sdk";


export const getProductVariant: Endpoints['getProductVariant'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantItem']>>['data']> => {
      const {data} = await context.client<ProductVariantApi>(ProductVariantApi).shopGetProductVariantItem(...params)
      return data
    };
