import {client, TInferFromPromise} from '../../client';
import { ProductTaxonApi } from "sylius-ts-sdk";

export async function getProductTaxon(...params: Parameters<ProductTaxonApi['shopGetProductTaxonItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductTaxonApi['shopGetProductTaxonItem']>>['data']>('getProductTaxon', ...params);
return data
}
