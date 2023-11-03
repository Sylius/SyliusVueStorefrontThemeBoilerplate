import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { VerifyCustomerAccountApi } from "sylius-ts-sdk";


export const resendVerificationEmailVerifyCustomerAccounts: Endpoints['resendVerificationEmailVerifyCustomerAccounts'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>>['data']> => {
      const {data} = await context.client<VerifyCustomerAccountApi>(VerifyCustomerAccountApi).shopResendVerificationEmailVerifyCustomerAccountCollection(...params)
      return data
    };
