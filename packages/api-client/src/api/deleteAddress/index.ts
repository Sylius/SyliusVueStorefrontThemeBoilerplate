import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AddressApi } from "sylius-ts-sdk";


export const deleteAddress: Endpoints['deleteAddress'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopDeleteAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopDeleteAddressItem']>>['data']> => {
      const {data} = await context.client<AddressApi>(AddressApi).shopDeleteAddressItem(...params)
      return data
    };
