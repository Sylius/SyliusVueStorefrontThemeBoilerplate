import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AddressApi } from "sylius-ts-sdk";


export const getAddresss: Endpoints['getAddresss'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressCollection']>>['data']> => {
      const {data} = await context.client<AddressApi>(AddressApi).shopGetAddressCollection(...params)
      return data
    };
