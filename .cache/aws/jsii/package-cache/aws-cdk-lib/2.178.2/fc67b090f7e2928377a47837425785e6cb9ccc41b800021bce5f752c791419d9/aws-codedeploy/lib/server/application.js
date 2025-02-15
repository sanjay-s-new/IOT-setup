"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServerApplication=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},codedeploy_generated_1=()=>{var tmp=require("../codedeploy.generated");return codedeploy_generated_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("../private/utils");return utils_1=()=>tmp,tmp};class ServerApplication extends core_1().Resource{static fromServerApplicationName(scope,id,serverApplicationName){class Import extends core_1().Resource{constructor(){super(...arguments),this.applicationArn=(0,utils_1().arnForApplication)(core_1().Stack.of(scope),serverApplicationName),this.applicationName=serverApplicationName}}return new Import(scope,id)}static fromServerApplicationArn(scope,id,serverApplicationArn){return new class extends core_1().Resource{constructor(){super(...arguments),this.applicationArn=serverApplicationArn,this.applicationName=core_1().Arn.split(serverApplicationArn,core_1().ArnFormat.COLON_RESOURCE_NAME).resourceName??"<invalid arn>"}}(scope,id,{environmentFromArn:serverApplicationArn})}constructor(scope,id,props={}){super(scope,id,{physicalName:props.applicationName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codedeploy_ServerApplicationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ServerApplication),error}(0,metadata_resource_1().addConstructMetadata)(this,props);const resource=new(codedeploy_generated_1()).CfnApplication(this,"Resource",{applicationName:this.physicalName,computePlatform:"Server"});this.applicationName=this.getResourceNameAttribute(resource.ref),this.applicationArn=this.getResourceArnAttribute((0,utils_1().arnForApplication)(core_1().Stack.of(scope),resource.ref),{service:"codedeploy",resource:"application",resourceName:this.physicalName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME}),this.node.addValidation({validate:()=>(0,utils_1().validateName)("Application",this.physicalName)})}}exports.ServerApplication=ServerApplication,_a=JSII_RTTI_SYMBOL_1,ServerApplication[_a]={fqn:"aws-cdk-lib.aws_codedeploy.ServerApplication",version:"2.178.2"};
