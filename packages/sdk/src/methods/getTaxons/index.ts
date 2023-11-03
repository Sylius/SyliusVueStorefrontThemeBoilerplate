import {client, TInferFromPromise} from '../../client';
import { TaxonApi } from "sylius-ts-sdk";

export async function getTaxons(...params: Parameters<TaxonApi['shopGetTaxonCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonCollection']>>['data']>('getTaxons', ...params);
return data
}
