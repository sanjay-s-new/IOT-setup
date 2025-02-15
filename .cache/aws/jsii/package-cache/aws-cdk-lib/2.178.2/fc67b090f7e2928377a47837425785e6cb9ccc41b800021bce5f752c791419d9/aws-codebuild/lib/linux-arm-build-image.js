"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LinuxArmBuildImage=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var compute_type_1=()=>{var tmp=require("./compute-type");return compute_type_1=()=>tmp,tmp},environment_type_1=()=>{var tmp=require("./environment-type");return environment_type_1=()=>tmp,tmp},run_script_linux_build_spec_1=()=>{var tmp=require("./private/run-script-linux-build-spec");return run_script_linux_build_spec_1=()=>tmp,tmp},project_1=()=>{var tmp=require("./project");return project_1=()=>tmp,tmp};class LinuxArmBuildImage{static fromDockerRegistry(name,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_DockerImageOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromDockerRegistry),error}return new LinuxArmBuildImage({...options,imageId:name,imagePullPrincipalType:project_1().ImagePullPrincipalType.SERVICE_ROLE})}static fromEcrRepository(repository,tagOrDigest="latest"){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecr_IRepository(repository)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromEcrRepository),error}return new LinuxArmBuildImage({imageId:repository.repositoryUriForTagOrDigest(tagOrDigest),imagePullPrincipalType:project_1().ImagePullPrincipalType.SERVICE_ROLE,repository})}static fromCodeBuildImageId(id){return new LinuxArmBuildImage({imageId:id,imagePullPrincipalType:project_1().ImagePullPrincipalType.CODEBUILD})}constructor(props){this.type=environment_type_1().EnvironmentType.ARM_CONTAINER,this.defaultComputeType=compute_type_1().ComputeType.LARGE,this.imageId=props.imageId,this.imagePullPrincipalType=props.imagePullPrincipalType,this.secretsManagerCredentials=props.secretsManagerCredentials,this.repository=props.repository}validate(buildEnvironment){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_BuildEnvironment(buildEnvironment)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.validate),error}const ret=[];return buildEnvironment.computeType&&(0,project_1().isLambdaComputeType)(buildEnvironment.computeType)&&ret.push(`ARM images do not support Lambda ComputeTypes, got ${buildEnvironment.computeType}`),ret}runScriptBuildspec(entrypoint){return(0,run_script_linux_build_spec_1().runScriptLinuxBuildSpec)(entrypoint)}}exports.LinuxArmBuildImage=LinuxArmBuildImage,_a=JSII_RTTI_SYMBOL_1,LinuxArmBuildImage[_a]={fqn:"aws-cdk-lib.aws_codebuild.LinuxArmBuildImage",version:"2.178.2"},LinuxArmBuildImage.AMAZON_LINUX_2_STANDARD_1_0=LinuxArmBuildImage.fromCodeBuildImageId("aws/codebuild/amazonlinux2-aarch64-standard:1.0"),LinuxArmBuildImage.AMAZON_LINUX_2_STANDARD_2_0=LinuxArmBuildImage.fromCodeBuildImageId("aws/codebuild/amazonlinux2-aarch64-standard:2.0"),LinuxArmBuildImage.AMAZON_LINUX_2_STANDARD_3_0=LinuxArmBuildImage.fromCodeBuildImageId("aws/codebuild/amazonlinux2-aarch64-standard:3.0"),LinuxArmBuildImage.AMAZON_LINUX_2023_STANDARD_2_0=LinuxArmBuildImage.fromCodeBuildImageId("aws/codebuild/amazonlinux-aarch64-standard:2.0"),LinuxArmBuildImage.AMAZON_LINUX_2023_STANDARD_3_0=LinuxArmBuildImage.fromCodeBuildImageId("aws/codebuild/amazonlinux-aarch64-standard:3.0");
