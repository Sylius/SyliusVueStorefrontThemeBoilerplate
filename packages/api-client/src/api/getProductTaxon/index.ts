import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductTaxonApi } from "sylius-ts-sdk";


export const getProductTaxon: Endpoints['getProductTaxon'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductTaxonApi['shopGetProductTaxonItem']>): Promise<TInferFromPromise<ReturnType<ProductTaxonApi['shopGetProductTaxonItem']>>['data']> => {
      const {data} = await context.client<ProductTaxonApi>(ProductTaxonApi).shopGetProductTaxonItem(...params)
      return data
    };
