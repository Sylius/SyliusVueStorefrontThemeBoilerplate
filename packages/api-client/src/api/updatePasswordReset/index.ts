import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AccountResetPasswordRequestApi } from "sylius-ts-sdk";


export const updatePasswordReset: Endpoints['updatePasswordReset'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>>['data']> => {
      const {data} = await context.client<AccountResetPasswordRequestApi>(AccountResetPasswordRequestApi).shopUpdateResetPasswordRequestAccountResetPasswordRequestItem(...params)
      return data
    };
