import {Endpoints, SyliusIntegrationContext, TInferFromPromise} from '../../types';
import { ShipmentApi } from "sylius-ts-sdk";


export const getShipment: Endpoints['getShipment'] =
  async (context: SyliusIntegrationContext, ...params: Parameters<ShipmentApi['shopGetShipmentItem']>): Promise<TInferFromPromise<ReturnType<ShipmentApi['shopGetShipmentItem']>>['data']> => {
      const {data} = await context.client<ShipmentApi>(ShipmentApi).shopGetShipmentItem(...params)
      return data
    };
