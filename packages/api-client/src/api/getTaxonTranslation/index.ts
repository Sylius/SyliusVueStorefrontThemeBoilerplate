import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { TaxonTranslationApi } from "sylius-ts-sdk";


export const getTaxonTranslation: Endpoints['getTaxonTranslation'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<TaxonTranslationApi['shopGetTaxonTranslationItem']>): Promise<TInferFromPromise<ReturnType<TaxonTranslationApi['shopGetTaxonTranslationItem']>>['data']> => {
      const {data} = await context.client<TaxonTranslationApi>(TaxonTranslationApi).shopGetTaxonTranslationItem(...params)
      return data
    };
