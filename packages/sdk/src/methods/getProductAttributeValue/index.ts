import {client, TInferFromPromise} from '../../client';
import { ProductAttributeValueApi } from "sylius-ts-sdk";

export async function getProductAttributeValue(...params: Parameters<ProductAttributeValueApi['shopGetProductAttributeValueItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductAttributeValueApi['shopGetProductAttributeValueItem']>>['data']>('getProductAttributeValue', ...params);
return data
}
