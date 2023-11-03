import {client, TInferFromPromise} from '../../client';
import { ProductAssociationTypeApi } from "sylius-ts-sdk";

export async function getProductAssociationType(...params: Parameters<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>>['data']>('getProductAssociationType', ...params);
return data
}
