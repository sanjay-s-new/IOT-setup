"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClientVpnEndpoint=exports.ClientVpnUserBasedAuthentication=exports.ClientVpnSessionTimeout=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},client_vpn_authorization_rule_1=()=>{var tmp=require("./client-vpn-authorization-rule");return client_vpn_authorization_rule_1=()=>tmp,tmp},client_vpn_route_1=()=>{var tmp=require("./client-vpn-route");return client_vpn_route_1=()=>tmp,tmp},connections_1=()=>{var tmp=require("./connections");return connections_1=()=>tmp,tmp},ec2_generated_1=()=>{var tmp=require("./ec2.generated");return ec2_generated_1=()=>tmp,tmp},network_util_1=()=>{var tmp=require("./network-util");return network_util_1=()=>tmp,tmp},security_group_1=()=>{var tmp=require("./security-group");return security_group_1=()=>tmp,tmp},logs=()=>{var tmp=require("../../aws-logs");return logs=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},ClientVpnSessionTimeout;(function(ClientVpnSessionTimeout2){ClientVpnSessionTimeout2[ClientVpnSessionTimeout2.EIGHT_HOURS=8]="EIGHT_HOURS",ClientVpnSessionTimeout2[ClientVpnSessionTimeout2.TEN_HOURS=10]="TEN_HOURS",ClientVpnSessionTimeout2[ClientVpnSessionTimeout2.TWELVE_HOURS=12]="TWELVE_HOURS",ClientVpnSessionTimeout2[ClientVpnSessionTimeout2.TWENTY_FOUR_HOURS=24]="TWENTY_FOUR_HOURS"})(ClientVpnSessionTimeout||(exports.ClientVpnSessionTimeout=ClientVpnSessionTimeout={}));class ClientVpnUserBasedAuthentication{static activeDirectory(directoryId){return new ActiveDirectoryAuthentication(directoryId)}static federated(samlProvider,selfServiceSamlProvider){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_ISamlProvider(samlProvider),jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_ISamlProvider(selfServiceSamlProvider)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.federated),error}return new FederatedAuthentication(samlProvider,selfServiceSamlProvider)}}exports.ClientVpnUserBasedAuthentication=ClientVpnUserBasedAuthentication,_a=JSII_RTTI_SYMBOL_1,ClientVpnUserBasedAuthentication[_a]={fqn:"aws-cdk-lib.aws_ec2.ClientVpnUserBasedAuthentication",version:"2.178.2"};class ActiveDirectoryAuthentication extends ClientVpnUserBasedAuthentication{constructor(directoryId){super(),this.directoryId=directoryId}render(){return{type:"directory-service-authentication",activeDirectory:{directoryId:this.directoryId}}}}class FederatedAuthentication extends ClientVpnUserBasedAuthentication{constructor(samlProvider,selfServiceSamlProvider){super(),this.samlProvider=samlProvider,this.selfServiceSamlProvider=selfServiceSamlProvider}render(){return{type:"federated-authentication",federatedAuthentication:{samlProviderArn:this.samlProvider.samlProviderArn,selfServiceSamlProviderArn:this.selfServiceSamlProvider?.samlProviderArn}}}}class ClientVpnEndpoint extends core_1().Resource{static fromEndpointAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ClientVpnEndpointAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromEndpointAttributes),error}class Import extends core_1().Resource{constructor(){super(...arguments),this.endpointId=attrs.endpointId,this.connections=new(connections_1()).Connections({securityGroups:attrs.securityGroups}),this.targetNetworksAssociated=new(constructs_1()).DependencyGroup}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id),this._targetNetworksAssociated=new(constructs_1()).DependencyGroup;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ClientVpnEndpointProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ClientVpnEndpoint),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),!core_1().Token.isUnresolved(props.vpc.vpcCidrBlock)){const clientCidr=new(network_util_1()).CidrBlock(props.cidr);if(new(network_util_1()).CidrBlock(props.vpc.vpcCidrBlock).containsCidr(clientCidr))throw new Error("The client CIDR cannot overlap with the local CIDR of the VPC")}if(props.dnsServers&&props.dnsServers.length>2)throw new Error("A client VPN endpoint can have up to two DNS servers");if(props.logging==!1&&(props.logGroup||props.logStream))throw new Error("Cannot specify `logGroup` or `logStream` when logging is disabled");if(props.clientConnectionHandler&&!core_1().Token.isUnresolved(props.clientConnectionHandler.functionName)&&!props.clientConnectionHandler.functionName.startsWith("AWSClientVPN-"))throw new Error("The name of the Lambda function must begin with the `AWSClientVPN-` prefix");if(props.clientLoginBanner&&!core_1().Token.isUnresolved(props.clientLoginBanner)&&props.clientLoginBanner.length>1400)throw new Error(`The maximum length for the client login banner is 1400, got ${props.clientLoginBanner.length}`);const logging=props.logging??!0,logGroup=logging?props.logGroup??new(logs()).LogGroup(this,"LogGroup"):void 0,securityGroups=props.securityGroups??[new(security_group_1()).SecurityGroup(this,"SecurityGroup",{vpc:props.vpc})];this.connections=new(connections_1()).Connections({securityGroups});const endpoint=new(ec2_generated_1()).CfnClientVpnEndpoint(this,"Resource",{authenticationOptions:renderAuthenticationOptions(props.clientCertificateArn,props.userBasedAuthentication),clientCidrBlock:props.cidr,clientConnectOptions:props.clientConnectionHandler?{enabled:!0,lambdaFunctionArn:props.clientConnectionHandler.functionArn}:void 0,connectionLogOptions:{enabled:logging,cloudwatchLogGroup:logGroup?.logGroupName,cloudwatchLogStream:props.logStream?.logStreamName},description:props.description,dnsServers:props.dnsServers,securityGroupIds:securityGroups.map(s=>s.securityGroupId),selfServicePortal:booleanToEnabledDisabled(props.selfServicePortal),serverCertificateArn:props.serverCertificateArn,splitTunnel:props.splitTunnel,transportProtocol:props.transportProtocol,vpcId:props.vpc.vpcId,vpnPort:props.port,sessionTimeoutHours:props.sessionTimeout,clientLoginBannerOptions:props.clientLoginBanner?{enabled:!0,bannerText:props.clientLoginBanner}:void 0});this.endpointId=endpoint.ref,props.userBasedAuthentication&&(props.selfServicePortal??!0)&&new(core_1()).CfnOutput(this,"SelfServicePortalUrl",{value:`https://self-service.clientvpn.amazonaws.com/endpoints/${this.endpointId}`});const subnetIds=props.vpc.selectSubnets(props.vpcSubnets).subnetIds;if(core_1().Token.isUnresolved(subnetIds))throw new Error("Cannot associate subnets when VPC are imported from parameters or exports containing lists of subnet IDs.");for(const[idx,subnetId]of Object.entries(subnetIds))this._targetNetworksAssociated.add(new(ec2_generated_1()).CfnClientVpnTargetNetworkAssociation(this,`Association${idx}`,{clientVpnEndpointId:this.endpointId,subnetId}));this.targetNetworksAssociated=this._targetNetworksAssociated,(props.authorizeAllUsersToVpcCidr??!0)&&this.addAuthorizationRule("AuthorizeAll",{cidr:props.vpc.vpcCidrBlock})}addAuthorizationRule(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ClientVpnAuthorizationRuleOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addAuthorizationRule),error}return new(client_vpn_authorization_rule_1()).ClientVpnAuthorizationRule(this,id,{...props,clientVpnEndpoint:this})}addRoute(id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ec2_ClientVpnRouteOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addRoute),error}return new(client_vpn_route_1()).ClientVpnRoute(this,id,{...props,clientVpnEndpoint:this})}}exports.ClientVpnEndpoint=ClientVpnEndpoint,_b=JSII_RTTI_SYMBOL_1,ClientVpnEndpoint[_b]={fqn:"aws-cdk-lib.aws_ec2.ClientVpnEndpoint",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],ClientVpnEndpoint.prototype,"addAuthorizationRule",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],ClientVpnEndpoint.prototype,"addRoute",null);function renderAuthenticationOptions(clientCertificateArn,userBasedAuthentication){const authenticationOptions=[];if(clientCertificateArn&&authenticationOptions.push({type:"certificate-authentication",mutualAuthentication:{clientRootCertificateChainArn:clientCertificateArn}}),userBasedAuthentication&&authenticationOptions.push(userBasedAuthentication.render()),authenticationOptions.length===0)throw new Error("A client VPN endpoint must use at least one authentication option");return authenticationOptions}function booleanToEnabledDisabled(val){switch(val){case void 0:return;case!0:return"enabled";case!1:return"disabled"}}
