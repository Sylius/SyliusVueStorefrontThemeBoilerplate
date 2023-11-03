import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { PaymentMethodApi } from "sylius-ts-sdk";


export const getPaymentMethods: Endpoints['getPaymentMethods'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodCollection']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodCollection']>>['data']> => {
      const {data} = await context.client<PaymentMethodApi>(PaymentMethodApi).shopGetPaymentMethodCollection(...params)
      return data
    };
