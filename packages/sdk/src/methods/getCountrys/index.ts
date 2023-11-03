import {client, TInferFromPromise} from '../../client';
import { CountryApi } from "sylius-ts-sdk";

export async function getCountrys(...params: Parameters<CountryApi['shopGetCountryCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CountryApi['shopGetCountryCollection']>>['data']>('getCountrys', ...params);
return data
}
