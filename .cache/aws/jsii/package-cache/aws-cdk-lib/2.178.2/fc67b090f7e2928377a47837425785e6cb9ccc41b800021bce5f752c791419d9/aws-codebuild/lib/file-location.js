"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FileSystemLocation=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class FileSystemLocation{static efs(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codebuild_EfsFileSystemLocationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.efs),error}return new EfsFileSystemLocation(props)}}exports.FileSystemLocation=FileSystemLocation,_a=JSII_RTTI_SYMBOL_1,FileSystemLocation[_a]={fqn:"aws-cdk-lib.aws_codebuild.FileSystemLocation",version:"2.178.2"};class EfsFileSystemLocation{constructor(props){this.props=props}bind(_scope,_project){return{location:{identifier:this.props.identifier,location:this.props.location,mountOptions:this.props.mountOptions,mountPoint:this.props.mountPoint,type:"EFS"}}}}
