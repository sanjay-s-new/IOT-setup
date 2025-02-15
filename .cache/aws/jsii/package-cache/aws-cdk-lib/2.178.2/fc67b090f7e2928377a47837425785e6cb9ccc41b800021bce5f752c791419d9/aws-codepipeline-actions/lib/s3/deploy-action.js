"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3DeployAction=exports.CacheControl=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var case_1=()=>{var tmp=require("case");return case_1=()=>tmp,tmp},codepipeline=()=>{var tmp=require("../../../aws-codepipeline");return codepipeline=()=>tmp,tmp},action_1=()=>{var tmp=require("../action");return action_1=()=>tmp,tmp},common_1=()=>{var tmp=require("../common");return common_1=()=>tmp,tmp};class CacheControl{static mustRevalidate(){return new CacheControl("must-revalidate")}static noCache(){return new CacheControl("no-cache")}static noTransform(){return new CacheControl("no-transform")}static noStore(){return new CacheControl("no-store")}static mustUnderstand(){return new CacheControl("must-understand")}static setPublic(){return new CacheControl("public")}static setPrivate(){return new CacheControl("private")}static immutable(){return new CacheControl("immutable")}static proxyRevalidate(){return new CacheControl("proxy-revalidate")}static maxAge(t){try{jsiiDeprecationWarnings().aws_cdk_lib_Duration(t)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.maxAge),error}return new CacheControl(`max-age=${t.toSeconds()}`)}static sMaxAge(t){try{jsiiDeprecationWarnings().aws_cdk_lib_Duration(t)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.sMaxAge),error}return new CacheControl(`s-maxage=${t.toSeconds()}`)}static staleWhileRevalidate(t){try{jsiiDeprecationWarnings().aws_cdk_lib_Duration(t)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.staleWhileRevalidate),error}return new CacheControl(`stale-while-revalidate=${t.toSeconds()}`)}static staleIfError(t){try{jsiiDeprecationWarnings().aws_cdk_lib_Duration(t)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.staleIfError),error}return new CacheControl(`stale-if-error=${t.toSeconds()}`)}static fromString(s){return new CacheControl(s)}constructor(value){this.value=value}}exports.CacheControl=CacheControl,_a=JSII_RTTI_SYMBOL_1,CacheControl[_a]={fqn:"aws-cdk-lib.aws_codepipeline_actions.CacheControl",version:"2.178.2"};class S3DeployAction extends action_1().Action{constructor(props){super({...props,resource:props.bucket,category:codepipeline().ActionCategory.DEPLOY,provider:"S3",artifactBounds:(0,common_1().deployArtifactBounds)(),inputs:[props.input]});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_actions_S3DeployActionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3DeployAction),error}this.props=props}bound(_scope,_stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_IStage(_stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_ActionBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bound),error}this.props.bucket.grantWrite(options.role),this.props.accessControl!==void 0&&this.props.bucket.grantPutAcl(options.role),options.bucket.grantRead(options.role),this.props.encryptionKey?.grantEncrypt(options.role);const acl=this.props.accessControl;return{configuration:{BucketName:this.props.bucket.bucketName,Extract:this.props.extract===!1?"false":"true",ObjectKey:this.props.objectKey,CannedACL:acl?(0,case_1().kebab)(acl.toString()):void 0,CacheControl:this.props.cacheControl&&this.props.cacheControl.map(ac=>ac.value).join(", "),KMSEncryptionKeyARN:this.props.encryptionKey?.keyArn}}}}exports.S3DeployAction=S3DeployAction,_b=JSII_RTTI_SYMBOL_1,S3DeployAction[_b]={fqn:"aws-cdk-lib.aws_codepipeline_actions.S3DeployAction",version:"2.178.2"};
