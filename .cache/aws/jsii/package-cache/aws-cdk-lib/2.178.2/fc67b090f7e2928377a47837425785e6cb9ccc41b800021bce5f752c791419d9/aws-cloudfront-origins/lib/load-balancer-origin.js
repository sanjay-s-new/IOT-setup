"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadBalancerV2Origin=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var http_origin_1=()=>{var tmp=require("./http-origin");return http_origin_1=()=>tmp,tmp};class LoadBalancerV2Origin extends http_origin_1().HttpOrigin{constructor(loadBalancer,props={}){super(loadBalancer.loadBalancerDnsName,{...props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_ILoadBalancerV2(loadBalancer),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_origins_LoadBalancerV2OriginProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,LoadBalancerV2Origin),error}}}exports.LoadBalancerV2Origin=LoadBalancerV2Origin,_a=JSII_RTTI_SYMBOL_1,LoadBalancerV2Origin[_a]={fqn:"aws-cdk-lib.aws_cloudfront_origins.LoadBalancerV2Origin",version:"2.178.2"};
