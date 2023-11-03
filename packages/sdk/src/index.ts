import { syliusConnector } from './connector';
import type { Options } from './types';
import type { Module } from '@vue-storefront/sdk';

/**
 * Boulerplate module type.
 */
export interface SyliusModuleType extends Module {
  /**
   * The connector of the Boilerplate module.
   */
  connector: ReturnType<typeof syliusConnector>;
}

/**
 * Boilerplate module.
 */
export const syliusModule = (options: Options): SyliusModuleType => ({
  connector: syliusConnector({
    apiUrl: options.apiUrl,
    bearerToken: options.bearerToken
  }),
  utils: {},
  subscribers: {},
});

export { client } from './client';

export * from './types';
