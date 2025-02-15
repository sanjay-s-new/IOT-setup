"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.QueuePolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var sqs_generated_1=()=>{var tmp=require("./sqs.generated");return sqs_generated_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class QueuePolicy extends core_1().Resource{constructor(scope,id,props){super(scope,id),this.document=new(aws_iam_1()).PolicyDocument;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_sqs_QueuePolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,QueuePolicy),error}(0,metadata_resource_1().addConstructMetadata)(this,props),new(sqs_generated_1()).CfnQueuePolicy(this,"Resource",{policyDocument:this.document,queues:props.queues.map(q=>q.queueUrl)})}get queuePolicyId(){throw new(errors_1()).ValidationError("QueuePolicy.queuePolicyId has been removed from CloudFormation",this)}}exports.QueuePolicy=QueuePolicy,_a=JSII_RTTI_SYMBOL_1,QueuePolicy[_a]={fqn:"aws-cdk-lib.aws_sqs.QueuePolicy",version:"2.178.2"};
