import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductAssociationTypeApi } from "sylius-ts-sdk";


export const getProductAssociationType: Endpoints['getProductAssociationType'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>>['data']> => {
      const {data} = await context.client<ProductAssociationTypeApi>(ProductAssociationTypeApi).shopGetProductAssociationTypeItem(...params)
      return data
    };
