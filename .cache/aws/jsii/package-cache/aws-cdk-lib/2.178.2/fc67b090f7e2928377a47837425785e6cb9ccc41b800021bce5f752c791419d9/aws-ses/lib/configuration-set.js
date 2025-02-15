"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfigurationSet=exports.SuppressionReasons=exports.ConfigurationSetTlsPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var configuration_set_event_destination_1=()=>{var tmp=require("./configuration-set-event-destination");return configuration_set_event_destination_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},ses_generated_1=()=>{var tmp=require("./ses.generated");return ses_generated_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},ConfigurationSetTlsPolicy;(function(ConfigurationSetTlsPolicy2){ConfigurationSetTlsPolicy2.REQUIRE="REQUIRE",ConfigurationSetTlsPolicy2.OPTIONAL="OPTIONAL"})(ConfigurationSetTlsPolicy||(exports.ConfigurationSetTlsPolicy=ConfigurationSetTlsPolicy={}));var SuppressionReasons;(function(SuppressionReasons2){SuppressionReasons2.BOUNCES_AND_COMPLAINTS="BOUNCES_AND_COMPLAINTS",SuppressionReasons2.BOUNCES_ONLY="BOUNCES_ONLY",SuppressionReasons2.COMPLAINTS_ONLY="COMPLAINTS_ONLY"})(SuppressionReasons||(exports.SuppressionReasons=SuppressionReasons={}));class ConfigurationSet extends core_1().Resource{static fromConfigurationSetName(scope,id,configurationSetName){class Import extends core_1().Resource{constructor(){super(...arguments),this.configurationSetName=configurationSetName}}return new Import(scope,id)}constructor(scope,id,props={}){super(scope,id,{physicalName:props.configurationSetName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_ConfigurationSetProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ConfigurationSet),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.disableSuppressionList&&props.suppressionReasons)throw new Error("When disableSuppressionList is true, suppressionReasons must not be specified.");if(props.maxDeliveryDuration&&!core_1().Token.isUnresolved(props.maxDeliveryDuration)){if(props.maxDeliveryDuration.toMilliseconds()<core_1().Duration.minutes(5).toMilliseconds())throw new Error(`The maximum delivery duration must be greater than or equal to 5 minutes (300_000 milliseconds), got: ${props.maxDeliveryDuration.toMilliseconds()} milliseconds.`);if(props.maxDeliveryDuration.toSeconds()>core_1().Duration.hours(14).toSeconds())throw new Error(`The maximum delivery duration must be less than or equal to 14 hours (50400 seconds), got: ${props.maxDeliveryDuration.toSeconds()} seconds.`)}const configurationSet=new(ses_generated_1()).CfnConfigurationSet(this,"Resource",{deliveryOptions:(0,utils_1().undefinedIfNoKeys)({sendingPoolName:props.dedicatedIpPool?.dedicatedIpPoolName,tlsPolicy:props.tlsPolicy,maxDeliverySeconds:props.maxDeliveryDuration?.toSeconds()}),name:this.physicalName,reputationOptions:(0,utils_1().undefinedIfNoKeys)({reputationMetricsEnabled:props.reputationMetrics}),sendingOptions:(0,utils_1().undefinedIfNoKeys)({sendingEnabled:props.sendingEnabled}),suppressionOptions:(0,utils_1().undefinedIfNoKeys)({suppressedReasons:props.disableSuppressionList?[]:renderSuppressedReasons(props.suppressionReasons)}),trackingOptions:(0,utils_1().undefinedIfNoKeys)({customRedirectDomain:props.customTrackingRedirectDomain}),vdmOptions:(0,utils_1().undefinedIfNoKeys)({dashboardOptions:props.vdmOptions?.engagementMetrics!==void 0?{engagementMetrics:booleanToEnabledDisabled(props.vdmOptions?.engagementMetrics)}:void 0,guardianOptions:props.vdmOptions?.optimizedSharedDelivery!==void 0?{optimizedSharedDelivery:booleanToEnabledDisabled(props.vdmOptions?.optimizedSharedDelivery)}:void 0})});this.configurationSetName=configurationSet.ref}addEventDestination(id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_ConfigurationSetEventDestinationOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addEventDestination),error}return new(configuration_set_event_destination_1()).ConfigurationSetEventDestination(this,id,{...options,configurationSet:this})}}exports.ConfigurationSet=ConfigurationSet,_a=JSII_RTTI_SYMBOL_1,ConfigurationSet[_a]={fqn:"aws-cdk-lib.aws_ses.ConfigurationSet",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],ConfigurationSet.prototype,"addEventDestination",null);function renderSuppressedReasons(suppressionReasons){if(suppressionReasons)switch(suppressionReasons){case SuppressionReasons.BOUNCES_AND_COMPLAINTS:return["BOUNCE","COMPLAINT"];case SuppressionReasons.BOUNCES_ONLY:return["BOUNCE"];case SuppressionReasons.COMPLAINTS_ONLY:return["COMPLAINT"]}}function booleanToEnabledDisabled(value){return value===!0?"ENABLED":"DISABLED"}
