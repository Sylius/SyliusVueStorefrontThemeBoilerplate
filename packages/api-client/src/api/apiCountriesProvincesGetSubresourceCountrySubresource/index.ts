import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProvinceApi } from "sylius-ts-sdk";


export const apiCountriesProvincesGetSubresourceCountrySubresource: Endpoints['apiCountriesProvincesGetSubresourceCountrySubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>): Promise<TInferFromPromise<ReturnType<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']> => {
      const {data} = await context.client<ProvinceApi>(ProvinceApi).apiCountriesProvincesGetSubresourceCountrySubresource(...params)
      return data
    };
