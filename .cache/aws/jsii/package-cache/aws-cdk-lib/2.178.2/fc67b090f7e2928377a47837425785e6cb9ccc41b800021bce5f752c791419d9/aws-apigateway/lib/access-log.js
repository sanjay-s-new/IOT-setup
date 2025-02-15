"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccessLogFormat=exports.AccessLogField=exports.FirehoseLogDestination=exports.LogGroupLogDestination=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp};class LogGroupLogDestination{constructor(logGroup){this.logGroup=logGroup;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_ILogGroup(logGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LogGroupLogDestination),error}}bind(_stage){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(_stage)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{destinationArn:this.logGroup.logGroupArn}}}exports.LogGroupLogDestination=LogGroupLogDestination,_a=JSII_RTTI_SYMBOL_1,LogGroupLogDestination[_a]={fqn:"aws-cdk-lib.aws_apigateway.LogGroupLogDestination",version:"2.178.2"};class FirehoseLogDestination{constructor(stream){this.stream=stream;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_kinesisfirehose_CfnDeliveryStream(stream)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,FirehoseLogDestination),error}}bind(stage){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}if(!this.stream.deliveryStreamName?.startsWith("amazon-apigateway-"))throw new(errors_1()).ValidationError(`Firehose delivery stream name for access log destination must begin with 'amazon-apigateway-', got '${this.stream.deliveryStreamName}'`,stage);return{destinationArn:this.stream.attrArn}}}exports.FirehoseLogDestination=FirehoseLogDestination,_b=JSII_RTTI_SYMBOL_1,FirehoseLogDestination[_b]={fqn:"aws-cdk-lib.aws_apigateway.FirehoseLogDestination",version:"2.178.2"};class AccessLogField{static contextAccountId(){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_apigateway.AccessLogField#contextAccountId","Use `contextCallerAccountId` or `contextOwnerAccountId` instead")}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.contextAccountId),error}return"$context.identity.accountId"}static contextCallerAccountId(){return"$context.identity.accountId"}static contextOwnerAccountId(){return"$context.accountId"}static contextApiId(){return"$context.apiId"}static contextAuthorizerClaims(property){return`$context.authorizer.claims.${property}`}static contextAuthorizerPrincipalId(){return"$context.authorizer.principalId"}static contextAuthorizer(property){return`$context.authorizer.${property}`}static contextAwsEndpointRequestId(){return"$context.awsEndpointRequestId"}static contextDomainName(){return"$context.domainName"}static contextDomainPrefix(){return"$context.domainPrefix"}static contextErrorMessage(){return"$context.error.message"}static contextErrorMessageString(){return"$context.error.messageString"}static contextErrorResponseType(){return"$context.error.responseType"}static contextErrorValidationErrorString(){return"$context.error.validationErrorString"}static contextExtendedRequestId(){return"$context.extendedRequestId"}static contextHttpMethod(){return"$context.httpMethod"}static contextIdentityAccountId(){return"$context.identity.accountId"}static contextIdentityApiKey(){return"$context.identity.apiKey"}static contextIdentityApiKeyId(){return"$context.identity.apiKeyId"}static contextIdentityCaller(){return"$context.identity.caller"}static contextIdentityCognitoAuthenticationProvider(){return"$context.identity.cognitoAuthenticationProvider"}static contextIdentityCognitoAuthenticationType(){return"$context.identity.cognitoAuthenticationType"}static contextIdentityCognitoIdentityId(){return"$context.identity.cognitoIdentityId"}static contextIdentityCognitoIdentityPoolId(){return"$context.identity.cognitoIdentityPoolId"}static contextIdentityPrincipalOrgId(){return"$context.identity.principalOrgId"}static contextIdentitySourceIp(){return"$context.identity.sourceIp"}static contextIdentityClientCertPem(){return"$context.identity.clientCert.clientCertPem"}static contextIdentityClientCertSubjectDN(){return"$context.identity.clientCert.subjectDN"}static contextIdentityClientCertIssunerDN(){return"$context.identity.clientCert.issuerDN"}static contextIdentityClientCertSerialNumber(){return"$context.identity.clientCert.serialNumber"}static contextIdentityClientCertValidityNotBefore(){return"$context.identity.clientCert.validity.notBefore"}static contextIdentityClientCertValidityNotAfter(){return"$context.identity.clientCert.validity.notAfter"}static contextIdentityUser(){return"$context.identity.user"}static contextIdentityUserAgent(){return"$context.identity.userAgent"}static contextIdentityUserArn(){return"$context.identity.userArn"}static contextPath(){return"$context.path"}static contextProtocol(){return"$context.protocol"}static contextRequestId(){return"$context.requestId"}static contextRequestOverrideHeader(headerName){return`$context.requestOverride.header.${headerName}`}static contextRequestOverridePath(pathName){return`$context.requestOverride.path.${pathName}`}static contextRequestOverrideQuerystring(querystringName){return`$context.requestOverride.querystring.${querystringName}`}static contextResponseOverrideHeader(headerName){return`$context.responseOverride.header.${headerName}`}static contextResponseOverrideStatus(){return"$context.responseOverride.status"}static contextRequestTime(){return"$context.requestTime"}static contextRequestTimeEpoch(){return"$context.requestTimeEpoch"}static contextResourceId(){return"$context.resourceId"}static contextResourcePath(){return"$context.resourcePath"}static contextStage(){return"$context.stage"}static contextWafResponseCode(){return"$context.wafResponseCode"}static contextWebaclArn(){return"$context.webaclArn"}static contextXrayTraceId(){return"$context.xrayTraceId"}static contextAuthorizerIntegrationLatency(){return"$context.authorizer.integrationLatency"}static contextIntegrationLatency(){return"$context.integrationLatency"}static contextIntegrationStatus(){return"$context.integrationStatus"}static contextResponseLatency(){return"$context.responseLatency"}static contextResponseLength(){return"$context.responseLength"}static contextStatus(){return"$context.status"}static contextAuthorizeError(){return"$context.authorize.error"}static contextAuthorizeLatency(){return"$context.authorize.latency"}static contextAuthorizeStatus(){return"$context.authorize.status"}static contextAuthorizerError(){return"$context.authorizer.error"}static contextAuthorizerIntegrationStatus(){return"$context.authorizer.integrationStatus"}static contextAuthorizerLatency(){return"$context.authorizer.latency"}static contextAuthorizerRequestId(){return"$context.authorizer.requestId"}static contextAuthorizerStatus(){return"$context.authorizer.status"}static contextAuthenticateError(){return"$context.authenticate.error"}static contextAuthenticateLatency(){return"$context.authenticate.latency"}static contextAuthenticateStatus(){return"$context.authenticate.status"}static contextCustomDomainBasePathMatched(){return"$context.customDomain.basePathMatched"}static contextIntegrationErrorMessage(){return"$context.integrationErrorMessage"}static contextWafError(){return"$context.waf.error"}static contextWafLatency(){return"$context.waf.latency"}static contextWafStatus(){return"$context.waf.status"}}exports.AccessLogField=AccessLogField,_c=JSII_RTTI_SYMBOL_1,AccessLogField[_c]={fqn:"aws-cdk-lib.aws_apigateway.AccessLogField",version:"2.178.2"};class AccessLogFormat{static custom(format){return new AccessLogFormat(format)}static clf(){const requester=[AccessLogField.contextIdentitySourceIp(),AccessLogField.contextIdentityCaller(),AccessLogField.contextIdentityUser()].join(" "),requestTime=AccessLogField.contextRequestTime(),request=[AccessLogField.contextHttpMethod(),AccessLogField.contextResourcePath(),AccessLogField.contextProtocol()].join(" "),status=[AccessLogField.contextStatus(),AccessLogField.contextResponseLength(),AccessLogField.contextRequestId()].join(" ");return new AccessLogFormat(`${requester} [${requestTime}] "${request}" ${status}`)}static jsonWithStandardFields(fields={ip:!0,user:!0,caller:!0,requestTime:!0,httpMethod:!0,resourcePath:!0,status:!0,protocol:!0,responseLength:!0}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_JsonWithStandardFieldProps(fields)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.jsonWithStandardFields),error}return this.custom(JSON.stringify({requestId:AccessLogField.contextRequestId(),ip:fields.ip?AccessLogField.contextIdentitySourceIp():void 0,user:fields.user?AccessLogField.contextIdentityUser():void 0,caller:fields.caller?AccessLogField.contextIdentityCaller():void 0,requestTime:fields.requestTime?AccessLogField.contextRequestTime():void 0,httpMethod:fields.httpMethod?AccessLogField.contextHttpMethod():void 0,resourcePath:fields.resourcePath?AccessLogField.contextResourcePath():void 0,status:fields.status?AccessLogField.contextStatus():void 0,protocol:fields.protocol?AccessLogField.contextProtocol():void 0,responseLength:fields.responseLength?AccessLogField.contextResponseLength():void 0}))}constructor(format){this.format=format}toString(){return this.format}}exports.AccessLogFormat=AccessLogFormat,_d=JSII_RTTI_SYMBOL_1,AccessLogFormat[_d]={fqn:"aws-cdk-lib.aws_apigateway.AccessLogFormat",version:"2.178.2"};
