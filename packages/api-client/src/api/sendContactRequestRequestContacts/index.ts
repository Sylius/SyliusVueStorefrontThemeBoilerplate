import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { RequestContactApi } from "sylius-ts-sdk";


export const sendContactRequestRequestContacts: Endpoints['sendContactRequestRequestContacts'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<RequestContactApi['shopSendContactRequestRequestContactCollection']>): Promise<TInferFromPromise<ReturnType<RequestContactApi['shopSendContactRequestRequestContactCollection']>>['data']> => {
      const {data} = await context.client<RequestContactApi>(RequestContactApi).shopSendContactRequestRequestContactCollection(...params)
      return data
    };
