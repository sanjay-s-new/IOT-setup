"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnSimpleAD=exports.CfnMicrosoftAD=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnMicrosoftAD extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnMicrosoftADPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnMicrosoftAD(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnMicrosoftAD.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_directoryservice_CfnMicrosoftADProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnMicrosoftAD),error}cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"password",this),cdk().requireProperty(props,"vpcSettings",this),this.attrAlias=cdk().Token.asString(this.getAtt("Alias",cdk().ResolutionTypeHint.STRING)),this.attrDnsIpAddresses=cdk().Token.asList(this.getAtt("DnsIpAddresses",cdk().ResolutionTypeHint.STRING_LIST)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.createAlias=props.createAlias,this.edition=props.edition,this.enableSso=props.enableSso,this.name=props.name,this.password=props.password,this.shortName=props.shortName,this.vpcSettings=props.vpcSettings}get cfnProperties(){return{createAlias:this.createAlias,edition:this.edition,enableSso:this.enableSso,name:this.name,password:this.password,shortName:this.shortName,vpcSettings:this.vpcSettings}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnMicrosoftAD.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnMicrosoftADPropsToCloudFormation(props)}}exports.CfnMicrosoftAD=CfnMicrosoftAD,_a=JSII_RTTI_SYMBOL_1,CfnMicrosoftAD[_a]={fqn:"aws-cdk-lib.aws_directoryservice.CfnMicrosoftAD",version:"2.178.2"},CfnMicrosoftAD.CFN_RESOURCE_TYPE_NAME="AWS::DirectoryService::MicrosoftAD";function CfnMicrosoftADVpcSettingsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("subnetIds",cdk().requiredValidator)(properties.subnetIds)),errors.collect(cdk().propertyValidator("subnetIds",cdk().listValidator(cdk().validateString))(properties.subnetIds)),errors.collect(cdk().propertyValidator("vpcId",cdk().requiredValidator)(properties.vpcId)),errors.collect(cdk().propertyValidator("vpcId",cdk().validateString)(properties.vpcId)),errors.wrap('supplied properties not correct for "VpcSettingsProperty"')}function convertCfnMicrosoftADVpcSettingsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMicrosoftADVpcSettingsPropertyValidator(properties).assertSuccess(),{SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnetIds),VpcId:cdk().stringToCloudFormation(properties.vpcId)}):properties}function CfnMicrosoftADVpcSettingsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("subnetIds","SubnetIds",properties.SubnetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SubnetIds):void 0),ret.addPropertyResult("vpcId","VpcId",properties.VpcId!=null?cfn_parse().FromCloudFormation.getString(properties.VpcId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnMicrosoftADPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("createAlias",cdk().validateBoolean)(properties.createAlias)),errors.collect(cdk().propertyValidator("edition",cdk().validateString)(properties.edition)),errors.collect(cdk().propertyValidator("enableSso",cdk().validateBoolean)(properties.enableSso)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("password",cdk().requiredValidator)(properties.password)),errors.collect(cdk().propertyValidator("password",cdk().validateString)(properties.password)),errors.collect(cdk().propertyValidator("shortName",cdk().validateString)(properties.shortName)),errors.collect(cdk().propertyValidator("vpcSettings",cdk().requiredValidator)(properties.vpcSettings)),errors.collect(cdk().propertyValidator("vpcSettings",CfnMicrosoftADVpcSettingsPropertyValidator)(properties.vpcSettings)),errors.wrap('supplied properties not correct for "CfnMicrosoftADProps"')}function convertCfnMicrosoftADPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnMicrosoftADPropsValidator(properties).assertSuccess(),{CreateAlias:cdk().booleanToCloudFormation(properties.createAlias),Edition:cdk().stringToCloudFormation(properties.edition),EnableSso:cdk().booleanToCloudFormation(properties.enableSso),Name:cdk().stringToCloudFormation(properties.name),Password:cdk().stringToCloudFormation(properties.password),ShortName:cdk().stringToCloudFormation(properties.shortName),VpcSettings:convertCfnMicrosoftADVpcSettingsPropertyToCloudFormation(properties.vpcSettings)}):properties}function CfnMicrosoftADPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("createAlias","CreateAlias",properties.CreateAlias!=null?cfn_parse().FromCloudFormation.getBoolean(properties.CreateAlias):void 0),ret.addPropertyResult("edition","Edition",properties.Edition!=null?cfn_parse().FromCloudFormation.getString(properties.Edition):void 0),ret.addPropertyResult("enableSso","EnableSso",properties.EnableSso!=null?cfn_parse().FromCloudFormation.getBoolean(properties.EnableSso):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("password","Password",properties.Password!=null?cfn_parse().FromCloudFormation.getString(properties.Password):void 0),ret.addPropertyResult("shortName","ShortName",properties.ShortName!=null?cfn_parse().FromCloudFormation.getString(properties.ShortName):void 0),ret.addPropertyResult("vpcSettings","VpcSettings",properties.VpcSettings!=null?CfnMicrosoftADVpcSettingsPropertyFromCloudFormation(properties.VpcSettings):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnSimpleAD extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSimpleADPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnSimpleAD(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSimpleAD.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_directoryservice_CfnSimpleADProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSimpleAD),error}cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"size",this),cdk().requireProperty(props,"vpcSettings",this),this.attrAlias=cdk().Token.asString(this.getAtt("Alias",cdk().ResolutionTypeHint.STRING)),this.attrDirectoryId=cdk().Token.asString(this.getAtt("DirectoryId",cdk().ResolutionTypeHint.STRING)),this.attrDnsIpAddresses=cdk().Token.asList(this.getAtt("DnsIpAddresses",cdk().ResolutionTypeHint.STRING_LIST)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.createAlias=props.createAlias,this.description=props.description,this.enableSso=props.enableSso,this.name=props.name,this.password=props.password,this.shortName=props.shortName,this.size=props.size,this.vpcSettings=props.vpcSettings}get cfnProperties(){return{createAlias:this.createAlias,description:this.description,enableSso:this.enableSso,name:this.name,password:this.password,shortName:this.shortName,size:this.size,vpcSettings:this.vpcSettings}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSimpleAD.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSimpleADPropsToCloudFormation(props)}}exports.CfnSimpleAD=CfnSimpleAD,_b=JSII_RTTI_SYMBOL_1,CfnSimpleAD[_b]={fqn:"aws-cdk-lib.aws_directoryservice.CfnSimpleAD",version:"2.178.2"},CfnSimpleAD.CFN_RESOURCE_TYPE_NAME="AWS::DirectoryService::SimpleAD";function CfnSimpleADVpcSettingsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("subnetIds",cdk().requiredValidator)(properties.subnetIds)),errors.collect(cdk().propertyValidator("subnetIds",cdk().listValidator(cdk().validateString))(properties.subnetIds)),errors.collect(cdk().propertyValidator("vpcId",cdk().requiredValidator)(properties.vpcId)),errors.collect(cdk().propertyValidator("vpcId",cdk().validateString)(properties.vpcId)),errors.wrap('supplied properties not correct for "VpcSettingsProperty"')}function convertCfnSimpleADVpcSettingsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSimpleADVpcSettingsPropertyValidator(properties).assertSuccess(),{SubnetIds:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnetIds),VpcId:cdk().stringToCloudFormation(properties.vpcId)}):properties}function CfnSimpleADVpcSettingsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("subnetIds","SubnetIds",properties.SubnetIds!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SubnetIds):void 0),ret.addPropertyResult("vpcId","VpcId",properties.VpcId!=null?cfn_parse().FromCloudFormation.getString(properties.VpcId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnSimpleADPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("createAlias",cdk().validateBoolean)(properties.createAlias)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("enableSso",cdk().validateBoolean)(properties.enableSso)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("password",cdk().validateString)(properties.password)),errors.collect(cdk().propertyValidator("shortName",cdk().validateString)(properties.shortName)),errors.collect(cdk().propertyValidator("size",cdk().requiredValidator)(properties.size)),errors.collect(cdk().propertyValidator("size",cdk().validateString)(properties.size)),errors.collect(cdk().propertyValidator("vpcSettings",cdk().requiredValidator)(properties.vpcSettings)),errors.collect(cdk().propertyValidator("vpcSettings",CfnSimpleADVpcSettingsPropertyValidator)(properties.vpcSettings)),errors.wrap('supplied properties not correct for "CfnSimpleADProps"')}function convertCfnSimpleADPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSimpleADPropsValidator(properties).assertSuccess(),{CreateAlias:cdk().booleanToCloudFormation(properties.createAlias),Description:cdk().stringToCloudFormation(properties.description),EnableSso:cdk().booleanToCloudFormation(properties.enableSso),Name:cdk().stringToCloudFormation(properties.name),Password:cdk().stringToCloudFormation(properties.password),ShortName:cdk().stringToCloudFormation(properties.shortName),Size:cdk().stringToCloudFormation(properties.size),VpcSettings:convertCfnSimpleADVpcSettingsPropertyToCloudFormation(properties.vpcSettings)}):properties}function CfnSimpleADPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("createAlias","CreateAlias",properties.CreateAlias!=null?cfn_parse().FromCloudFormation.getBoolean(properties.CreateAlias):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("enableSso","EnableSso",properties.EnableSso!=null?cfn_parse().FromCloudFormation.getBoolean(properties.EnableSso):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("password","Password",properties.Password!=null?cfn_parse().FromCloudFormation.getString(properties.Password):void 0),ret.addPropertyResult("shortName","ShortName",properties.ShortName!=null?cfn_parse().FromCloudFormation.getString(properties.ShortName):void 0),ret.addPropertyResult("size","Size",properties.Size!=null?cfn_parse().FromCloudFormation.getString(properties.Size):void 0),ret.addPropertyResult("vpcSettings","VpcSettings",properties.VpcSettings!=null?CfnSimpleADVpcSettingsPropertyFromCloudFormation(properties.VpcSettings):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
