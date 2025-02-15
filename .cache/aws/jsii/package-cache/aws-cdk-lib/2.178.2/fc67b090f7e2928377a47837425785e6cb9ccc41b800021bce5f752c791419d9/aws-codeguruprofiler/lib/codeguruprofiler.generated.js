"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnProfilingGroup=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnProfilingGroup extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnProfilingGroupPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnProfilingGroup(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnProfilingGroup.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codeguruprofiler_CfnProfilingGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnProfilingGroup),error}cdk().requireProperty(props,"profilingGroupName",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.agentPermissions=props.agentPermissions,this.anomalyDetectionNotificationConfiguration=props.anomalyDetectionNotificationConfiguration,this.computePlatform=props.computePlatform,this.profilingGroupName=props.profilingGroupName,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::CodeGuruProfiler::ProfilingGroup",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{agentPermissions:this.agentPermissions,anomalyDetectionNotificationConfiguration:this.anomalyDetectionNotificationConfiguration,computePlatform:this.computePlatform,profilingGroupName:this.profilingGroupName,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnProfilingGroup.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnProfilingGroupPropsToCloudFormation(props)}}exports.CfnProfilingGroup=CfnProfilingGroup,_a=JSII_RTTI_SYMBOL_1,CfnProfilingGroup[_a]={fqn:"aws-cdk-lib.aws_codeguruprofiler.CfnProfilingGroup",version:"2.178.2"},CfnProfilingGroup.CFN_RESOURCE_TYPE_NAME="AWS::CodeGuruProfiler::ProfilingGroup";function CfnProfilingGroupChannelPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("channelId",cdk().validateString)(properties.channelId)),errors.collect(cdk().propertyValidator("channelUri",cdk().requiredValidator)(properties.channelUri)),errors.collect(cdk().propertyValidator("channelUri",cdk().validateString)(properties.channelUri)),errors.wrap('supplied properties not correct for "ChannelProperty"')}function convertCfnProfilingGroupChannelPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProfilingGroupChannelPropertyValidator(properties).assertSuccess(),{channelId:cdk().stringToCloudFormation(properties.channelId),channelUri:cdk().stringToCloudFormation(properties.channelUri)}):properties}function CfnProfilingGroupChannelPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("channelId","channelId",properties.channelId!=null?cfn_parse().FromCloudFormation.getString(properties.channelId):void 0),ret.addPropertyResult("channelUri","channelUri",properties.channelUri!=null?cfn_parse().FromCloudFormation.getString(properties.channelUri):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnProfilingGroupAgentPermissionsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("principals",cdk().requiredValidator)(properties.principals)),errors.collect(cdk().propertyValidator("principals",cdk().listValidator(cdk().validateString))(properties.principals)),errors.wrap('supplied properties not correct for "AgentPermissionsProperty"')}function convertCfnProfilingGroupAgentPermissionsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProfilingGroupAgentPermissionsPropertyValidator(properties).assertSuccess(),{Principals:cdk().listMapper(cdk().stringToCloudFormation)(properties.principals)}):properties}function CfnProfilingGroupAgentPermissionsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("principals","Principals",properties.Principals!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Principals):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnProfilingGroupPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("agentPermissions",cdk().validateObject)(properties.agentPermissions)),errors.collect(cdk().propertyValidator("anomalyDetectionNotificationConfiguration",cdk().listValidator(CfnProfilingGroupChannelPropertyValidator))(properties.anomalyDetectionNotificationConfiguration)),errors.collect(cdk().propertyValidator("computePlatform",cdk().validateString)(properties.computePlatform)),errors.collect(cdk().propertyValidator("profilingGroupName",cdk().requiredValidator)(properties.profilingGroupName)),errors.collect(cdk().propertyValidator("profilingGroupName",cdk().validateString)(properties.profilingGroupName)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnProfilingGroupProps"')}function convertCfnProfilingGroupPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProfilingGroupPropsValidator(properties).assertSuccess(),{AgentPermissions:cdk().objectToCloudFormation(properties.agentPermissions),AnomalyDetectionNotificationConfiguration:cdk().listMapper(convertCfnProfilingGroupChannelPropertyToCloudFormation)(properties.anomalyDetectionNotificationConfiguration),ComputePlatform:cdk().stringToCloudFormation(properties.computePlatform),ProfilingGroupName:cdk().stringToCloudFormation(properties.profilingGroupName),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnProfilingGroupPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("agentPermissions","AgentPermissions",properties.AgentPermissions!=null?cfn_parse().FromCloudFormation.getAny(properties.AgentPermissions):void 0),ret.addPropertyResult("anomalyDetectionNotificationConfiguration","AnomalyDetectionNotificationConfiguration",properties.AnomalyDetectionNotificationConfiguration!=null?cfn_parse().FromCloudFormation.getArray(CfnProfilingGroupChannelPropertyFromCloudFormation)(properties.AnomalyDetectionNotificationConfiguration):void 0),ret.addPropertyResult("computePlatform","ComputePlatform",properties.ComputePlatform!=null?cfn_parse().FromCloudFormation.getString(properties.ComputePlatform):void 0),ret.addPropertyResult("profilingGroupName","ProfilingGroupName",properties.ProfilingGroupName!=null?cfn_parse().FromCloudFormation.getString(properties.ProfilingGroupName):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
