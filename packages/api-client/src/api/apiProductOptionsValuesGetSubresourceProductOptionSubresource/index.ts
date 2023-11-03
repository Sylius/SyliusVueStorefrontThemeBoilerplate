import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductOptionApi } from "sylius-ts-sdk";


export const apiProductOptionsValuesGetSubresourceProductOptionSubresource: Endpoints['apiProductOptionsValuesGetSubresourceProductOptionSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']> => {
      const {data} = await context.client<ProductOptionApi>(ProductOptionApi).apiProductOptionsValuesGetSubresourceProductOptionSubresource(...params)
      return data
    };
