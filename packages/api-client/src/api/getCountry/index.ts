import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CountryApi } from "sylius-ts-sdk";


export const getCountry: Endpoints['getCountry'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryItem']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryItem']>>['data']> => {
      const {data} = await context.client<CountryApi>(CountryApi).shopGetCountryItem(...params)
      return data
    };
