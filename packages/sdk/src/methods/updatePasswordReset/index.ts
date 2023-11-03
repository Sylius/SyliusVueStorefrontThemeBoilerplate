import {client, TInferFromPromise} from '../../client';
import { AccountResetPasswordRequestApi } from "sylius-ts-sdk";

export async function updatePasswordReset(...params: Parameters<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>>['data']>('updatePasswordReset', ...params);
return data
}
