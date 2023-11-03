import {client, TInferFromPromise} from '../../client';
import { AdjustmentApi } from "sylius-ts-sdk";

export async function getAdjustment(...params: Parameters<AdjustmentApi['shopGetAdjustmentItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<AdjustmentApi['shopGetAdjustmentItem']>>['data']>('getAdjustment', ...params);
return data
}
