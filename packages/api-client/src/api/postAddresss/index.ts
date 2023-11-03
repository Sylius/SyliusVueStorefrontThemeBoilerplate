import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AddressApi } from "sylius-ts-sdk";


export const postAddresss: Endpoints['postAddresss'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPostAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPostAddressCollection']>>['data']> => {
      const {data} = await context.client<AddressApi>(AddressApi).shopPostAddressCollection(...params)
      return data
    };
