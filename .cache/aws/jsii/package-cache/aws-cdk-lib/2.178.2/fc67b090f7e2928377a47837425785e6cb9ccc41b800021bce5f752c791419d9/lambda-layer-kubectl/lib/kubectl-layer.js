"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.KubectlLayer=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var asset_kubectl_v20_1=()=>{var tmp=require("@aws-cdk/asset-kubectl-v20");return asset_kubectl_v20_1=()=>tmp,tmp},lambda=()=>{var tmp=require("../../aws-lambda");return lambda=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class KubectlLayer extends lambda().LayerVersion{constructor(scope,id){super(scope,id,{code:lambda().Code.fromAsset(asset_kubectl_v20_1().ASSET_FILE,{assetHash:core_1().FileSystem.fingerprint(asset_kubectl_v20_1().LAYER_SOURCE_DIR)}),description:"/opt/kubectl/kubectl and /opt/helm/helm"})}}exports.KubectlLayer=KubectlLayer,_a=JSII_RTTI_SYMBOL_1,KubectlLayer[_a]={fqn:"aws-cdk-lib.lambda_layer_kubectl.KubectlLayer",version:"2.178.2"};
