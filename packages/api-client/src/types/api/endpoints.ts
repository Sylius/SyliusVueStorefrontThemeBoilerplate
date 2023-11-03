import { SyliusIntegrationContext, TODO } from '..'
import {AxiosResponse} from "axios";
import {
  OrderApi,
  LocaleApi,
  ExchangeRateApi,
  PaymentMethodApi,
  ProductApi,
  PaymentApi,
  OrderItemUnitApi,
  ProductAttributeValueApi,
  ProductOptionApi,
  ProductAttributeApi,
  ProductAssociationTypeApi,
  ProductAssociationApi,
  ShippingMethodTranslationApi,
  ShippingMethodApi,
  ShipmentApi,
  ProvinceApi,
  RequestContactApi,
  ProductVariantTranslationApi,
  AccountResetPasswordRequestApi,
  AdjustmentApi, AddressApi, ZoneMemberApi, ZoneApi, VerifyCustomerAccountApi, TaxonTranslationApi, ShopBillingDataApi, OrderItemApi, CustomerApi, CurrencyApi, TaxonApi, ChannelApi, CatalogPromotionApi, CountryApi, ProductVariantApi, ProductTaxonApi, ProductTranslationApi, ProductReviewApi, ProductOptionValueApi
} from 'sylius-ts-sdk';
import { AuthApi } from '../../auth/auth.api';

export type TInferFromPromise<P extends Promise<any>> = P extends Promise<infer T> ? T : never;
export type TInferFromAxiosResponse<P> = P extends AxiosResponse<infer T> ? T : never;

/**
 * Definition of all API-client methods available in {@link https://docs.vuestorefront.io/v2/advanced/context.html#context-api | context}.
 */
export interface Endpoints {

