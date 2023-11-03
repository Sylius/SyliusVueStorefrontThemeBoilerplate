import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { TaxonApi } from "sylius-ts-sdk";


export const getTaxon: Endpoints['getTaxon'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonItem']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonItem']>>['data']> => {
      const {data} = await context.client<TaxonApi>(TaxonApi).shopGetTaxonItem(...params)
      return data
    };
