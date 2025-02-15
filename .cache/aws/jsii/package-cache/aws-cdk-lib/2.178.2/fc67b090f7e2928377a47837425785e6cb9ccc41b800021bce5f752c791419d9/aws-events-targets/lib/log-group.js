"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CloudWatchLogGroup=exports.LogGroupTargetInput=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var log_group_resource_policy_1=()=>{var tmp=require("./log-group-resource-policy");return log_group_resource_policy_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},aws_events_1=()=>{var tmp=require("../../aws-events");return aws_events_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class LogGroupTargetInput{static fromObject(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_targets_LogGroupTargetInputOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromObject),error}return aws_events_1().RuleTargetInput.fromObject({timestamp:options?.timestamp??aws_events_1().EventField.time,message:options?.message??aws_events_1().EventField.detailType})}}exports.LogGroupTargetInput=LogGroupTargetInput,_a=JSII_RTTI_SYMBOL_1,LogGroupTargetInput[_a]={fqn:"aws-cdk-lib.aws_events_targets.LogGroupTargetInput",version:"2.178.2"};class CloudWatchLogGroup{constructor(logGroup,props={}){this.logGroup=logGroup,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_logs_ILogGroup(logGroup),jsiiDeprecationWarnings().aws_cdk_lib_aws_events_targets_LogGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CloudWatchLogGroup),error}}bind(_rule,_id){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_IRule(_rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const resourcePolicyId=`EventsLogGroupPolicy${cdk().Names.nodeUniqueId(_rule.node)}`,logGroupStack=cdk().Stack.of(this.logGroup);if(this.props.event&&this.props.logEvent)throw new Error('Only one of "event" or "logEvent" can be specified');if(this.target=this.props.event?.bind(_rule),this.target?.inputPath||this.target?.input)throw new Error("CloudWatchLogGroup targets does not support input or inputPath");return _rule.node.addValidation({validate:()=>this.validateInputTemplate()}),this.logGroup.node.tryFindChild(resourcePolicyId)||new(log_group_resource_policy_1()).LogGroupResourcePolicy(logGroupStack,resourcePolicyId,{installLatestAwsSdk:this.props.installLatestAwsSdk,policyStatements:[new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["logs:PutLogEvents","logs:CreateLogStream"],resources:[this.logGroup.logGroupArn],principals:[new(iam()).ServicePrincipal("events.amazonaws.com")]})]}),{...(0,util_1().bindBaseTargetConfig)(this.props),arn:logGroupStack.formatArn({service:"logs",resource:"log-group",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:this.logGroup.logGroupName}),input:this.props.event??this.props.logEvent,targetResource:this.logGroup}}validateInputTemplate(){if(this.target?.inputTemplate){const resolvedTemplate=core_1().Stack.of(this.logGroup).resolve(this.target.inputTemplate);if(typeof resolvedTemplate=="string"){const quotedTemplate=resolvedTemplate.replace(new RegExp("(<[^<>]*?>)","g"),'"$1"');try{const inputTemplate=JSON.parse(quotedTemplate),inputTemplateKeys=Object.keys(inputTemplate);if(inputTemplateKeys.length!==2||!inputTemplateKeys.includes("timestamp")||!inputTemplateKeys.includes("message"))return["CloudWatchLogGroup targets only support input templates in the format {timestamp: <timestamp>, message: <message>}"]}catch(e){return[`Could not parse input template as JSON.
CloudWatchLogGroup targets only support input templates in the format {timestamp: <timestamp>, message: <message>}`,e]}}}return[]}}exports.CloudWatchLogGroup=CloudWatchLogGroup,_b=JSII_RTTI_SYMBOL_1,CloudWatchLogGroup[_b]={fqn:"aws-cdk-lib.aws_events_targets.CloudWatchLogGroup",version:"2.178.2"};
