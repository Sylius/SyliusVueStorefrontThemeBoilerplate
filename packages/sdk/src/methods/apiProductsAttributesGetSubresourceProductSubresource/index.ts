import {client, TInferFromPromise} from '../../client';
import { ProductApi } from "sylius-ts-sdk";

export async function apiProductsAttributesGetSubresourceProductSubresource(...params: Parameters<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']>('apiProductsAttributesGetSubresourceProductSubresource', ...params);
return data
}
