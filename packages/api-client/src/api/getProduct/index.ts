import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductApi } from "sylius-ts-sdk";


export const getProduct: Endpoints['getProduct'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductItem']>>['data']> => {
      const {data} = await context.client<ProductApi>(ProductApi).shopGetProductItem(...params)
      return data
    };
