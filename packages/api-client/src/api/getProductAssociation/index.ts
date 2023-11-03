import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductAssociationApi } from "sylius-ts-sdk";


export const getProductAssociation: Endpoints['getProductAssociation'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationApi['shopGetProductAssociationItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationApi['shopGetProductAssociationItem']>>['data']> => {
      const {data} = await context.client<ProductAssociationApi>(ProductAssociationApi).shopGetProductAssociationItem(...params)
      return data
    };
