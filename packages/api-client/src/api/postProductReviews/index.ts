import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductReviewApi } from "sylius-ts-sdk";


export const postProductReviews: Endpoints['postProductReviews'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopPostProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopPostProductReviewCollection']>>['data']> => {
      const {data} = await context.client<ProductReviewApi>(ProductReviewApi).shopPostProductReviewCollection(...params)
      return data
    };
