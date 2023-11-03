import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { LocaleApi } from "sylius-ts-sdk";


export const getLocales: Endpoints['getLocales'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleCollection']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleCollection']>>['data']> => {
      const {data} = await context.client<LocaleApi>(LocaleApi).shopGetLocaleCollection(...params)
      return data
    };
