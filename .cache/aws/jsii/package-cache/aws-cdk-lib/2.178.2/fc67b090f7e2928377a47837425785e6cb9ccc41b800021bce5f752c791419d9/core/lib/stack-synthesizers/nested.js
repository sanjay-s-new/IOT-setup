"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NestedStackSynthesizer=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var stack_synthesizer_1=()=>{var tmp=require("./stack-synthesizer");return stack_synthesizer_1=()=>tmp,tmp};class NestedStackSynthesizer extends stack_synthesizer_1().StackSynthesizer{constructor(parentDeployment){super(),this.parentDeployment=parentDeployment;try{jsiiDeprecationWarnings().aws_cdk_lib_IStackSynthesizer(parentDeployment)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NestedStackSynthesizer),error}}get bootstrapQualifier(){return this.parentDeployment.bootstrapQualifier}get lookupRole(){return this.parentDeployment.lookupRole}addFileAsset(asset){try{jsiiDeprecationWarnings().aws_cdk_lib_FileAssetSource(asset)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addFileAsset),error}return this.parentDeployment.addFileAsset(asset)}addDockerImageAsset(asset){try{jsiiDeprecationWarnings().aws_cdk_lib_DockerImageAssetSource(asset)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addDockerImageAsset),error}return this.parentDeployment.addDockerImageAsset(asset)}synthesize(session){try{jsiiDeprecationWarnings().aws_cdk_lib_ISynthesisSession(session)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.synthesize),error}this.synthesizeTemplate(session,this.lookupRole)}}exports.NestedStackSynthesizer=NestedStackSynthesizer,_a=JSII_RTTI_SYMBOL_1,NestedStackSynthesizer[_a]={fqn:"aws-cdk-lib.NestedStackSynthesizer",version:"2.178.2"};
