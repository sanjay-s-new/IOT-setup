"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.WebSocketApi=exports.WebSocketApiKeySelectionExpression=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var route_1=()=>{var tmp=require("./route");return route_1=()=>tmp,tmp},index_1=()=>{var tmp=require(".././index");return index_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},base_1=()=>{var tmp=require("../common/base");return base_1=()=>tmp,tmp};class WebSocketApiKeySelectionExpression{constructor(customApiKeySelector){this.customApiKeySelector=customApiKeySelector}}exports.WebSocketApiKeySelectionExpression=WebSocketApiKeySelectionExpression,_a=JSII_RTTI_SYMBOL_1,WebSocketApiKeySelectionExpression[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2.WebSocketApiKeySelectionExpression",version:"2.178.2"},WebSocketApiKeySelectionExpression.HEADER_X_API_KEY=new WebSocketApiKeySelectionExpression("$request.header.x-api-key"),WebSocketApiKeySelectionExpression.AUTHORIZER_USAGE_IDENTIFIER_KEY=new WebSocketApiKeySelectionExpression("$context.authorizer.usageIdentifierKey");class WebSocketApi extends base_1().ApiBase{static fromWebSocketApiAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_WebSocketApiAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromWebSocketApiAttributes),error}class Import extends base_1().ApiBase{constructor(){super(...arguments),this.apiId=attrs.webSocketId,this.websocketApiId=attrs.webSocketId,this._apiEndpoint=attrs.apiEndpoint}get apiEndpoint(){if(!this._apiEndpoint)throw new(errors_1()).ValidationError("apiEndpoint is not configured on the imported WebSocketApi.",scope);return this._apiEndpoint}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_WebSocketApiProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,WebSocketApi),error}(0,metadata_resource_1().addConstructMetadata)(this,props),this.webSocketApiName=props?.apiName??id;const resource=new(index_1()).CfnApi(this,"Resource",{name:this.webSocketApiName,apiKeySelectionExpression:props?.apiKeySelectionExpression?.customApiKeySelector,protocolType:"WEBSOCKET",description:props?.description,routeSelectionExpression:props?.routeSelectionExpression??"$request.body.action"});this.apiId=resource.ref,this.apiEndpoint=resource.attrApiEndpoint,props?.connectRouteOptions&&this.addRoute("$connect",props.connectRouteOptions),props?.disconnectRouteOptions&&this.addRoute("$disconnect",props.disconnectRouteOptions),props?.defaultRouteOptions&&this.addRoute("$default",props.defaultRouteOptions)}addRoute(routeKey,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_WebSocketRouteOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addRoute),error}return new(route_1()).WebSocketRoute(this,`${routeKey}-Route`,{webSocketApi:this,routeKey,...options})}grantManageConnections(identity){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(identity)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantManageConnections),error}const arn=core_1().Stack.of(this).formatArn({service:"execute-api",resource:this.apiId});return aws_iam_1().Grant.addToPrincipal({grantee:identity,actions:["execute-api:ManageConnections"],resourceArns:[`${arn}/*/*/@connections/*`]})}arnForExecuteApi(method,path,stage){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_apigatewayv2.WebSocketApi#arnForExecuteApi","Use `arnForExecuteApiV2()` instead.")}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.arnForExecuteApi),error}if(path&&!core_1().Token.isUnresolved(path)&&!path.startsWith("/"))throw new(errors_1()).UnscopedValidationError(`Path must start with '/': ${path}`);return method&&method.toUpperCase()==="ANY"&&(method="*"),core_1().Stack.of(this).formatArn({service:"execute-api",resource:this.apiId,arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:`${stage??"*"}/${method??"*"}${path??"/*"}`})}arnForExecuteApiV2(route,stage){return core_1().Stack.of(this).formatArn({service:"execute-api",resource:this.apiId,arnFormat:core_1().ArnFormat.SLASH_RESOURCE_NAME,resourceName:`${stage??"*"}/${route??"*"}`})}}exports.WebSocketApi=WebSocketApi,_b=JSII_RTTI_SYMBOL_1,WebSocketApi[_b]={fqn:"aws-cdk-lib.aws_apigatewayv2.WebSocketApi",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],WebSocketApi.prototype,"addRoute",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],WebSocketApi.prototype,"grantManageConnections",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],WebSocketApi.prototype,"arnForExecuteApi",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],WebSocketApi.prototype,"arnForExecuteApiV2",null);
