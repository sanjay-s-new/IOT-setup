"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.NetworkTargetGroup=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cloudwatch=()=>{var tmp=require("../../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp},base_target_group_1=()=>{var tmp=require("../shared/base-target-group");return base_target_group_1=()=>tmp,tmp},enums_1=()=>{var tmp=require("../shared/enums");return enums_1=()=>tmp,tmp},imported_1=()=>{var tmp=require("../shared/imported");return imported_1=()=>tmp,tmp},util_1=()=>{var tmp=require("../shared/util");return util_1=()=>tmp,tmp};class NetworkTargetGroupMetrics{constructor(scope,targetGroupFullName,loadBalancerFullName){this.scope=scope,this.targetGroupFullName=targetGroupFullName,this.loadBalancerFullName=loadBalancerFullName}custom(metricName,props){return new(cloudwatch()).Metric({namespace:"AWS/NetworkELB",metricName,dimensionsMap:{LoadBalancer:this.loadBalancerFullName,TargetGroup:this.targetGroupFullName},...props}).attachTo(this.scope)}healthyHostCount(props){return this.custom("HealthyHostCount",{statistic:"Average",...props})}unHealthyHostCount(props){return this.custom("UnHealthyHostCount",{statistic:"Average",...props})}}class NetworkTargetGroup extends base_target_group_1().TargetGroupBase{static fromTargetGroupAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_TargetGroupAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromTargetGroupAttributes),error}return new ImportedNetworkTargetGroup(scope,id,attrs)}static import(scope,id,props){return NetworkTargetGroup.fromTargetGroupAttributes(scope,id,props)}constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_NetworkTargetGroupProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,NetworkTargetGroup),error}const proto=props.protocol||enums_1().Protocol.TCP;(0,util_1().validateNetworkProtocol)(proto),super(scope,id,props,{protocol:proto,port:props.port}),this.listeners=[],props.proxyProtocolV2!=null&&this.setAttribute("proxy_protocol_v2.enabled",props.proxyProtocolV2?"true":"false"),props.preserveClientIp!==void 0&&this.setAttribute("preserve_client_ip.enabled",props.preserveClientIp?"true":"false"),props.connectionTermination!==void 0&&this.setAttribute("deregistration_delay.connection_termination.enabled",props.connectionTermination?"true":"false"),this.addTarget(...props.targets||[])}get metrics(){return this._metrics||(this._metrics=new NetworkTargetGroupMetrics(this,this.targetGroupFullName,this.firstLoadBalancerFullName)),this._metrics}addTarget(...targets){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkLoadBalancerTarget(targets)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addTarget),error}for(const target of targets){const result=target.attachToNetworkTargetGroup(this);this.addLoadBalancerTarget(result)}}registerListener(listener){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkListener(listener)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.registerListener),error}this.loadBalancerAttachedDependencies.add(listener),this.listeners.push(listener)}metricHealthyHostCount(props){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_elasticloadbalancingv2.NetworkTargetGroup#metricHealthyHostCount","Use ``NetworkTargetGroup.metrics.healthyHostCount`` instead"),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricHealthyHostCount),error}return this.metrics.healthyHostCount(props)}metricUnHealthyHostCount(props){try{jsiiDeprecationWarnings().print("aws-cdk-lib.aws_elasticloadbalancingv2.NetworkTargetGroup#metricUnHealthyHostCount","Use ``NetworkTargetGroup.metrics.healthyHostCount`` instead"),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricUnHealthyHostCount),error}return this.metrics.unHealthyHostCount(props)}get firstLoadBalancerFullName(){if(this.listeners.length===0)throw new(errors_1()).ValidationError("The TargetGroup needs to be attached to a LoadBalancer before you can call this method",this);return(0,base_target_group_1().loadBalancerNameFromListenerArn)(this.listeners[0].listenerArn)}validateTargetGroup(){const ret=super.validateTargetGroup(),healthCheck=this.healthCheck||{},lowHealthCheckInterval=5,highHealthCheckInterval=300;if(healthCheck.interval){const seconds=healthCheck.interval.toSeconds();!cdk().Token.isUnresolved(seconds)&&(seconds<lowHealthCheckInterval||seconds>highHealthCheckInterval)&&ret.push(`Health check interval '${seconds}' not supported. Must be between ${lowHealthCheckInterval} and ${highHealthCheckInterval}.`)}if(healthCheck.healthyThresholdCount){const thresholdCount=healthCheck.healthyThresholdCount;(thresholdCount<2||thresholdCount>10)&&ret.push(`Healthy Threshold Count '${thresholdCount}' not supported. Must be a number between 2 and 10.`)}if(healthCheck.unhealthyThresholdCount){const thresholdCount=healthCheck.unhealthyThresholdCount;(thresholdCount<2||thresholdCount>10)&&ret.push(`Unhealthy Threshold Count '${thresholdCount}' not supported. Must be a number between 2 and 10.`)}if(!healthCheck.protocol)return ret;NLB_HEALTH_CHECK_PROTOCOLS.includes(healthCheck.protocol)||ret.push(`Health check protocol '${healthCheck.protocol}' is not supported. Must be one of [${NLB_HEALTH_CHECK_PROTOCOLS.join(", ")}]`),healthCheck.path&&!NLB_PATH_HEALTH_CHECK_PROTOCOLS.includes(healthCheck.protocol)&&ret.push([`'${healthCheck.protocol}' health checks do not support the path property.`,`Must be one of [${NLB_PATH_HEALTH_CHECK_PROTOCOLS.join(", ")}]`].join(" "));const lowHealthCheckTimeout=2,highHealthCheckTimeout=120;if(healthCheck.timeout){const timeoutSeconds=healthCheck.timeout.toSeconds();(timeoutSeconds<lowHealthCheckTimeout||timeoutSeconds>highHealthCheckTimeout)&&ret.push(`Health check timeout '${timeoutSeconds}' not supported. Must be a number between ${lowHealthCheckTimeout} and ${highHealthCheckTimeout}.`)}return ret}}exports.NetworkTargetGroup=NetworkTargetGroup,_a=JSII_RTTI_SYMBOL_1,NetworkTargetGroup[_a]={fqn:"aws-cdk-lib.aws_elasticloadbalancingv2.NetworkTargetGroup",version:"2.178.2"};class ImportedNetworkTargetGroup extends imported_1().ImportedTargetGroupBase{constructor(scope,id,props){if(super(scope,id,props),this.loadBalancerArns!=cdk().Aws.NO_VALUE){const targetGroupFullName=(0,util_1().parseTargetGroupFullName)(this.targetGroupArn),firstLoadBalancerFullName=(0,util_1().parseLoadBalancerFullName)(this.loadBalancerArns);this._metrics=new NetworkTargetGroupMetrics(this,targetGroupFullName,firstLoadBalancerFullName)}}get metrics(){if(!this._metrics)throw new(errors_1()).ValidationError("The imported NetworkTargetGroup needs the associated NetworkLoadBalancer to be able to provide metrics. Please specify the ARN value when importing it.",this);return this._metrics}registerListener(_listener){}addTarget(...targets){for(const target of targets)if(target.attachToNetworkTargetGroup(this).targetJson!==void 0)throw new(errors_1()).ValidationError("Cannot add a non-self registering target to an imported TargetGroup. Create a new TargetGroup instead.",this)}}const NLB_HEALTH_CHECK_PROTOCOLS=[enums_1().Protocol.HTTP,enums_1().Protocol.HTTPS,enums_1().Protocol.TCP],NLB_PATH_HEALTH_CHECK_PROTOCOLS=[enums_1().Protocol.HTTP,enums_1().Protocol.HTTPS];
