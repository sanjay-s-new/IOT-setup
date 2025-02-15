"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScheduledAction=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var autoscaling_generated_1=()=>{var tmp=require("./autoscaling.generated");return autoscaling_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class ScheduledAction extends core_1().Resource{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_ScheduledActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ScheduledAction),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.minCapacity===void 0&&props.maxCapacity===void 0&&props.desiredCapacity===void 0)throw new Error("At least one of minCapacity, maxCapacity, or desiredCapacity is required");props.schedule._bind(this);const resource=new(autoscaling_generated_1()).CfnScheduledAction(this,"Resource",{autoScalingGroupName:props.autoScalingGroup.autoScalingGroupName,startTime:formatISO(props.startTime),endTime:formatISO(props.endTime),minSize:props.minCapacity,maxSize:props.maxCapacity,desiredCapacity:props.desiredCapacity,recurrence:props.schedule.expressionString,timeZone:props.timeZone});this.scheduledActionName=resource.attrScheduledActionName}}exports.ScheduledAction=ScheduledAction,_a=JSII_RTTI_SYMBOL_1,ScheduledAction[_a]={fqn:"aws-cdk-lib.aws_autoscaling.ScheduledAction",version:"2.178.2"};function formatISO(date){if(!date)return;return date.getUTCFullYear()+"-"+pad(date.getUTCMonth()+1)+"-"+pad(date.getUTCDate())+"T"+pad(date.getUTCHours())+":"+pad(date.getUTCMinutes())+":"+pad(date.getUTCSeconds())+"Z";function pad(num){return num<10?"0"+num:num}}
