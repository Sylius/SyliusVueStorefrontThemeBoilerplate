#!/bin/bash

rm docs.yaml
rm docs.json
wget https://demo.sylius.com/api/v2/docs.json
api-spec-converter --from=openapi_3 --to=openapi_3 --syntax=yaml docs.json > docs.yaml

openapi-generator-cli generate -g typescript-axios -o ./../../packages/sylius-ts-sdk -i docs.yaml --additional-properties=enumPropertyNamingReplaceSpecialChar=true,nullSafeAdditionalProps=true,prependFormOrBodyParameters=true,useSingleRequestParameter=true,npmName=sylius-ts-sdk --enable-post-process-file