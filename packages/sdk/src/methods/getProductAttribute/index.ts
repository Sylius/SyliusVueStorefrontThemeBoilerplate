import {client, TInferFromPromise} from '../../client';
import { ProductAttributeApi } from "sylius-ts-sdk";

export async function getProductAttribute(...params: Parameters<ProductAttributeApi['shopGetProductAttributeItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductAttributeApi['shopGetProductAttributeItem']>>['data']>('getProductAttribute', ...params);
return data
}
