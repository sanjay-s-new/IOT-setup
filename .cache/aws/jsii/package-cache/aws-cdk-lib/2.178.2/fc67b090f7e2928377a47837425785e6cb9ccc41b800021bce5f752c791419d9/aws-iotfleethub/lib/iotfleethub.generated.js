"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnApplication=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnApplication extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnApplicationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnApplication(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnApplication.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iotfleethub_CfnApplicationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnApplication),error}cdk().requireProperty(props,"applicationName",this),cdk().requireProperty(props,"roleArn",this),this.attrApplicationArn=cdk().Token.asString(this.getAtt("ApplicationArn",cdk().ResolutionTypeHint.STRING)),this.attrApplicationCreationDate=cdk().Token.asNumber(this.getAtt("ApplicationCreationDate",cdk().ResolutionTypeHint.NUMBER)),this.attrApplicationId=cdk().Token.asString(this.getAtt("ApplicationId",cdk().ResolutionTypeHint.STRING)),this.attrApplicationLastUpdateDate=cdk().Token.asNumber(this.getAtt("ApplicationLastUpdateDate",cdk().ResolutionTypeHint.NUMBER)),this.attrApplicationState=cdk().Token.asString(this.getAtt("ApplicationState",cdk().ResolutionTypeHint.STRING)),this.attrApplicationUrl=cdk().Token.asString(this.getAtt("ApplicationUrl",cdk().ResolutionTypeHint.STRING)),this.attrErrorMessage=cdk().Token.asString(this.getAtt("ErrorMessage",cdk().ResolutionTypeHint.STRING)),this.attrSsoClientId=cdk().Token.asString(this.getAtt("SsoClientId",cdk().ResolutionTypeHint.STRING)),this.applicationDescription=props.applicationDescription,this.applicationName=props.applicationName,this.roleArn=props.roleArn,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::IoTFleetHub::Application",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{applicationDescription:this.applicationDescription,applicationName:this.applicationName,roleArn:this.roleArn,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnApplication.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnApplicationPropsToCloudFormation(props)}}exports.CfnApplication=CfnApplication,_a=JSII_RTTI_SYMBOL_1,CfnApplication[_a]={fqn:"aws-cdk-lib.aws_iotfleethub.CfnApplication",version:"2.178.2"},CfnApplication.CFN_RESOURCE_TYPE_NAME="AWS::IoTFleetHub::Application";function CfnApplicationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applicationDescription",cdk().validateString)(properties.applicationDescription)),errors.collect(cdk().propertyValidator("applicationName",cdk().requiredValidator)(properties.applicationName)),errors.collect(cdk().propertyValidator("applicationName",cdk().validateString)(properties.applicationName)),errors.collect(cdk().propertyValidator("roleArn",cdk().requiredValidator)(properties.roleArn)),errors.collect(cdk().propertyValidator("roleArn",cdk().validateString)(properties.roleArn)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnApplicationProps"')}function convertCfnApplicationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationPropsValidator(properties).assertSuccess(),{ApplicationDescription:cdk().stringToCloudFormation(properties.applicationDescription),ApplicationName:cdk().stringToCloudFormation(properties.applicationName),RoleArn:cdk().stringToCloudFormation(properties.roleArn),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnApplicationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applicationDescription","ApplicationDescription",properties.ApplicationDescription!=null?cfn_parse().FromCloudFormation.getString(properties.ApplicationDescription):void 0),ret.addPropertyResult("applicationName","ApplicationName",properties.ApplicationName!=null?cfn_parse().FromCloudFormation.getString(properties.ApplicationName):void 0),ret.addPropertyResult("roleArn","RoleArn",properties.RoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RoleArn):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
