import {client, TInferFromPromise} from '../../client';
import { ProductReviewApi } from "sylius-ts-sdk";

export async function getProductReviews(...params: Parameters<ProductReviewApi['shopGetProductReviewCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewCollection']>>['data']>('getProductReviews', ...params);
return data
}
