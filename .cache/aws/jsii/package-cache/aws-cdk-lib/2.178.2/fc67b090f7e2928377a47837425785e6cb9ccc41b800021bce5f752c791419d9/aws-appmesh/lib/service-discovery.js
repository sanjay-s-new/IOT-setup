"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ServiceDiscovery=exports.DnsResponseType=exports.IpPreference=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var IpPreference;(function(IpPreference2){IpPreference2.IPV4_ONLY="IPv4_ONLY",IpPreference2.IPV4_PREFERRED="IPv4_PREFERRED",IpPreference2.IPV6_ONLY="IPv6_ONLY",IpPreference2.IPV6_PREFERRED="IPv6_PREFERRED"})(IpPreference||(exports.IpPreference=IpPreference={}));var DnsResponseType;(function(DnsResponseType2){DnsResponseType2.LOAD_BALANCER="LOADBALANCER",DnsResponseType2.ENDPOINTS="ENDPOINTS"})(DnsResponseType||(exports.DnsResponseType=DnsResponseType={}));class ServiceDiscovery{static dns(hostname,responseType,ipPreference){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_DnsResponseType(responseType),jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_IpPreference(ipPreference)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dns),error}return new DnsServiceDiscovery(hostname,responseType,ipPreference)}static cloudMap(service,instanceAttributes,ipPreference){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_servicediscovery_IService(service),jsiiDeprecationWarnings().aws_cdk_lib_aws_appmesh_IpPreference(ipPreference)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.cloudMap),error}return new CloudMapServiceDiscovery(service,instanceAttributes,ipPreference)}}exports.ServiceDiscovery=ServiceDiscovery,_a=JSII_RTTI_SYMBOL_1,ServiceDiscovery[_a]={fqn:"aws-cdk-lib.aws_appmesh.ServiceDiscovery",version:"2.178.2"};class DnsServiceDiscovery extends ServiceDiscovery{constructor(hostname,responseType,ipPreference){super(),this.hostname=hostname,this.responseType=responseType,this.ipPreference=ipPreference}bind(_scope){return{dns:{hostname:this.hostname,responseType:this.responseType,ipPreference:this.ipPreference}}}}class CloudMapServiceDiscovery extends ServiceDiscovery{constructor(service,instanceAttributes,ipPreference){super(),this.service=service,this.instanceAttributes=instanceAttributes,this.ipPreference=ipPreference}bind(_scope){return{cloudmap:{namespaceName:this.service.namespace.namespaceName,serviceName:this.service.serviceName,attributes:renderAttributes(this.instanceAttributes),ipPreference:this.ipPreference}}}}function renderAttributes(attrs){if(attrs!==void 0)return Object.entries(attrs).map(([key,value])=>({key,value}))}
