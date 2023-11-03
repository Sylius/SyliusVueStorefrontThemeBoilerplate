import {client, TInferFromPromise} from '../../client';
import { ShipmentApi } from "sylius-ts-sdk";

export async function getShipment(...params: Parameters<ShipmentApi['shopGetShipmentItem']>) {
const { data } = await client.post<TInferFromPromise<ReturnType<ShipmentApi['shopGetShipmentItem']>>['data']>('getShipment', ...params);
return data
}
