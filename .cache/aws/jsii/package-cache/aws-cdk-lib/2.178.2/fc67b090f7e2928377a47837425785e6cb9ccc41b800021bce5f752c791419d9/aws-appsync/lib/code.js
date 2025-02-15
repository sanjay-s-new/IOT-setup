"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.InlineCode=exports.AssetCode=exports.Code=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var s3_assets=()=>{var tmp=require("../../aws-s3-assets");return s3_assets=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp};class Code{static fromAsset(path,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromAsset),error}return new AssetCode(path,options)}static fromInline(code){return new InlineCode(code)}}exports.Code=Code,_a=JSII_RTTI_SYMBOL_1,Code[_a]={fqn:"aws-cdk-lib.aws_appsync.Code",version:"2.178.2"};class AssetCode extends Code{constructor(path,options={}){super(),this.path=path,this.options=options;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AssetCode),error}}bind(scope){if(!this.asset)this.asset=new(s3_assets()).Asset(scope,"Code",{path:this.path,...this.options});else if(cdk().Stack.of(this.asset)!==cdk().Stack.of(scope))throw new(cdk()).ValidationError(`Asset is already associated with another stack '${cdk().Stack.of(this.asset).stackName}'. Create a new Code instance for every stack.`,scope);return{s3Location:this.asset.s3ObjectUrl}}}exports.AssetCode=AssetCode,_b=JSII_RTTI_SYMBOL_1,AssetCode[_b]={fqn:"aws-cdk-lib.aws_appsync.AssetCode",version:"2.178.2"};class InlineCode extends Code{constructor(code){if(super(),this.code=code,code.length===0)throw new(cdk()).UnscopedValidationError("AppSync Inline code cannot be empty")}bind(_scope){return{inlineCode:this.code}}}exports.InlineCode=InlineCode,_c=JSII_RTTI_SYMBOL_1,InlineCode[_c]={fqn:"aws-cdk-lib.aws_appsync.InlineCode",version:"2.178.2"};
