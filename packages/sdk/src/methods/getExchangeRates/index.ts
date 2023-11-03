import {client, TInferFromPromise} from '../../client';
import { ExchangeRateApi } from "sylius-ts-sdk";

export async function getExchangeRates(...params: Parameters<ExchangeRateApi['shopGetExchangeRateCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateCollection']>>['data']>('getExchangeRates', ...params);
return data
}
