import {client, TInferFromPromise} from '../../client';
import { ProvinceApi } from "sylius-ts-sdk";

export async function apiCountriesProvincesGetSubresourceCountrySubresource(...params: Parameters<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']>('apiCountriesProvincesGetSubresourceCountrySubresource', ...params);
return data
}
