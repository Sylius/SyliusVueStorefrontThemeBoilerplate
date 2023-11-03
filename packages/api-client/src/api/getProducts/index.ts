import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductApi } from "sylius-ts-sdk";


export const getProducts: Endpoints['getProducts'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductCollection']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductCollection']>>['data']> => {
      const {data} = await context.client<ProductApi>(ProductApi).shopGetProductCollection(...params)
      return data
    };
