import * as readlineSync from 'readline-sync';
import  fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';
import * as sdk from 'sylius-ts-sdk'
import {
    AccountResetPasswordRequestApiFp,
    AddressApiFp,
    AdjustmentApiFp,
    AvatarImageApiFp,
    CatalogPromotionActionApiFp,
    CatalogPromotionApiFp,
    CatalogPromotionScopeApiFp,
    CatalogPromotionTranslationApiFp,
    ChannelApiFp,
    ChannelPriceHistoryConfigApiFp,
    ChannelPricingApiFp,
    ChannelPricingLogEntryApiFp,
    Configuration,
    CountryApiFp,
    CurrencyApiFp,
    CustomerApiFp, CustomerGroupApiFp,
    ExchangeRateApiFp,
    LocaleApiFp,
    OrderApiFp,
    OrderItemApiFp, OrderItemUnitApiFp,
    PaymentApiFp,
    PaymentMethodApiFp,
    ProductApiFp,
    ProductAssociationApiFp,
    ProductAssociationTypeApiFp,
    ProductAssociationTypeTranslationApiFp,
    ProductAttributeApiFp,
    ProductAttributeValueApiFp,
    ProductOptionApiFp,
    ProductOptionTranslationApiFp,
    ProductOptionValueApiFp,
    ProductReviewApiFp,
    ProductTaxonApiFp,
    ProductTranslationApiFp,
    ProductVariantApiFp,
    ProductVariantTranslationApiFp,
    PromotionApiFp,
    ProvinceApiFp,
    RequestContactApiFp,
    ShipmentApiFp,
    ShippingCategoryApiFp,
    ShippingMethodApiFp,
    ShippingMethodTranslationApiFp,
    ShopBillingDataApiFp,
    TaxCategoryApiFp,
    TaxonApiFp,
    TaxonTranslationApiFp,
    VerifyCustomerAccountApiFp,
    ZoneApiFp,
    ZoneMemberApiFp
} from "sylius-ts-sdk";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

interface IMethodProps {
    apiName: string,
    apiMethodName: string,
    methodName: string,
    requestType?: string,
    returnType?: string
}

function checkForApiName(props: Pick<IMethodProps, 'apiName'>) {
    // Implement your logic for checking API method here
    console.log(`Checking for API method for ${props.apiName}`);

    const apiName = `${props.apiName}Api`;
    if(!Object.keys(sdk).includes(apiName)) {
        console.warn(`api ${apiName} does not exist`)
        process.exit(-1)
    }
}

function checkForApiMethod(props: Pick<IMethodProps, 'apiName'|'apiMethodName'>) {
    // Implement your logic for checking API method here
    console.log(`Checking for API method for ${props.apiName} with method ${props.apiMethodName}`);

    const apiName = `${props.apiName}Api`;
    if(!Object.keys(sdk).includes(apiName)) {
        console.warn(`api ${apiName} does not exist`)
        process.exit(-1)
    }

    const apiCreated = ((sdk[`${apiName}Fp`])())
    if(!Object.keys(apiCreated).includes(props.apiMethodName)) {

        console.warn(`api ${apiName} does not have method ${props.apiMethodName}`)
        process.exit(-1)
    }
}

async function generateFromHandlebars(props: IMethodProps, templatePath: string, outputPath: string) {
    const source = fs.readFileSync(path.join(__dirname, templatePath)).toString();
    const template = Handlebars.compile(source);
    const result = template(props);
    const pathTo = path.join(process.cwd(), outputPath);
    if (!fs.existsSync(path.dirname(pathTo))) {
        fs.mkdirSync(path.dirname(pathTo), {
            recursive: true
        });
    }
    fs.writeFileSync(pathTo, result);
}

async function generateApiClientFromHandlebars(props: IMethodProps) {
   return generateFromHandlebars(props, './../handlebars-templates/method-api-client.handlebars', `./../api-client/src/api/${props.methodName}/index.ts`);
}
async function generateSdkFromHandlebars(props: IMethodProps) {
    return generateFromHandlebars(props, './../handlebars-templates/method-sdk.handlebars', `./../sdk/src/methods/${props.methodName}/index.ts`);
}

async function addToEndpoints(props: IMethodProps, filePath: string, newLine: string) {
    const pathFrom = path.join(process.cwd(), filePath);
    let contents = fs.readFileSync(pathFrom).toString();
    contents += '\n';
    contents += newLine;
    fs.writeFileSync(pathFrom, contents);
}

async function addToSdkEndpoints(props: IMethodProps) {
    return addToEndpoints(props, `./../sdk/src/methods/index.ts`, `export { ${props.methodName} } from './${props.methodName}';`);
}

