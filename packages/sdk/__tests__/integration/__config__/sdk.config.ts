import { initSDK, buildModule } from '@vue-storefront/sdk';
import { syliusModule, SyliusModuleType } from '../../../src';

const sdkConfig = {
  boilerplate: buildModule<SyliusModuleType>(syliusModule, {
    apiUrl: 'http://localhost:8181/boilerplate',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
