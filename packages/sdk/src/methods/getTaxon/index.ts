import {client, TInferFromPromise} from '../../client';
import { TaxonApi } from "sylius-ts-sdk";

export async function getTaxon(...params: Parameters<TaxonApi['shopGetTaxonItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonItem']>>['data']>('getTaxon', ...params);
return data
}
