import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function getAddress(...params: Parameters<AddressApi['shopGetAddressItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopGetAddressItem']>>['data']>('getAddress', ...params);
return data
}
