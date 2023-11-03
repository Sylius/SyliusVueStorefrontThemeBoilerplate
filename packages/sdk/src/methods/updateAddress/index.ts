import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function updateAddress(...params: Parameters<AddressApi['shopPutAddressItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopPutAddressItem']>>['data']>('updateAddress', ...params);
return data
}
