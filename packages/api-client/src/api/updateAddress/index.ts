import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AddressApi } from "sylius-ts-sdk";


export const updateAddress: Endpoints['updateAddress'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPutAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPutAddressItem']>>['data']> => {
      const {data} = await context.client<AddressApi>(AddressApi).shopPutAddressItem(...params)
      return data
    };
