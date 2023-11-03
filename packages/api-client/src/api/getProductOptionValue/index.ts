import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductOptionValueApi } from "sylius-ts-sdk";


export const getProductOptionValue: Endpoints['getProductOptionValue'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductOptionValueApi['shopGetProductOptionValueItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionValueApi['shopGetProductOptionValueItem']>>['data']> => {
      const {data} = await context.client<ProductOptionValueApi>(ProductOptionValueApi).shopGetProductOptionValueItem(...params)
      return data
    };
