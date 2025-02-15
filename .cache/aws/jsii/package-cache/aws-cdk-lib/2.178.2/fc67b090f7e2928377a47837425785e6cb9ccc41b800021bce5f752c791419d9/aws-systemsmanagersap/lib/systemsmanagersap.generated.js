"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnApplication=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnApplication extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnApplicationPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnApplication(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnApplication.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_systemsmanagersap_CfnApplicationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnApplication),error}cdk().requireProperty(props,"applicationId",this),cdk().requireProperty(props,"applicationType",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.applicationId=props.applicationId,this.applicationType=props.applicationType,this.credentials=props.credentials,this.databaseArn=props.databaseArn,this.instances=props.instances,this.sapInstanceNumber=props.sapInstanceNumber,this.sid=props.sid,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::SystemsManagerSAP::Application",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{applicationId:this.applicationId,applicationType:this.applicationType,credentials:this.credentials,databaseArn:this.databaseArn,instances:this.instances,sapInstanceNumber:this.sapInstanceNumber,sid:this.sid,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnApplication.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnApplicationPropsToCloudFormation(props)}}exports.CfnApplication=CfnApplication,_a=JSII_RTTI_SYMBOL_1,CfnApplication[_a]={fqn:"aws-cdk-lib.aws_systemsmanagersap.CfnApplication",version:"2.178.2"},CfnApplication.CFN_RESOURCE_TYPE_NAME="AWS::SystemsManagerSAP::Application";function CfnApplicationCredentialPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("credentialType",cdk().validateString)(properties.credentialType)),errors.collect(cdk().propertyValidator("databaseName",cdk().validateString)(properties.databaseName)),errors.collect(cdk().propertyValidator("secretId",cdk().validateString)(properties.secretId)),errors.wrap('supplied properties not correct for "CredentialProperty"')}function convertCfnApplicationCredentialPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationCredentialPropertyValidator(properties).assertSuccess(),{CredentialType:cdk().stringToCloudFormation(properties.credentialType),DatabaseName:cdk().stringToCloudFormation(properties.databaseName),SecretId:cdk().stringToCloudFormation(properties.secretId)}):properties}function CfnApplicationCredentialPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("credentialType","CredentialType",properties.CredentialType!=null?cfn_parse().FromCloudFormation.getString(properties.CredentialType):void 0),ret.addPropertyResult("databaseName","DatabaseName",properties.DatabaseName!=null?cfn_parse().FromCloudFormation.getString(properties.DatabaseName):void 0),ret.addPropertyResult("secretId","SecretId",properties.SecretId!=null?cfn_parse().FromCloudFormation.getString(properties.SecretId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnApplicationPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applicationId",cdk().requiredValidator)(properties.applicationId)),errors.collect(cdk().propertyValidator("applicationId",cdk().validateString)(properties.applicationId)),errors.collect(cdk().propertyValidator("applicationType",cdk().requiredValidator)(properties.applicationType)),errors.collect(cdk().propertyValidator("applicationType",cdk().validateString)(properties.applicationType)),errors.collect(cdk().propertyValidator("credentials",cdk().listValidator(CfnApplicationCredentialPropertyValidator))(properties.credentials)),errors.collect(cdk().propertyValidator("databaseArn",cdk().validateString)(properties.databaseArn)),errors.collect(cdk().propertyValidator("instances",cdk().listValidator(cdk().validateString))(properties.instances)),errors.collect(cdk().propertyValidator("sapInstanceNumber",cdk().validateString)(properties.sapInstanceNumber)),errors.collect(cdk().propertyValidator("sid",cdk().validateString)(properties.sid)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnApplicationProps"')}function convertCfnApplicationPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationPropsValidator(properties).assertSuccess(),{ApplicationId:cdk().stringToCloudFormation(properties.applicationId),ApplicationType:cdk().stringToCloudFormation(properties.applicationType),Credentials:cdk().listMapper(convertCfnApplicationCredentialPropertyToCloudFormation)(properties.credentials),DatabaseArn:cdk().stringToCloudFormation(properties.databaseArn),Instances:cdk().listMapper(cdk().stringToCloudFormation)(properties.instances),SapInstanceNumber:cdk().stringToCloudFormation(properties.sapInstanceNumber),Sid:cdk().stringToCloudFormation(properties.sid),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnApplicationPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applicationId","ApplicationId",properties.ApplicationId!=null?cfn_parse().FromCloudFormation.getString(properties.ApplicationId):void 0),ret.addPropertyResult("applicationType","ApplicationType",properties.ApplicationType!=null?cfn_parse().FromCloudFormation.getString(properties.ApplicationType):void 0),ret.addPropertyResult("credentials","Credentials",properties.Credentials!=null?cfn_parse().FromCloudFormation.getArray(CfnApplicationCredentialPropertyFromCloudFormation)(properties.Credentials):void 0),ret.addPropertyResult("databaseArn","DatabaseArn",properties.DatabaseArn!=null?cfn_parse().FromCloudFormation.getString(properties.DatabaseArn):void 0),ret.addPropertyResult("instances","Instances",properties.Instances!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Instances):void 0),ret.addPropertyResult("sapInstanceNumber","SapInstanceNumber",properties.SapInstanceNumber!=null?cfn_parse().FromCloudFormation.getString(properties.SapInstanceNumber):void 0),ret.addPropertyResult("sid","Sid",properties.Sid!=null?cfn_parse().FromCloudFormation.getString(properties.Sid):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
