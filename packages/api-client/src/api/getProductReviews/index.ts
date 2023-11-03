import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductReviewApi } from "sylius-ts-sdk";


export const getProductReviews: Endpoints['getProductReviews'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewCollection']>>['data']> => {
      const {data} = await context.client<ProductReviewApi>(ProductReviewApi).shopGetProductReviewCollection(...params)
      return data
    };
