import {client, TInferFromPromise} from '../../client';
import { CurrencyApi } from "sylius-ts-sdk";

export async function getCurrencys(...params: Parameters<CurrencyApi['shopGetCurrencyCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyCollection']>>['data']>('getCurrencys', ...params);
return data
}
