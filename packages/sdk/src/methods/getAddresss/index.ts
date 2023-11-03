import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function getAddresss(...params: Parameters<AddressApi['shopGetAddressCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopGetAddressCollection']>>['data']>('getAddresss', ...params);
return data
}
