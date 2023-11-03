import {client, TInferFromPromise} from '../../client';
import { OrderApi } from "sylius-ts-sdk";
import { AuthApi } from '@vue-storefront/integration-sylius-api/src/auth/auth.api';

export async function authenticate(...params: Parameters<AuthApi['authenticate']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AuthApi['authenticate']>>['data']>('authenticate', ...params);
return data
}