async function addToClientEndpoints(props: IMethodProps) {
    return addToEndpoints(props, `./../api-client/src/api/index.ts`, `export { ${props.methodName} } from './${props.methodName}';`);
}

async function addToClientTypesEndpoints(props: IMethodProps) {
    const pathFrom = path.join(process.cwd(), `./../api-client/src/types/api/endpoints.ts`)
    let contents = fs.readFileSync(pathFrom).toString();
    let lines = contents.replace(/}\w.+$/, '').split('\n');
    lines = lines.slice(0, lines.length - 1);
    lines.push(`${props.methodName}(context: SyliusIntegrationContext, ...params: Parameters<${props.apiName}['${props.apiMethodName}']>): Promise<TInferFromPromise<ReturnType<${props.apiName}['${props.apiMethodName}']>>['data']>;`);
    lines.push('}')
    contents = lines.join('\n')
    fs.writeFileSync(pathFrom, contents)
}

async function generate(props: IMethodProps) {
    await generateSdkFromHandlebars(props);
    await generateApiClientFromHandlebars(props)
    await addToSdkEndpoints(props)
    await addToClientTypesEndpoints(props)
    await addToClientEndpoints(props)
}

export async function bootstrap() {
    let api = readlineSync.question('Enter API: ');
    checkForApiName({
        apiName:api
    });
    const method = readlineSync.question('Enter Method: ');
    checkForApiMethod({
        apiName: api,
        apiMethodName: method
    })
    api = `${api}Api`
    const name = readlineSync.question('Enter method name: ');

    await generate({
        apiName:api,
        methodName:name,
        apiMethodName: method,
    })
}

function lcfirst (str: string): string {
    return str[0].toLowerCase() + str.substring(1)
}

const apis = {
    OrderItemApiFp,
    CustomerApiFp,
    TaxonApiFp,
    CurrencyApiFp,
    CountryApiFp,
    ChannelPricingLogEntryApiFp,
    ChannelPricingApiFp,
    ChannelPriceHistoryConfigApiFp,
    ChannelApiFp,
    CatalogPromotionTranslationApiFp,
    CatalogPromotionScopeApiFp,
    CatalogPromotionActionApiFp,
    CatalogPromotionApiFp,
    AvatarImageApiFp,
    AdjustmentApiFp,
    AddressApiFp,
    AccountResetPasswordRequestApiFp,
    ZoneMemberApiFp,
    ZoneApiFp,
    VerifyCustomerAccountApiFp,
    TaxonTranslationApiFp,
    TaxCategoryApiFp,
    ShopBillingDataApiFp,
    ShippingMethodTranslationApiFp,
    ShippingMethodApiFp,
    ShippingCategoryApiFp,
    ShipmentApiFp,
    RequestContactApiFp,
    ProvinceApiFp,
    PromotionApiFp,
    ProductVariantTranslationApiFp,
    ProductVariantApiFp,
    ProductTranslationApiFp,
    ProductTaxonApiFp,
    ProductReviewApiFp,
    ProductOptionValueApiFp,
    ProductOptionTranslationApiFp,
    ProductOptionApiFp,
    ProductAttributeValueApiFp,
    ProductAttributeApiFp,
    ProductAssociationTypeTranslationApiFp,
    ProductAssociationTypeApiFp,
    ProductAssociationApiFp,
    ProductApiFp,
    PaymentMethodApiFp,
    PaymentApiFp,
    OrderItemUnitApiFp,
    OrderApiFp,
    LocaleApiFp,
    ExchangeRateApiFp,
    CustomerGroupApiFp,
}

const generateSdkMethodName = (originalMethod: string, replacements: Record<string, string> = {}): string => {
    replacements = {
        ...replacements,
        shop: '',
        Item: '',
        Collection: 's',
    }
    let formatted = lcfirst(originalMethod)
    Object.keys(replacements).forEach(key => {
        formatted = formatted.replace(key, replacements[key])
    })

    return formatted
}

const definitions = [...Object.keys(apis).map(apiKey =>
    Object.keys(apis[apiKey](new Configuration())).filter(key => !key.includes('admin')).map(key => ({
        apiName: apiKey.replace('Fp', ''),
        apiMethodName: key,
        methodName: generateSdkMethodName(key)
    })))];

async function all() {
    for (const a of definitions) {
        for (const d of a) {
            try {
                const finalMethodName = readlineSync.question(`[${d.apiName}::${d.methodName}]: Method name: `, {
                    defaultInput: d.methodName
                });
                // @ts-ignore
                console.log(`Method ${d.apiName} : ${d.apiMethodName} --> ${finalMethodName}`);
                // @ts-ignore
                await generate({
                    ...d,
                    methodName: lcfirst(finalMethodName)
                })
            } catch {
            }
        }
    }
}

all()