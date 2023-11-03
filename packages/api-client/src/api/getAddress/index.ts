import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AddressApi } from "sylius-ts-sdk";


export const getAddress: Endpoints['getAddress'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressItem']>>['data']> => {
      const {data} = await context.client<AddressApi>(AddressApi).shopGetAddressItem(...params)
      return data
    };
