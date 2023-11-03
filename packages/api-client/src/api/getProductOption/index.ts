import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductOptionApi } from "sylius-ts-sdk";


export const getProductOption: Endpoints['getProductOption'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['shopGetProductOptionItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['shopGetProductOptionItem']>>['data']> => {
      const {data} = await context.client<ProductOptionApi>(ProductOptionApi).shopGetProductOptionItem(...params)
      return data
    };
