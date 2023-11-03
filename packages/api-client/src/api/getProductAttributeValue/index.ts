import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductAttributeValueApi } from "sylius-ts-sdk";


export const getProductAttributeValue: Endpoints['getProductAttributeValue'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeValueApi['shopGetProductAttributeValueItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeValueApi['shopGetProductAttributeValueItem']>>['data']> => {
      const {data} = await context.client<ProductAttributeValueApi>(ProductAttributeValueApi).shopGetProductAttributeValueItem(...params)
      return data
    };
