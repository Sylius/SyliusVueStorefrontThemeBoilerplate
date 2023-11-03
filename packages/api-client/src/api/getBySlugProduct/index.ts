import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductApi } from "sylius-ts-sdk";


export const getBySlugProduct: Endpoints['getBySlugProduct'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetBySlugProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetBySlugProductItem']>>['data']> => {
      const {data} = await context.client<ProductApi>(ProductApi).shopGetBySlugProductItem(...params)
      return data
    };
