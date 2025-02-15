"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KubernetesPatch=exports.PatchType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},kubectl_provider_1=()=>{var tmp=require("./kubectl-provider");return kubectl_provider_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},PatchType;(function(PatchType2){PatchType2.JSON="json",PatchType2.MERGE="merge",PatchType2.STRATEGIC="strategic"})(PatchType||(exports.PatchType=PatchType={}));class KubernetesPatch extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_eks_KubernetesPatchProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,KubernetesPatch),error}const stack=core_1().Stack.of(this),provider=kubectl_provider_1().KubectlProvider.getOrCreate(this,props.cluster);new(core_1()).CustomResource(this,"Resource",{serviceToken:provider.serviceToken,resourceType:"Custom::AWSCDK-EKS-KubernetesPatch",properties:{ResourceName:props.resourceName,ResourceNamespace:props.resourceNamespace??"default",ApplyPatchJson:stack.toJsonString(props.applyPatch),RestorePatchJson:stack.toJsonString(props.restorePatch),ClusterName:props.cluster.clusterName,RoleArn:provider.roleArn,PatchType:props.patchType??PatchType.STRATEGIC}})}}exports.KubernetesPatch=KubernetesPatch,_a=JSII_RTTI_SYMBOL_1,KubernetesPatch[_a]={fqn:"aws-cdk-lib.aws_eks.KubernetesPatch",version:"2.178.2"};
