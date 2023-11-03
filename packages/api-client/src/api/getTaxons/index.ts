import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { TaxonApi } from "sylius-ts-sdk";


export const getTaxons: Endpoints['getTaxons'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonCollection']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonCollection']>>['data']> => {
      const {data} = await context.client<TaxonApi>(TaxonApi).shopGetTaxonCollection(...params)
      return data
    };
