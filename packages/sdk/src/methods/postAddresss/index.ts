import {client, TInferFromPromise} from '../../client';
import { AddressApi } from "sylius-ts-sdk";

export async function postAddresss(...params: Parameters<AddressApi['shopPostAddressCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AddressApi['shopPostAddressCollection']>>['data']>('postAddresss', ...params);
return data
}
