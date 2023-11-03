import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductApi } from "sylius-ts-sdk";


export const apiProductsAttributesGetSubresourceProductSubresource: Endpoints['apiProductsAttributesGetSubresourceProductSubresource'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>): Promise<TInferFromPromise<ReturnType<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']> => {
      const {data} = await context.client<ProductApi>(ProductApi).apiProductsAttributesGetSubresourceProductSubresource(...params)
      return data
    };
