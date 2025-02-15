"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CfnLoadBalancer=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},cfn_parse=()=>{var tmp=require("../../core/lib/helpers-internal");return cfn_parse=()=>tmp,tmp},cdk_errors=()=>{var tmp=require("../../core/lib/errors");return cdk_errors=()=>tmp,tmp};class CfnLoadBalancer extends cdk().CfnResource{static _fromCloudFormation(scope,id,resourceAttributes,options){resourceAttributes=resourceAttributes||{};const resourceProperties=options.parser.parseValue(resourceAttributes.Properties),propsResult=CfnLoadBalancerPropsFromCloudFormation(resourceProperties);if(cdk().isResolvableObject(propsResult.value))throw new(cdk_errors()).ValidationError("Unexpected IResolvable",scope);const ret=new CfnLoadBalancer(scope,id,propsResult.value);for(const[propKey,propVal]of Object.entries(propsResult.extraProperties))ret.addPropertyOverride(propKey,propVal);return options.parser.handleAttributes(ret,resourceAttributes,id),ret}constructor(scope,id,props){super(scope,id,{type:CfnLoadBalancer.CFN_RESOURCE_TYPE_NAME,properties:props});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancing_CfnLoadBalancerProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CfnLoadBalancer),error}cdk().requireProperty(props,"listeners",this),this.attrCanonicalHostedZoneName=cdk().Token.asString(this.getAtt("CanonicalHostedZoneName",cdk().ResolutionTypeHint.STRING)),this.attrCanonicalHostedZoneNameId=cdk().Token.asString(this.getAtt("CanonicalHostedZoneNameID",cdk().ResolutionTypeHint.STRING)),this.attrDnsName=cdk().Token.asString(this.getAtt("DNSName",cdk().ResolutionTypeHint.STRING)),this.attrId=cdk().Token.asString(this.getAtt("Id",cdk().ResolutionTypeHint.STRING)),this.attrSourceSecurityGroupGroupName=cdk().Token.asString(this.getAtt("SourceSecurityGroup.GroupName",cdk().ResolutionTypeHint.STRING)),this.attrSourceSecurityGroupOwnerAlias=cdk().Token.asString(this.getAtt("SourceSecurityGroup.OwnerAlias",cdk().ResolutionTypeHint.STRING)),this.accessLoggingPolicy=props.accessLoggingPolicy,this.appCookieStickinessPolicy=props.appCookieStickinessPolicy,this.availabilityZones=props.availabilityZones,this.connectionDrainingPolicy=props.connectionDrainingPolicy,this.connectionSettings=props.connectionSettings,this.crossZone=props.crossZone,this.healthCheck=props.healthCheck,this.instances=props.instances,this.lbCookieStickinessPolicy=props.lbCookieStickinessPolicy,this.listeners=props.listeners,this.loadBalancerName=props.loadBalancerName,this.policies=props.policies,this.scheme=props.scheme,this.securityGroups=props.securityGroups,this.subnets=props.subnets,this.tags=new(cdk()).TagManager(cdk().TagType.STANDARD,"AWS::ElasticLoadBalancing::LoadBalancer",props.tags,{tagPropertyName:"tags"}),this.tagsRaw=props.tags}get cfnProperties(){return{accessLoggingPolicy:this.accessLoggingPolicy,appCookieStickinessPolicy:this.appCookieStickinessPolicy,availabilityZones:this.availabilityZones,connectionDrainingPolicy:this.connectionDrainingPolicy,connectionSettings:this.connectionSettings,crossZone:this.crossZone,healthCheck:this.healthCheck,instances:this.instances,lbCookieStickinessPolicy:this.lbCookieStickinessPolicy,listeners:this.listeners,loadBalancerName:this.loadBalancerName,policies:this.policies,scheme:this.scheme,securityGroups:this.securityGroups,subnets:this.subnets,tags:this.tags.renderTags()}}inspect(inspector){try{jsiiDeprecationWarnings().aws_cdk_lib_TreeInspector(inspector)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.inspect),error}inspector.addAttribute("aws:cdk:cloudformation:type",CfnLoadBalancer.CFN_RESOURCE_TYPE_NAME),inspector.addAttribute("aws:cdk:cloudformation:props",this.cfnProperties)}renderProperties(props){return convertCfnLoadBalancerPropsToCloudFormation(props)}}exports.CfnLoadBalancer=CfnLoadBalancer,_a=JSII_RTTI_SYMBOL_1,CfnLoadBalancer[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancing.CfnLoadBalancer",version:"2.178.2"},CfnLoadBalancer.CFN_RESOURCE_TYPE_NAME="AWS::ElasticLoadBalancing::LoadBalancer";function CfnLoadBalancerAccessLoggingPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("emitInterval",cdk().validateNumber)(properties.emitInterval)),errors.collect(cdk().propertyValidator("enabled",cdk().requiredValidator)(properties.enabled)),errors.collect(cdk().propertyValidator("enabled",cdk().validateBoolean)(properties.enabled)),errors.collect(cdk().propertyValidator("s3BucketName",cdk().requiredValidator)(properties.s3BucketName)),errors.collect(cdk().propertyValidator("s3BucketName",cdk().validateString)(properties.s3BucketName)),errors.collect(cdk().propertyValidator("s3BucketPrefix",cdk().validateString)(properties.s3BucketPrefix)),errors.wrap('supplied properties not correct for "AccessLoggingPolicyProperty"')}function convertCfnLoadBalancerAccessLoggingPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerAccessLoggingPolicyPropertyValidator(properties).assertSuccess(),{EmitInterval:cdk().numberToCloudFormation(properties.emitInterval),Enabled:cdk().booleanToCloudFormation(properties.enabled),S3BucketName:cdk().stringToCloudFormation(properties.s3BucketName),S3BucketPrefix:cdk().stringToCloudFormation(properties.s3BucketPrefix)}):properties}function CfnLoadBalancerAccessLoggingPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("emitInterval","EmitInterval",properties.EmitInterval!=null?cfn_parse().FromCloudFormation.getNumber(properties.EmitInterval):void 0),ret.addPropertyResult("enabled","Enabled",properties.Enabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.Enabled):void 0),ret.addPropertyResult("s3BucketName","S3BucketName",properties.S3BucketName!=null?cfn_parse().FromCloudFormation.getString(properties.S3BucketName):void 0),ret.addPropertyResult("s3BucketPrefix","S3BucketPrefix",properties.S3BucketPrefix!=null?cfn_parse().FromCloudFormation.getString(properties.S3BucketPrefix):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerAppCookieStickinessPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cookieName",cdk().requiredValidator)(properties.cookieName)),errors.collect(cdk().propertyValidator("cookieName",cdk().validateString)(properties.cookieName)),errors.collect(cdk().propertyValidator("policyName",cdk().requiredValidator)(properties.policyName)),errors.collect(cdk().propertyValidator("policyName",cdk().validateString)(properties.policyName)),errors.wrap('supplied properties not correct for "AppCookieStickinessPolicyProperty"')}function convertCfnLoadBalancerAppCookieStickinessPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerAppCookieStickinessPolicyPropertyValidator(properties).assertSuccess(),{CookieName:cdk().stringToCloudFormation(properties.cookieName),PolicyName:cdk().stringToCloudFormation(properties.policyName)}):properties}function CfnLoadBalancerAppCookieStickinessPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cookieName","CookieName",properties.CookieName!=null?cfn_parse().FromCloudFormation.getString(properties.CookieName):void 0),ret.addPropertyResult("policyName","PolicyName",properties.PolicyName!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyName):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerConnectionDrainingPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("enabled",cdk().requiredValidator)(properties.enabled)),errors.collect(cdk().propertyValidator("enabled",cdk().validateBoolean)(properties.enabled)),errors.collect(cdk().propertyValidator("timeout",cdk().validateNumber)(properties.timeout)),errors.wrap('supplied properties not correct for "ConnectionDrainingPolicyProperty"')}function convertCfnLoadBalancerConnectionDrainingPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerConnectionDrainingPolicyPropertyValidator(properties).assertSuccess(),{Enabled:cdk().booleanToCloudFormation(properties.enabled),Timeout:cdk().numberToCloudFormation(properties.timeout)}):properties}function CfnLoadBalancerConnectionDrainingPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("enabled","Enabled",properties.Enabled!=null?cfn_parse().FromCloudFormation.getBoolean(properties.Enabled):void 0),ret.addPropertyResult("timeout","Timeout",properties.Timeout!=null?cfn_parse().FromCloudFormation.getNumber(properties.Timeout):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerConnectionSettingsPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("idleTimeout",cdk().requiredValidator)(properties.idleTimeout)),errors.collect(cdk().propertyValidator("idleTimeout",cdk().validateNumber)(properties.idleTimeout)),errors.wrap('supplied properties not correct for "ConnectionSettingsProperty"')}function convertCfnLoadBalancerConnectionSettingsPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerConnectionSettingsPropertyValidator(properties).assertSuccess(),{IdleTimeout:cdk().numberToCloudFormation(properties.idleTimeout)}):properties}function CfnLoadBalancerConnectionSettingsPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("idleTimeout","IdleTimeout",properties.IdleTimeout!=null?cfn_parse().FromCloudFormation.getNumber(properties.IdleTimeout):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerHealthCheckPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("healthyThreshold",cdk().requiredValidator)(properties.healthyThreshold)),errors.collect(cdk().propertyValidator("healthyThreshold",cdk().validateString)(properties.healthyThreshold)),errors.collect(cdk().propertyValidator("interval",cdk().requiredValidator)(properties.interval)),errors.collect(cdk().propertyValidator("interval",cdk().validateString)(properties.interval)),errors.collect(cdk().propertyValidator("target",cdk().requiredValidator)(properties.target)),errors.collect(cdk().propertyValidator("target",cdk().validateString)(properties.target)),errors.collect(cdk().propertyValidator("timeout",cdk().requiredValidator)(properties.timeout)),errors.collect(cdk().propertyValidator("timeout",cdk().validateString)(properties.timeout)),errors.collect(cdk().propertyValidator("unhealthyThreshold",cdk().requiredValidator)(properties.unhealthyThreshold)),errors.collect(cdk().propertyValidator("unhealthyThreshold",cdk().validateString)(properties.unhealthyThreshold)),errors.wrap('supplied properties not correct for "HealthCheckProperty"')}function convertCfnLoadBalancerHealthCheckPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerHealthCheckPropertyValidator(properties).assertSuccess(),{HealthyThreshold:cdk().stringToCloudFormation(properties.healthyThreshold),Interval:cdk().stringToCloudFormation(properties.interval),Target:cdk().stringToCloudFormation(properties.target),Timeout:cdk().stringToCloudFormation(properties.timeout),UnhealthyThreshold:cdk().stringToCloudFormation(properties.unhealthyThreshold)}):properties}function CfnLoadBalancerHealthCheckPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("healthyThreshold","HealthyThreshold",properties.HealthyThreshold!=null?cfn_parse().FromCloudFormation.getString(properties.HealthyThreshold):void 0),ret.addPropertyResult("interval","Interval",properties.Interval!=null?cfn_parse().FromCloudFormation.getString(properties.Interval):void 0),ret.addPropertyResult("target","Target",properties.Target!=null?cfn_parse().FromCloudFormation.getString(properties.Target):void 0),ret.addPropertyResult("timeout","Timeout",properties.Timeout!=null?cfn_parse().FromCloudFormation.getString(properties.Timeout):void 0),ret.addPropertyResult("unhealthyThreshold","UnhealthyThreshold",properties.UnhealthyThreshold!=null?cfn_parse().FromCloudFormation.getString(properties.UnhealthyThreshold):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerLBCookieStickinessPolicyPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("cookieExpirationPeriod",cdk().validateString)(properties.cookieExpirationPeriod)),errors.collect(cdk().propertyValidator("policyName",cdk().validateString)(properties.policyName)),errors.wrap('supplied properties not correct for "LBCookieStickinessPolicyProperty"')}function convertCfnLoadBalancerLBCookieStickinessPolicyPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerLBCookieStickinessPolicyPropertyValidator(properties).assertSuccess(),{CookieExpirationPeriod:cdk().stringToCloudFormation(properties.cookieExpirationPeriod),PolicyName:cdk().stringToCloudFormation(properties.policyName)}):properties}function CfnLoadBalancerLBCookieStickinessPolicyPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("cookieExpirationPeriod","CookieExpirationPeriod",properties.CookieExpirationPeriod!=null?cfn_parse().FromCloudFormation.getString(properties.CookieExpirationPeriod):void 0),ret.addPropertyResult("policyName","PolicyName",properties.PolicyName!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyName):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerListenersPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("instancePort",cdk().requiredValidator)(properties.instancePort)),errors.collect(cdk().propertyValidator("instancePort",cdk().validateString)(properties.instancePort)),errors.collect(cdk().propertyValidator("instanceProtocol",cdk().validateString)(properties.instanceProtocol)),errors.collect(cdk().propertyValidator("loadBalancerPort",cdk().requiredValidator)(properties.loadBalancerPort)),errors.collect(cdk().propertyValidator("loadBalancerPort",cdk().validateString)(properties.loadBalancerPort)),errors.collect(cdk().propertyValidator("policyNames",cdk().listValidator(cdk().validateString))(properties.policyNames)),errors.collect(cdk().propertyValidator("protocol",cdk().requiredValidator)(properties.protocol)),errors.collect(cdk().propertyValidator("protocol",cdk().validateString)(properties.protocol)),errors.collect(cdk().propertyValidator("sslCertificateId",cdk().validateString)(properties.sslCertificateId)),errors.wrap('supplied properties not correct for "ListenersProperty"')}function convertCfnLoadBalancerListenersPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerListenersPropertyValidator(properties).assertSuccess(),{InstancePort:cdk().stringToCloudFormation(properties.instancePort),InstanceProtocol:cdk().stringToCloudFormation(properties.instanceProtocol),LoadBalancerPort:cdk().stringToCloudFormation(properties.loadBalancerPort),PolicyNames:cdk().listMapper(cdk().stringToCloudFormation)(properties.policyNames),Protocol:cdk().stringToCloudFormation(properties.protocol),SSLCertificateId:cdk().stringToCloudFormation(properties.sslCertificateId)}):properties}function CfnLoadBalancerListenersPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("instancePort","InstancePort",properties.InstancePort!=null?cfn_parse().FromCloudFormation.getString(properties.InstancePort):void 0),ret.addPropertyResult("instanceProtocol","InstanceProtocol",properties.InstanceProtocol!=null?cfn_parse().FromCloudFormation.getString(properties.InstanceProtocol):void 0),ret.addPropertyResult("loadBalancerPort","LoadBalancerPort",properties.LoadBalancerPort!=null?cfn_parse().FromCloudFormation.getString(properties.LoadBalancerPort):void 0),ret.addPropertyResult("policyNames","PolicyNames",properties.PolicyNames!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.PolicyNames):void 0),ret.addPropertyResult("protocol","Protocol",properties.Protocol!=null?cfn_parse().FromCloudFormation.getString(properties.Protocol):void 0),ret.addPropertyResult("sslCertificateId","SSLCertificateId",properties.SSLCertificateId!=null?cfn_parse().FromCloudFormation.getString(properties.SSLCertificateId):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerPoliciesPropertyValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("attributes",cdk().requiredValidator)(properties.attributes)),errors.collect(cdk().propertyValidator("attributes",cdk().listValidator(cdk().validateObject))(properties.attributes)),errors.collect(cdk().propertyValidator("instancePorts",cdk().listValidator(cdk().validateString))(properties.instancePorts)),errors.collect(cdk().propertyValidator("loadBalancerPorts",cdk().listValidator(cdk().validateString))(properties.loadBalancerPorts)),errors.collect(cdk().propertyValidator("policyName",cdk().requiredValidator)(properties.policyName)),errors.collect(cdk().propertyValidator("policyName",cdk().validateString)(properties.policyName)),errors.collect(cdk().propertyValidator("policyType",cdk().requiredValidator)(properties.policyType)),errors.collect(cdk().propertyValidator("policyType",cdk().validateString)(properties.policyType)),errors.wrap('supplied properties not correct for "PoliciesProperty"')}function convertCfnLoadBalancerPoliciesPropertyToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerPoliciesPropertyValidator(properties).assertSuccess(),{Attributes:cdk().listMapper(cdk().objectToCloudFormation)(properties.attributes),InstancePorts:cdk().listMapper(cdk().stringToCloudFormation)(properties.instancePorts),LoadBalancerPorts:cdk().listMapper(cdk().stringToCloudFormation)(properties.loadBalancerPorts),PolicyName:cdk().stringToCloudFormation(properties.policyName),PolicyType:cdk().stringToCloudFormation(properties.policyType)}):properties}function CfnLoadBalancerPoliciesPropertyFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("attributes","Attributes",properties.Attributes!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getAny)(properties.Attributes):void 0),ret.addPropertyResult("instancePorts","InstancePorts",properties.InstancePorts!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.InstancePorts):void 0),ret.addPropertyResult("loadBalancerPorts","LoadBalancerPorts",properties.LoadBalancerPorts!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.LoadBalancerPorts):void 0),ret.addPropertyResult("policyName","PolicyName",properties.PolicyName!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyName):void 0),ret.addPropertyResult("policyType","PolicyType",properties.PolicyType!=null?cfn_parse().FromCloudFormation.getString(properties.PolicyType):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}function CfnLoadBalancerPropsValidator(properties){if(!cdk().canInspect(properties))return cdk().VALIDATION_SUCCESS;const errors=new(cdk()).ValidationResults;return properties&&typeof properties=="object"&&!Array.isArray(properties)||errors.collect(new(cdk()).ValidationResult("Expected an object, but received: "+JSON.stringify(properties))),errors.collect(cdk().propertyValidator("accessLoggingPolicy",CfnLoadBalancerAccessLoggingPolicyPropertyValidator)(properties.accessLoggingPolicy)),errors.collect(cdk().propertyValidator("appCookieStickinessPolicy",cdk().listValidator(CfnLoadBalancerAppCookieStickinessPolicyPropertyValidator))(properties.appCookieStickinessPolicy)),errors.collect(cdk().propertyValidator("availabilityZones",cdk().listValidator(cdk().validateString))(properties.availabilityZones)),errors.collect(cdk().propertyValidator("connectionDrainingPolicy",CfnLoadBalancerConnectionDrainingPolicyPropertyValidator)(properties.connectionDrainingPolicy)),errors.collect(cdk().propertyValidator("connectionSettings",CfnLoadBalancerConnectionSettingsPropertyValidator)(properties.connectionSettings)),errors.collect(cdk().propertyValidator("crossZone",cdk().validateBoolean)(properties.crossZone)),errors.collect(cdk().propertyValidator("healthCheck",CfnLoadBalancerHealthCheckPropertyValidator)(properties.healthCheck)),errors.collect(cdk().propertyValidator("instances",cdk().listValidator(cdk().validateString))(properties.instances)),errors.collect(cdk().propertyValidator("lbCookieStickinessPolicy",cdk().listValidator(CfnLoadBalancerLBCookieStickinessPolicyPropertyValidator))(properties.lbCookieStickinessPolicy)),errors.collect(cdk().propertyValidator("listeners",cdk().requiredValidator)(properties.listeners)),errors.collect(cdk().propertyValidator("listeners",cdk().listValidator(CfnLoadBalancerListenersPropertyValidator))(properties.listeners)),errors.collect(cdk().propertyValidator("loadBalancerName",cdk().validateString)(properties.loadBalancerName)),errors.collect(cdk().propertyValidator("policies",cdk().listValidator(CfnLoadBalancerPoliciesPropertyValidator))(properties.policies)),errors.collect(cdk().propertyValidator("scheme",cdk().validateString)(properties.scheme)),errors.collect(cdk().propertyValidator("securityGroups",cdk().listValidator(cdk().validateString))(properties.securityGroups)),errors.collect(cdk().propertyValidator("subnets",cdk().listValidator(cdk().validateString))(properties.subnets)),errors.collect(cdk().propertyValidator("tags",cdk().listValidator(cdk().validateCfnTag))(properties.tags)),errors.wrap('supplied properties not correct for "CfnLoadBalancerProps"')}function convertCfnLoadBalancerPropsToCloudFormation(properties){return cdk().canInspect(properties)?(CfnLoadBalancerPropsValidator(properties).assertSuccess(),{AccessLoggingPolicy:convertCfnLoadBalancerAccessLoggingPolicyPropertyToCloudFormation(properties.accessLoggingPolicy),AppCookieStickinessPolicy:cdk().listMapper(convertCfnLoadBalancerAppCookieStickinessPolicyPropertyToCloudFormation)(properties.appCookieStickinessPolicy),AvailabilityZones:cdk().listMapper(cdk().stringToCloudFormation)(properties.availabilityZones),ConnectionDrainingPolicy:convertCfnLoadBalancerConnectionDrainingPolicyPropertyToCloudFormation(properties.connectionDrainingPolicy),ConnectionSettings:convertCfnLoadBalancerConnectionSettingsPropertyToCloudFormation(properties.connectionSettings),CrossZone:cdk().booleanToCloudFormation(properties.crossZone),HealthCheck:convertCfnLoadBalancerHealthCheckPropertyToCloudFormation(properties.healthCheck),Instances:cdk().listMapper(cdk().stringToCloudFormation)(properties.instances),LBCookieStickinessPolicy:cdk().listMapper(convertCfnLoadBalancerLBCookieStickinessPolicyPropertyToCloudFormation)(properties.lbCookieStickinessPolicy),Listeners:cdk().listMapper(convertCfnLoadBalancerListenersPropertyToCloudFormation)(properties.listeners),LoadBalancerName:cdk().stringToCloudFormation(properties.loadBalancerName),Policies:cdk().listMapper(convertCfnLoadBalancerPoliciesPropertyToCloudFormation)(properties.policies),Scheme:cdk().stringToCloudFormation(properties.scheme),SecurityGroups:cdk().listMapper(cdk().stringToCloudFormation)(properties.securityGroups),Subnets:cdk().listMapper(cdk().stringToCloudFormation)(properties.subnets),Tags:cdk().listMapper(cdk().cfnTagToCloudFormation)(properties.tags)}):properties}function CfnLoadBalancerPropsFromCloudFormation(properties){if(cdk().isResolvableObject(properties))return new(cfn_parse()).FromCloudFormationResult(properties);if(properties=properties??{},!(properties&&typeof properties=="object"&&!Array.isArray(properties)))return new(cfn_parse()).FromCloudFormationResult(properties);const ret=new(cfn_parse()).FromCloudFormationPropertyObject;return ret.addPropertyResult("accessLoggingPolicy","AccessLoggingPolicy",properties.AccessLoggingPolicy!=null?CfnLoadBalancerAccessLoggingPolicyPropertyFromCloudFormation(properties.AccessLoggingPolicy):void 0),ret.addPropertyResult("appCookieStickinessPolicy","AppCookieStickinessPolicy",properties.AppCookieStickinessPolicy!=null?cfn_parse().FromCloudFormation.getArray(CfnLoadBalancerAppCookieStickinessPolicyPropertyFromCloudFormation)(properties.AppCookieStickinessPolicy):void 0),ret.addPropertyResult("availabilityZones","AvailabilityZones",properties.AvailabilityZones!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.AvailabilityZones):void 0),ret.addPropertyResult("connectionDrainingPolicy","ConnectionDrainingPolicy",properties.ConnectionDrainingPolicy!=null?CfnLoadBalancerConnectionDrainingPolicyPropertyFromCloudFormation(properties.ConnectionDrainingPolicy):void 0),ret.addPropertyResult("connectionSettings","ConnectionSettings",properties.ConnectionSettings!=null?CfnLoadBalancerConnectionSettingsPropertyFromCloudFormation(properties.ConnectionSettings):void 0),ret.addPropertyResult("crossZone","CrossZone",properties.CrossZone!=null?cfn_parse().FromCloudFormation.getBoolean(properties.CrossZone):void 0),ret.addPropertyResult("healthCheck","HealthCheck",properties.HealthCheck!=null?CfnLoadBalancerHealthCheckPropertyFromCloudFormation(properties.HealthCheck):void 0),ret.addPropertyResult("instances","Instances",properties.Instances!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Instances):void 0),ret.addPropertyResult("lbCookieStickinessPolicy","LBCookieStickinessPolicy",properties.LBCookieStickinessPolicy!=null?cfn_parse().FromCloudFormation.getArray(CfnLoadBalancerLBCookieStickinessPolicyPropertyFromCloudFormation)(properties.LBCookieStickinessPolicy):void 0),ret.addPropertyResult("listeners","Listeners",properties.Listeners!=null?cfn_parse().FromCloudFormation.getArray(CfnLoadBalancerListenersPropertyFromCloudFormation)(properties.Listeners):void 0),ret.addPropertyResult("loadBalancerName","LoadBalancerName",properties.LoadBalancerName!=null?cfn_parse().FromCloudFormation.getString(properties.LoadBalancerName):void 0),ret.addPropertyResult("policies","Policies",properties.Policies!=null?cfn_parse().FromCloudFormation.getArray(CfnLoadBalancerPoliciesPropertyFromCloudFormation)(properties.Policies):void 0),ret.addPropertyResult("scheme","Scheme",properties.Scheme!=null?cfn_parse().FromCloudFormation.getString(properties.Scheme):void 0),ret.addPropertyResult("securityGroups","SecurityGroups",properties.SecurityGroups!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.SecurityGroups):void 0),ret.addPropertyResult("subnets","Subnets",properties.Subnets!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getString)(properties.Subnets):void 0),ret.addPropertyResult("tags","Tags",properties.Tags!=null?cfn_parse().FromCloudFormation.getArray(cfn_parse().FromCloudFormation.getCfnTag)(properties.Tags):void 0),ret.addUnrecognizedPropertiesAsExtra(properties),ret}
