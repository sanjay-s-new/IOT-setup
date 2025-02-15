"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KinesisDestination=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp};class KinesisDestination{constructor(stream,props={}){this.stream=stream,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_kinesis_IStream(stream),jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_destinations_KinesisDestinationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,KinesisDestination),error}}bind(scope,_sourceLogGroup){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_ILogGroup(_sourceLogGroup)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const id="CloudWatchLogsCanPutRecords",role=this.props.role??scope.node.tryFindChild(id)??new(iam()).Role(scope,id,{assumedBy:new(iam()).ServicePrincipal("logs.amazonaws.com")});this.stream.grantWrite(role),role.grantPassRole(role);const policy=role.node.tryFindChild("DefaultPolicy");return policy&&(role.node.defaultChild.addOverride("DependsOn",void 0),scope.node.addDependency(policy)),{arn:this.stream.streamArn,role}}}exports.KinesisDestination=KinesisDestination,_a=JSII_RTTI_SYMBOL_1,KinesisDestination[_a]={fqn:"aws-cdk-lib.aws_logs_destinations.KinesisDestination",version:"2.178.2"};
