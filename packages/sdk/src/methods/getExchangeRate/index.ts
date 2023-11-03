import {client, TInferFromPromise} from '../../client';
import { ExchangeRateApi } from "sylius-ts-sdk";

export async function getExchangeRate(...params: Parameters<ExchangeRateApi['shopGetExchangeRateItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateItem']>>['data']>('getExchangeRate', ...params);
return data
}
