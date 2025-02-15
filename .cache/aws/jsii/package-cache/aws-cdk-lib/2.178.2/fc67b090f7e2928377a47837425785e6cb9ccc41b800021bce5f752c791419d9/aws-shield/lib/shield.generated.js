"use strict";var _a,_b,_c,_d;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnProtectionGroup=exports.CfnProtection=exports.CfnProactiveEngagement=exports.CfnDRTAccess=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnDRTAccess extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnDRTAccessPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnDRTAccess(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnDRTAccess.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_shield_CfnDRTAccessProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnDRTAccess),error}cdk().requireProperty(props,"roleArn",this),this.attrAccountId=cdk().Token.asString(this.getAtt("AccountId",cdk().ResolutionTypeHint.STRING)),this.logBucketList=props.logBucketList,this.roleArn=props.roleArn}get cfnProperties(){return{logBucketList:this.logBucketList,roleArn:this.roleArn}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnDRTAccess.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnDRTAccessPropsToCloudFormation(props)}}exports.CfnDRTAccess=CfnDRTAccess,_a=JSII_RTTI_SYMBOL_1,CfnDRTAccess[_a]={fqn:"aws-cdk-lib.aws_shield.CfnDRTAccess",version:"2.178.2"},CfnDRTAccess.CFN_RESOURCE_TYPE_NAME="AWS::Shield::DRTAccess";function CfnDRTAccessPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("logBucketList",cdk().listValidator(cdk().validateString))(properties.logBucketList)),errors.collect(cdk().propertyValidator("roleArn",cdk().requiredValidator)(properties.roleArn)),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.wrap('supplied properties not correct for "CfnDRTAccessProps"')}function convertCfnDRTAccessPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnDRTAccessPropsValidator(properties).assertSuccess(),{LogBucketList:cdk().listMapper(cdk().stringToCloudFormation)(properties.logBucketList),RoleArn:cdk().stringToCloudFormation(properties.roleArn)}):properties}function CfnDRTAccessPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("logBucketList","LogBucketList",properties.LogBucketList!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.LogBucketList):void 0),ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnProactiveEngagement extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnProactiveEngagementPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnProactiveEngagement(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnProactiveEngagement.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_shield_CfnProactiveEngagementProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnProactiveEngagement),error}cdk().requireProperty(props,"emergencyContactList",this),cdk().requireProperty(props,"proactiveEngagementStatus",this),this.attrAccountId=cdk().Token.asString(this.getAtt("AccountId",cdk().ResolutionTypeHint.STRING)),this.emergencyContactList=props.emergencyContactList,this.proactiveEngagementStatus=props.proactiveEngagementStatus}get cfnProperties(){return{emergencyContactList:this.emergencyContactList,proactiveEngagementStatus:this.proactiveEngagementStatus}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnProactiveEngagement.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnProactiveEngagementPropsToCloudFormation(props)}}exports.CfnProactiveEngagement=CfnProactiveEngagement,_b=JSII_RTTI_SYMBOL_1,CfnProactiveEngagement[_b]={fqn:"aws-cdk-lib.aws_shield.CfnProactiveEngagement",version:"2.178.2"},CfnProactiveEngagement.CFN_RESOURCE_TYPE_NAME="AWS::Shield::ProactiveEngagement";function CfnProactiveEngagementEmergencyContactPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("contactNotes",cdk().validateString)(properties.contactNotes)),errors.collect(cdk().propertyValidator("emailAddress",cdk().requiredValidator)(properties.emailAddress)),errors.collect(cdk().propertyValidator("emailAddress",cdk().validateString)(properties.emailAddress)),errors.collect(cdk().propertyValidator("phoneNumber",cdk().validateString)(properties.phoneNumber)),errors.wrap('supplied properties not correct for "EmergencyContactProperty"')}function convertCfnProactiveEngagementEmergencyContactPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProactiveEngagementEmergencyContactPropertyValidator(properties).assertSuccess(),{ContactNotes:cdk().stringToCloudFormation(properties.contactNotes),EmailAddress:cdk().stringToCloudFormation(properties.emailAddress),PhoneNumber:cdk().stringToCloudFormation(properties.phoneNumber)}):properties}function CfnProactiveEngagementEmergencyContactPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("contactNotes","ContactNotes",properties.ContactNotes!=null?cfn_parse().FromCloudFormation.getString(properties.ContactNotes):void 0),ret.addPropertyResult("emailAddress","EmailAddress",properties.EmailAddress!=null?cfn_parse().FromCloudFormation.getString(properties.EmailAddress):void 0),ret.addPropertyResult("phoneNumber","PhoneNumber",properties.PhoneNumber!=null?cfn_parse().FromCloudFormation.getString(properties.PhoneNumber):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnProactiveEngagementPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("emergencyContactList",cdk().requiredValidator)(properties.emergencyContactList)),errors.collect(cdk().propertyValidator("emergencyContactList",cdk().listValidator(CfnProactiveEngagementEmergencyContactPropertyValidator))(properties.emergencyContactList)),errors.collect(cdk().propertyValidator("proactiveEngagementStatus",cdk().requiredValidator)(properties.proactiveEngagementStatus)),errors.collect(cdk().propertyValidator("proactiveEngagementStatus",cdk().validateString)(properties.proactiveEngagementStatus)),errors.wrap('supplied properties not correct for "CfnProactiveEngagementProps"')}function convertCfnProactiveEngagementPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProactiveEngagementPropsValidator(properties).assertSuccess(),{EmergencyContactList:cdk().listMapper(convertCfnProactiveEngagementEmergencyContactPropertyToCloudFormation)(properties.emergencyContactList),ProactiveEngagementStatus:cdk().stringToCloudFormation(properties.proactiveEngagementStatus)}):properties}function CfnProactiveEngagementPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("emergencyContactList","EmergencyContactList",properties.EmergencyContactList!=null?cfn_parse().FromCloudFormation.getArray(CfnProactiveEngagementEmergencyContactPropertyFromCloudFormation)(properties.EmergencyContactList):void 0),ret.addPropertyResult("proactiveEngagementStatus","ProactiveEngagementStatus",properties.ProactiveEngagementStatus!=null?cfn_parse().FromCloudFormation.getString(properties.ProactiveEngagementStatus):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnProtection extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnProtectionPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnProtection(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnProtection.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_shield_CfnProtectionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnProtection),error}cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"resourceArn",this),this.attrProtectionArn=cdk().Token.asString(this.getAtt("ProtectionArn",cdk().ResolutionTypeHint.STRING)),this.attrProtectionId=cdk().Token.asString(this.getAtt("ProtectionId",cdk().ResolutionTypeHint.STRING)),this.applicationLayerAutomaticResponseConfiguration=props.applicationLayerAutomaticResponseConfiguration,this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Shield::Protection",void 0,{tagPropertyName:"tags"}),this.healthCheckArns=props.healthCheckArns,this.name=props.name,this.resourceArn=props.resourceArn,this.tags=props.tags}get cfnProperties(){return{applicationLayerAutomaticResponseConfiguration:this.applicationLayerAutomaticResponseConfiguration,tags:this.cdkTagManager.renderTags(this.tags),healthCheckArns:this.healthCheckArns,name:this.name,resourceArn:this.resourceArn}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnProtection.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnProtectionPropsToCloudFormation(props)}}exports.CfnProtection=CfnProtection,_c=JSII_RTTI_SYMBOL_1,CfnProtection[_c]={fqn:"aws-cdk-lib.aws_shield.CfnProtection",version:"2.178.2"},CfnProtection.CFN_RESOURCE_TYPE_NAME="AWS::Shield::Protection";function CfnProtectionActionPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("block",cdk().validateObject)(properties.block)),errors.collect(cdk().propertyValidator("count",cdk().validateObject)(properties.count)),errors.wrap('supplied properties not correct for "ActionProperty"')}function convertCfnProtectionActionPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProtectionActionPropertyValidator(properties).assertSuccess(),{Block:cdk().objectToCloudFormation(properties.block),Count:cdk().objectToCloudFormation(properties.count)}):properties}function CfnProtectionActionPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("block","Block",properties.Block!=null?cfn_parse().FromCloudFormation.getAny(properties.Block):void 0),ret.addPropertyResult("count","Count",properties.Count!=null?cfn_parse().FromCloudFormation.getAny(properties.Count):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("action",cdk().requiredValidator)(properties.action)),errors.collect(cdk().propertyValidator("action",CfnProtectionActionPropertyValidator)(properties.action)),errors.collect(cdk().propertyValidator("status",cdk().requiredValidator)(properties.status)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.wrap('supplied properties not correct for "ApplicationLayerAutomaticResponseConfigurationProperty"')}function convertCfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyValidator(properties).assertSuccess(),{Action:convertCfnProtectionActionPropertyToCloudFormation(properties.action),Status:cdk().stringToCloudFormation(properties.status)}):properties}function CfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("action","Action",properties.Action!=null?CfnProtectionActionPropertyFromCloudFormation(properties.Action):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnProtectionPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applicationLayerAutomaticResponseConfiguration",CfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyValidator)(properties.applicationLayerAutomaticResponseConfiguration)),errors.collect(cdk().propertyValidator("healthCheckArns",cdk().listValidator(cdk().validateString))(properties.healthCheckArns)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("resourceArn",cdk().requiredValidator)(properties.resourceArn)),errors.collect(cdk().propertyValidator("resourceArn",cdk().validateString)(properties.resourceArn)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnProtectionProps"')}function convertCfnProtectionPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProtectionPropsValidator(properties).assertSuccess(),{ApplicationLayerAutomaticResponseConfiguration:convertCfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyToCloudFormation(properties.applicationLayerAutomaticResponseConfiguration),HealthCheckArns:cdk().listMapper(cdk().stringToCloudFormation)(properties.healthCheckArns),Name:cdk().stringToCloudFormation(properties.name),ResourceArn:cdk().stringToCloudFormation(properties.resourceArn),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnProtectionPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applicationLayerAutomaticResponseConfiguration","ApplicationLayerAutomaticResponseConfiguration",properties.ApplicationLayerAutomaticResponseConfiguration!=null?CfnProtectionApplicationLayerAutomaticResponseConfigurationPropertyFromCloudFormation(properties.ApplicationLayerAutomaticResponseConfiguration):void 0),ret.addPropertyResult("healthCheckArns","HealthCheckArns",properties.HealthCheckArns!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.HealthCheckArns):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("resourceArn","ResourceArn",properties.ResourceArn!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceArn):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnProtectionGroup extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnProtectionGroupPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnProtectionGroup(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnProtectionGroup.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_shield_CfnProtectionGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnProtectionGroup),error}cdk().requireProperty(props,"aggregation",this),cdk().requireProperty(props,"pattern",this),cdk().requireProperty(props,"protectionGroupId",this),this.attrProtectionGroupArn=cdk().Token.asString(this.getAtt("ProtectionGroupArn",cdk().ResolutionTypeHint.STRING)),this.aggregation=props.aggregation,this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Shield::ProtectionGroup",void 0,{tagPropertyName:"tags"}),this.members=props.members,this.pattern=props.pattern,this.protectionGroupId=props.protectionGroupId,this.resourceType=props.resourceType,this.tags=props.tags}get cfnProperties(){return{aggregation:this.aggregation,tags:this.cdkTagManager.renderTags(this.tags),members:this.members,pattern:this.pattern,protectionGroupId:this.protectionGroupId,resourceType:this.resourceType}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnProtectionGroup.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnProtectionGroupPropsToCloudFormation(props)}}exports.CfnProtectionGroup=CfnProtectionGroup,_d=JSII_RTTI_SYMBOL_1,CfnProtectionGroup[_d]={fqn:"aws-cdk-lib.aws_shield.CfnProtectionGroup",version:"2.178.2"},CfnProtectionGroup.CFN_RESOURCE_TYPE_NAME="AWS::Shield::ProtectionGroup";function CfnProtectionGroupPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("aggregation",cdk().requiredValidator)(properties.aggregation)),errors.collect(cdk().propertyValidator("aggregation",cdk().validateString)(properties.aggregation)),errors.collect(cdk().propertyValidator("members",cdk().listValidator(cdk().validateString))(properties.members)),errors.collect(cdk().propertyValidator("pattern",cdk().requiredValidator)(properties.pattern)),errors.collect(cdk().propertyValidator("pattern",cdk().validateString)(properties.pattern)),errors.collect(cdk().propertyValidator("protectionGroupId",cdk().requiredValidator)(properties.protectionGroupId)),errors.collect(cdk().propertyValidator("protectionGroupId",cdk().validateString)(properties.protectionGroupId)),errors.collect(cdk().propertyValidator("resourceType",cdk().validateString)(properties.resourceType)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnProtectionGroupProps"')}function convertCfnProtectionGroupPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnProtectionGroupPropsValidator(properties).assertSuccess(),{Aggregation:cdk().stringToCloudFormation(properties.aggregation),Members:cdk().listMapper(cdk().stringToCloudFormation)(properties.members),Pattern:cdk().stringToCloudFormation(properties.pattern),ProtectionGroupId:cdk().stringToCloudFormation(properties.protectionGroupId),ResourceType:cdk().stringToCloudFormation(properties.resourceType),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnProtectionGroupPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("aggregation","Aggregation",properties.Aggregation!=null?cfn_parse().FromCloudFormation.getString(properties.Aggregation):void 0),ret.addPropertyResult("members","Members",properties.Members!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Members):void 0),ret.addPropertyResult("pattern","Pattern",properties.Pattern!=null?cfn_parse().FromCloudFormation.getString(properties.Pattern):void 0),ret.addPropertyResult("protectionGroupId","ProtectionGroupId",properties.ProtectionGroupId!=null?cfn_parse().FromCloudFormation.getString(properties.ProtectionGroupId):void 0),ret.addPropertyResult("resourceType","ResourceType",properties.ResourceType!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceType):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
