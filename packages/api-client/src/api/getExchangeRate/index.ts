import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ExchangeRateApi } from "sylius-ts-sdk";


export const getExchangeRate: Endpoints['getExchangeRate'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateItem']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateItem']>>['data']> => {
      const {data} = await context.client<ExchangeRateApi>(ExchangeRateApi).shopGetExchangeRateItem(...params)
      return data
    };
