import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { LocaleApi } from "sylius-ts-sdk";


export const getLocale: Endpoints['getLocale'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleItem']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleItem']>>['data']> => {
      const {data} = await context.client<LocaleApi>(LocaleApi).shopGetLocaleItem(...params)
      return data
    };