  /**
   * Here you can find an example endpoint definition. Based on this example, you should define how your endpoint will look like.
   * This description will appear in the API extractor, so try to document all endpoints added here.
   */
  exampleEndpoint(
    context: SyliusIntegrationContext,
    params: TODO
  ): Promise<TODO>;

apiOrdersAdjustmentsGetSubresourceOrderItemSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']>;
apiOrderssAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrdersItemsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']>;
getOrderItem(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['shopGetOrderItemItem']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['shopGetOrderItemItem']>>['data']>;
getCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopGetCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopGetCustomerItem']>>['data']>;
passwordUpdateCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPasswordUpdateCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPasswordUpdateCustomerItem']>>['data']>;
postCustomers(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPostCustomerCollection']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPostCustomerCollection']>>['data']>;
putCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPutCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPutCustomerItem']>>['data']>;
getTaxons(context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonCollection']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonCollection']>>['data']>;
getTaxon(context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonItem']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonItem']>>['data']>;
getCurrencys(context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyCollection']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyCollection']>>['data']>;
getCurrency(context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyItem']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyItem']>>['data']>;
apiCountriesProvincesGetSubresourceCountrySubresource(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['apiCountriesProvincesGetSubresourceCountrySubresource']>): Promise<TInferFromPromise<ReturnType<CountryApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']>;
getCountrys(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryCollection']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryCollection']>>['data']>;
getCountry(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryItem']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryItem']>>['data']>;
apiChannelsShopBillingDataGetSubresourceChannelSubresource(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>): Promise<TInferFromPromise<ReturnType<ChannelApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']>;
getChannels(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelCollection']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelCollection']>>['data']>;
getChannel(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelItem']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelItem']>>['data']>;
getCatalogPromotion(context: SyliusIntegrationContext, ...params: Parameters<CatalogPromotionApi['shopGetCatalogPromotionItem']>): Promise<TInferFromPromise<ReturnType<CatalogPromotionApi['shopGetCatalogPromotionItem']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderItemSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
getAdjustment(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['shopGetAdjustmentItem']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['shopGetAdjustmentItem']>>['data']>;
deleteAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopDeleteAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopDeleteAddressItem']>>['data']>;
getAddresss(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressCollection']>>['data']>;
getAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressItem']>>['data']>;
postAddresss(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPostAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPostAddressCollection']>>['data']>;
putAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPutAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPutAddressItem']>>['data']>;
createResetPasswordRequestAccountResetPasswordRequests(context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>>['data']>;
updateResetPasswordRequestAccountResetPasswordRequest(context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>>['data']>;
apiZonesMembersGetSubresourceZoneSubresource(context: SyliusIntegrationContext, ...params: Parameters<ZoneMemberApi['apiZonesMembersGetSubresourceZoneSubresource']>): Promise<TInferFromPromise<ReturnType<ZoneMemberApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']>;
apiZonesMembersGetSubresourceZoneSubresource(context: SyliusIntegrationContext, ...params: Parameters<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>): Promise<TInferFromPromise<ReturnType<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']>;
resendVerificationEmailVerifyCustomerAccounts(context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>>['data']>;
verifyCustomerAccountVerifyCustomerAccount(context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>>['data']>;
getTaxonTranslation(context: SyliusIntegrationContext, ...params: Parameters<TaxonTranslationApi['shopGetTaxonTranslationItem']>): Promise<TInferFromPromise<ReturnType<TaxonTranslationApi['shopGetTaxonTranslationItem']>>['data']>;
apiChannelsShopBillingDataGetSubresourceChannelSubresource(context: SyliusIntegrationContext, ...params: Parameters<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>): Promise<TInferFromPromise<ReturnType<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']>;
getShippingMethodTranslation(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>>['data']>;
getShippingMethods(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodCollection']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodCollection']>>['data']>;
getShippingMethod(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodItem']>>['data']>;
apiOrdersShipmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<ShipmentApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<ShipmentApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']>;
getShipment(context: SyliusIntegrationContext, ...params: Parameters<ShipmentApi['shopGetShipmentItem']>): Promise<TInferFromPromise<ReturnType<ShipmentApi['shopGetShipmentItem']>>['data']>;
sendContactRequestRequestContacts(context: SyliusIntegrationContext, ...params: Parameters<RequestContactApi['shopSendContactRequestRequestContactCollection']>): Promise<TInferFromPromise<ReturnType<RequestContactApi['shopSendContactRequestRequestContactCollection']>>['data']>;
apiCountriesProvincesGetSubresourceCountrySubresource(context: SyliusIntegrationContext, ...params: Parameters<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>): Promise<TInferFromPromise<ReturnType<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']>;
getProductVariantTranslation(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>>['data']>;
getProductVariants(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantCollection']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantCollection']>>['data']>;
getProductVariant(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantItem']>>['data']>;
getProductTranslation(context: SyliusIntegrationContext, ...params: Parameters<ProductTranslationApi['shopGetProductTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductTranslationApi['shopGetProductTranslationItem']>>['data']>;
getProductTaxon(context: SyliusIntegrationContext, ...params: Parameters<ProductTaxonApi['shopGetProductTaxonItem']>): Promise<TInferFromPromise<ReturnType<ProductTaxonApi['shopGetProductTaxonItem']>>['data']>;
getProductReviews(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewCollection']>>['data']>;
getProductReview(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewItem']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewItem']>>['data']>;
postProductReviews(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopPostProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopPostProductReviewCollection']>>['data']>;
apiProductOptionsValuesGetSubresourceProductOptionSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionValueApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>): Promise<TInferFromPromise<ReturnType<ProductOptionValueApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']>;
getProductOptionValue(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionValueApi['shopGetProductOptionValueItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionValueApi['shopGetProductOptionValueItem']>>['data']>;
apiProductOptionsValuesGetSubresourceProductOptionSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']>;
getProductOption(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['shopGetProductOptionItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['shopGetProductOptionItem']>>['data']>;
apiProductsAttributesGetSubresourceProductSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeValueApi['apiProductsAttributesGetSubresourceProductSubresource']>): Promise<TInferFromPromise<ReturnType<ProductAttributeValueApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']>;
getProductAttributeValue(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeValueApi['shopGetProductAttributeValueItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeValueApi['shopGetProductAttributeValueItem']>>['data']>;
getProductAttribute(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeApi['shopGetProductAttributeItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeApi['shopGetProductAttributeItem']>>['data']>;
getProductAssociationType(context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>>['data']>;
getProductAssociation(context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationApi['shopGetProductAssociationItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationApi['shopGetProductAssociationItem']>>['data']>;
apiProductsAttributesGetSubresourceProductSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>): Promise<TInferFromPromise<ReturnType<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']>;
getBySlugProduct(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetBySlugProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetBySlugProductItem']>>['data']>;
getProducts(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductCollection']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductCollection']>>['data']>;
getProduct(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductItem']>>['data']>;
getPaymentMethods(context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodCollection']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodCollection']>>['data']>;
getPaymentMethod(context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodItem']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodItem']>>['data']>;
apiOrdersPaymentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<PaymentApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<PaymentApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']>;
getPayment(context: SyliusIntegrationContext, ...params: Parameters<PaymentApi['shopGetPaymentItem']>): Promise<TInferFromPromise<ReturnType<PaymentApi['shopGetPaymentItem']>>['data']>;
getOrderUnitItem(context: SyliusIntegrationContext, ...params: Parameters<OrderItemUnitApi['shopGetOrderItemUnitItem']>): Promise<TInferFromPromise<ReturnType<OrderItemUnitApi['shopGetOrderItemUnitItem']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']>;
apiOrdersPaymentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']>;
apiOrdersShipmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']>;
getConfigurationOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['getConfigurationOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['getConfigurationOrderItem']>>['data']>;
accountChangePaymentMethodOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAccountChangePaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAccountChangePaymentMethodOrderItem']>>['data']>;
addOrderItem(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAddItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAddItemOrderItem']>>['data']>;
changeQuantityOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']>;
completeOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopCompleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopCompleteOrderItem']>>['data']>;
deleteOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopDeleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopDeleteOrderItem']>>['data']>;
getOrders(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderCollection']>>['data']>;
getOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderItem']>>['data']>;
postOrders(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPostOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPostOrderCollection']>>['data']>;
putOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPutOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPutOrderItem']>>['data']>;
removeOrderItem(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopRemoveItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopRemoveItemOrderItem']>>['data']>;
selectPaymentMethodOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectPaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectPaymentMethodOrderItem']>>['data']>;
selectShippingMethodOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectShippingMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectShippingMethodOrderItem']>>['data']>;
getLocales(context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleCollection']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleCollection']>>['data']>;
getLocale(context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleItem']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleItem']>>['data']>;
getExchangeRates(context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateCollection']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateCollection']>>['data']>;
getExchangeRate(context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateItem']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateItem']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderItemSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']>;
apiOrderssAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['apiOrdersItemsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']>;
getOrderItem(context: SyliusIntegrationContext, ...params: Parameters<OrderItemApi['shopGetOrderItemItem']>): Promise<TInferFromPromise<ReturnType<OrderItemApi['shopGetOrderItemItem']>>['data']>;
getCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopGetCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopGetCustomerItem']>>['data']>;
updatePassword(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPasswordUpdateCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPasswordUpdateCustomerItem']>>['data']>;
createCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPostCustomerCollection']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPostCustomerCollection']>>['data']>;
updateCustomer(context: SyliusIntegrationContext, ...params: Parameters<CustomerApi['shopPutCustomerItem']>): Promise<TInferFromPromise<ReturnType<CustomerApi['shopPutCustomerItem']>>['data']>;
getTaxons(context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonCollection']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonCollection']>>['data']>;
getTaxon(context: SyliusIntegrationContext, ...params: Parameters<TaxonApi['shopGetTaxonItem']>): Promise<TInferFromPromise<ReturnType<TaxonApi['shopGetTaxonItem']>>['data']>;
getCurrencies(context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyCollection']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyCollection']>>['data']>;
getCurrency(context: SyliusIntegrationContext, ...params: Parameters<CurrencyApi['shopGetCurrencyItem']>): Promise<TInferFromPromise<ReturnType<CurrencyApi['shopGetCurrencyItem']>>['data']>;
apiCountriesProvincesGetSubresourceCountrySubresource(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['apiCountriesProvincesGetSubresourceCountrySubresource']>): Promise<TInferFromPromise<ReturnType<CountryApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']>;
getCountries(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryCollection']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryCollection']>>['data']>;
getCountry(context: SyliusIntegrationContext, ...params: Parameters<CountryApi['shopGetCountryItem']>): Promise<TInferFromPromise<ReturnType<CountryApi['shopGetCountryItem']>>['data']>;
apiChannelsShopBillingDataGetSubresourceChannelSubresource(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>): Promise<TInferFromPromise<ReturnType<ChannelApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']>;
getChannels(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelCollection']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelCollection']>>['data']>;
getChannel(context: SyliusIntegrationContext, ...params: Parameters<ChannelApi['shopGetChannelItem']>): Promise<TInferFromPromise<ReturnType<ChannelApi['shopGetChannelItem']>>['data']>;
getCatalogPromotion(context: SyliusIntegrationContext, ...params: Parameters<CatalogPromotionApi['shopGetCatalogPromotionItem']>): Promise<TInferFromPromise<ReturnType<CatalogPromotionApi['shopGetCatalogPromotionItem']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderItemSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrderItemsAdjustmentsGetSubresourceOrderItemSubresource']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['apiOrdersItemsAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
getAdjustment(context: SyliusIntegrationContext, ...params: Parameters<AdjustmentApi['shopGetAdjustmentItem']>): Promise<TInferFromPromise<ReturnType<AdjustmentApi['shopGetAdjustmentItem']>>['data']>;
deleteAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopDeleteAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopDeleteAddressItem']>>['data']>;
getAddresss(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressCollection']>>['data']>;
getAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopGetAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopGetAddressItem']>>['data']>;
createAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPostAddressCollection']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPostAddressCollection']>>['data']>;
updateAddress(context: SyliusIntegrationContext, ...params: Parameters<AddressApi['shopPutAddressItem']>): Promise<TInferFromPromise<ReturnType<AddressApi['shopPutAddressItem']>>['data']>;
requestPasswordReset(context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopCreateResetPasswordRequestAccountResetPasswordRequestCollection']>>['data']>;
updatePasswordReset(context: SyliusIntegrationContext, ...params: Parameters<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>): Promise<TInferFromPromise<ReturnType<AccountResetPasswordRequestApi['shopUpdateResetPasswordRequestAccountResetPasswordRequestItem']>>['data']>;
apiZonesMembersGetSubresourceZoneSubresource(context: SyliusIntegrationContext, ...params: Parameters<ZoneMemberApi['apiZonesMembersGetSubresourceZoneSubresource']>): Promise<TInferFromPromise<ReturnType<ZoneMemberApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']>;
apiZonesMembersGetSubresourceZoneSubresource(context: SyliusIntegrationContext, ...params: Parameters<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>): Promise<TInferFromPromise<ReturnType<ZoneApi['apiZonesMembersGetSubresourceZoneSubresource']>>['data']>;
resendVerificationEmail(context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopResendVerificationEmailVerifyCustomerAccountCollection']>>['data']>;
verifyAccount(context: SyliusIntegrationContext, ...params: Parameters<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>): Promise<TInferFromPromise<ReturnType<VerifyCustomerAccountApi['shopVerifyCustomerAccountVerifyCustomerAccountItem']>>['data']>;
getTaxonTranslation(context: SyliusIntegrationContext, ...params: Parameters<TaxonTranslationApi['shopGetTaxonTranslationItem']>): Promise<TInferFromPromise<ReturnType<TaxonTranslationApi['shopGetTaxonTranslationItem']>>['data']>;
apiChannelsShopBillingDataGetSubresourceChannelSubresource(context: SyliusIntegrationContext, ...params: Parameters<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>): Promise<TInferFromPromise<ReturnType<ShopBillingDataApi['apiChannelsShopBillingDataGetSubresourceChannelSubresource']>>['data']>;
getShippingMethodTranslation(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodTranslationApi['shopGetShippingMethodTranslationItem']>>['data']>;
getShippingMethods(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodCollection']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodCollection']>>['data']>;
getShippingMethod(context: SyliusIntegrationContext, ...params: Parameters<ShippingMethodApi['shopGetShippingMethodItem']>): Promise<TInferFromPromise<ReturnType<ShippingMethodApi['shopGetShippingMethodItem']>>['data']>;
apiOrdersShipmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<ShipmentApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<ShipmentApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']>;
getShipment(context: SyliusIntegrationContext, ...params: Parameters<ShipmentApi['shopGetShipmentItem']>): Promise<TInferFromPromise<ReturnType<ShipmentApi['shopGetShipmentItem']>>['data']>;
sendContactRequest(context: SyliusIntegrationContext, ...params: Parameters<RequestContactApi['shopSendContactRequestRequestContactCollection']>): Promise<TInferFromPromise<ReturnType<RequestContactApi['shopSendContactRequestRequestContactCollection']>>['data']>;
apiCountriesProvincesGetSubresourceCountrySubresource(context: SyliusIntegrationContext, ...params: Parameters<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>): Promise<TInferFromPromise<ReturnType<ProvinceApi['apiCountriesProvincesGetSubresourceCountrySubresource']>>['data']>;
getProductVariantTranslation(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantTranslationApi['shopGetProductVariantTranslationItem']>>['data']>;
getProductVariants(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantCollection']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantCollection']>>['data']>;
getProductVariant(context: SyliusIntegrationContext, ...params: Parameters<ProductVariantApi['shopGetProductVariantItem']>): Promise<TInferFromPromise<ReturnType<ProductVariantApi['shopGetProductVariantItem']>>['data']>;
getProductTranslation(context: SyliusIntegrationContext, ...params: Parameters<ProductTranslationApi['shopGetProductTranslationItem']>): Promise<TInferFromPromise<ReturnType<ProductTranslationApi['shopGetProductTranslationItem']>>['data']>;
getProductTaxon(context: SyliusIntegrationContext, ...params: Parameters<ProductTaxonApi['shopGetProductTaxonItem']>): Promise<TInferFromPromise<ReturnType<ProductTaxonApi['shopGetProductTaxonItem']>>['data']>;
getProductReviews(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewCollection']>>['data']>;
getProductReview(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopGetProductReviewItem']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopGetProductReviewItem']>>['data']>;
postProductReviews(context: SyliusIntegrationContext, ...params: Parameters<ProductReviewApi['shopPostProductReviewCollection']>): Promise<TInferFromPromise<ReturnType<ProductReviewApi['shopPostProductReviewCollection']>>['data']>;
apiProductOptionsValuesGetSubresourceProductOptionSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionValueApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>): Promise<TInferFromPromise<ReturnType<ProductOptionValueApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']>;
getProductOptionValue(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionValueApi['shopGetProductOptionValueItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionValueApi['shopGetProductOptionValueItem']>>['data']>;
apiProductOptionsValuesGetSubresourceProductOptionSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['apiProductOptionsValuesGetSubresourceProductOptionSubresource']>>['data']>;
getProductOption(context: SyliusIntegrationContext, ...params: Parameters<ProductOptionApi['shopGetProductOptionItem']>): Promise<TInferFromPromise<ReturnType<ProductOptionApi['shopGetProductOptionItem']>>['data']>;
apiProductsAttributesGetSubresourceProductSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeValueApi['apiProductsAttributesGetSubresourceProductSubresource']>): Promise<TInferFromPromise<ReturnType<ProductAttributeValueApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']>;
getProductAttributeValue(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeValueApi['shopGetProductAttributeValueItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeValueApi['shopGetProductAttributeValueItem']>>['data']>;
getProductAttribute(context: SyliusIntegrationContext, ...params: Parameters<ProductAttributeApi['shopGetProductAttributeItem']>): Promise<TInferFromPromise<ReturnType<ProductAttributeApi['shopGetProductAttributeItem']>>['data']>;
getProductAssociationType(context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationTypeApi['shopGetProductAssociationTypeItem']>>['data']>;
getProductAssociation(context: SyliusIntegrationContext, ...params: Parameters<ProductAssociationApi['shopGetProductAssociationItem']>): Promise<TInferFromPromise<ReturnType<ProductAssociationApi['shopGetProductAssociationItem']>>['data']>;
apiProductsAttributesGetSubresourceProductSubresource(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>): Promise<TInferFromPromise<ReturnType<ProductApi['apiProductsAttributesGetSubresourceProductSubresource']>>['data']>;
getProductBySlug(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetBySlugProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetBySlugProductItem']>>['data']>;
getProducts(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductCollection']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductCollection']>>['data']>;
getProduct(context: SyliusIntegrationContext, ...params: Parameters<ProductApi['shopGetProductItem']>): Promise<TInferFromPromise<ReturnType<ProductApi['shopGetProductItem']>>['data']>;
getPaymentMethods(context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodCollection']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodCollection']>>['data']>;
getPaymentMethod(context: SyliusIntegrationContext, ...params: Parameters<PaymentMethodApi['shopGetPaymentMethodItem']>): Promise<TInferFromPromise<ReturnType<PaymentMethodApi['shopGetPaymentMethodItem']>>['data']>;
apiOrdersPaymentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<PaymentApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<PaymentApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']>;
getPayment(context: SyliusIntegrationContext, ...params: Parameters<PaymentApi['shopGetPaymentItem']>): Promise<TInferFromPromise<ReturnType<PaymentApi['shopGetPaymentItem']>>['data']>;
getOrderItemUnit(context: SyliusIntegrationContext, ...params: Parameters<OrderItemUnitApi['shopGetOrderItemUnitItem']>): Promise<TInferFromPromise<ReturnType<OrderItemUnitApi['shopGetOrderItemUnitItem']>>['data']>;
apiOrdersAdjustmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersAdjustmentsGetSubresourceOrderSubresource']>>['data']>;
apiOrderssGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersItemsGetSubresourceOrderSubresource']>>['data']>;
apiOrdersPaymentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersPaymentsGetSubresourceOrderSubresource']>>['data']>;
apiOrdersShipmentsGetSubresourceOrderSubresource(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>): Promise<TInferFromPromise<ReturnType<OrderApi['apiOrdersShipmentsGetSubresourceOrderSubresource']>>['data']>;
getOrderConfiguration(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['getConfigurationOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['getConfigurationOrderItem']>>['data']>;
changePaymentMethod(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAccountChangePaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAccountChangePaymentMethodOrderItem']>>['data']>;
addItemToCart(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopAddItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopAddItemOrderItem']>>['data']>;
updateItemCartQuantity(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopChangeQuantityOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopChangeQuantityOrderItem']>>['data']>;
completeOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopCompleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopCompleteOrderItem']>>['data']>;
deleteOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopDeleteOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopDeleteOrderItem']>>['data']>;
getOrders(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderCollection']>>['data']>;
getOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopGetOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopGetOrderItem']>>['data']>;
postOrders(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPostOrderCollection']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPostOrderCollection']>>['data']>;
updateOrder(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopPutOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopPutOrderItem']>>['data']>;
removeOrderItem(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopRemoveItemOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopRemoveItemOrderItem']>>['data']>;
selectPaymentMethod(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectPaymentMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectPaymentMethodOrderItem']>>['data']>;
selectShippingMethod(context: SyliusIntegrationContext, ...params: Parameters<OrderApi['shopSelectShippingMethodOrderItem']>): Promise<TInferFromPromise<ReturnType<OrderApi['shopSelectShippingMethodOrderItem']>>['data']>;
getLocales(context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleCollection']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleCollection']>>['data']>;
getLocale(context: SyliusIntegrationContext, ...params: Parameters<LocaleApi['shopGetLocaleItem']>): Promise<TInferFromPromise<ReturnType<LocaleApi['shopGetLocaleItem']>>['data']>;
getExchangeRates(context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateCollection']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateCollection']>>['data']>;
getExchangeRate(context: SyliusIntegrationContext, ...params: Parameters<ExchangeRateApi['shopGetExchangeRateItem']>): Promise<TInferFromPromise<ReturnType<ExchangeRateApi['shopGetExchangeRateItem']>>['data']>;
authenticate(context: SyliusIntegrationContext, ...params: Parameters<AuthApi['authenticate']>): Promise<TInferFromPromise<ReturnType<AuthApi['authenticate']>>['data']>;
}