"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PipelineProject=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var codepipeline_artifacts_1=()=>{var tmp=require("./codepipeline-artifacts");return codepipeline_artifacts_1=()=>tmp,tmp},codepipeline_source_1=()=>{var tmp=require("./codepipeline-source");return codepipeline_source_1=()=>tmp,tmp},project_1=()=>{var tmp=require("./project");return project_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class PipelineProject extends project_1().Project{constructor(scope,id,props){super(scope,id,{source:new(codepipeline_source_1()).CodePipelineSource,artifacts:new(codepipeline_artifacts_1()).CodePipelineArtifacts,...props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_PipelineProjectProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,PipelineProject),error}(0,metadata_resource_1().addConstructMetadata)(this,props)}}exports.PipelineProject=PipelineProject,_a=JSII_RTTI_SYMBOL_1,PipelineProject[_a]={fqn:"aws-cdk-lib.aws_codebuild.PipelineProject",version:"2.178.2"};
