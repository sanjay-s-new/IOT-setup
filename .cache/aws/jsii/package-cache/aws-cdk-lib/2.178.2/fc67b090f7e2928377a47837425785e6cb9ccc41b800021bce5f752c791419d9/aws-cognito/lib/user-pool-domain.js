"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserPoolDomain=exports.ManagedLoginVersion=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cognito_generated_1=()=>{var tmp=require("./cognito.generated");return cognito_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},custom_resources_1=()=>{var tmp=require("../../custom-resources");return custom_resources_1=()=>tmp,tmp},ManagedLoginVersion;(function(ManagedLoginVersion2){ManagedLoginVersion2[ManagedLoginVersion2.CLASSIC_HOSTED_UI=1]="CLASSIC_HOSTED_UI",ManagedLoginVersion2[ManagedLoginVersion2.NEWER_MANAGED_LOGIN=2]="NEWER_MANAGED_LOGIN"})(ManagedLoginVersion||(exports.ManagedLoginVersion=ManagedLoginVersion={}));class UserPoolDomain extends core_1().Resource{static fromDomainName(scope,id,userPoolDomainName){class Import extends core_1().Resource{constructor(){super(...arguments),this.domainName=userPoolDomainName}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_UserPoolDomainProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,UserPoolDomain),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),!!props.customDomain==!!props.cognitoDomain)throw new(errors_1()).ValidationError("One of, and only one of, cognitoDomain or customDomain must be specified",this);if(props.cognitoDomain?.domainPrefix&&!core_1().Token.isUnresolved(props.cognitoDomain?.domainPrefix)&&!/^[a-z0-9-]+$/.test(props.cognitoDomain.domainPrefix))throw new(errors_1()).ValidationError("domainPrefix for cognitoDomain can contain only lowercase alphabets, numbers and hyphens",this);this.isCognitoDomain=!!props.cognitoDomain;const domainName=props.cognitoDomain?.domainPrefix||props.customDomain?.domainName;this.resource=new(cognito_generated_1()).CfnUserPoolDomain(this,"Resource",{userPoolId:props.userPool.userPoolId,domain:domainName,customDomainConfig:props.customDomain?{certificateArn:props.customDomain.certificate.certificateArn}:void 0,managedLoginVersion:props.managedLoginVersion}),this.domainName=this.resource.ref}get cloudFrontEndpoint(){return this.resource.getAtt("CloudFrontDistribution").toString()}get cloudFrontDomainName(){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_cognito.UserPoolDomain#cloudFrontDomainName","use `cloudFrontEndpoint` method instead.")}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,jsiiDeprecationWarnings().getPropertyDescriptor(this,"cloudFrontDomainName").get),error}if(!this.cloudFrontCustomResource){const sdkCall={service:"CognitoIdentityServiceProvider",action:"describeUserPoolDomain",parameters:{Domain:this.domainName},physicalResourceId:custom_resources_1().PhysicalResourceId.of(this.domainName)};this.cloudFrontCustomResource=new(custom_resources_1()).AwsCustomResource(this,"CloudFrontDomainName",{resourceType:"Custom::UserPoolCloudFrontDomainName",onCreate:sdkCall,onUpdate:sdkCall,policy:custom_resources_1().AwsCustomResourcePolicy.fromSdkCalls({resources:["*"]}),installLatestAwsSdk:!1})}return this.cloudFrontCustomResource.getResponseField("DomainDescription.CloudFrontDistribution")}baseUrl(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_BaseUrlOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.baseUrl),error}if(this.isCognitoDomain){const authDomain="auth"+(options?.fips?"-fips":"");return`https://${this.domainName}.${authDomain}.${core_1().Stack.of(this).region}.amazoncognito.com`}return`https://${this.domainName}`}signInUrl(client,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_UserPoolClient(client),jsiiDeprecationWarnings().aws_cdk_lib_aws_cognito_SignInUrlOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.signInUrl),error}let responseType;if(client.oAuthFlows.authorizationCodeGrant)responseType="code";else if(client.oAuthFlows.implicitCodeGrant)responseType="token";else throw new(errors_1()).ValidationError("signInUrl is not supported for clients without authorizationCodeGrant or implicitCodeGrant flow enabled",this);const path=options.signInPath??"/login";return`${this.baseUrl(options)}${path}?client_id=${client.userPoolClientId}&response_type=${responseType}&redirect_uri=${options.redirectUri}`}}exports.UserPoolDomain=UserPoolDomain,_a=JSII_RTTI_SYMBOL_1,UserPoolDomain[_a]={fqn:"aws-cdk-lib.aws_cognito.UserPoolDomain",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],UserPoolDomain.prototype,"baseUrl",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],UserPoolDomain.prototype,"signInUrl",null);
