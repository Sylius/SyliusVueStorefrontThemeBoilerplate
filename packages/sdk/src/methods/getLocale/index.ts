import {client, TInferFromPromise} from '../../client';
import { LocaleApi } from "sylius-ts-sdk";

export async function getLocale(...params: Parameters<LocaleApi['shopGetLocaleItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleItem']>>['data']>('getLocale', ...params);
return data
}
