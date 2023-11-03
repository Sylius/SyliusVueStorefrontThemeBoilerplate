import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function putAddress(...params: Parameters<AddressApi['shopPutAddressItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopPutAddressItem']>>['data']>('putAddress', ...params);
return data
}
