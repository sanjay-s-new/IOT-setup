"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CnameInstance=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var instance_1=()=>{var tmp=require("./instance");return instance_1=()=>tmp,tmp},namespace_1=()=>{var tmp=require("./namespace");return namespace_1=()=>tmp,tmp},service_1=()=>{var tmp=require("./service");return service_1=()=>tmp,tmp},servicediscovery_generated_1=()=>{var tmp=require("./servicediscovery.generated");return servicediscovery_generated_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class CnameInstance extends instance_1().InstanceBase{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_CnameInstanceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CnameInstance),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.service.namespace.type===namespace_1().NamespaceType.HTTP)throw new Error("Namespace associated with Service must be a DNS Namespace.");if(props.service.dnsRecordType!==service_1().DnsRecordType.CNAME)throw new Error("A `CnameIntance` can only be used with a service using a `CNAME` record.");const resource=new(servicediscovery_generated_1()).CfnInstance(this,"Resource",{instanceId:props.instanceId||this.uniqueInstanceId(),serviceId:props.service.serviceId,instanceAttributes:{AWS_INSTANCE_CNAME:props.instanceCname,...props.customAttributes}});this.service=props.service,this.instanceId=resource.ref,this.cname=props.instanceCname}}exports.CnameInstance=CnameInstance,_a=JSII_RTTI_SYMBOL_1,CnameInstance[_a]={fqn:"aws-cdk-lib.aws_servicediscovery.CnameInstance",version:"2.178.2"};
