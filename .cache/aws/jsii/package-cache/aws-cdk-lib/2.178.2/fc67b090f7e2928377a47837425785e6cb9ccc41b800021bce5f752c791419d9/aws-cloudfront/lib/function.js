"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionRuntime=exports.FunctionEventType=exports.Function=exports.FunctionCode=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},cloudfront_generated_1=()=>{var tmp=require("./cloudfront.generated");return cloudfront_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class FunctionCode{static fromInline(code){return new InlineCode(code)}static fromFile(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_FileCodeOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromFile),error}return new FileCode(options)}}exports.FunctionCode=FunctionCode,_a=JSII_RTTI_SYMBOL_1,FunctionCode[_a]={fqn:"aws-cdk-lib.aws_cloudfront.FunctionCode",version:"2.178.2"};class InlineCode extends FunctionCode{constructor(code){super(),this.code=code}render(){return this.code}}class FileCode extends FunctionCode{constructor(options){super(),this.options=options}render(){return fs().readFileSync(this.options.filePath,{encoding:"utf-8"})}}class Function extends core_1().Resource{static fromFunctionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_FunctionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromFunctionAttributes),error}return new class extends core_1().Resource{constructor(){super(...arguments),this.functionName=attrs.functionName,this.functionArn=attrs.functionArn,this.functionRuntime=attrs.functionRuntime??FunctionRuntime.JS_1_0.value}}(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_FunctionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Function),error}(0,metadata_resource_1().addConstructMetadata)(this,props),this.functionName=props.functionName??this.generateName();const defaultFunctionRuntime=props.keyValueStore?FunctionRuntime.JS_2_0.value:FunctionRuntime.JS_1_0.value;if(this.functionRuntime=props.runtime?.value??defaultFunctionRuntime,props.keyValueStore&&this.functionRuntime===FunctionRuntime.JS_1_0.value)throw new Error(`Key Value Stores cannot be associated to functions using the ${this.functionRuntime} runtime`);const resource=new(cloudfront_generated_1()).CfnFunction(this,"Resource",{autoPublish:props.autoPublish??!0,functionCode:props.code.render(),functionConfig:{comment:props.comment??this.functionName,runtime:this.functionRuntime,keyValueStoreAssociations:props.keyValueStore?[{keyValueStoreArn:props.keyValueStore.keyValueStoreArn}]:void 0},name:this.functionName});this.functionArn=resource.attrFunctionArn,this.functionStage=resource.attrStage}generateName(){return core_1().Names.uniqueId(this).length<=41?core_1().Stack.of(this).region+core_1().Names.uniqueId(this):core_1().Stack.of(this).region+core_1().Lazy.string({produce:()=>core_1().Names.uniqueResourceName(this,{maxLength:40,allowedSpecialCharacters:"-_"})})}}exports.Function=Function,_b=JSII_RTTI_SYMBOL_1,Function[_b]={fqn:"aws-cdk-lib.aws_cloudfront.Function",version:"2.178.2"};var FunctionEventType;(function(FunctionEventType2){FunctionEventType2.VIEWER_REQUEST="viewer-request",FunctionEventType2.VIEWER_RESPONSE="viewer-response"})(FunctionEventType||(exports.FunctionEventType=FunctionEventType={}));class FunctionRuntime{static custom(runtimeString){return new FunctionRuntime(runtimeString)}constructor(value){this.value=value}}exports.FunctionRuntime=FunctionRuntime,_c=JSII_RTTI_SYMBOL_1,FunctionRuntime[_c]={fqn:"aws-cdk-lib.aws_cloudfront.FunctionRuntime",version:"2.178.2"},FunctionRuntime.JS_1_0=new FunctionRuntime("cloudfront-js-1.0"),FunctionRuntime.JS_2_0=new FunctionRuntime("cloudfront-js-2.0");
