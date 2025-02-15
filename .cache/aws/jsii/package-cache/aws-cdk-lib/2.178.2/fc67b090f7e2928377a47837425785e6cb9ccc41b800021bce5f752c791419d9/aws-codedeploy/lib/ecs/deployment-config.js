"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EcsDeploymentConfig=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},base_deployment_config_1=()=>{var tmp=require("../base-deployment-config");return base_deployment_config_1=()=>tmp,tmp},utils_1=()=>{var tmp=require("../private/utils");return utils_1=()=>tmp,tmp},traffic_routing_config_1=()=>{var tmp=require("../traffic-routing-config");return traffic_routing_config_1=()=>tmp,tmp};class EcsDeploymentConfig extends base_deployment_config_1().BaseDeploymentConfig{static fromEcsDeploymentConfigName(scope,id,ecsDeploymentConfigName){return this.fromDeploymentConfigName(scope,id,ecsDeploymentConfigName)}static deploymentConfig(name){return(0,utils_1().deploymentConfig)(name)}constructor(scope,id,props){super(scope,id,{...props,computePlatform:base_deployment_config_1().ComputePlatform.ECS,trafficRouting:props?.trafficRouting??traffic_routing_config_1().TrafficRouting.allAtOnce()});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codedeploy_EcsDeploymentConfigProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EcsDeploymentConfig),error}(0,metadata_resource_1().addConstructMetadata)(this,props)}}exports.EcsDeploymentConfig=EcsDeploymentConfig,_a=JSII_RTTI_SYMBOL_1,EcsDeploymentConfig[_a]={fqn:"aws-cdk-lib.aws_codedeploy.EcsDeploymentConfig",version:"2.178.2"},EcsDeploymentConfig.ALL_AT_ONCE=EcsDeploymentConfig.deploymentConfig("CodeDeployDefault.ECSAllAtOnce"),EcsDeploymentConfig.LINEAR_10PERCENT_EVERY_1MINUTES=EcsDeploymentConfig.deploymentConfig("CodeDeployDefault.ECSLinear10PercentEvery1Minutes"),EcsDeploymentConfig.LINEAR_10PERCENT_EVERY_3MINUTES=EcsDeploymentConfig.deploymentConfig("CodeDeployDefault.ECSLinear10PercentEvery3Minutes"),EcsDeploymentConfig.CANARY_10PERCENT_5MINUTES=EcsDeploymentConfig.deploymentConfig("CodeDeployDefault.ECSCanary10Percent5Minutes"),EcsDeploymentConfig.CANARY_10PERCENT_15MINUTES=EcsDeploymentConfig.deploymentConfig("CodeDeployDefault.ECSCanary10Percent15Minutes");
