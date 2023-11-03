import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CurrencyApi } from "sylius-ts-sdk";


export const getCurrencys: Endpoints['getCurrencys'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyCollection']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyCollection']>>['data']> => {
      const {data} = await context.client<CurrencyApi>(CurrencyApi).shopGetCurrencyCollection(...params)
      return data
    };
