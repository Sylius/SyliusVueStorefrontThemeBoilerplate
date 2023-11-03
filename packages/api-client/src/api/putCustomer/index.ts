import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { CustomerApi } from "sylius-ts-sdk";


export const putCustomer: Endpoints['putCustomer'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPutCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPutCustomerItem']>>['data']> => {
      const {data} = await context.client<CustomerApi>(CustomerApi).shopPutCustomerItem(...params)
      return data
    };
