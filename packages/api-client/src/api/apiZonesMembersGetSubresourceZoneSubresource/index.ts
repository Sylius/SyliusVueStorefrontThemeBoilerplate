import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ZoneApi } from "sylius-ts-sdk";


export const apiZonesMembersGetSubresourceZoneSubresource: Endpoints['apiZonesMembersGetSubresourceZoneSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>): Promise<TInferFromPromise<ReturnType<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']> => {
      const {data} = await context.client<ZoneApi>(ZoneApi).apiZonesMembersGetSubresourceZoneSubresource(...params)
      return data
    };
