import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { VerifyCustomerAccountApi } from "sylius-ts-sdk";


export const verifyCustomerAccountVerifyCustomerAccount: Endpoints['verifyCustomerAccountVerifyCustomerAccount'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>>['data']> => {
      const {data} = await context.client<VerifyCustomerAccountApi>(VerifyCustomerAccountApi).shopVerifyCustomerAccountVerifyCustomerAccountItem(...params)
      return data
    };
