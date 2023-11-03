import {client, TInferFromPromise} from '../../client';
import { RequestContactApi } from "sylius-ts-sdk";

export async function sendContactRequestRequestContacts(...params: Parameters<RequestContactApi['shopSendContactRequestRequestContactCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<RequestContactApi['shopSendContactRequestRequestContactCollection']>>['data']>('sendContactRequestRequestContacts', ...params);
return data
}
