import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CustomerApi } from "sylius-ts-sdk";


export const getCustomer: Endpoints['getCustomer'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopGetCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopGetCustomerItem']>>['data']> => {
      const {data} = await context.client<CustomerApi>(CustomerApi).shopGetCustomerItem(...params)
      return data
    };
