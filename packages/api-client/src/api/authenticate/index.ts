import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { VerifyCustomerAccountApi } from "sylius-ts-sdk";
import { AuthApi } from '../../auth/auth.api';


export const authenticate: Endpoints['authenticate'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AuthApi['authenticate']>): Promise<TInferFromPromise<ReturnType<AuthApi['authenticate']>>['data']> => {
      const {data} = await context.client<AuthApi>(AuthApi).authenticate({
        email: params[0].email,
        password: params[0].password
      })
      return data
    };
