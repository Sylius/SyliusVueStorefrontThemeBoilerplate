import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CurrencyApi } from "sylius-ts-sdk";


export const getCurrency: Endpoints['getCurrency'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyItem']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyItem']>>['data']> => {
      const {data} = await context.client<CurrencyApi>(CurrencyApi).shopGetCurrencyItem(...params)
      return data
    };
