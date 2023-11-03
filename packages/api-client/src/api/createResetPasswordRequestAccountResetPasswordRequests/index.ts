import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AccountResetPasswordRequestApi } from "sylius-ts-sdk";


export const createResetPasswordRequestAccountResetPasswordRequests: Endpoints['createResetPasswordRequestAccountResetPasswordRequests'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>>['data']> => {
      const {data} = await context.client<AccountResetPasswordRequestApi>(AccountResetPasswordRequestApi).shopCreateResetPasswordRequestAccountResetPasswordRequestCollection(...params)
      return data
    };
