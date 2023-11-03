import {client, TInferFromPromise} from '../../client';
import { VerifyCustomerAccountApi } from "sylius-ts-sdk";

export async function resendVerificationEmail(...params: Parameters<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>>['data']>('resendVerificationEmail', ...params);
return data
}
