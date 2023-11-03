import {client, TInferFromPromise} from '../../client';
import { AccountResetPasswordRequestApi } from "sylius-ts-sdk";

export async function updateResetPasswordRequestAccountResetPasswordRequest(...params: Parameters<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>>['data']>('updateResetPasswordRequestAccountResetPasswordRequest', ...params);
return data
}
