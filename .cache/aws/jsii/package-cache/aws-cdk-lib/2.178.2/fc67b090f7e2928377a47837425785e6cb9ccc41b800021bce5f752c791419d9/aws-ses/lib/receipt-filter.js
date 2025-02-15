"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.WhiteListReceiptFilter=exports.AllowListReceiptFilter=exports.ReceiptFilter=exports.ReceiptFilterPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},ses_generated_1=()=>{var tmp=require("./ses.generated");return ses_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},ReceiptFilterPolicy;(function(ReceiptFilterPolicy2){ReceiptFilterPolicy2.ALLOW="Allow",ReceiptFilterPolicy2.BLOCK="Block"})(ReceiptFilterPolicy||(exports.ReceiptFilterPolicy=ReceiptFilterPolicy={}));class ReceiptFilter extends core_1().Resource{constructor(scope,id,props={}){super(scope,id,{physicalName:props.receiptFilterName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_ReceiptFilterProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ReceiptFilter),error}(0,metadata_resource_1().addConstructMetadata)(this,props),new(ses_generated_1()).CfnReceiptFilter(this,"Resource",{filter:{ipFilter:{cidr:props.ip||"0.0.0.0/0",policy:props.policy||ReceiptFilterPolicy.BLOCK},name:this.physicalName}})}}exports.ReceiptFilter=ReceiptFilter,_a=JSII_RTTI_SYMBOL_1,ReceiptFilter[_a]={fqn:"aws-cdk-lib.aws_ses.ReceiptFilter",version:"2.178.2"};class AllowListReceiptFilter extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_AllowListReceiptFilterProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,AllowListReceiptFilter),error}new ReceiptFilter(this,"BlockAll"),props.ips.forEach(ip=>{new ReceiptFilter(this,`Allow${ip.replace(/[^\d]/g,"")}`,{ip,policy:ReceiptFilterPolicy.ALLOW})})}}exports.AllowListReceiptFilter=AllowListReceiptFilter,_b=JSII_RTTI_SYMBOL_1,AllowListReceiptFilter[_b]={fqn:"aws-cdk-lib.aws_ses.AllowListReceiptFilter",version:"2.178.2"};class WhiteListReceiptFilter extends AllowListReceiptFilter{constructor(scope,id,props){super(scope,id,props)}}exports.WhiteListReceiptFilter=WhiteListReceiptFilter,_c=JSII_RTTI_SYMBOL_1,WhiteListReceiptFilter[_c]={fqn:"aws-cdk-lib.aws_ses.WhiteListReceiptFilter",version:"2.178.2"};
