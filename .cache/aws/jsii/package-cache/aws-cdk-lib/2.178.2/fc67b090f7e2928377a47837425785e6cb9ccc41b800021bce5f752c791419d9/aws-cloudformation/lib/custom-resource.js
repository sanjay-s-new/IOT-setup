"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CustomResource=exports.CustomResourceProvider=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var core=()=>{var tmp=require("../../core");return core=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class CustomResourceProvider{static fromLambda(handler){return new CustomResourceProvider(handler.functionArn)}static fromTopic(topic){return new CustomResourceProvider(topic.topicArn)}static lambda(handler){return this.fromLambda(handler)}static topic(topic){return this.fromTopic(topic)}constructor(serviceToken){this.serviceToken=serviceToken}bind(_scope){return{serviceToken:this.serviceToken}}}exports.CustomResourceProvider=CustomResourceProvider,_a=JSII_RTTI_SYMBOL_1,CustomResourceProvider[_a]={fqn:"aws-cdk-lib.aws_cloudformation.CustomResourceProvider",version:"2.178.2"};class CustomResource extends core().CustomResource{constructor(scope,id,props){super(scope,id,{pascalCaseProperties:!0,properties:props.properties,removalPolicy:props.removalPolicy,resourceType:props.resourceType,serviceToken:core().Lazy.string({produce:()=>props.provider.bind(this).serviceToken})}),(0,metadata_resource_1().addConstructMetadata)(this,props)}}exports.CustomResource=CustomResource,_b=JSII_RTTI_SYMBOL_1,CustomResource[_b]={fqn:"aws-cdk-lib.aws_cloudformation.CustomResource",version:"2.178.2"};
