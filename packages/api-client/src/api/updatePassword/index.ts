import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CustomerApi } from "sylius-ts-sdk";


export const updatePassword: Endpoints['updatePassword'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPasswordUpdateCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPasswordUpdateCustomerItem']>>['data']> => {
      const {data} = await context.client<CustomerApi>(CustomerApi).shopPasswordUpdateCustomerItem(...params)
      return data
    };
