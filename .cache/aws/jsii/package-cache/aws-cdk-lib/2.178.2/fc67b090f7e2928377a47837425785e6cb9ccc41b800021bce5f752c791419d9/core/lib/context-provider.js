"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContextProvider=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},annotations_1=()=>{var tmp=require("./annotations");return annotations_1=()=>tmp,tmp},stack_1=()=>{var tmp=require("./stack");return stack_1=()=>tmp,tmp},token_1=()=>{var tmp=require("./token");return token_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp};class ContextProvider{static getKey(scope,options){try{jsiiDeprecationWarnings().aws_cdk_lib_GetContextKeyOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getKey),error}const stack=stack_1().Stack.of(scope),props=options.includeEnvironment??!0?{account:stack.account,region:stack.region,...options.props}:options.props??{};if(Object.values(props).find(x=>token_1().Token.isUnresolved(x)))throw new Error(`Cannot determine scope for context provider ${options.provider}.
This usually happens when one or more of the provider props have unresolved tokens`);const propStrings=propsToArray(props);return{key:`${options.provider}:${propStrings.join(":")}`,props}}static getValue(scope,options){try{jsiiDeprecationWarnings().aws_cdk_lib_GetContextValueOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.getValue),error}const stack=stack_1().Stack.of(scope);if(token_1().Token.isUnresolved(stack.account)||token_1().Token.isUnresolved(stack.region))throw new Error(`Cannot retrieve value from context provider ${options.provider} since account/region are not specified at the stack level. Configure "env" with an account and region when you define your stack.See https://docs.aws.amazon.com/cdk/latest/guide/environments.html for more details.`);const{key,props}=this.getKey(scope,options),value=constructs_1().Node.of(scope).tryGetContext(key),providerError=extractProviderError(value);if(value===void 0||providerError!==void 0){const extendedProps={dummyValue:options.dummyValue,ignoreErrorOnMissingContext:options.ignoreErrorOnMissingContext,...props};return stack.reportMissingContextKey({key,provider:options.provider,props:extendedProps}),providerError!==void 0&&annotations_1().Annotations.of(scope).addError(providerError),{value:options.dummyValue}}return{value}}constructor(){}}exports.ContextProvider=ContextProvider,_a=JSII_RTTI_SYMBOL_1,ContextProvider[_a]={fqn:"aws-cdk-lib.ContextProvider",version:"2.178.2"};function extractProviderError(value){if(typeof value=="object"&&value!==null)return value[cxapi().PROVIDER_ERROR_KEY]}function colonQuote(xs){return xs.replace(/\$/g,"$$").replace(/:/g,"$:")}function propsToArray(props,keyPrefix=""){const ret=[];for(const key of Object.keys(props))if(props[key]!==void 0)switch(typeof props[key]){case"object":{ret.push(...propsToArray(props[key],`${keyPrefix}${key}.`));break}case"string":{ret.push(`${keyPrefix}${key}=${colonQuote(props[key])}`);break}default:{ret.push(`${keyPrefix}${key}=${JSON.stringify(props[key])}`);break}}return ret.sort(),ret}
