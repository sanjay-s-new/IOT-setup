"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthorizationType=exports.Method=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},apigateway_canned_metrics_generated_1=()=>{var tmp=require("./apigateway-canned-metrics.generated");return apigateway_canned_metrics_generated_1=()=>tmp,tmp},apigateway_generated_1=()=>{var tmp=require("./apigateway.generated");return apigateway_generated_1=()=>tmp,tmp},authorizer_1=()=>{var tmp=require("./authorizer");return authorizer_1=()=>tmp,tmp},mock_1=()=>{var tmp=require("./integrations/mock");return mock_1=()=>tmp,tmp},restapi_1=()=>{var tmp=require("./restapi");return restapi_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};class Method extends core_1().Resource{constructor(scope,id,props){super(scope,id),this.methodResponses=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_MethodProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Method),error}(0,metadata_resource_1().addConstructMetadata)(this,props),this.resource=props.resource,this.api=props.resource.api,this.httpMethod=props.httpMethod.toUpperCase(),(0,util_1().validateHttpMethod)(this.httpMethod);const options=props.options||{},defaultMethodOptions=props.resource.defaultMethodOptions||{},authorizer=options.authorizationType===AuthorizationType.NONE&&options.authorizer==null?void 0:options.authorizer||defaultMethodOptions.authorizer,authorizerId=authorizer?.authorizerId?authorizer.authorizerId:void 0,authorizationType=this.getMethodAuthorizationType(options,defaultMethodOptions,authorizer),defaultScopes=options.authorizationScopes??defaultMethodOptions.authorizationScopes,authorizationScopes=authorizationType===AuthorizationType.COGNITO?defaultScopes:void 0;authorizationType!==AuthorizationType.COGNITO&&defaultScopes&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-apigateway:invalidAuthScope","'AuthorizationScopes' can only be set when 'AuthorizationType' sets 'COGNITO_USER_POOLS'. Default to ignore the values set in 'AuthorizationScopes'."),authorizer_1().Authorizer.isAuthorizer(authorizer)&&authorizer._attachToApi(this.api);for(const mr of options.methodResponses??defaultMethodOptions.methodResponses??[])this.addMethodResponse(mr);const bindResult=(props.integration??this.resource.defaultIntegration??new(mock_1()).MockIntegration).bind(this),methodProps={resourceId:props.resource.resourceId,restApiId:this.api.restApiId,httpMethod:this.httpMethod,operationName:options.operationName||defaultMethodOptions.operationName,apiKeyRequired:options.apiKeyRequired??defaultMethodOptions.apiKeyRequired,authorizationType,authorizerId,requestParameters:options.requestParameters||defaultMethodOptions.requestParameters,integration:this.renderIntegration(bindResult),methodResponses:core_1().Lazy.any({produce:()=>this.renderMethodResponses(this.methodResponses)},{omitEmptyArray:!0}),requestModels:this.renderRequestModels(options.requestModels),requestValidatorId:this.requestValidatorId(options),authorizationScopes},resource=new(apigateway_generated_1()).CfnMethod(this,"Resource",methodProps);this.methodId=resource.ref,restapi_1().RestApiBase._isRestApiBase(props.resource.api)&&props.resource.api._attachMethod(this);const deployment=props.resource.api.latestDeployment;deployment&&(deployment.node.addDependency(resource),deployment.addToLogicalId({method:{...methodProps,integrationToken:bindResult?.deploymentToken}}))}get restApi(){return this.resource.restApi}get methodArn(){const stage=this.api.deploymentStage?.stageName;return this.api.arnForExecuteApi(this.httpMethod,pathForArn(this.resource.path),stage)}get testMethodArn(){return this.api.arnForExecuteApi(this.httpMethod,pathForArn(this.resource.path),"test-invoke-stage")}addMethodResponse(methodResponse){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_MethodResponse(methodResponse)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addMethodResponse),error}this.methodResponses.find(x=>x.statusCode===methodResponse.statusCode)&&core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-apigateway:duplicateStatusCodes",`addMethodResponse called multiple times with statusCode=${methodResponse.statusCode}, deployment will be nondeterministic. Use a single addMethodResponse call to configure the entire response.`),this.methodResponses.push(methodResponse)}getMethodAuthorizationType(options,defaultMethodOptions,authorizer){const authorizerAuthType=authorizer?.authorizationType,optionsAuthType=options.authorizationType||defaultMethodOptions.authorizationType,finalAuthType=authorizerAuthType||optionsAuthType||AuthorizationType.NONE;if(authorizerAuthType&&optionsAuthType&&authorizerAuthType!==optionsAuthType)throw new(errors_1()).ValidationError(`${this.resource}/${this.httpMethod} - Authorization type is set to ${optionsAuthType} which is different from what is required by the authorizer [${authorizerAuthType}]`,this);return finalAuthType}renderIntegration(bindResult){const options=bindResult.options??{};let credentials;return options.credentialsRole?credentials=options.credentialsRole.roleArn:options.credentialsPassthrough&&(credentials=core_1().Stack.of(this).formatArn({service:"iam",region:"",account:"*",resource:"user",arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:"*"})),{type:bindResult.type,uri:bindResult.uri,cacheKeyParameters:options.cacheKeyParameters,cacheNamespace:options.cacheNamespace,contentHandling:options.contentHandling,integrationHttpMethod:bindResult.integrationHttpMethod,requestParameters:options.requestParameters,requestTemplates:options.requestTemplates,passthroughBehavior:options.passthroughBehavior,integrationResponses:options.integrationResponses,connectionType:options.connectionType,connectionId:options.vpcLink?options.vpcLink.vpcLinkId:void 0,credentials,timeoutInMillis:options.timeout?.toMilliseconds()}}renderMethodResponses(methodResponses){if(methodResponses)return methodResponses.map(mr=>{let responseModels;return mr.responseModels&&(responseModels=Object.fromEntries(Object.entries(mr.responseModels).map(([contentType,rm])=>[contentType,rm.modelId]))),{statusCode:mr.statusCode,responseParameters:mr.responseParameters,responseModels}})}renderRequestModels(requestModels){if(!requestModels)return;const models={};for(const contentType in requestModels)requestModels.hasOwnProperty(contentType)&&(models[contentType]=requestModels[contentType].modelId);return models}requestValidatorId(options){if(options.requestValidator&&options.requestValidatorOptions)throw new(errors_1()).ValidationError("Only one of 'requestValidator' or 'requestValidatorOptions' must be specified.",this);if(options.requestValidatorOptions){const id=core_1().FeatureFlags.of(this).isEnabled(cx_api_1().APIGATEWAY_REQUEST_VALIDATOR_UNIQUE_ID)?`${core_1().Names.uniqueResourceName(new(constructs_1()).Construct(this,"Validator"),{})}`:"validator";return this.api.addRequestValidator(id,options.requestValidatorOptions).requestValidatorId}return options.requestValidator?.requestValidatorId}metric(metricName,stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metric),error}return new(cloudwatch()).Metric({namespace:"AWS/ApiGateway",metricName,dimensionsMap:{ApiName:this.api.restApiName,Method:this.httpMethod,Resource:this.resource.path,Stage:stage.stageName},...props}).attachTo(this)}metricClientError(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricClientError),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics._4XxErrorSum,stage,props)}metricServerError(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricServerError),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics._5XxErrorSum,stage,props)}metricCacheHitCount(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricCacheHitCount),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics.cacheHitCountSum,stage,props)}metricCacheMissCount(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricCacheMissCount),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics.cacheMissCountSum,stage,props)}metricCount(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricCount),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics.countSum,stage,{statistic:"SampleCount",...props})}metricIntegrationLatency(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricIntegrationLatency),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics.integrationLatencyAverage,stage,props)}metricLatency(stage,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigateway_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricLatency),error}return this.cannedMetric(apigateway_canned_metrics_generated_1().ApiGatewayMetrics.latencyAverage,stage,props)}grantExecute(grantee){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantExecute),error}return iam().Grant.addToPrincipal({grantee,actions:["execute-api:Invoke"],resourceArns:[this.methodArn]})}cannedMetric(fn,stage,props){return new(cloudwatch()).Metric({...fn({ApiName:this.api.restApiName,Method:this.httpMethod,Resource:this.resource.path,Stage:stage.stageName}),...props}).attachTo(this)}}exports.Method=Method,_a=JSII_RTTI_SYMBOL_1,Method[_a]={fqn:"aws-cdk-lib.aws_apigateway.Method",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"addMethodResponse",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metric",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricClientError",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricServerError",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricCacheHitCount",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricCacheMissCount",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricCount",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricIntegrationLatency",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"metricLatency",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Method.prototype,"grantExecute",null);var AuthorizationType;(function(AuthorizationType2){AuthorizationType2.NONE="NONE",AuthorizationType2.IAM="AWS_IAM",AuthorizationType2.CUSTOM="CUSTOM",AuthorizationType2.COGNITO="COGNITO_USER_POOLS"})(AuthorizationType||(exports.AuthorizationType=AuthorizationType={}));function pathForArn(path){return path.replace(/\{[^\}]*\}/g,"*")}
