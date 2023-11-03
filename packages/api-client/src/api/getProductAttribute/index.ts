import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductAttributeApi } from "sylius-ts-sdk";


export const getProductAttribute: Endpoints['getProductAttribute'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeApi['shopGetProductAttributeItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeApi['shopGetProductAttributeItem']>>['data']> => {
      const {data} = await context.client<ProductAttributeApi>(ProductAttributeApi).shopGetProductAttributeItem(...params)
      return data
    };
