import {client, TInferFromPromise} from '../../client';
import { ProductAssociationApi } from "sylius-ts-sdk";

export async function getProductAssociation(...params: Parameters<ProductAssociationApi['shopGetProductAssociationItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductAssociationApi['shopGetProductAssociationItem']>>['data']>('getProductAssociation', ...params);
return data
}
