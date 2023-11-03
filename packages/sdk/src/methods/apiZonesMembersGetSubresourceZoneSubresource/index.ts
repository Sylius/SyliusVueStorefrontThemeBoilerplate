import {client, TInferFromPromise} from '../../client';
import { ZoneApi } from "sylius-ts-sdk";

export async function apiZonesMembersGetSubresourceZoneSubresource(...params: Parameters<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']>('apiZonesMembersGetSubresourceZoneSubresource', ...params);
return data
}
