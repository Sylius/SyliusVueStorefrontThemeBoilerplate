import {client, TInferFromPromise} from '../../client';
import { AccountResetPasswordRequestApi } from "sylius-ts-sdk";

export async function requestPasswordReset(...params: Parameters<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>>['data']>('requestPasswordReset', ...params);
return data
}
