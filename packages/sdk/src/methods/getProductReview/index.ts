import {client, TInferFromPromise} from '../../client';
import { ProductReviewApi } from "sylius-ts-sdk";

export async function getProductReview(...params: Parameters<ProductReviewApi['shopGetProductReviewItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewItem']>>['data']>('getProductReview', ...params);
return data
}
