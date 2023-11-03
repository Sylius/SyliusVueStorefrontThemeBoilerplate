import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CountryApi } from "sylius-ts-sdk";


export const getCountries: Endpoints['getCountries'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryCollection']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryCollection']>>['data']> => {
      const {data} = await context.client<CountryApi>(CountryApi).shopGetCountryCollection(...params)
      return data
    };
