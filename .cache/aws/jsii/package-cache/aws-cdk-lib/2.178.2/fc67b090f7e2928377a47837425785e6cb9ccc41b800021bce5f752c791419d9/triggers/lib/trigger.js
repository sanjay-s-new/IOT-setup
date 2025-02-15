"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TriggerInvalidation=exports.Trigger=exports.InvocationType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},trigger_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/triggers/trigger-provider.generated");return trigger_provider_generated_1=()=>tmp,tmp},InvocationType;(function(InvocationType2){InvocationType2.EVENT="Event",InvocationType2.REQUEST_RESPONSE="RequestResponse",InvocationType2.DRY_RUN="DryRun"})(InvocationType||(exports.InvocationType=InvocationType={}));class Trigger extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_triggers_TriggerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Trigger),error}const provider=trigger_provider_generated_1().TriggerProvider.getOrCreateProvider(this,"AWSCDK.TriggerCustomResourceProvider");provider.addToRolePolicy({Effect:"Allow",Action:["lambda:InvokeFunction"],Resource:[`${props.handler.functionArn}:*`]}),new(core_1()).CustomResource(this,"Default",{resourceType:"Custom::Trigger",serviceToken:provider.serviceToken,properties:{HandlerArn:props.handler.currentVersion.functionArn,InvocationType:props.invocationType??"RequestResponse",Timeout:props.timeout?.toMilliseconds().toString()??core_1().Duration.minutes(2).toMilliseconds().toString(),ExecuteOnHandlerChange:props.executeOnHandlerChange??!0}}),this.executeAfter(...props.executeAfter??[]),this.executeBefore(...props.executeBefore??[])}executeAfter(...scopes){constructs_1().Node.of(this).addDependency(...scopes)}executeBefore(...scopes){for(const s of scopes)constructs_1().Node.of(s).addDependency(this)}}exports.Trigger=Trigger,_a=JSII_RTTI_SYMBOL_1,Trigger[_a]={fqn:"aws-cdk-lib.triggers.Trigger",version:"2.178.2"};var TriggerInvalidation;(function(TriggerInvalidation2){TriggerInvalidation2.HANDLER_CHANGE="WHEN_FUNCTION_CHANGES"})(TriggerInvalidation||(exports.TriggerInvalidation=TriggerInvalidation={}));
