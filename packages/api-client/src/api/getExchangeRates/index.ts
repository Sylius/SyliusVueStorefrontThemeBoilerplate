import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ExchangeRateApi } from "sylius-ts-sdk";


export const getExchangeRates: Endpoints['getExchangeRates'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateCollection']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateCollection']>>['data']> => {
      const {data} = await context.client<ExchangeRateApi>(ExchangeRateApi).shopGetExchangeRateCollection(...params)
      return data
    };
