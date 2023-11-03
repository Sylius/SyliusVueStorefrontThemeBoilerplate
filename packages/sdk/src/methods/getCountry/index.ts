import {client, TInferFromPromise} from '../../client';
import { CountryApi } from "sylius-ts-sdk";

export async function getCountry(...params: Parameters<CountryApi['shopGetCountryItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CountryApi['shopGetCountryItem']>>['data']>('getCountry', ...params);
return data
}
