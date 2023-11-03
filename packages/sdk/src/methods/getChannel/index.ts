import {client, TInferFromPromise} from '../../client';
import { ChannelApi } from "sylius-ts-sdk";

export async function getChannel(...params: Parameters<ChannelApi['shopGetChannelItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelItem']>>['data']>('getChannel', ...params);
return data
}
