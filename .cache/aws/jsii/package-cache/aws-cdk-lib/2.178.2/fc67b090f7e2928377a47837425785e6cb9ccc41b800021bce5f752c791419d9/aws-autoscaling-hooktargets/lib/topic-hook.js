"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TopicHook=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var common_1=()=>{var tmp=require("./common");return common_1=()=>tmp,tmp};class TopicHook{constructor(topic){this.topic=topic;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sns_ITopic(topic)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TopicHook),error}}bind(_scope,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_BindHookTargetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const role=(0,common_1().createRole)(_scope,options.role);return this.topic.grantPublish(role),{notificationTargetArn:this.topic.topicArn,createdRole:role}}}exports.TopicHook=TopicHook,_a=JSII_RTTI_SYMBOL_1,TopicHook[_a]={fqn:"aws-cdk-lib.aws_autoscaling_hooktargets.TopicHook",version:"2.178.2"};
