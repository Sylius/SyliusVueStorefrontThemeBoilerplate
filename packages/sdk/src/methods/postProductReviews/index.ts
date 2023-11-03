import {client, TInferFromPromise} from '../../client';
import { ProductReviewApi } from "sylius-ts-sdk";

export async function postProductReviews(...params: Parameters<ProductReviewApi['shopPostProductReviewCollection']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ProductReviewApi['shopPostProductReviewCollection']>>['data']>('postProductReviews', ...params);
return data
}
