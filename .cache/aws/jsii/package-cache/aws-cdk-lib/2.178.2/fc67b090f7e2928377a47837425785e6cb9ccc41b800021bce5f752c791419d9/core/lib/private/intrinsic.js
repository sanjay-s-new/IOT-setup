"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Intrinsic=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var stack_trace_1=()=>{var tmp=require("../stack-trace");return stack_trace_1=()=>tmp,tmp},token_1=()=>{var tmp=require("../token");return token_1=()=>tmp,tmp},type_hints_1=()=>{var tmp=require("../type-hints");return type_hints_1=()=>tmp,tmp};class Intrinsic{constructor(value,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_IntrinsicProps(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Intrinsic),error}if(isFunction(value))throw new Error(`Argument to Intrinsic must be a plain value object, got ${value}`);this.creationStack=options.stackTrace??!0?(0,stack_trace_1().captureStackTrace)():[],this.value=value,this.typeHint=options.typeHint??type_hints_1().ResolutionTypeHint.STRING}resolve(_context){try{jsiiDeprecationWarnings().aws_cdk_lib_IResolveContext(_context)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.resolve),error}return this.value}toString(){return token_1().Token.asString(this)}toStringList(){return token_1().Token.asList(this)}toJSON(){return"<unresolved-token>"}newError(message){return new Error(`${message}
Token created:
    at ${this.creationStack.join(`
    at `)}
Error thrown:`)}}exports.Intrinsic=Intrinsic,_a=JSII_RTTI_SYMBOL_1,Intrinsic[_a]={fqn:"aws-cdk-lib.Intrinsic",version:"2.178.2"};function isFunction(x){return typeof x=="function"}
