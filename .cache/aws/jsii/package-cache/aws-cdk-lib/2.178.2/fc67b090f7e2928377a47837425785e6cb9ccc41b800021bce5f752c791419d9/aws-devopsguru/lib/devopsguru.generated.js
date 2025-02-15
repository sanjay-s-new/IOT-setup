"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnResourceCollection=exports.CfnNotificationChannel=exports.CfnLogAnomalyDetectionIntegration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnLogAnomalyDetectionIntegration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnLogAnomalyDetectionIntegrationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnLogAnomalyDetectionIntegration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props={}){super(scope,id,{type:CfnLogAnomalyDetectionIntegration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_devopsguru_CfnLogAnomalyDetectionIntegrationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnLogAnomalyDetectionIntegration),error}this.attrAccountId=cdk().Token.asString(this.getAtt("AccountId",cdk().ResolutionTypeHint.STRING))}get cfnProperties(){return{}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnLogAnomalyDetectionIntegration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnLogAnomalyDetectionIntegrationPropsToCloudFormation(props)}}exports.CfnLogAnomalyDetectionIntegration=CfnLogAnomalyDetectionIntegration,_a=JSII_RTTI_SYMBOL_1,CfnLogAnomalyDetectionIntegration[_a]={fqn:"aws-cdk-lib.aws_devopsguru.CfnLogAnomalyDetectionIntegration",version:"2.178.2"},CfnLogAnomalyDetectionIntegration.CFN_RESOURCE_TYPE_NAME="AWS::DevOpsGuru::LogAnomalyDetectionIntegration";function CfnLogAnomalyDetectionIntegrationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.wrap('supplied properties not correct for "CfnLogAnomalyDetectionIntegrationProps"')}function convertCfnLogAnomalyDetectionIntegrationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLogAnomalyDetectionIntegrationPropsValidator(properties).assertSuccess(),{}):properties}function CfnLogAnomalyDetectionIntegrationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnNotificationChannel extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnNotificationChannelPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnNotificationChannel(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_devopsguru_CfnNotificationChannelProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnNotificationChannel),error}cdk().requireProperty(props,"config",this),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.config=props.config}get cfnProperties(){return{config:this.config}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnNotificationChannelPropsToCloudFormation(props)}}exports.CfnNotificationChannel=CfnNotificationChannel,_b=JSII_RTTI_SYMBOL_1,CfnNotificationChannel[_b]={fqn:"aws-cdk-lib.aws_devopsguru.CfnNotificationChannel",version:"2.178.2"},CfnNotificationChannel.CFN_RESOURCE_TYPE_NAME="AWS::DevOpsGuru::NotificationChannel";function CfnNotificationChannelNotificationFilterConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("messageTypes",cdk().listValidator(cdk().validateString))(properties.messageTypes)),errors.collect(cdk().propertyValidator("severities",cdk().listValidator(cdk().validateString))(properties.severities)),errors.wrap('supplied properties not correct for "NotificationFilterConfigProperty"')}function convertCfnNotificationChannelNotificationFilterConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationChannelNotificationFilterConfigPropertyValidator(properties).assertSuccess(),{MessageTypes:cdk().listMapper(cdk().stringToCloudFormation)(properties.messageTypes),Severities:cdk().listMapper(cdk().stringToCloudFormation)(properties.severities)}):properties}function CfnNotificationChannelNotificationFilterConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("messageTypes","MessageTypes",properties.MessageTypes!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.MessageTypes):void 0),ret.addPropertyResult("severities","Severities",properties.Severities!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Severities):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnNotificationChannelSnsChannelConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("topicArn",cdk().validateString)(properties.topicArn)),errors.wrap('supplied properties not correct for "SnsChannelConfigProperty"')}function convertCfnNotificationChannelSnsChannelConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationChannelSnsChannelConfigPropertyValidator(properties).assertSuccess(),{TopicArn:cdk().stringToCloudFormation(properties.topicArn)}):properties}function CfnNotificationChannelSnsChannelConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("topicArn","TopicArn",properties.TopicArn!=null?cfn_parse().FromCloudFormation.getString(properties.TopicArn):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnNotificationChannelNotificationChannelConfigPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("filters",CfnNotificationChannelNotificationFilterConfigPropertyValidator)(properties.filters)),errors.collect(cdk().propertyValidator("sns",CfnNotificationChannelSnsChannelConfigPropertyValidator)(properties.sns)),errors.wrap('supplied properties not correct for "NotificationChannelConfigProperty"')}function convertCfnNotificationChannelNotificationChannelConfigPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationChannelNotificationChannelConfigPropertyValidator(properties).assertSuccess(),{Filters:convertCfnNotificationChannelNotificationFilterConfigPropertyToCloudFormation(properties.filters),Sns:convertCfnNotificationChannelSnsChannelConfigPropertyToCloudFormation(properties.sns)}):properties}function CfnNotificationChannelNotificationChannelConfigPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("filters","Filters",properties.Filters!=null?CfnNotificationChannelNotificationFilterConfigPropertyFromCloudFormation(properties.Filters):void 0),ret.addPropertyResult("sns","Sns",properties.Sns!=null?CfnNotificationChannelSnsChannelConfigPropertyFromCloudFormation(properties.Sns):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnNotificationChannelPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("config",cdk().requiredValidator)(properties.config)),errors.collect(cdk().propertyValidator("config",CfnNotificationChannelNotificationChannelConfigPropertyValidator)(properties.config)),errors.wrap('supplied properties not correct for "CfnNotificationChannelProps"')}function convertCfnNotificationChannelPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnNotificationChannelPropsValidator(properties).assertSuccess(),{Config:convertCfnNotificationChannelNotificationChannelConfigPropertyToCloudFormation(properties.config)}):properties}function CfnNotificationChannelPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("config","Config",properties.Config!=null?CfnNotificationChannelNotificationChannelConfigPropertyFromCloudFormation(properties.Config):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnResourceCollection extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnResourceCollectionPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnResourceCollection(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnResourceCollection.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_devopsguru_CfnResourceCollectionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnResourceCollection),error}cdk().requireProperty(props,"resourceCollectionFilter",this),this.attrResourceCollectionType=cdk().Token.asString(this.getAtt("ResourceCollectionType",cdk().ResolutionTypeHint.STRING)),this.resourceCollectionFilter=props.resourceCollectionFilter}get cfnProperties(){return{resourceCollectionFilter:this.resourceCollectionFilter}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnResourceCollection.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnResourceCollectionPropsToCloudFormation(props)}}exports.CfnResourceCollection=CfnResourceCollection,_c=JSII_RTTI_SYMBOL_1,CfnResourceCollection[_c]={fqn:"aws-cdk-lib.aws_devopsguru.CfnResourceCollection",version:"2.178.2"},CfnResourceCollection.CFN_RESOURCE_TYPE_NAME="AWS::DevOpsGuru::ResourceCollection";function CfnResourceCollectionCloudFormationCollectionFilterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("stackNames",cdk().listValidator(cdk().validateString))(properties.stackNames)),errors.wrap('supplied properties not correct for "CloudFormationCollectionFilterProperty"')}function convertCfnResourceCollectionCloudFormationCollectionFilterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnResourceCollectionCloudFormationCollectionFilterPropertyValidator(properties).assertSuccess(),{StackNames:cdk().listMapper(cdk().stringToCloudFormation)(properties.stackNames)}):properties}function CfnResourceCollectionCloudFormationCollectionFilterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("stackNames","StackNames",properties.StackNames!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.StackNames):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnResourceCollectionTagCollectionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("appBoundaryKey",cdk().validateString)(properties.appBoundaryKey)),errors.collect(cdk().propertyValidator("tagValues",cdk().listValidator(cdk().validateString))(properties.tagValues)),errors.wrap('supplied properties not correct for "TagCollectionProperty"')}function convertCfnResourceCollectionTagCollectionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnResourceCollectionTagCollectionPropertyValidator(properties).assertSuccess(),{AppBoundaryKey:cdk().stringToCloudFormation(properties.appBoundaryKey),TagValues:cdk().listMapper(cdk().stringToCloudFormation)(properties.tagValues)}):properties}function CfnResourceCollectionTagCollectionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("appBoundaryKey","AppBoundaryKey",properties.AppBoundaryKey!=null?cfn_parse().FromCloudFormation.getString(properties.AppBoundaryKey):void 0),ret.addPropertyResult("tagValues","TagValues",properties.TagValues!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.TagValues):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnResourceCollectionResourceCollectionFilterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cloudFormation",CfnResourceCollectionCloudFormationCollectionFilterPropertyValidator)(properties.cloudFormation)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(CfnResourceCollectionTagCollectionPropertyValidator))(properties.tags)),errors.wrap('supplied properties not correct for "ResourceCollectionFilterProperty"')}function convertCfnResourceCollectionResourceCollectionFilterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnResourceCollectionResourceCollectionFilterPropertyValidator(properties).assertSuccess(),{CloudFormation:convertCfnResourceCollectionCloudFormationCollectionFilterPropertyToCloudFormation(properties.cloudFormation),Tags:cdk().listMapper(convertCfnResourceCollectionTagCollectionPropertyToCloudFormation)(properties.tags)}):properties}function CfnResourceCollectionResourceCollectionFilterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cloudFormation","CloudFormation",properties.CloudFormation!=null?CfnResourceCollectionCloudFormationCollectionFilterPropertyFromCloudFormation(properties.CloudFormation):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(CfnResourceCollectionTagCollectionPropertyFromCloudFormation)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnResourceCollectionPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("resourceCollectionFilter",cdk().requiredValidator)(properties.resourceCollectionFilter)),errors.collect(cdk().propertyValidator("resourceCollectionFilter",CfnResourceCollectionResourceCollectionFilterPropertyValidator)(properties.resourceCollectionFilter)),errors.wrap('supplied properties not correct for "CfnResourceCollectionProps"')}function convertCfnResourceCollectionPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnResourceCollectionPropsValidator(properties).assertSuccess(),{ResourceCollectionFilter:convertCfnResourceCollectionResourceCollectionFilterPropertyToCloudFormation(properties.resourceCollectionFilter)}):properties}function CfnResourceCollectionPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("resourceCollectionFilter","ResourceCollectionFilter",properties.ResourceCollectionFilter!=null?CfnResourceCollectionResourceCollectionFilterPropertyFromCloudFormation(properties.ResourceCollectionFilter):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
