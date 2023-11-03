import {client, TInferFromPromise} from '../../client';
import { ChannelApi } from "sylius-ts-sdk";

export async function getChannels(...params: Parameters<ChannelApi['shopGetChannelCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelCollection']>>['data']>('getChannels', ...params);
return data
}
