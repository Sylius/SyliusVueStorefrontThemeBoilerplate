import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ChannelApi } from "sylius-ts-sdk";


export const getChannel: Endpoints['getChannel'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelItem']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelItem']>>['data']> => {
      const {data} = await context.client<ChannelApi>(ChannelApi).shopGetChannelItem(...params)
      return data
    };
