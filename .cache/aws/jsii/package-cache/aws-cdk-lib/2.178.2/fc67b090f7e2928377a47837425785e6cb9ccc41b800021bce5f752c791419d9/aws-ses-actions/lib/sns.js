"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sns=exports.EmailEncoding=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var EmailEncoding;(function(EmailEncoding2){EmailEncoding2.BASE64="Base64",EmailEncoding2.UTF8="UTF-8"})(EmailEncoding||(exports.EmailEncoding=EmailEncoding={}));class Sns{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_actions_SnsProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Sns),error}}bind(_rule){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_IReceiptRule(_rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{snsAction:{encoding:this.props.encoding,topicArn:this.props.topic.topicArn}}}}exports.Sns=Sns,_a=JSII_RTTI_SYMBOL_1,Sns[_a]={fqn:"aws-cdk-lib.aws_ses_actions.Sns",version:"2.178.2"};
