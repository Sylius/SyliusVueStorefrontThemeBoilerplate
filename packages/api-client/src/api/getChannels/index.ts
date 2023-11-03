import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ChannelApi } from "sylius-ts-sdk";


export const getChannels: Endpoints['getChannels'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelCollection']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelCollection']>>['data']> => {
      const {data} = await context.client<ChannelApi>(ChannelApi).shopGetChannelCollection(...params)
      return data
    };
