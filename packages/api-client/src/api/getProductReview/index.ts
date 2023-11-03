import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ProductReviewApi } from "sylius-ts-sdk";


export const getProductReview: Endpoints['getProductReview'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewItem']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewItem']>>['data']> => {
      const {data} = await context.client<ProductReviewApi>(ProductReviewApi).shopGetProductReviewItem(...params)
      return data
    };
