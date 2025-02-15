"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnSink=exports.CfnLink=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnLink extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnLinkPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnLink(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnLink.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_oam_CfnLinkProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnLink),error}cdk().requireProperty(props,"resourceTypes",this),cdk().requireProperty(props,"sinkIdentifier",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrLabel=cdk().Token.asString(this.getAtt("Label",cdk().ResolutionTypeHint.STRING)),this.labelTemplate=props.labelTemplate,this.linkConfiguration=props.linkConfiguration,this.resourceTypes=props.resourceTypes,this.sinkIdentifier=props.sinkIdentifier,this.tags=new(cdk()).TagManager(cdk().TagType.MAP,"AWS::Oam::Link",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{labelTemplate:this.labelTemplate,linkConfiguration:this.linkConfiguration,resourceTypes:this.resourceTypes,sinkIdentifier:this.sinkIdentifier,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnLink.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnLinkPropsToCloudFormation(props)}}exports.CfnLink=CfnLink,_a=JSII_RTTI_SYMBOL_1,CfnLink[_a]={fqn:"aws-cdk-lib.aws_oam.CfnLink",version:"2.178.2"},CfnLink.CFN_RESOURCE_TYPE_NAME="AWS::Oam::Link";function CfnLinkLinkFilterPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("filter",cdk().requiredValidator)(properties.filter)),errors.collect(cdk().propertyValidator("filter",cdk().validateString)(properties.filter)),errors.wrap('supplied properties not correct for "LinkFilterProperty"')}function convertCfnLinkLinkFilterPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLinkLinkFilterPropertyValidator(properties).assertSuccess(),{Filter:cdk().stringToCloudFormation(properties.filter)}):properties}function CfnLinkLinkFilterPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("filter","Filter",properties.Filter!=null?cfn_parse().FromCloudFormation.getString(properties.Filter):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLinkLinkConfigurationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("logGroupConfiguration",CfnLinkLinkFilterPropertyValidator)(properties.logGroupConfiguration)),errors.collect(cdk().propertyValidator("metricConfiguration",CfnLinkLinkFilterPropertyValidator)(properties.metricConfiguration)),errors.wrap('supplied properties not correct for "LinkConfigurationProperty"')}function convertCfnLinkLinkConfigurationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLinkLinkConfigurationPropertyValidator(properties).assertSuccess(),{LogGroupConfiguration:convertCfnLinkLinkFilterPropertyToCloudFormation(properties.logGroupConfiguration),MetricConfiguration:convertCfnLinkLinkFilterPropertyToCloudFormation(properties.metricConfiguration)}):properties}function CfnLinkLinkConfigurationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("logGroupConfiguration","LogGroupConfiguration",properties.LogGroupConfiguration!=null?CfnLinkLinkFilterPropertyFromCloudFormation(properties.LogGroupConfiguration):void 0),ret.addPropertyResult("metricConfiguration","MetricConfiguration",properties.MetricConfiguration!=null?CfnLinkLinkFilterPropertyFromCloudFormation(properties.MetricConfiguration):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLinkPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("labelTemplate",cdk().validateString)(properties.labelTemplate)),errors.collect(cdk().propertyValidator("linkConfiguration",CfnLinkLinkConfigurationPropertyValidator)(properties.linkConfiguration)),errors.collect(cdk().propertyValidator("resourceTypes",cdk().requiredValidator)(properties.resourceTypes)),errors.collect(cdk().propertyValidator("resourceTypes",cdk().listValidator(cdk().validateString))(properties.resourceTypes)),errors.collect(cdk().propertyValidator("sinkIdentifier",cdk().requiredValidator)(properties.sinkIdentifier)),errors.collect(cdk().propertyValidator("sinkIdentifier",cdk().validateString)(properties.sinkIdentifier)),errors.collect(cdk().propertyValidator("tags",cdk().hashValidator(cdk().validateString))(properties.tags)),errors.wrap('supplied properties not correct for "CfnLinkProps"')}function convertCfnLinkPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLinkPropsValidator(properties).assertSuccess(),{LabelTemplate:cdk().stringToCloudFormation(properties.labelTemplate),LinkConfiguration:convertCfnLinkLinkConfigurationPropertyToCloudFormation(properties.linkConfiguration),ResourceTypes:cdk().listMapper(cdk().stringToCloudFormation)(properties.resourceTypes),SinkIdentifier:cdk().stringToCloudFormation(properties.sinkIdentifier),Tags:cdk().hashMapper(cdk().stringToCloudFormation)(properties.tags)}):properties}function CfnLinkPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("labelTemplate","LabelTemplate",properties.LabelTemplate!=null?cfn_parse().FromCloudFormation.getString(properties.LabelTemplate):void 0),ret.addPropertyResult("linkConfiguration","LinkConfiguration",properties.LinkConfiguration!=null?CfnLinkLinkConfigurationPropertyFromCloudFormation(properties.LinkConfiguration):void 0),ret.addPropertyResult("resourceTypes","ResourceTypes",properties.ResourceTypes!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.ResourceTypes):void 0),ret.addPropertyResult("sinkIdentifier","SinkIdentifier",properties.SinkIdentifier!=null?cfn_parse().FromCloudFormation.getString(properties.SinkIdentifier):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getMap(cfn_parse().FromCloudFormation.getString)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnSink extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnSinkPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnSink(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnSink.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_oam_CfnSinkProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnSink),error}cdk().requireProperty(props,"name",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.name=props.name,this.policy=props.policy,this.tags=new(cdk()).TagManager(cdk().TagType.MAP,"AWS::Oam::Sink",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{name:this.name,policy:this.policy,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnSink.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnSinkPropsToCloudFormation(props)}}exports.CfnSink=CfnSink,_b=JSII_RTTI_SYMBOL_1,CfnSink[_b]={fqn:"aws-cdk-lib.aws_oam.CfnSink",version:"2.178.2"},CfnSink.CFN_RESOURCE_TYPE_NAME="AWS::Oam::Sink";function CfnSinkPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("policy",cdk().validateObject)(properties.policy)),errors.collect(cdk().propertyValidator("tags",cdk().hashValidator(cdk().validateString))(properties.tags)),errors.wrap('supplied properties not correct for "CfnSinkProps"')}function convertCfnSinkPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnSinkPropsValidator(properties).assertSuccess(),{Name:cdk().stringToCloudFormation(properties.name),Policy:cdk().objectToCloudFormation(properties.policy),Tags:cdk().hashMapper(cdk().stringToCloudFormation)(properties.tags)}):properties}function CfnSinkPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("policy","Policy",properties.Policy!=null?cfn_parse().FromCloudFormation.getAny(properties.Policy):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getMap(cfn_parse().FromCloudFormation.getString)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
