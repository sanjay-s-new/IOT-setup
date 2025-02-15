"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpRoute=exports.HttpRouteKey=exports.HttpMethod=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},index_1=()=>{var tmp=require(".././index");return index_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},HttpMethod;(function(HttpMethod2){HttpMethod2.ANY="ANY",HttpMethod2.DELETE="DELETE",HttpMethod2.GET="GET",HttpMethod2.HEAD="HEAD",HttpMethod2.OPTIONS="OPTIONS",HttpMethod2.PATCH="PATCH",HttpMethod2.POST="POST",HttpMethod2.PUT="PUT"})(HttpMethod||(exports.HttpMethod=HttpMethod={}));class HttpRouteKey{static with(path,method){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpMethod(method)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.with),error}if(path!=="/"&&(!path.startsWith("/")||path.endsWith("/")))throw new(errors_1()).UnscopedValidationError('A route path must always start with a "/" and not end with a "/"');return new HttpRouteKey(method,path)}constructor(method,path){this.method=method??HttpMethod.ANY,this.path=path,this.key=path?`${method} ${path}`:"$default"}}exports.HttpRouteKey=HttpRouteKey,_a=JSII_RTTI_SYMBOL_1,HttpRouteKey[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2.HttpRouteKey",version:"2.178.2"},HttpRouteKey.DEFAULT=new HttpRouteKey;var HttpRouteAuthorizationType;(function(HttpRouteAuthorizationType2){HttpRouteAuthorizationType2.AWS_IAM="AWS_IAM",HttpRouteAuthorizationType2.JWT="JWT",HttpRouteAuthorizationType2.CUSTOM="CUSTOM",HttpRouteAuthorizationType2.NONE="NONE"})(HttpRouteAuthorizationType||(HttpRouteAuthorizationType={}));class HttpRoute extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpRouteProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpRoute),error}(0,metadata_resource_1().addConstructMetadata)(this,props),this.httpApi=props.httpApi,this.path=props.routeKey.path,this.method=props.routeKey.method,this.routeArn=this.produceRouteArn(props.routeKey.method);const config=props.integration._bindToRoute({route:this,scope:this}),authorizer=props.authorizer??this.httpApi.defaultAuthorizer;if(this.authBindResult=authorizer?.bind({route:this,scope:this.httpApi instanceof constructs_1().Construct?this.httpApi:this}),this.authBindResult&&!(this.authBindResult.authorizationType in HttpRouteAuthorizationType))throw new(errors_1()).ValidationError(`authorizationType should either be AWS_IAM, JWT, CUSTOM, or NONE but was '${this.authBindResult.authorizationType}'`,scope);let authorizationScopes=this.authBindResult?.authorizationScopes;this.authBindResult&&(props.authorizationScopes||this.httpApi.defaultAuthorizationScopes)&&(authorizationScopes=Array.from(new Set([...authorizationScopes??[],...props.authorizationScopes??this.httpApi.defaultAuthorizationScopes??[]]))),authorizationScopes?.length===0&&(authorizationScopes=void 0);const routeProps={apiId:props.httpApi.apiId,routeKey:props.routeKey.key,target:`integrations/${config.integrationId}`,authorizerId:this.authBindResult?.authorizerId,authorizationType:this.authBindResult?.authorizationType??"NONE",authorizationScopes},route=new(index_1()).CfnRoute(this,"Resource",routeProps);this.routeId=route.ref}produceRouteArn(httpMethod){const stage="*",iamHttpMethod=httpMethod===HttpMethod.ANY?"*":httpMethod,path=this.path??"/";if(path.length>1e3)throw new(errors_1()).ValidationError(`Path is too long: ${path}`,this);const iamPath=path.replace(/\{.*?\}.*/,"*");return`arn:${core_1().Aws.PARTITION}:execute-api:${this.env.region}:${this.env.account}:${this.httpApi.apiId}/${stage}/${iamHttpMethod}${iamPath}`}grantInvoke(grantee,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IGrantable(grantee),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_GrantInvokeOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.grantInvoke),error}if(!this.authBindResult||this.authBindResult.authorizationType!==HttpRouteAuthorizationType.AWS_IAM)throw new(errors_1()).ValidationError("To use grantInvoke, you must use IAM authorization",this);const httpMethods=Array.from(new Set(options.httpMethods??[this.method]));if(this.method!==HttpMethod.ANY&&httpMethods.some(method=>method!==this.method))throw new(errors_1()).ValidationError("This route does not support granting invoke for all requested http methods",this);const resourceArns=httpMethods.map(httpMethod=>this.produceRouteArn(httpMethod));return iam().Grant.addToPrincipal({grantee,actions:["execute-api:Invoke"],resourceArns})}}exports.HttpRoute=HttpRoute,_b=JSII_RTTI_SYMBOL_1,HttpRoute[_b]={fqn:"aws-cdk-lib.aws_apigatewayv2.HttpRoute",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],HttpRoute.prototype,"grantInvoke",null);
