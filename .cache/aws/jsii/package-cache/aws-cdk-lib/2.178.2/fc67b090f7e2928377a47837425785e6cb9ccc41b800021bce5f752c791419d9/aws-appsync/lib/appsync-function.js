"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppsyncFunction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var appsync_generated_1=()=>{var tmp=require("./appsync.generated");return appsync_generated_1=()=>tmp,tmp},data_source_1=()=>{var tmp=require("./data-source");return data_source_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class AppsyncFunction extends core_1().Resource{static fromAppsyncFunctionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_AppsyncFunctionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAppsyncFunctionAttributes),error}class Import extends core_1().Resource{constructor(s,i){super(s,i),this.functionId=core_1().Lazy.stringValue({produce:()=>core_1().Fn.select(3,core_1().Fn.split("/",attrs.functionArn))}),this.functionArn=attrs.functionArn}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appsync_AppsyncFunctionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AppsyncFunction),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.runtime&&!props.code)throw new(core_1()).ValidationError("Code is required when specifying a runtime",scope);if(props.code&&(props.requestMappingTemplate||props.responseMappingTemplate))throw new(core_1()).ValidationError("Mapping templates cannot be used alongside code",scope);if(props.maxBatchSize&&!(props.dataSource instanceof data_source_1().LambdaDataSource))throw new(core_1()).ValidationError("maxBatchSize can only be set for the data source of type LambdaDataSource'",scope);const code=props.code?.bind(this);this.function=new(appsync_generated_1()).CfnFunctionConfiguration(this,"Resource",{name:props.name,description:props.description,apiId:props.api.apiId,dataSourceName:props.dataSource.name,runtime:props.runtime?.toProperties(),codeS3Location:code?.s3Location,code:code?.inlineCode,functionVersion:"2018-05-29",requestMappingTemplate:props.requestMappingTemplate?.renderTemplate(),responseMappingTemplate:props.responseMappingTemplate?.renderTemplate(),maxBatchSize:props.maxBatchSize}),this.functionName=this.function.attrName,this.functionArn=this.function.attrFunctionArn,this.functionId=this.function.attrFunctionId,this.dataSource=props.dataSource,this.function.addDependency(this.dataSource.ds),props.api.addSchemaDependency(this.function)}}exports.AppsyncFunction=AppsyncFunction,_a=JSII_RTTI_SYMBOL_1,AppsyncFunction[_a]={fqn:"aws-cdk-lib.aws_appsync.AppsyncFunction",version:"2.178.2"};
