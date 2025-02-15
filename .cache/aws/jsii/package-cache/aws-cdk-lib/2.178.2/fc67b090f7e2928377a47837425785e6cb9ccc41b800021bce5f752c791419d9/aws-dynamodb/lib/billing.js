"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Billing=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var shared_1=()=>{var tmp=require("./shared");return shared_1=()=>tmp,tmp};class Billing{static onDemand(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_dynamodb_MaxThroughputProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onDemand),error}return new class extends Billing{_renderReadCapacity(){return props?.maxReadRequestUnits}_renderWriteCapacity(){return props?.maxWriteRequestUnits}}(shared_1().BillingMode.PAY_PER_REQUEST)}static provisioned(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_dynamodb_ThroughputProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.provisioned),error}return new class extends Billing{_renderReadCapacity(){return props.readCapacity._renderReadCapacity()}_renderWriteCapacity(){return props.writeCapacity._renderWriteCapacity()}}(shared_1().BillingMode.PROVISIONED)}constructor(mode){this.mode=mode}}exports.Billing=Billing,_a=JSII_RTTI_SYMBOL_1,Billing[_a]={fqn:"aws-cdk-lib.aws_dynamodb.Billing",version:"2.178.2"};
