"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EcrImage=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var container_image_1=()=>{var tmp=require("../container-image");return container_image_1=()=>tmp,tmp};class EcrImage extends container_image_1().ContainerImage{constructor(repository,tagOrDigest){super(),this.repository=repository,this.tagOrDigest=tagOrDigest;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecr_IRepository(repository)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EcrImage),error}this.imageName=this.repository.repositoryUriForTagOrDigest(this.tagOrDigest)}bind(_scope,containerDefinition){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ecs_ContainerDefinition(containerDefinition)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.repository.grantPull(containerDefinition.taskDefinition.obtainExecutionRole()),{imageName:this.imageName}}}exports.EcrImage=EcrImage,_a=JSII_RTTI_SYMBOL_1,EcrImage[_a]={fqn:"aws-cdk-lib.aws_ecs.EcrImage",version:"2.178.2"};
