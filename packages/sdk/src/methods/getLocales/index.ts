import {client, TInferFromPromise} from '../../client';
import { LocaleApi } from "sylius-ts-sdk";

export async function getLocales(...params: Parameters<LocaleApi['shopGetLocaleCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleCollection']>>['data']>('getLocales', ...params);
return data
}
