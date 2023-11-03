import axios from 'axios';
import { apiClientFactory } from '@vue-storefront/middleware';
import { MiddlewareConfig } from './index';
import * as apiEndpoints from './api';
import { BaseAPI, Configuration } from 'sylius-ts-sdk';

export type TApiConstructor<T extends BaseAPI> = new (...args: any[]) => T;

export type TSyliusClient = <T extends BaseAPI>(api: TApiConstructor<T>) => T;

/**
 * In here you should create the client you'll use to communicate with the backend.
 * Axios is just an example.
 */
const buildClient = (baseUrl: string): TSyliusClient => <T extends BaseAPI>(api: TApiConstructor<T>) => new api(new Configuration(), baseUrl);

const onCreate = (settings: MiddlewareConfig) => {
  const client = buildClient(settings.apiUrl);

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: apiEndpoints,
});

export { createApiClient };
