import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { PaymentMethodApi } from "sylius-ts-sdk";


export const getPaymentMethod: Endpoints['getPaymentMethod'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodItem']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodItem']>>['data']> => {
      const {data} = await context.client<PaymentMethodApi>(PaymentMethodApi).shopGetPaymentMethodItem(...params)
      return data
    };
