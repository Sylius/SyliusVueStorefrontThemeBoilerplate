import {client, TInferFromPromise} from '../../client';
import { RequestContactApi } from "sylius-ts-sdk";

export async function sendContactRequest(...params: Parameters<RequestContactApi['shopSendContactRequestRequestContactCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<RequestContactApi['shopSendContactRequestRequestContactCollection']>>['data']>('sendContactRequest', ...params);
return data
}
