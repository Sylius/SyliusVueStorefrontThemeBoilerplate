import { client } from './client';
import { Options } from './types';
import * as methods from './methods/index';

/**
 * Connector methods.
 */
type Methods = typeof methods;

/**
 * Initialize the Boilerplate connector.
 */
export const syliusConnector = (options: Options): Methods => {
  client.defaults.baseURL = options.apiUrl;

  if(options.bearerToken) {
    client.defaults.headers['Authorization'] = `Bearer ${options.bearerToken}`
  }

  return methods;
};
