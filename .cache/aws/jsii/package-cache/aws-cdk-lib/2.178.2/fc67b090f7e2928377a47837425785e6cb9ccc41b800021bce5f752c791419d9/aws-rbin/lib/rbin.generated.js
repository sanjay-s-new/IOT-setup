"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnRule=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnRule extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnRulePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnRule(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnRule.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rbin_CfnRuleProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnRule),error}cdk().requireProperty(props,"resourceType",this),cdk().requireProperty(props,"retentionPeriod",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrIdentifier=cdk().Token.asString(this.getAtt("Identifier",cdk().ResolutionTypeHint.STRING)),this.attrLockState=cdk().Token.asString(this.getAtt("LockState",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Rbin::Rule",void 0,{tagPropertyName:"tags"}),this.description=props.description,this.excludeResourceTags=props.excludeResourceTags,this.lockConfiguration=props.lockConfiguration,this.resourceTags=props.resourceTags,this.resourceType=props.resourceType,this.retentionPeriod=props.retentionPeriod,this.status=props.status,this.tags=props.tags}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),description:this.description,excludeResourceTags:this.excludeResourceTags,lockConfiguration:this.lockConfiguration,resourceTags:this.resourceTags,resourceType:this.resourceType,retentionPeriod:this.retentionPeriod,status:this.status}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnRule.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnRulePropsToCloudFormation(props)}}exports.CfnRule=CfnRule,_a=JSII_RTTI_SYMBOL_1,CfnRule[_a]={fqn:"aws-cdk-lib.aws_rbin.CfnRule",version:"2.178.2"},CfnRule.CFN_RESOURCE_TYPE_NAME="AWS::Rbin::Rule";function CfnRuleResourceTagPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("resourceTagKey",cdk().requiredValidator)(properties.resourceTagKey)),errors.collect(cdk().propertyValidator("resourceTagKey",cdk().validateString)(properties.resourceTagKey)),errors.collect(cdk().propertyValidator("resourceTagValue",cdk().requiredValidator)(properties.resourceTagValue)),errors.collect(cdk().propertyValidator("resourceTagValue",cdk().validateString)(properties.resourceTagValue)),errors.wrap('supplied properties not correct for "ResourceTagProperty"')}function convertCfnRuleResourceTagPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnRuleResourceTagPropertyValidator(properties).assertSuccess(),{ResourceTagKey:cdk().stringToCloudFormation(properties.resourceTagKey),ResourceTagValue:cdk().stringToCloudFormation(properties.resourceTagValue)}):properties}function CfnRuleResourceTagPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("resourceTagKey","ResourceTagKey",properties.ResourceTagKey!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceTagKey):void 0),ret.addPropertyResult("resourceTagValue","ResourceTagValue",properties.ResourceTagValue!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceTagValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnRuleRetentionPeriodPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("retentionPeriodUnit",cdk().requiredValidator)(properties.retentionPeriodUnit)),errors.collect(cdk().propertyValidator("retentionPeriodUnit",cdk().validateString)(properties.retentionPeriodUnit)),errors.collect(cdk().propertyValidator("retentionPeriodValue",cdk().requiredValidator)(properties.retentionPeriodValue)),errors.collect(cdk().propertyValidator("retentionPeriodValue",cdk().validateNumber)(properties.retentionPeriodValue)),errors.wrap('supplied properties not correct for "RetentionPeriodProperty"')}function convertCfnRuleRetentionPeriodPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnRuleRetentionPeriodPropertyValidator(properties).assertSuccess(),{RetentionPeriodUnit:cdk().stringToCloudFormation(properties.retentionPeriodUnit),RetentionPeriodValue:cdk().numberToCloudFormation(properties.retentionPeriodValue)}):properties}function CfnRuleRetentionPeriodPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("retentionPeriodUnit","RetentionPeriodUnit",properties.RetentionPeriodUnit!=null?cfn_parse().FromCloudFormation.getString(properties.RetentionPeriodUnit):void 0),ret.addPropertyResult("retentionPeriodValue","RetentionPeriodValue",properties.RetentionPeriodValue!=null?cfn_parse().FromCloudFormation.getNumber(properties.RetentionPeriodValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnRuleUnlockDelayPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("unlockDelayUnit",cdk().validateString)(properties.unlockDelayUnit)),errors.collect(cdk().propertyValidator("unlockDelayValue",cdk().validateNumber)(properties.unlockDelayValue)),errors.wrap('supplied properties not correct for "UnlockDelayProperty"')}function convertCfnRuleUnlockDelayPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnRuleUnlockDelayPropertyValidator(properties).assertSuccess(),{UnlockDelayUnit:cdk().stringToCloudFormation(properties.unlockDelayUnit),UnlockDelayValue:cdk().numberToCloudFormation(properties.unlockDelayValue)}):properties}function CfnRuleUnlockDelayPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("unlockDelayUnit","UnlockDelayUnit",properties.UnlockDelayUnit!=null?cfn_parse().FromCloudFormation.getString(properties.UnlockDelayUnit):void 0),ret.addPropertyResult("unlockDelayValue","UnlockDelayValue",properties.UnlockDelayValue!=null?cfn_parse().FromCloudFormation.getNumber(properties.UnlockDelayValue):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnRulePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("excludeResourceTags",cdk().listValidator(CfnRuleResourceTagPropertyValidator))(properties.excludeResourceTags)),errors.collect(cdk().propertyValidator("lockConfiguration",CfnRuleUnlockDelayPropertyValidator)(properties.lockConfiguration)),errors.collect(cdk().propertyValidator("resourceTags",cdk().listValidator(CfnRuleResourceTagPropertyValidator))(properties.resourceTags)),errors.collect(cdk().propertyValidator("resourceType",cdk().requiredValidator)(properties.resourceType)),errors.collect(cdk().propertyValidator("resourceType",cdk().validateString)(properties.resourceType)),errors.collect(cdk().propertyValidator("retentionPeriod",cdk().requiredValidator)(properties.retentionPeriod)),errors.collect(cdk().propertyValidator("retentionPeriod",CfnRuleRetentionPeriodPropertyValidator)(properties.retentionPeriod)),errors.collect(cdk().propertyValidator("status",cdk().validateString)(properties.status)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnRuleProps"')}function convertCfnRulePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnRulePropsValidator(properties).assertSuccess(),{Description:cdk().stringToCloudFormation(properties.description),ExcludeResourceTags:cdk().listMapper(convertCfnRuleResourceTagPropertyToCloudFormation)(properties.excludeResourceTags),LockConfiguration:convertCfnRuleUnlockDelayPropertyToCloudFormation(properties.lockConfiguration),ResourceTags:cdk().listMapper(convertCfnRuleResourceTagPropertyToCloudFormation)(properties.resourceTags),ResourceType:cdk().stringToCloudFormation(properties.resourceType),RetentionPeriod:convertCfnRuleRetentionPeriodPropertyToCloudFormation(properties.retentionPeriod),Status:cdk().stringToCloudFormation(properties.status),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnRulePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("excludeResourceTags","ExcludeResourceTags",properties.ExcludeResourceTags!=null?cfn_parse().FromCloudFormation.getArray(CfnRuleResourceTagPropertyFromCloudFormation)(properties.ExcludeResourceTags):void 0),ret.addPropertyResult("lockConfiguration","LockConfiguration",properties.LockConfiguration!=null?CfnRuleUnlockDelayPropertyFromCloudFormation(properties.LockConfiguration):void 0),ret.addPropertyResult("resourceTags","ResourceTags",properties.ResourceTags!=null?cfn_parse().FromCloudFormation.getArray(CfnRuleResourceTagPropertyFromCloudFormation)(properties.ResourceTags):void 0),ret.addPropertyResult("resourceType","ResourceType",properties.ResourceType!=null?cfn_parse().FromCloudFormation.getString(properties.ResourceType):void 0),ret.addPropertyResult("retentionPeriod","RetentionPeriod",properties.RetentionPeriod!=null?CfnRuleRetentionPeriodPropertyFromCloudFormation(properties.RetentionPeriod):void 0),ret.addPropertyResult("status","Status",properties.Status!=null?cfn_parse().FromCloudFormation.getString(properties.Status):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
