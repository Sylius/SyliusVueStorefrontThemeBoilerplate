import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function deleteAddress(...params: Parameters<AddressApi['shopDeleteAddressItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopDeleteAddressItem']>>['data']>('deleteAddress', ...params);
return data
}
