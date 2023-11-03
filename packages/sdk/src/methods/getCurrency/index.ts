import {client, TInferFromPromise} from '../../client';
import { CurrencyApi } from "sylius-ts-sdk";

export async function getCurrency(...params: Parameters<CurrencyApi['shopGetCurrencyItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyItem']>>['data']>('getCurrency', ...params);
return data
}
