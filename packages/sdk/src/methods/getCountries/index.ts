import {client, TInferFromPromise} from '../../client';
import { CountryApi } from "sylius-ts-sdk";

export async function getCountries(...params: Parameters<CountryApi['shopGetCountryCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CountryApi['shopGetCountryCollection']>>['data']>('getCountries', ...params);
return data
}
