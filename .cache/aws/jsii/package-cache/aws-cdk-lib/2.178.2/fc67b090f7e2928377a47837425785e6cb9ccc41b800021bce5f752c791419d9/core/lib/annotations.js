"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Annotations=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var app_1=()=>{var tmp=require("./app");return app_1=()=>tmp,tmp},cxschema=()=>{var tmp=require("../../cloud-assembly-schema");return cxschema=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp};class Annotations{static of(scope){return new Annotations(scope)}constructor(scope){this.scope=scope;const disableTrace=scope.node.tryGetContext(cxapi().DISABLE_METADATA_STACK_TRACE)||process.env.CDK_DISABLE_STACK_TRACE;this.stackTraces=!disableTrace}acknowledgeWarning(id,message){Acknowledgements.of(this.scope).add(this.scope,id),removeWarningDeep(this.scope,id)}addWarningV2(id,message){Acknowledgements.of(this.scope).has(this.scope,id)||this.addMessage(cxschema().ArtifactMetadataEntryType.WARN,`${message} ${ackTag(id)}`)}addWarning(message){this.addMessage(cxschema().ArtifactMetadataEntryType.WARN,message)}addInfo(message){this.addMessage(cxschema().ArtifactMetadataEntryType.INFO,message)}addError(message){this.addMessage(cxschema().ArtifactMetadataEntryType.ERROR,message)}addDeprecation(api,message){const text=`The API ${api} is deprecated: ${message}. This API will be removed in the next major release`;if(process.env.CDK_BLOCK_DEPRECATIONS)throw new Error(`${this.scope.node.path}: ${text}`);this.addWarningV2(`Deprecated:${api}`,text)}addMessage(level,message){if(!this.scope.node.metadata.find(x=>x.data===message)){let normalizedMessage=typeof message=="string"?message:JSON.stringify(message);this.scope.node.addMetadata(level,normalizedMessage,{stackTrace:this.stackTraces})}}}exports.Annotations=Annotations,_a=JSII_RTTI_SYMBOL_1,Annotations[_a]={fqn:"aws-cdk-lib.Annotations",version:"2.178.2"};class Acknowledgements{static of(scope){const app=app_1().App.of(scope);if(!app)return new Acknowledgements;const existing=app[Acknowledgements.ACKNOWLEDGEMENTS_SYM];if(existing)return existing;const fresh=new Acknowledgements;return app[Acknowledgements.ACKNOWLEDGEMENTS_SYM]=fresh,fresh}constructor(){this.acks=new Map}add(node,ack){const nodePath=this.nodePath(node);let arr=this.acks.get(nodePath);arr||(arr=new Set,this.acks.set(nodePath,arr)),arr.add(ack)}has(node,ack){for(const candidate of this.searchPaths(this.nodePath(node)))if(this.acks.get(candidate)?.has(ack))return!0;return!1}nodePath(node){return(typeof node=="string"?node:node.node.path).replace(/^\//,"")}searchPaths(path){const ret=new Array;let start=0;for(;start<path.length;){let i=path.indexOf("/",start);i!==-1?(ret.push(path.substring(0,i)),start=i+1):start=path.length}return ret.reverse()}}Acknowledgements.ACKNOWLEDGEMENTS_SYM=Symbol.for("@aws-cdk/core.Acknowledgements");function removeWarningDeep(construct,id){const stack=[construct];for(;stack.length>0;){const next=stack.pop();removeWarning(next,id),stack.push(...next.node.children)}}function removeWarning(construct,id){const meta=construct.node._metadata;if(!meta)return;let i=0;for(;i<meta.length;){const m=meta[i];m.type===cxschema().ArtifactMetadataEntryType.WARN&&m.data.includes(ackTag(id))?meta.splice(i,1):i+=1}}function ackTag(id){return`[ack: ${id}]`}
