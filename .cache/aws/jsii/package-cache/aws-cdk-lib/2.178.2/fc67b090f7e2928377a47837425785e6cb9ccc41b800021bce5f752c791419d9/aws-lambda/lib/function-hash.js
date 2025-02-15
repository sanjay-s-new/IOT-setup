"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VERSION_LOCKED=void 0,exports.calculateFunctionHash=calculateFunctionHash,exports.trimFromStart=trimFromStart;var function_1=()=>{var tmp=require("./function");return function_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},helpers_internal_1=()=>{var tmp=require("../../core/lib/helpers-internal");return helpers_internal_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};function calculateFunctionHash(fn,additional=""){const stack=core_1().Stack.of(fn),functionResource=fn.node.defaultChild,{properties,template,logicalId}=resolveSingleResourceProperties(stack,functionResource);let stringifiedConfig;if(core_1().FeatureFlags.of(fn).isEnabled(cx_api_1().LAMBDA_RECOGNIZE_VERSION_PROPS)){const updatedProps=sortFunctionProperties(filterUsefulKeys(properties,fn));stringifiedConfig=JSON.stringify(updatedProps)}else{const sorted=sortFunctionProperties(properties);template.Resources[logicalId].Properties=sorted,stringifiedConfig=JSON.stringify(template)}return core_1().FeatureFlags.of(fn).isEnabled(cx_api_1().LAMBDA_RECOGNIZE_LAYER_VERSION)&&(stringifiedConfig=stringifiedConfig+calculateLayersHash(fn._layers)),(0,helpers_internal_1().md5hash)(stringifiedConfig+additional)}function trimFromStart(s,maxLength){const desiredLength=Math.min(maxLength,s.length),newStart=s.length-desiredLength;return s.substring(newStart)}exports.VERSION_LOCKED={Architectures:!0,Code:!0,DeadLetterConfig:!0,Description:!0,Environment:!0,EphemeralStorage:!0,FileSystemConfigs:!0,FunctionName:!0,Handler:!0,ImageConfig:!0,KmsKeyArn:!0,Layers:!0,MemorySize:!0,PackageType:!0,RecursiveLoop:!0,Role:!0,Runtime:!0,RuntimeManagementConfig:!0,SnapStart:!0,Timeout:!0,TracingConfig:!0,VpcConfig:!0,LoggingConfig:!0,CodeSigningConfigArn:!1,ReservedConcurrentExecutions:!1,Tags:!1};function filterUsefulKeys(properties,fn){const versionProps={...exports.VERSION_LOCKED,...function_1().Function._VER_PROPS},unclassified=Object.entries(properties).filter(([k,v])=>v!=null&&!Object.keys(versionProps).includes(k)).map(([k,_])=>k);if(unclassified.length>0)throw new(errors_1()).ValidationError(`The following properties are not recognized as version properties: [${unclassified}]. See the README of the aws-lambda module to learn more about this and to fix it.`,fn);Object.entries(versionProps).filter(([_,v])=>!v).map(([k,_])=>k).forEach(p=>delete properties[p]);const ret={};return Object.entries(properties).filter(([k,_])=>versionProps[k]).forEach(([k,v])=>ret[k]=v),ret}function calculateLayersHash(layers){const layerConfig={};for(const layer of layers){const stack=core_1().Stack.of(layer),layerResource=layer.node.defaultChild;if(layerResource===void 0){core_1().Token.isUnresolved(layer.layerVersionArn)?layerConfig[layer.node.id]={arn:stack.resolve(layer.layerVersionArn),runtimes:layer.compatibleRuntimes?.map(r=>r.name)}:layerConfig[layer.layerVersionArn]=layer.compatibleRuntimes;continue}const{properties}=resolveSingleResourceProperties(stack,layerResource);layerConfig[layer.node.id]=sortLayerVersionProperties(properties)}return(0,helpers_internal_1().md5hash)(JSON.stringify(layerConfig))}class PropertySort{constructor(knownKeysOrder){this.knownKeysOrder=knownKeysOrder}sortObject(properties){const ret={},unusedKeys=new Set(Object.keys(properties));for(const prop of this.knownKeysOrder)ret[prop]=properties[prop],unusedKeys.delete(prop);for(const prop of Array.from(unusedKeys).sort())ret[prop]=properties[prop];return ret}}function sortFunctionProperties(properties){return new PropertySort(["Code","Handler","Role","Runtime","Architectures","CodeSigningConfigArn","DeadLetterConfig","Description","Environment","EphemeralStorage","FileSystemConfigs","FunctionName","ImageConfig","KmsKeyArn","Layers","MemorySize","PackageType","ReservedConcurrentExecutions","RuntimeManagementConfig","SnapStart","Tags","Timeout","TracingConfig","VpcConfig"]).sortObject(properties)}function sortLayerVersionProperties(properties){return new PropertySort(["Content","CompatibleArchitectures","CompatibleRuntimes","Description","LayerName","LicenseInfo"]).sortObject(properties)}function resolveSingleResourceProperties(stack,res){const template=stack.resolve(res._toCloudFormation()),resources=template.Resources,resourceKeys=Object.keys(resources);if(resourceKeys.length!==1)throw new(errors_1()).ValidationError(`Expected one rendered CloudFormation resource but found ${resourceKeys.length}`,res);const logicalId=resourceKeys[0];return{properties:resources[logicalId].Properties,template,logicalId}}
