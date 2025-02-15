"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnZonalAutoshiftConfiguration=exports.CfnAutoshiftObserverNotificationStatus=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnAutoshiftObserverNotificationStatus extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnAutoshiftObserverNotificationStatusPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnAutoshiftObserverNotificationStatus(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnAutoshiftObserverNotificationStatus.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_arczonalshift_CfnAutoshiftObserverNotificationStatusProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnAutoshiftObserverNotificationStatus),error}cdk().requireProperty(props,"status",this),this.attrAccountId=cdk().Token.asString(this.getAtt("AccountId",cdk().ResolutionTypeHint.STRING)),this.attrRegion=cdk().Token.asString(this.getAtt("Region",cdk().ResolutionTypeHint.STRING)),this.status=props.status}get cfnProperties(){return{status:this.status}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnAutoshiftObserverNotificationStatus.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnAutoshiftObserverNotificationStatusPropsToCloudFormation(props)}}exports.CfnAutoshiftObserverNotificationStatus=CfnAutoshiftObserverNotificationStatus,_a=JSII_RTTI_SYMBOL_1,CfnAutoshiftObserverNotificationStatus[_a]={fqn:"aws-cdk-lib.aws_arczonalshift.CfnAutoshiftObserverNotificationStatus",version:"2.178.2"},CfnAutoshiftObserverNotificationStatus.CFN_RESOURCE_TYPE_NAME="AWS::ARCZonalShift::AutoshiftObserverNotificationStatus";function CfnAutoshiftObserverNotificationStatusPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("status",cdk().requiredValidator)(properties.status)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.wrap('supplied properties not correct for "CfnAutoshiftObserverNotificationStatusProps"')}function convertCfnAutoshiftObserverNotificationStatusPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnAutoshiftObserverNotificationStatusPropsValidator(properties).assertSuccess(),{Status:cdk().stringToCloudFormation(properties.status)}):properties}function CfnAutoshiftObserverNotificationStatusPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnZonalAutoshiftConfiguration extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnZonalAutoshiftConfigurationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnZonalAutoshiftConfiguration(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnZonalAutoshiftConfiguration.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_arczonalshift_CfnZonalAutoshiftConfigurationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnZonalAutoshiftConfiguration),error}cdk().requireProperty(props,"resourceIdentifier",this),this.practiceRunConfiguration=props.practiceRunConfiguration,this.resourceIdentifier=props.resourceIdentifier,this.zonalAutoshiftStatus=props.zonalAutoshiftStatus}get cfnProperties(){return{practiceRunConfiguration:this.practiceRunConfiguration,resourceIdentifier:this.resourceIdentifier,zonalAutoshiftStatus:this.zonalAutoshiftStatus}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnZonalAutoshiftConfiguration.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnZonalAutoshiftConfigurationPropsToCloudFormation(props)}}exports.CfnZonalAutoshiftConfiguration=CfnZonalAutoshiftConfiguration,_b=JSII_RTTI_SYMBOL_1,CfnZonalAutoshiftConfiguration[_b]={fqn:"aws-cdk-lib.aws_arczonalshift.CfnZonalAutoshiftConfiguration",version:"2.178.2"},CfnZonalAutoshiftConfiguration.CFN_RESOURCE_TYPE_NAME="AWS::ARCZonalShift::ZonalAutoshiftConfiguration";function CfnZonalAutoshiftConfigurationControlConditionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("alarmIdentifier",cdk().requiredValidator)(properties.alarmIdentifier)),errors.collect(cdk().propertyValidator("alarmIdentifier",cdk().validateString)(properties.alarmIdentifier)),errors.collect(cdk().propertyValidator("type",cdk().requiredValidator)(properties.type)),errors.collect(cdk().propertyValidator("type",cdk().validateString)(properties.type)),errors.wrap('supplied properties not correct for "ControlConditionProperty"')}function convertCfnZonalAutoshiftConfigurationControlConditionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnZonalAutoshiftConfigurationControlConditionPropertyValidator(properties).assertSuccess(),{AlarmIdentifier:cdk().stringToCloudFormation(properties.alarmIdentifier),Type:cdk().stringToCloudFormation(properties.type)}):properties}function CfnZonalAutoshiftConfigurationControlConditionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("alarmIdentifier","AlarmIdentifier",properties.AlarmIdentifier!=null?cfn_parse().FromCloudFormation.getString(properties.AlarmIdentifier):void 0),ret.addPropertyResult("type","Type",properties.Type!=null?cfn_parse().FromCloudFormation.getString(properties.Type):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("blockedDates",cdk().listValidator(cdk().validateString))(properties.blockedDates)),errors.collect(cdk().propertyValidator("blockedWindows",cdk().listValidator(cdk().validateString))(properties.blockedWindows)),errors.collect(cdk().propertyValidator("blockingAlarms",cdk().listValidator(CfnZonalAutoshiftConfigurationControlConditionPropertyValidator))(properties.blockingAlarms)),errors.collect(cdk().propertyValidator("outcomeAlarms",cdk().requiredValidator)(properties.outcomeAlarms)),errors.collect(cdk().propertyValidator("outcomeAlarms",cdk().listValidator(CfnZonalAutoshiftConfigurationControlConditionPropertyValidator))(properties.outcomeAlarms)),errors.wrap('supplied properties not correct for "PracticeRunConfigurationProperty"')}function convertCfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyValidator(properties).assertSuccess(),{BlockedDates:cdk().listMapper(cdk().stringToCloudFormation)(properties.blockedDates),BlockedWindows:cdk().listMapper(cdk().stringToCloudFormation)(properties.blockedWindows),BlockingAlarms:cdk().listMapper(convertCfnZonalAutoshiftConfigurationControlConditionPropertyToCloudFormation)(properties.blockingAlarms),OutcomeAlarms:cdk().listMapper(convertCfnZonalAutoshiftConfigurationControlConditionPropertyToCloudFormation)(properties.outcomeAlarms)}):properties}function CfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("blockedDates","BlockedDates",properties.BlockedDates!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.BlockedDates):void 0),ret.addPropertyResult("blockedWindows","BlockedWindows",properties.BlockedWindows!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.BlockedWindows):void 0),ret.addPropertyResult("blockingAlarms","BlockingAlarms",properties.BlockingAlarms!=null?cfn_parse().FromCloudFormation.getArray(CfnZonalAutoshiftConfigurationControlConditionPropertyFromCloudFormation)(properties.BlockingAlarms):void 0),ret.addPropertyResult("outcomeAlarms","OutcomeAlarms",properties.OutcomeAlarms!=null?cfn_parse().FromCloudFormation.getArray(CfnZonalAutoshiftConfigurationControlConditionPropertyFromCloudFormation)(properties.OutcomeAlarms):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnZonalAutoshiftConfigurationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("practiceRunConfiguration",CfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyValidator)(properties.practiceRunConfiguration)),errors.collect(cdk().propertyValidator("resourceIdentifier",cdk().requiredValidator)(properties.resourceIdentifier)),errors.collect(cdk().propertyValidator("resourceIdentifier",cdk().validateString)(properties.resourceIdentifier)),errors.collect(cdk().propertyValidator("zonalAutoshiftStatus",cdk().validateString)(properties.zonalAutoshiftStatus)),errors.wrap('supplied properties not correct for "CfnZonalAutoshiftConfigurationProps"')}function convertCfnZonalAutoshiftConfigurationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnZonalAutoshiftConfigurationPropsValidator(properties).assertSuccess(),{PracticeRunConfiguration:convertCfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyToCloudFormation(properties.practiceRunConfiguration),ResourceIdentifier:cdk().stringToCloudFormation(properties.resourceIdentifier),ZonalAutoshiftStatus:cdk().stringToCloudFormation(properties.zonalAutoshiftStatus)}):properties}function CfnZonalAutoshiftConfigurationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("practiceRunConfiguration","PracticeRunConfiguration",properties.PracticeRunConfiguration!=null?CfnZonalAutoshiftConfigurationPracticeRunConfigurationPropertyFromCloudFormation(properties.PracticeRunConfiguration):void 0),ret.addPropertyResult("resourceIdentifier","ResourceIdentifier",properties.ResourceIdentifier!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceIdentifier):void 0),ret.addPropertyResult("zonalAutoshiftStatus","ZonalAutoshiftStatus",properties.ZonalAutoshiftStatus!=null?cfn_parse().FromCloudFormation.getString(properties.ZonalAutoshiftStatus):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
