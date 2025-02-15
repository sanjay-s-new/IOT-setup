"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TrustStore=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},elasticloadbalancingv2_generated_1=()=>{var tmp=require("../elasticloadbalancingv2.generated");return elasticloadbalancingv2_generated_1=()=>tmp,tmp};class TrustStore extends core_1().Resource{static fromTrustStoreArn(scope,id,trustStoreArn){const resourceParts=core_1().Fn.split("/",trustStoreArn),trustStoreName=core_1().Fn.select(0,resourceParts);class Import extends core_1().Resource{constructor(){super(...arguments),this.trustStoreArn=trustStoreArn,this.trustStoreName=trustStoreName}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.trustStoreName??core_1().Lazy.string({produce:()=>core_1().Names.uniqueResourceName(this,{maxLength:32})})});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_TrustStoreProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TrustStore),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.trustStoreName!==void 0&&!core_1().Token.isUnresolved(props.trustStoreName)){if(props.trustStoreName.length<1||props.trustStoreName.length>32)throw new(errors_1()).ValidationError(`trustStoreName '${props.trustStoreName}' must be 1-32 characters long.`,this);if(!/^([a-zA-Z0-9]+-)*[a-zA-Z0-9]+$/.test(props.trustStoreName))throw new(errors_1()).ValidationError(`trustStoreName '${props.trustStoreName}' must contain only alphanumeric characters and hyphens, and cannot begin or end with a hyphen.`,this)}const resource=new(elasticloadbalancingv2_generated_1()).CfnTrustStore(this,"Resource",{name:this.physicalName,caCertificatesBundleS3Bucket:props.bucket.bucketName,caCertificatesBundleS3Key:props.key,caCertificatesBundleS3ObjectVersion:props.version});this.trustStoreName=resource.ref,this.numberOfCaCertificates=resource.attrNumberOfCaCertificates,this.status=resource.attrStatus,this.trustStoreArn=resource.attrTrustStoreArn}}exports.TrustStore=TrustStore,_a=JSII_RTTI_SYMBOL_1,TrustStore[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.TrustStore",version:"2.178.2"};
