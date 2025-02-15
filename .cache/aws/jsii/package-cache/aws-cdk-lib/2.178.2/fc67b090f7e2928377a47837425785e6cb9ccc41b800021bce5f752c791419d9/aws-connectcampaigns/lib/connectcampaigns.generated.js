"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnCampaign=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnCampaign extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnCampaignPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnCampaign(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnCampaign.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_connectcampaigns_CfnCampaignProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnCampaign),error}cdk().requireProperty(props,"connectInstanceArn",this),cdk().requireProperty(props,"dialerConfig",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"outboundCallConfig",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.connectInstanceArn=props.connectInstanceArn,this.dialerConfig=props.dialerConfig,this.name=props.name,this.outboundCallConfig=props.outboundCallConfig,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::ConnectCampaigns::Campaign",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{connectInstanceArn:this.connectInstanceArn,dialerConfig:this.dialerConfig,name:this.name,outboundCallConfig:this.outboundCallConfig,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnCampaign.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnCampaignPropsToCloudFormation(props)}}exports.CfnCampaign=CfnCampaign,_a=JSII_RTTI_SYMBOL_1,CfnCampaign[_a]={fqn:"aws-cdk-lib.aws_connectcampaigns.CfnCampaign",version:"2.178.2"},CfnCampaign.CFN_RESOURCE_TYPE_NAME="AWS::ConnectCampaigns::Campaign";function CfnCampaignAnswerMachineDetectionConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("awaitAnswerMachinePrompt",cdk().validateBoolean)(properties.awaitAnswerMachinePrompt)),errors.collect(cdk().propertyValidator("enableAnswerMachineDetection",cdk().requiredValidator)(properties.enableAnswerMachineDetection)),errors.collect(cdk().propertyValidator("enableAnswerMachineDetection",cdk().validateBoolean)(properties.enableAnswerMachineDetection)),errors.wrap('supplied properties not correct for "AnswerMachineDetectionConfigProperty"')}function convertCfnCampaignAnswerMachineDetectionConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignAnswerMachineDetectionConfigPropertyValidator(properties).assertSuccess(),{AwaitAnswerMachinePrompt:cdk().booleanToCloudFormation(properties.awaitAnswerMachinePrompt),EnableAnswerMachineDetection:cdk().booleanToCloudFormation(properties.enableAnswerMachineDetection)}):properties}function CfnCampaignAnswerMachineDetectionConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("awaitAnswerMachinePrompt","AwaitAnswerMachinePrompt",properties.AwaitAnswerMachinePrompt!=null?cfn_parse().FromCloudFormation.getBoolean(properties.AwaitAnswerMachinePrompt):void 0),ret.addPropertyResult("enableAnswerMachineDetection","EnableAnswerMachineDetection",properties.EnableAnswerMachineDetection!=null?cfn_parse().FromCloudFormation.getBoolean(properties.EnableAnswerMachineDetection):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignOutboundCallConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("answerMachineDetectionConfig",CfnCampaignAnswerMachineDetectionConfigPropertyValidator)(properties.answerMachineDetectionConfig)),errors.collect(cdk().propertyValidator("connectContactFlowArn",cdk().requiredValidator)(properties.connectContactFlowArn)),errors.collect(cdk().propertyValidator("connectContactFlowArn",cdk().validateString)(properties.connectContactFlowArn)),errors.collect(cdk().propertyValidator("connectQueueArn",cdk().validateString)(properties.connectQueueArn)),errors.collect(cdk().propertyValidator("connectSourcePhoneNumber",cdk().validateString)(properties.connectSourcePhoneNumber)),errors.wrap('supplied properties not correct for "OutboundCallConfigProperty"')}function convertCfnCampaignOutboundCallConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignOutboundCallConfigPropertyValidator(properties).assertSuccess(),{AnswerMachineDetectionConfig:convertCfnCampaignAnswerMachineDetectionConfigPropertyToCloudFormation(properties.answerMachineDetectionConfig),ConnectContactFlowArn:cdk().stringToCloudFormation(properties.connectContactFlowArn),ConnectQueueArn:cdk().stringToCloudFormation(properties.connectQueueArn),ConnectSourcePhoneNumber:cdk().stringToCloudFormation(properties.connectSourcePhoneNumber)}):properties}function CfnCampaignOutboundCallConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("answerMachineDetectionConfig","AnswerMachineDetectionConfig",properties.AnswerMachineDetectionConfig!=null?CfnCampaignAnswerMachineDetectionConfigPropertyFromCloudFormation(properties.AnswerMachineDetectionConfig):void 0),ret.addPropertyResult("connectContactFlowArn","ConnectContactFlowArn",properties.ConnectContactFlowArn!=null?cfn_parse().FromCloudFormation.getString(properties.ConnectContactFlowArn):void 0),ret.addPropertyResult("connectQueueArn","ConnectQueueArn",properties.ConnectQueueArn!=null?cfn_parse().FromCloudFormation.getString(properties.ConnectQueueArn):void 0),ret.addPropertyResult("connectSourcePhoneNumber","ConnectSourcePhoneNumber",properties.ConnectSourcePhoneNumber!=null?cfn_parse().FromCloudFormation.getString(properties.ConnectSourcePhoneNumber):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignAgentlessDialerConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("dialingCapacity",cdk().validateNumber)(properties.dialingCapacity)),errors.wrap('supplied properties not correct for "AgentlessDialerConfigProperty"')}function convertCfnCampaignAgentlessDialerConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignAgentlessDialerConfigPropertyValidator(properties).assertSuccess(),{DialingCapacity:cdk().numberToCloudFormation(properties.dialingCapacity)}):properties}function CfnCampaignAgentlessDialerConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("dialingCapacity","DialingCapacity",properties.DialingCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.DialingCapacity):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignPredictiveDialerConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("bandwidthAllocation",cdk().requiredValidator)(properties.bandwidthAllocation)),errors.collect(cdk().propertyValidator("bandwidthAllocation",cdk().validateNumber)(properties.bandwidthAllocation)),errors.collect(cdk().propertyValidator("dialingCapacity",cdk().validateNumber)(properties.dialingCapacity)),errors.wrap('supplied properties not correct for "PredictiveDialerConfigProperty"')}function convertCfnCampaignPredictiveDialerConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignPredictiveDialerConfigPropertyValidator(properties).assertSuccess(),{BandwidthAllocation:cdk().numberToCloudFormation(properties.bandwidthAllocation),DialingCapacity:cdk().numberToCloudFormation(properties.dialingCapacity)}):properties}function CfnCampaignPredictiveDialerConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("bandwidthAllocation","BandwidthAllocation",properties.BandwidthAllocation!=null?cfn_parse().FromCloudFormation.getNumber(properties.BandwidthAllocation):void 0),ret.addPropertyResult("dialingCapacity","DialingCapacity",properties.DialingCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.DialingCapacity):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignProgressiveDialerConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("bandwidthAllocation",cdk().requiredValidator)(properties.bandwidthAllocation)),errors.collect(cdk().propertyValidator("bandwidthAllocation",cdk().validateNumber)(properties.bandwidthAllocation)),errors.collect(cdk().propertyValidator("dialingCapacity",cdk().validateNumber)(properties.dialingCapacity)),errors.wrap('supplied properties not correct for "ProgressiveDialerConfigProperty"')}function convertCfnCampaignProgressiveDialerConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignProgressiveDialerConfigPropertyValidator(properties).assertSuccess(),{BandwidthAllocation:cdk().numberToCloudFormation(properties.bandwidthAllocation),DialingCapacity:cdk().numberToCloudFormation(properties.dialingCapacity)}):properties}function CfnCampaignProgressiveDialerConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("bandwidthAllocation","BandwidthAllocation",properties.BandwidthAllocation!=null?cfn_parse().FromCloudFormation.getNumber(properties.BandwidthAllocation):void 0),ret.addPropertyResult("dialingCapacity","DialingCapacity",properties.DialingCapacity!=null?cfn_parse().FromCloudFormation.getNumber(properties.DialingCapacity):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignDialerConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("agentlessDialerConfig",CfnCampaignAgentlessDialerConfigPropertyValidator)(properties.agentlessDialerConfig)),errors.collect(cdk().propertyValidator("predictiveDialerConfig",CfnCampaignPredictiveDialerConfigPropertyValidator)(properties.predictiveDialerConfig)),errors.collect(cdk().propertyValidator("progressiveDialerConfig",CfnCampaignProgressiveDialerConfigPropertyValidator)(properties.progressiveDialerConfig)),errors.wrap('supplied properties not correct for "DialerConfigProperty"')}function convertCfnCampaignDialerConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignDialerConfigPropertyValidator(properties).assertSuccess(),{AgentlessDialerConfig:convertCfnCampaignAgentlessDialerConfigPropertyToCloudFormation(properties.agentlessDialerConfig),PredictiveDialerConfig:convertCfnCampaignPredictiveDialerConfigPropertyToCloudFormation(properties.predictiveDialerConfig),ProgressiveDialerConfig:convertCfnCampaignProgressiveDialerConfigPropertyToCloudFormation(properties.progressiveDialerConfig)}):properties}function CfnCampaignDialerConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("agentlessDialerConfig","AgentlessDialerConfig",properties.AgentlessDialerConfig!=null?CfnCampaignAgentlessDialerConfigPropertyFromCloudFormation(properties.AgentlessDialerConfig):void 0),ret.addPropertyResult("predictiveDialerConfig","PredictiveDialerConfig",properties.PredictiveDialerConfig!=null?CfnCampaignPredictiveDialerConfigPropertyFromCloudFormation(properties.PredictiveDialerConfig):void 0),ret.addPropertyResult("progressiveDialerConfig","ProgressiveDialerConfig",properties.ProgressiveDialerConfig!=null?CfnCampaignProgressiveDialerConfigPropertyFromCloudFormation(properties.ProgressiveDialerConfig):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnCampaignPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("connectInstanceArn",cdk().requiredValidator)(properties.connectInstanceArn)),errors.collect(cdk().propertyValidator("connectInstanceArn",cdk().validateString)(properties.connectInstanceArn)),errors.collect(cdk().propertyValidator("dialerConfig",cdk().requiredValidator)(properties.dialerConfig)),errors.collect(cdk().propertyValidator("dialerConfig",CfnCampaignDialerConfigPropertyValidator)(properties.dialerConfig)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("outboundCallConfig",cdk().requiredValidator)(properties.outboundCallConfig)),errors.collect(cdk().propertyValidator("outboundCallConfig",CfnCampaignOutboundCallConfigPropertyValidator)(properties.outboundCallConfig)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnCampaignProps"')}function convertCfnCampaignPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnCampaignPropsValidator(properties).assertSuccess(),{ConnectInstanceArn:cdk().stringToCloudFormation(properties.connectInstanceArn),DialerConfig:convertCfnCampaignDialerConfigPropertyToCloudFormation(properties.dialerConfig),Name:cdk().stringToCloudFormation(properties.name),OutboundCallConfig:convertCfnCampaignOutboundCallConfigPropertyToCloudFormation(properties.outboundCallConfig),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnCampaignPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("connectInstanceArn","ConnectInstanceArn",properties.ConnectInstanceArn!=null?cfn_parse().FromCloudFormation.getString(properties.ConnectInstanceArn):void 0),ret.addPropertyResult("dialerConfig","DialerConfig",properties.DialerConfig!=null?CfnCampaignDialerConfigPropertyFromCloudFormation(properties.DialerConfig):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("outboundCallConfig","OutboundCallConfig",properties.OutboundCallConfig!=null?CfnCampaignOutboundCallConfigPropertyFromCloudFormation(properties.OutboundCallConfig):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
