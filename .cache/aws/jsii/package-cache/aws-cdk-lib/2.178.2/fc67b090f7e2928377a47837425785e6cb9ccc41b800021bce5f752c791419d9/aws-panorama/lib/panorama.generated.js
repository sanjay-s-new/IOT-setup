"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnPackageVersion=exports.CfnPackage=exports.CfnApplicationInstance=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnApplicationInstance extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnApplicationInstancePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnApplicationInstance(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnApplicationInstance.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_panorama_CfnApplicationInstanceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnApplicationInstance),error}cdk().requireProperty(props,"defaultRuntimeContextDevice",this),cdk().requireProperty(props,"manifestPayload",this),this.attrApplicationInstanceId=cdk().Token.asString(this.getAtt("ApplicationInstanceId",cdk().ResolutionTypeHint.STRING)),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrCreatedTime=cdk().Token.asNumber(this.getAtt("CreatedTime",cdk().ResolutionTypeHint.NUMBER)),this.attrDefaultRuntimeContextDeviceName=cdk().Token.asString(this.getAtt("DefaultRuntimeContextDeviceName",cdk().ResolutionTypeHint.STRING)),this.attrHealthStatus=cdk().Token.asString(this.getAtt("HealthStatus",cdk().ResolutionTypeHint.STRING)),this.attrLastUpdatedTime=cdk().Token.asNumber(this.getAtt("LastUpdatedTime",cdk().ResolutionTypeHint.NUMBER)),this.attrStatus=cdk().Token.asString(this.getAtt("Status",cdk().ResolutionTypeHint.STRING)),this.attrStatusDescription=cdk().Token.asString(this.getAtt("StatusDescription",cdk().ResolutionTypeHint.STRING)),this.applicationInstanceIdToReplace=props.applicationInstanceIdToReplace,this.defaultRuntimeContextDevice=props.defaultRuntimeContextDevice,this.description=props.description,this.manifestOverridesPayload=props.manifestOverridesPayload,this.manifestPayload=props.manifestPayload,this.name=props.name,this.runtimeRoleArn=props.runtimeRoleArn,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Panorama::ApplicationInstance",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{applicationInstanceIdToReplace:this.applicationInstanceIdToReplace,defaultRuntimeContextDevice:this.defaultRuntimeContextDevice,description:this.description,manifestOverridesPayload:this.manifestOverridesPayload,manifestPayload:this.manifestPayload,name:this.name,runtimeRoleArn:this.runtimeRoleArn,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnApplicationInstance.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnApplicationInstancePropsToCloudFormation(props)}}exports.CfnApplicationInstance=CfnApplicationInstance,_a=JSII_RTTI_SYMBOL_1,CfnApplicationInstance[_a]={fqn:"aws-cdk-lib.aws_panorama.CfnApplicationInstance",version:"2.178.2"},CfnApplicationInstance.CFN_RESOURCE_TYPE_NAME="AWS::Panorama::ApplicationInstance";function CfnApplicationInstanceManifestOverridesPayloadPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("payloadData",cdk().validateString)(properties.payloadData)),errors.wrap('supplied properties not correct for "ManifestOverridesPayloadProperty"')}function convertCfnApplicationInstanceManifestOverridesPayloadPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationInstanceManifestOverridesPayloadPropertyValidator(properties).assertSuccess(),{PayloadData:cdk().stringToCloudFormation(properties.payloadData)}):properties}function CfnApplicationInstanceManifestOverridesPayloadPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("payloadData","PayloadData",properties.PayloadData!=null?cfn_parse().FromCloudFormation.getString(properties.PayloadData):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnApplicationInstanceManifestPayloadPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("payloadData",cdk().validateString)(properties.payloadData)),errors.wrap('supplied properties not correct for "ManifestPayloadProperty"')}function convertCfnApplicationInstanceManifestPayloadPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationInstanceManifestPayloadPropertyValidator(properties).assertSuccess(),{PayloadData:cdk().stringToCloudFormation(properties.payloadData)}):properties}function CfnApplicationInstanceManifestPayloadPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("payloadData","PayloadData",properties.PayloadData!=null?cfn_parse().FromCloudFormation.getString(properties.PayloadData):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnApplicationInstancePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("applicationInstanceIdToReplace",cdk().validateString)(properties.applicationInstanceIdToReplace)),errors.collect(cdk().propertyValidator("defaultRuntimeContextDevice",cdk().requiredValidator)(properties.defaultRuntimeContextDevice)),errors.collect(cdk().propertyValidator("defaultRuntimeContextDevice",cdk().validateString)(properties.defaultRuntimeContextDevice)),errors.collect(cdk().propertyValidator("description",cdk().validateString)(properties.description)),errors.collect(cdk().propertyValidator("manifestOverridesPayload",CfnApplicationInstanceManifestOverridesPayloadPropertyValidator)(properties.manifestOverridesPayload)),errors.collect(cdk().propertyValidator("manifestPayload",cdk().requiredValidator)(properties.manifestPayload)),errors.collect(cdk().propertyValidator("manifestPayload",CfnApplicationInstanceManifestPayloadPropertyValidator)(properties.manifestPayload)),errors.collect(cdk().propertyValidator("name",cdk().validateString)(properties.name)),errors.collect(cdk().propertyValidator("runtimeRoleArn",cdk().validateString)(properties.runtimeRoleArn)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnApplicationInstanceProps"')}function convertCfnApplicationInstancePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnApplicationInstancePropsValidator(properties).assertSuccess(),{ApplicationInstanceIdToReplace:cdk().stringToCloudFormation(properties.applicationInstanceIdToReplace),DefaultRuntimeContextDevice:cdk().stringToCloudFormation(properties.defaultRuntimeContextDevice),Description:cdk().stringToCloudFormation(properties.description),ManifestOverridesPayload:convertCfnApplicationInstanceManifestOverridesPayloadPropertyToCloudFormation(properties.manifestOverridesPayload),ManifestPayload:convertCfnApplicationInstanceManifestPayloadPropertyToCloudFormation(properties.manifestPayload),Name:cdk().stringToCloudFormation(properties.name),RuntimeRoleArn:cdk().stringToCloudFormation(properties.runtimeRoleArn),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnApplicationInstancePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("applicationInstanceIdToReplace","ApplicationInstanceIdToReplace",properties.ApplicationInstanceIdToReplace!=null?cfn_parse().FromCloudFormation.getString(properties.ApplicationInstanceIdToReplace):void 0),ret.addPropertyResult("defaultRuntimeContextDevice","DefaultRuntimeContextDevice",properties.DefaultRuntimeContextDevice!=null?cfn_parse().FromCloudFormation.getString(properties.DefaultRuntimeContextDevice):void 0),ret.addPropertyResult("description","Description",properties.Description!=null?cfn_parse().FromCloudFormation.getString(properties.Description):void 0),ret.addPropertyResult("manifestOverridesPayload","ManifestOverridesPayload",properties.ManifestOverridesPayload!=null?CfnApplicationInstanceManifestOverridesPayloadPropertyFromCloudFormation(properties.ManifestOverridesPayload):void 0),ret.addPropertyResult("manifestPayload","ManifestPayload",properties.ManifestPayload!=null?CfnApplicationInstanceManifestPayloadPropertyFromCloudFormation(properties.ManifestPayload):void 0),ret.addPropertyResult("name","Name",properties.Name!=null?cfn_parse().FromCloudFormation.getString(properties.Name):void 0),ret.addPropertyResult("runtimeRoleArn","RuntimeRoleArn",properties.RuntimeRoleArn!=null?cfn_parse().FromCloudFormation.getString(properties.RuntimeRoleArn):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnPackage extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPackagePropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnPackage(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPackage.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_panorama_CfnPackageProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPackage),error}cdk().requireProperty(props,"packageName",this),this.attrArn=cdk().Token.asString(this.getAtt("Arn",cdk().ResolutionTypeHint.STRING)),this.attrCreatedTime=cdk().Token.asNumber(this.getAtt("CreatedTime",cdk().ResolutionTypeHint.NUMBER)),this.attrPackageId=cdk().Token.asString(this.getAtt("PackageId",cdk().ResolutionTypeHint.STRING)),this.attrStorageLocationBinaryPrefixLocation=cdk().Token.asString(this.getAtt("StorageLocation.BinaryPrefixLocation",cdk().ResolutionTypeHint.STRING)),this.attrStorageLocationBucket=cdk().Token.asString(this.getAtt("StorageLocation.Bucket",cdk().ResolutionTypeHint.STRING)),this.attrStorageLocationGeneratedPrefixLocation=cdk().Token.asString(this.getAtt("StorageLocation.GeneratedPrefixLocation",cdk().ResolutionTypeHint.STRING)),this.attrStorageLocationManifestPrefixLocation=cdk().Token.asString(this.getAtt("StorageLocation.ManifestPrefixLocation",cdk().ResolutionTypeHint.STRING)),this.attrStorageLocationRepoPrefixLocation=cdk().Token.asString(this.getAtt("StorageLocation.RepoPrefixLocation",cdk().ResolutionTypeHint.STRING)),this.packageName=props.packageName,this.storageLocation=props.storageLocation,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::Panorama::Package",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{packageName:this.packageName,storageLocation:this.storageLocation,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPackage.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPackagePropsToCloudFormation(props)}}exports.CfnPackage=CfnPackage,_b=JSII_RTTI_SYMBOL_1,CfnPackage[_b]={fqn:"aws-cdk-lib.aws_panorama.CfnPackage",version:"2.178.2"},CfnPackage.CFN_RESOURCE_TYPE_NAME="AWS::Panorama::Package";function CfnPackageStorageLocationPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("binaryPrefixLocation",cdk().validateString)(properties.binaryPrefixLocation)),errors.collect(cdk().propertyValidator("bucket",cdk().validateString)(properties.bucket)),errors.collect(cdk().propertyValidator("generatedPrefixLocation",cdk().validateString)(properties.generatedPrefixLocation)),errors.collect(cdk().propertyValidator("manifestPrefixLocation",cdk().validateString)(properties.manifestPrefixLocation)),errors.collect(cdk().propertyValidator("repoPrefixLocation",cdk().validateString)(properties.repoPrefixLocation)),errors.wrap('supplied properties not correct for "StorageLocationProperty"')}function convertCfnPackageStorageLocationPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPackageStorageLocationPropertyValidator(properties).assertSuccess(),{BinaryPrefixLocation:cdk().stringToCloudFormation(properties.binaryPrefixLocation),Bucket:cdk().stringToCloudFormation(properties.bucket),GeneratedPrefixLocation:cdk().stringToCloudFormation(properties.generatedPrefixLocation),ManifestPrefixLocation:cdk().stringToCloudFormation(properties.manifestPrefixLocation),RepoPrefixLocation:cdk().stringToCloudFormation(properties.repoPrefixLocation)}):properties}function CfnPackageStorageLocationPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("binaryPrefixLocation","BinaryPrefixLocation",properties.BinaryPrefixLocation!=null?cfn_parse().FromCloudFormation.getString(properties.BinaryPrefixLocation):void 0),ret.addPropertyResult("bucket","Bucket",properties.Bucket!=null?cfn_parse().FromCloudFormation.getString(properties.Bucket):void 0),ret.addPropertyResult("generatedPrefixLocation","GeneratedPrefixLocation",properties.GeneratedPrefixLocation!=null?cfn_parse().FromCloudFormation.getString(properties.GeneratedPrefixLocation):void 0),ret.addPropertyResult("manifestPrefixLocation","ManifestPrefixLocation",properties.ManifestPrefixLocation!=null?cfn_parse().FromCloudFormation.getString(properties.ManifestPrefixLocation):void 0),ret.addPropertyResult("repoPrefixLocation","RepoPrefixLocation",properties.RepoPrefixLocation!=null?cfn_parse().FromCloudFormation.getString(properties.RepoPrefixLocation):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnPackagePropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("packageName",cdk().requiredValidator)(properties.packageName)),errors.collect(cdk().propertyValidator("packageName",cdk().validateString)(properties.packageName)),errors.collect(cdk().propertyValidator("storageLocation",CfnPackageStorageLocationPropertyValidator)(properties.storageLocation)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnPackageProps"')}function convertCfnPackagePropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPackagePropsValidator(properties).assertSuccess(),{PackageName:cdk().stringToCloudFormation(properties.packageName),StorageLocation:convertCfnPackageStorageLocationPropertyToCloudFormation(properties.storageLocation),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnPackagePropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("packageName","PackageName",properties.PackageName!=null?cfn_parse().FromCloudFormation.getString(properties.PackageName):void 0),ret.addPropertyResult("storageLocation","StorageLocation",properties.StorageLocation!=null?CfnPackageStorageLocationPropertyFromCloudFormation(properties.StorageLocation):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}class CfnPackageVersion extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnPackageVersionPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnPackageVersion(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnPackageVersion.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_panorama_CfnPackageVersionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnPackageVersion),error}cdk().requireProperty(props,"packageId",this),cdk().requireProperty(props,"packageVersion",this),cdk().requireProperty(props,"patchVersion",this),this.attrIsLatestPatch=this.getAtt("IsLatestPatch"),this.attrPackageArn=cdk().Token.asString(this.getAtt("PackageArn",cdk().ResolutionTypeHint.STRING)),this.attrPackageName=cdk().Token.asString(this.getAtt("PackageName",cdk().ResolutionTypeHint.STRING)),this.attrRegisteredTime=cdk().Token.asNumber(this.getAtt("RegisteredTime",cdk().ResolutionTypeHint.NUMBER)),this.attrStatus=cdk().Token.asString(this.getAtt("Status",cdk().ResolutionTypeHint.STRING)),this.attrStatusDescription=cdk().Token.asString(this.getAtt("StatusDescription",cdk().ResolutionTypeHint.STRING)),this.markLatest=props.markLatest,this.ownerAccount=props.ownerAccount,this.packageId=props.packageId,this.packageVersion=props.packageVersion,this.patchVersion=props.patchVersion,this.updatedLatestPatchVersion=props.updatedLatestPatchVersion}get cfnProperties(){return{markLatest:this.markLatest,ownerAccount:this.ownerAccount,packageId:this.packageId,packageVersion:this.packageVersion,patchVersion:this.patchVersion,updatedLatestPatchVersion:this.updatedLatestPatchVersion}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnPackageVersion.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnPackageVersionPropsToCloudFormation(props)}}exports.CfnPackageVersion=CfnPackageVersion,_c=JSII_RTTI_SYMBOL_1,CfnPackageVersion[_c]={fqn:"aws-cdk-lib.aws_panorama.CfnPackageVersion",version:"2.178.2"},CfnPackageVersion.CFN_RESOURCE_TYPE_NAME="AWS::Panorama::PackageVersion";function CfnPackageVersionPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("markLatest",cdk().validateBoolean)(properties.markLatest)),errors.collect(cdk().propertyValidator("ownerAccount",cdk().validateString)(properties.ownerAccount)),errors.collect(cdk().propertyValidator("packageId",cdk().requiredValidator)(properties.packageId)),errors.collect(cdk().propertyValidator("packageId",cdk().validateString)(properties.packageId)),errors.collect(cdk().propertyValidator("packageVersion",cdk().requiredValidator)(properties.packageVersion)),errors.collect(cdk().propertyValidator("packageVersion",cdk().validateString)(properties.packageVersion)),errors.collect(cdk().propertyValidator("patchVersion",cdk().requiredValidator)(properties.patchVersion)),errors.collect(cdk().propertyValidator("patchVersion",cdk().validateString)(properties.patchVersion)),errors.collect(cdk().propertyValidator("updatedLatestPatchVersion",cdk().validateString)(properties.updatedLatestPatchVersion)),errors.wrap('supplied properties not correct for "CfnPackageVersionProps"')}function convertCfnPackageVersionPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnPackageVersionPropsValidator(properties).assertSuccess(),{MarkLatest:cdk().booleanToCloudFormation(properties.markLatest),OwnerAccount:cdk().stringToCloudFormation(properties.ownerAccount),PackageId:cdk().stringToCloudFormation(properties.packageId),PackageVersion:cdk().stringToCloudFormation(properties.packageVersion),PatchVersion:cdk().stringToCloudFormation(properties.patchVersion),UpdatedLatestPatchVersion:cdk().stringToCloudFormation(properties.updatedLatestPatchVersion)}):properties}function CfnPackageVersionPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("markLatest","MarkLatest",properties.MarkLatest!=null?cfn_parse().FromCloudFormation.getBoolean(properties.MarkLatest):void 0),ret.addPropertyResult("ownerAccount","OwnerAccount",properties.OwnerAccount!=null?cfn_parse().FromCloudFormation.getString(properties.OwnerAccount):void 0),ret.addPropertyResult("packageId","PackageId",properties.PackageId!=null?cfn_parse().FromCloudFormation.getString(properties.PackageId):void 0),ret.addPropertyResult("packageVersion","PackageVersion",properties.PackageVersion!=null?cfn_parse().FromCloudFormation.getString(properties.PackageVersion):void 0),ret.addPropertyResult("patchVersion","PatchVersion",properties.PatchVersion!=null?cfn_parse().FromCloudFormation.getString(properties.PatchVersion):void 0),ret.addPropertyResult("updatedLatestPatchVersion","UpdatedLatestPatchVersion",properties.UpdatedLatestPatchVersion!=null?cfn_parse().FromCloudFormation.getString(properties.UpdatedLatestPatchVersion):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
