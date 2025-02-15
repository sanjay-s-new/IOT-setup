"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScheduledEc2Task=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var aws_ecs_1=()=>{var tmp=require("../../../aws-ecs");return aws_ecs_1=()=>tmp,tmp},scheduled_task_base_1=()=>{var tmp=require("../base/scheduled-task-base");return scheduled_task_base_1=()=>tmp,tmp};class ScheduledEc2Task extends scheduled_task_base_1().ScheduledTaskBase{constructor(scope,id,props){super(scope,id,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_patterns_ScheduledEc2TaskProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ScheduledEc2Task),error}if(props.scheduledEc2TaskDefinitionOptions&&props.scheduledEc2TaskImageOptions)throw new Error("You must specify either a scheduledEc2TaskDefinitionOptions or scheduledEc2TaskOptions, not both.");if(props.scheduledEc2TaskDefinitionOptions)this.taskDefinition=props.scheduledEc2TaskDefinitionOptions.taskDefinition;else if(props.scheduledEc2TaskImageOptions){const taskImageOptions=props.scheduledEc2TaskImageOptions,containerName=taskImageOptions.containerName??"ScheduledContainer";this.taskDefinition=new(aws_ecs_1()).Ec2TaskDefinition(this,"ScheduledTaskDef"),this.taskDefinition.addContainer(containerName,{image:taskImageOptions.image,memoryLimitMiB:taskImageOptions.memoryLimitMiB,memoryReservationMiB:taskImageOptions.memoryReservationMiB,cpu:taskImageOptions.cpu,command:taskImageOptions.command,environment:taskImageOptions.environment,secrets:taskImageOptions.secrets,logging:taskImageOptions.logDriver??this.createAWSLogDriver(this.node.id)})}else throw new Error("You must specify a taskDefinition or image");this.task=this.addTaskDefinitionToEventTarget(this.taskDefinition)}}exports.ScheduledEc2Task=ScheduledEc2Task,_a=JSII_RTTI_SYMBOL_1,ScheduledEc2Task[_a]={fqn:"aws-cdk-lib.aws_ecs_patterns.ScheduledEc2Task",version:"2.178.2"};
