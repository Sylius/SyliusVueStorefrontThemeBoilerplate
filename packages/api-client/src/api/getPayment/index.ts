import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { PaymentApi } from "sylius-ts-sdk";


export const getPayment: Endpoints['getPayment'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<PaymentApi['shopGetPaymentItem']>): Promise<TInferFromPromise<ReturnType<PaymentApi['shopGetPaymentItem']>>['data']> => {
      const {data} = await context.client<PaymentApi>(PaymentApi).shopGetPaymentItem(...params)
      return data
    };
