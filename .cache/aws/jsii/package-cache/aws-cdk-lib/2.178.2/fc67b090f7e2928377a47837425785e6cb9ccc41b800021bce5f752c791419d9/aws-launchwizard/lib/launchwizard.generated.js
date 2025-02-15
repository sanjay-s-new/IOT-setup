"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnDeployment=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnDeployment extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnDeploymentPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnDeployment(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnDeployment.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_launchwizard_CfnDeploymentProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnDeployment),error}cdk().requireProperty(props,"deploymentPatternName",this),cdk().requireProperty(props,"name",this),cdk().requireProperty(props,"specifications",this),cdk().requireProperty(props,"workloadName",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrCreatedAt=cdk().Token.asString(this.getAtt("CreatedAt",cdk().ResolutionTypeHint.STRING)),this.attrDeletedAt=cdk().Token.asString(this.getAtt("DeletedAt",cdk().ResolutionTypeHint.STRING)),this.attrDeploymentId=cdk().Token.asString(this.getAtt("DeploymentId",cdk().ResolutionTypeHint.STRING)),this.attrResourceGroup=cdk().Token.asString(this.getAtt("ResourceGroup",cdk().ResolutionTypeHint.STRING)),this.attrStatus=cdk().Token.asString(this.getAtt("Status",cdk().ResolutionTypeHint.STRING)),this.cdkTagManager=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::LaunchWizard::Deployment",void 0,{tagPropertyName:"tags"}),this.deploymentPatternName=props.deploymentPatternName,this.name=props.name,this.specifications=props.specifications,this.tags=props.tags,this.workloadName=props.workloadName}get cfnProperties(){return{tags:this.cdkTagManager.renderTags(this.tags),deploymentPatternName:this.deploymentPatternName,name:this.name,specifications:this.specifications,workloadName:this.workloadName}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnDeployment.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnDeploymentPropsToCloudFormation(props)}}exports.CfnDeployment=CfnDeployment,_a=JSII_RTTI_SYMBOL_1,CfnDeployment[_a]={fqn:"aws-cdk-lib.aws_launchwizard.CfnDeployment",version:"2.178.2"},CfnDeployment.CFN_RESOURCE_TYPE_NAME="AWS::LaunchWizard::Deployment";function CfnDeploymentPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("deploymentPatternName",cdk().requiredValidator)(properties.deploymentPatternName)),errors.collect(cdk().propertyValidator("deploymentPatternName",cdk().validateString)(properties.deploymentPatternName)),errors.collect(cdk().propertyValidator("name",cdk().requiredValidator)(properties.name)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("specifications",cdk().requiredValidator)(properties.specifications)),errors.collect(cdk().propertyValidator("specifications",cdk().hashValidator(cdk().validateString))(properties.specifications)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.collect(cdk().propertyValidator("workloadName",cdk().requiredValidator)(properties.workloadName)),errors.collect(cdk().propertyValidator("workloadName",cdk().validateString)(properties.workloadName)),errors.wrap('supplied properties not correct for "CfnDeploymentProps"')}function convertCfnDeploymentPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnDeploymentPropsValidator(properties).assertSuccess(),{DeploymentPatternName:cdk().stringToCloudFormation(properties.deploymentPatternName),Name:cdk().stringToCloudFormation(properties.name),Specifications:cdk().hashMapper(cdk().stringToCloudFormation)(properties.specifications),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags),WorkloadName:cdk().stringToCloudFormation(properties.workloadName)}):properties}function CfnDeploymentPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("deploymentPatternName","DeploymentPatternName",properties.DeploymentPatternName!=null?cfn_parse().FromCloudFormation.getString(properties.DeploymentPatternName):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("specifications","Specifications",properties.Specifications!=null?cfn_parse().FromCloudFormation.getMap(cfn_parse().FromCloudFormation.getString)(properties.Specifications):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addPropertyResult("workloadName","WorkloadName",properties.WorkloadName!=null?cfn_parse().FromCloudFormation.getString(properties.WorkloadName):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
