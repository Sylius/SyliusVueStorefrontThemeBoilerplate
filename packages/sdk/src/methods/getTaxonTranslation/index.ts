import {client, TInferFromPromise} from '../../client';
import { TaxonTranslationApi } from "sylius-ts-sdk";

export async function getTaxonTranslation(...params: Parameters<TaxonTranslationApi['shopGetTaxonTranslationItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<TaxonTranslationApi['shopGetTaxonTranslationItem']>>['data']>('getTaxonTranslation', ...params);
return data
}
