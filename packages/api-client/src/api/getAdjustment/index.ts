import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { AdjustmentApi } from "sylius-ts-sdk";


export const getAdjustment: Endpoints['getAdjustment'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['shopGetAdjustmentItem']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['shopGetAdjustmentItem']>>['data']> => {
      const {data} = await context.client<AdjustmentApi>(AdjustmentApi).shopGetAdjustmentItem(...params)
      return data
    };
