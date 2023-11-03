import {client, TInferFromPromise} from '../../client';
import { ProductOptionApi } from "sylius-ts-sdk";

export async function apiProductOptionsValuesGetSubresourceProductOptionSubresource(...params: Parameters<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']>('apiProductOptionsValuesGetSubresourceProductOptionSubresource', ...params);
return data
}
