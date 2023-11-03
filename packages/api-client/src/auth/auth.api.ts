import {
  BASE_PATH,
  BaseAPI,
  Configuration,
  OrderItemUnitApiAdminGetOrderItemUnitItemRequest,
  PaymentAdminPaymentRead,
  RequestArgs,
  assertParamExists, createRequestFunction,
  DUMMY_BASE_URL,
  setApiKeyToObject,
  setSearchParams,
  toPathString
} from 'sylius-ts-sdk';
import { authenticate } from '../api';
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Retrieves a OrderItemUnit resource.
     * @summary Retrieves a OrderItemUnit resource.
     * @param {string} id Resource identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticate: async (email: string, password:string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      // assertParamExists('email', 'email', email)
      // assertParamExists('password', 'password', password)
      const localVarPath = `/api/v2/shop/authentication-token`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, configuration?.basePath ?? 'https://example.com');
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options, ...{
        data: {email,password},
        } };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarHeaderParameter['Accept'] = 'application/json';
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  }}

/**
 * export const OrderItemUnitApiFp = function(configuration?: Configuration) {
 *     const localVarAxiosParamCreator = OrderItemUnitApiAxiosParamCreator(configuration)
 *     return {
// *
// async
// adminGetOrderItemUnitItem(id
// :
// string, options ? : AxiosRequestConfig
// ):
// Promise < (axios ? : AxiosInstance, basePath ? : string)
// =>
// AxiosPromise < OrderItemUnitAdminOrderItemUnitRead >> {
//   * const localVarAxiosArgs = await localVarAxiosParamCreator.adminGetOrderItemUnitItem(id, options);
//   * return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
//   *
// },
 */

export const AuthApiFp = function(configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
  return {
    async authenticate(params: AuthenticateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{token:string,customer:string}>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.authenticate(params.email,params.password, options);
      // @ts-ignore
      return createRequestFunction(localVarAxiosArgs, axios.create(configuration), configuration.basePath ?? BASE_PATH, configuration) as any
    }
  }
}

export type AuthenticateRequest = {
  email: string,
  password: string
}

/**
 * @todo Cleanup this mess
 */
export class AuthApi extends BaseAPI {
  public authenticate(requestParameters: AuthenticateRequest, options?: AxiosRequestConfig) {
    // return OrderItemUnitApiFp(this.configuration).adminGetOrderItemUnitItem(requestParameters.id, options).then((request) => request(this.axios, this.basePath));

    // @ts-ignore
    return AuthApiFp({
      ...this.configuration,
      basePath: this.basePath,
      // @ts-ignore
      baseUrl: this.basePath
      // @ts-ignore
    }).authenticate(requestParameters,{
      ...options,
      // @todo Fix this
      baseURL: this.basePath,
      // @ts-ignore
      basePath: this.basePath,
      // @ts-ignore
    }).then(request=>request(this.axios,this.basePath?? options?.baseURL))
  }
}