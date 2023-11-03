import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CustomerApi } from "sylius-ts-sdk";


export const createCustomer: Endpoints['createCustomer'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPostCustomerCollection']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPostCustomerCollection']>>['data']> => {
      const {data} = await context.client<CustomerApi>(CustomerApi).shopPostCustomerCollection(...params)
      return data
    };
