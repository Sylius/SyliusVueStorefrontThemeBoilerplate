import {client, TInferFromPromise} from '../../client';
import { CatalogPromotionApi } from "sylius-ts-sdk";

export async function getCatalogPromotion(...params: Parameters<CatalogPromotionApi['shopGetCatalogPromotionItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CatalogPromotionApi['shopGetCatalogPromotionItem']>>['data']>('getCatalogPromotion', ...params);
return data
}
