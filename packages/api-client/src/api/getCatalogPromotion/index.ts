import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CatalogPromotionApi } from "sylius-ts-sdk";


export const getCatalogPromotion: Endpoints['getCatalogPromotion'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CatalogPromotionApi['shopGetCatalogPromotionItem']>): Promise<TInferFromPromise<ReturnType<CatalogPromotionApi['shopGetCatalogPromotionItem']>>['data']> => {
      const {data} = await context.client<CatalogPromotionApi>(CatalogPromotionApi).shopGetCatalogPromotionItem(...params)
      return data
    };
