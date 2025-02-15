"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Domain=exports.IpAddressType=exports.TLSSecurityPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var url_1=()=>{var tmp=require("url");return url_1=()=>tmp,tmp},log_group_resource_policy_1=()=>{var tmp=require("./log-group-resource-policy");return log_group_resource_policy_1=()=>tmp,tmp},opensearch_access_policy_1=()=>{var tmp=require("./opensearch-access-policy");return opensearch_access_policy_1=()=>tmp,tmp},opensearchservice_generated_1=()=>{var tmp=require("./opensearchservice.generated");return opensearchservice_generated_1=()=>tmp,tmp},perms=()=>{var tmp=require("./perms");return perms=()=>tmp,tmp},acm=()=>{var tmp=require("../../aws-certificatemanager");return acm=()=>tmp,tmp},aws_cloudwatch_1=()=>{var tmp=require("../../aws-cloudwatch");return aws_cloudwatch_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},logs=()=>{var tmp=require("../../aws-logs");return logs=()=>tmp,tmp},route53=()=>{var tmp=require("../../aws-route53");return route53=()=>tmp,tmp},secretsmanager=()=>{var tmp=require("../../aws-secretsmanager");return secretsmanager=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../cx-api");return cxapi=()=>tmp,tmp},TLSSecurityPolicy;(function(TLSSecurityPolicy2){TLSSecurityPolicy2.TLS_1_0="Policy-Min-TLS-1-0-2019-07",TLSSecurityPolicy2.TLS_1_2="Policy-Min-TLS-1-2-2019-07",TLSSecurityPolicy2.TLS_1_2_PFS="Policy-Min-TLS-1-2-PFS-2023-10"})(TLSSecurityPolicy||(exports.TLSSecurityPolicy=TLSSecurityPolicy={}));var IpAddressType;(function(IpAddressType2){IpAddressType2.IPV4="ipv4",IpAddressType2.DUAL_STACK="dualstack"})(IpAddressType||(exports.IpAddressType=IpAddressType={}));class DomainBase extends cdk().Resource{grantRead(identity){return this.grant(identity,perms().ES_READ_ACTIONS,this.domainArn,`${this.domainArn}/*`)}grantWrite(identity){return this.grant(identity,perms().ES_WRITE_ACTIONS,this.domainArn,`${this.domainArn}/*`)}grantReadWrite(identity){return this.grant(identity,perms().ES_READ_WRITE_ACTIONS,this.domainArn,`${this.domainArn}/*`)}grantIndexRead(index,identity){return this.grant(identity,perms().ES_READ_ACTIONS,`${this.domainArn}/${index}`,`${this.domainArn}/${index}/*`)}grantIndexWrite(index,identity){return this.grant(identity,perms().ES_WRITE_ACTIONS,`${this.domainArn}/${index}`,`${this.domainArn}/${index}/*`)}grantIndexReadWrite(index,identity){return this.grant(identity,perms().ES_READ_WRITE_ACTIONS,`${this.domainArn}/${index}`,`${this.domainArn}/${index}/*`)}grantPathRead(path,identity){return this.grant(identity,perms().ES_READ_ACTIONS,`${this.domainArn}/${path}`)}grantPathWrite(path,identity){return this.grant(identity,perms().ES_WRITE_ACTIONS,`${this.domainArn}/${path}`)}grantPathReadWrite(path,identity){return this.grant(identity,perms().ES_READ_WRITE_ACTIONS,`${this.domainArn}/${path}`)}metric(metricName,props){return new(aws_cloudwatch_1()).Metric({namespace:"AWS/ES",metricName,dimensionsMap:{DomainName:this.domainName,ClientId:this.env.account},...props}).attachTo(this)}metricClusterStatusRed(props){return this.metric("ClusterStatus.red",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricClusterStatusYellow(props){return this.metric("ClusterStatus.yellow",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricFreeStorageSpace(props){return this.metric("FreeStorageSpace",{statistic:aws_cloudwatch_1().Statistic.MINIMUM,...props})}metricClusterIndexWritesBlocked(props){return this.metric("ClusterIndexWritesBlocked",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,period:cdk().Duration.minutes(1),...props})}metricNodes(props){return this.metric("Nodes",{statistic:aws_cloudwatch_1().Statistic.MINIMUM,period:cdk().Duration.hours(1),...props})}metricAutomatedSnapshotFailure(props){return this.metric("AutomatedSnapshotFailure",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricCPUUtilization(props){return this.metric("CPUUtilization",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricJVMMemoryPressure(props){return this.metric("JVMMemoryPressure",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricMasterCPUUtilization(props){return this.metric("MasterCPUUtilization",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricMasterJVMMemoryPressure(props){return this.metric("MasterJVMMemoryPressure",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricKMSKeyError(props){return this.metric("KMSKeyError",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricKMSKeyInaccessible(props){return this.metric("KMSKeyInaccessible",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricSearchableDocuments(props){return this.metric("SearchableDocuments",{statistic:aws_cloudwatch_1().Statistic.MAXIMUM,...props})}metricSearchLatency(props){return this.metric("SearchLatency",{statistic:"p99",...props})}metricIndexingLatency(props){return this.metric("IndexingLatency",{statistic:"p99",...props})}grant(grantee,domainActions,resourceArn,...otherResourceArns){const resourceArns=[resourceArn,...otherResourceArns];return iam().Grant.addToPrincipal({grantee,actions:domainActions,resourceArns,scope:this})}}class Domain extends DomainBase{static fromDomainEndpoint(scope,id,domainEndpoint){const stack=cdk().Stack.of(scope),domainName=extractNameFromEndpoint(domainEndpoint),domainArn=stack.formatArn({service:"es",resource:"domain",resourceName:domainName});return Domain.fromDomainAttributes(scope,id,{domainArn,domainEndpoint})}static fromDomainAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_opensearchservice_DomainAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromDomainAttributes),error}const{domainArn,domainEndpoint}=attrs,domainName=cdk().Stack.of(scope).splitArn(domainArn,cdk().ArnFormat.SLASH_RESOURCE_NAME).resourceName??extractNameFromEndpoint(domainEndpoint);return new class extends DomainBase{constructor(){super(scope,id),this.domainArn=domainArn,this.domainName=domainName,this.domainId=domainName,this.domainEndpoint=domainEndpoint.replace(/^https?:\/\//,"")}}}constructor(scope,id,props){super(scope,id,{physicalName:props.domainName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_opensearchservice_DomainProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Domain),error}(0,metadata_resource_1().addConstructMetadata)(this,props);const defaultInstanceType="r5.large.search",warmDefaultInstanceType="ultrawarm1.medium.search",dedicatedMasterType=initializeInstanceType(defaultInstanceType,props.capacity?.masterNodeInstanceType),dedicatedMasterCount=props.capacity?.masterNodes??0,dedicatedMasterEnabled=cdk().Token.isUnresolved(dedicatedMasterCount)?!0:dedicatedMasterCount>0,instanceType=initializeInstanceType(defaultInstanceType,props.capacity?.dataNodeInstanceType),instanceCount=props.capacity?.dataNodes??1,warmType=initializeInstanceType(warmDefaultInstanceType,props.capacity?.warmInstanceType),warmCount=props.capacity?.warmNodes??0,warmEnabled=cdk().Token.isUnresolved(warmCount)?!0:warmCount>0,availabilityZoneCount=props.zoneAwareness?.availabilityZoneCount??2;if(![2,3].includes(availabilityZoneCount))throw new Error("Invalid zone awareness configuration; availabilityZoneCount must be 2 or 3");const zoneAwarenessEnabled=props.zoneAwareness?.enabled??props.zoneAwareness?.availabilityZoneCount!=null;let securityGroups,subnets,skipZoneAwarenessCheck=!1;if(props.vpc){const subnetSelections=props.vpcSubnets??[{subnetType:ec2().SubnetType.PRIVATE_WITH_EGRESS}];subnets=selectSubnets(props.vpc,subnetSelections),skipZoneAwarenessCheck=zoneAwarenessCheckShouldBeSkipped(props.vpc,subnetSelections),securityGroups=props.securityGroups??[new(ec2()).SecurityGroup(this,"SecurityGroup",{vpc:props.vpc,description:`Security group for domain ${this.node.id}`})],props.enforceHttps?this._connections=new(ec2()).Connections({securityGroups,defaultPort:ec2().Port.tcp(443)}):this._connections=new(ec2()).Connections({securityGroups})}if(subnets&&zoneAwarenessEnabled&&!skipZoneAwarenessCheck&&new Set(subnets.map(subnet=>subnet.availabilityZone)).size<availabilityZoneCount)throw new Error("When providing vpc options you need to provide a subnet for each AZ you are using");if([dedicatedMasterType,instanceType,warmType].some(t=>!cdk().Token.isUnresolved(t)&&!t.endsWith(".search")))throw new Error('Master, data and UltraWarm node instance types must end with ".search".');if(!cdk().Token.isUnresolved(warmType)&&!warmType.startsWith("ultrawarm"))throw new Error('UltraWarm node instance type must start with "ultrawarm".');const unsignedBasicAuthEnabled=props.useUnsignedBasicAuth??!1;if(unsignedBasicAuthEnabled){if(props.enforceHttps==!1)throw new Error("You cannot disable HTTPS and use unsigned basic auth");if(props.nodeToNodeEncryption==!1)throw new Error("You cannot disable node to node encryption and use unsigned basic auth");if(props.encryptionAtRest?.enabled==!1)throw new Error("You cannot disable encryption at rest and use unsigned basic auth")}const unsignedAccessPolicy=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["es:ESHttp*"],principals:[new(iam()).AnyPrincipal],resources:[cdk().Lazy.string({produce:()=>`${this.domainArn}/*`})]}),masterUserArn=props.fineGrainedAccessControl?.masterUserArn,masterUserNameProps=props.fineGrainedAccessControl?.masterUserName,masterUserName=unsignedBasicAuthEnabled?masterUserArn==null?masterUserNameProps??"admin":void 0:masterUserNameProps;if(masterUserArn!=null&&masterUserName!=null)throw new Error("Invalid fine grained access control settings. Only provide one of master user ARN or master user name. Not both.");const advancedSecurityEnabled=(masterUserArn??masterUserName)!=null,internalUserDatabaseEnabled=masterUserName!=null,masterUserPasswordProp=props.fineGrainedAccessControl?.masterUserPassword,createMasterUserPassword=()=>new(secretsmanager()).Secret(this,"MasterUser",{generateSecretString:{secretStringTemplate:JSON.stringify({username:masterUserName}),generateStringKey:"password",excludeCharacters:"{}'\\*[]()`"}}).secretValueFromJson("password");this.masterUserPassword=internalUserDatabaseEnabled?masterUserPasswordProp??createMasterUserPassword():void 0;const encryptionAtRestEnabled=props.encryptionAtRest?.enabled??(props.encryptionAtRest?.kmsKey!=null||unsignedBasicAuthEnabled),nodeToNodeEncryptionEnabled=props.nodeToNodeEncryption??unsignedBasicAuthEnabled,volumeSize=props.ebs?.volumeSize??10,volumeType=props.ebs?.volumeType??ec2().EbsDeviceVolumeType.GENERAL_PURPOSE_SSD,ebsEnabled=props.ebs?.enabled??!0,enforceHttps=props.enforceHttps??unsignedBasicAuthEnabled;function isInstanceType(t){return dedicatedMasterType.startsWith(t)||instanceType.startsWith(t)}function isSomeInstanceType(...instanceTypes){return instanceTypes.some(isInstanceType)}function isEveryDatanodeInstanceType(...instanceTypes){return instanceTypes.some(t=>instanceType.startsWith(t))}const{versionNum,isElasticsearchVersion}=parseVersion(props.version);if(isElasticsearchVersion){if(versionNum<=7.7&&![1.5,2.3,5.1,5.3,5.5,5.6,6,6.2,6.3,6.4,6.5,6.7,6.8,7.1,7.4,7.7].includes(versionNum))throw new Error(`Unknown Elasticsearch version: ${versionNum}`);if(versionNum<5.1){if(props.logging?.appLogEnabled)throw new Error("Error logs publishing requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.");if(props.encryptionAtRest?.enabled)throw new Error("Encryption of data at rest requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.");if(props.cognitoDashboardsAuth!=null)throw new Error("Cognito authentication for OpenSearch Dashboards requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.");if(isSomeInstanceType("c5","i3","m5","r5"))throw new Error("C5, I3, M5, and R5 instance types require Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.")}if(versionNum<6&&props.nodeToNodeEncryption)throw new Error("Node-to-node encryption requires Elasticsearch version 6.0 or later or OpenSearch version 1.0 or later.");if(versionNum<6.7){if(unsignedBasicAuthEnabled)throw new Error("Using unsigned basic auth requires Elasticsearch version 6.7 or later or OpenSearch version 1.0 or later.");if(advancedSecurityEnabled)throw new Error("Fine-grained access control requires Elasticsearch version 6.7 or later or OpenSearch version 1.0 or later.")}if(versionNum<6.8&&warmEnabled)throw new Error("UltraWarm requires Elasticsearch version 6.8 or later or OpenSearch version 1.0 or later.")}const unSupportEbsInstanceType=[ec2().InstanceClass.I3,ec2().InstanceClass.R6GD,ec2().InstanceClass.I4G,ec2().InstanceClass.I4I,ec2().InstanceClass.IM4GN,ec2().InstanceClass.R7GD],supportInstanceStorageInstanceType=[ec2().InstanceClass.R3,...unSupportEbsInstanceType],unSupportEncryptionAtRestInstanceType=[ec2().InstanceClass.M3,ec2().InstanceClass.R3,ec2().InstanceClass.T2],unSupportUltraWarmInstanceType=[ec2().InstanceClass.T2,ec2().InstanceClass.T3];if(isSomeInstanceType(...unSupportEbsInstanceType)&&ebsEnabled)throw new Error(`${formatInstanceTypesList(unSupportEbsInstanceType,"and")} instance types do not support EBS storage volumes.`);if(isSomeInstanceType("m3","r3","t2")&&encryptionAtRestEnabled)throw new Error(`${formatInstanceTypesList(unSupportEncryptionAtRestInstanceType,"and")} instance types do not support encryption of data at rest.`);if(isInstanceType("t2.micro")&&!(isElasticsearchVersion&&versionNum<=2.3))throw new Error("The t2.micro.search instance type supports only Elasticsearch versions 1.5 and 2.3.");if(isSomeInstanceType("t2","t3")&&warmEnabled)throw new Error(`${formatInstanceTypesList(unSupportUltraWarmInstanceType,"and")} instance types do not support UltraWarm storage.`);if(!ebsEnabled&&!isEveryDatanodeInstanceType(...supportInstanceStorageInstanceType))throw new Error(`EBS volumes are required when using instance types other than ${formatInstanceTypesList(supportInstanceStorageInstanceType,"or")}.`);if(ebsEnabled){if((volumeType==ec2().EbsDeviceVolumeType.GENERAL_PURPOSE_SSD||volumeType==ec2().EbsDeviceVolumeType.STANDARD)&&(props.ebs?.iops!==void 0||props.ebs?.throughput!==void 0))throw new Error("General Purpose EBS volumes can not be used with Iops or Throughput configuration");if(volumeType&&[ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD].includes(volumeType)&&!props.ebs?.iops)throw new Error("`iops` must be specified if the `volumeType` is `PROVISIONED_IOPS_SSD`.");if(props.ebs?.iops){if(![ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD,ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD_IO2,ec2().EbsDeviceVolumeType.GENERAL_PURPOSE_SSD_GP3].includes(volumeType))throw new Error("`iops` may only be specified if the `volumeType` is `PROVISIONED_IOPS_SSD`, `PROVISIONED_IOPS_SSD_IO2` or `GENERAL_PURPOSE_SSD_GP3`.");const iopsRanges={};iopsRanges[ec2().EbsDeviceVolumeType.GENERAL_PURPOSE_SSD_GP3]={Min:3e3,Max:16e3},iopsRanges[ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD]={Min:100,Max:64e3},iopsRanges[ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD_IO2]={Min:100,Max:64e3};const{Min,Max}=iopsRanges[volumeType];if(props.ebs?.iops<Min||props.ebs?.iops>Max)throw new Error(`\`${volumeType}\` volumes iops must be between ${Min} and ${Max}.`);const maximumRatios={};maximumRatios[ec2().EbsDeviceVolumeType.GENERAL_PURPOSE_SSD_GP3]=500,maximumRatios[ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD]=50,maximumRatios[ec2().EbsDeviceVolumeType.PROVISIONED_IOPS_SSD_IO2]=500;const maximumRatio=maximumRatios[volumeType];if(props.ebs?.volumeSize&&props.ebs?.iops>maximumRatio*props.ebs?.volumeSize)throw new Error(`\`${volumeType}\` volumes iops has a maximum ratio of ${maximumRatio} IOPS/GiB.`);const maximumThroughputRatios={};maximumThroughputRatios[ec2().EbsDeviceVolumeType.GP3]=.25;const maximumThroughputRatio=maximumThroughputRatios[volumeType];if(props.ebs?.throughput&&props.ebs?.iops){const iopsRatio=props.ebs?.throughput/props.ebs?.iops;if(iopsRatio>maximumThroughputRatio)throw new Error(`Throughput (MiBps) to iops ratio of ${iopsRatio} is too high; maximum is ${maximumThroughputRatio} MiBps per iops.`)}}if(props.ebs?.throughput){const throughputRange={Min:125,Max:1e3},{Min,Max}=throughputRange;if(volumeType!=ec2().EbsDeviceVolumeType.GP3)throw new Error("`throughput` property requires volumeType: `EbsDeviceVolumeType.GP3`");if(props.ebs?.throughput<Min||props.ebs?.throughput>Max)throw new Error(`throughput property takes a minimum of ${Min} and a maximum of ${Max}.`)}}if(advancedSecurityEnabled){if(!nodeToNodeEncryptionEnabled)throw new Error("Node-to-node encryption is required when fine-grained access control is enabled.");if(!encryptionAtRestEnabled)throw new Error("Encryption-at-rest is required when fine-grained access control is enabled.");if(!enforceHttps)throw new Error("Enforce HTTPS is required when fine-grained access control is enabled.")}if(props.logging?.auditLogEnabled&&!advancedSecurityEnabled)throw new Error("Fine-grained access control is required when audit logs publishing is enabled.");if(warmEnabled&&!dedicatedMasterEnabled)throw new Error("Dedicated master node is required when UltraWarm storage is enabled.");if(props.coldStorageEnabled&&!warmEnabled)throw new Error("You must enable UltraWarm storage to enable cold storage.");let cfnVpcOptions;securityGroups&&subnets&&(cfnVpcOptions={securityGroupIds:securityGroups.map(sg=>sg.securityGroupId),subnetIds:subnets.map(subnet=>subnet.subnetId)});const logGroups=[],logPublishing={};props.logging?.slowSearchLogEnabled?(this.slowSearchLogGroup=props.logging.slowSearchLogGroup??new(logs()).LogGroup(this,"SlowSearchLogs",{retention:logs().RetentionDays.ONE_MONTH}),logGroups.push(this.slowSearchLogGroup),logPublishing.SEARCH_SLOW_LOGS={enabled:!0,cloudWatchLogsLogGroupArn:this.slowSearchLogGroup.logGroupArn}):props.logging?.slowSearchLogEnabled===!1&&(logPublishing.SEARCH_SLOW_LOGS={enabled:!1}),props.logging?.slowIndexLogEnabled?(this.slowIndexLogGroup=props.logging.slowIndexLogGroup??new(logs()).LogGroup(this,"SlowIndexLogs",{retention:logs().RetentionDays.ONE_MONTH}),logGroups.push(this.slowIndexLogGroup),logPublishing.INDEX_SLOW_LOGS={enabled:!0,cloudWatchLogsLogGroupArn:this.slowIndexLogGroup.logGroupArn}):props.logging?.slowIndexLogEnabled===!1&&(logPublishing.INDEX_SLOW_LOGS={enabled:!1}),props.logging?.appLogEnabled?(this.appLogGroup=props.logging.appLogGroup??new(logs()).LogGroup(this,"AppLogs",{retention:logs().RetentionDays.ONE_MONTH}),logGroups.push(this.appLogGroup),logPublishing.ES_APPLICATION_LOGS={enabled:!0,cloudWatchLogsLogGroupArn:this.appLogGroup.logGroupArn}):props.logging?.appLogEnabled===!1&&(logPublishing.ES_APPLICATION_LOGS={enabled:!1}),props.logging?.auditLogEnabled?(this.auditLogGroup=props.logging.auditLogGroup??new(logs()).LogGroup(this,"AuditLogs",{retention:logs().RetentionDays.ONE_MONTH}),logGroups.push(this.auditLogGroup),logPublishing.AUDIT_LOGS={enabled:!0,cloudWatchLogsLogGroupArn:this.auditLogGroup?.logGroupArn}):props.logging?.auditLogEnabled===!1&&(logPublishing.AUDIT_LOGS={enabled:!1});let logGroupResourcePolicy=null;if(logGroups.length>0&&!props.suppressLogsResourcePolicy){const logPolicyStatement=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["logs:PutLogEvents","logs:CreateLogStream"],resources:logGroups.map(lg=>lg.logGroupArn),principals:[new(iam()).ServicePrincipal("es.amazonaws.com")]});logGroupResourcePolicy=new(log_group_resource_policy_1()).LogGroupResourcePolicy(this,`ESLogGroupPolicy${this.node.addr}`,{policyName:`ESLogPolicy${this.node.addr}`,policyStatements:[logPolicyStatement]})}let customEndpointCertificate;props.customEndpoint&&(props.customEndpoint.certificate?customEndpointCertificate=props.customEndpoint.certificate:customEndpointCertificate=new(acm()).Certificate(this,"CustomEndpointCertificate",{domainName:props.customEndpoint.domainName,validation:props.customEndpoint.hostedZone?acm().CertificateValidation.fromDns(props.customEndpoint.hostedZone):void 0}));let multiAzWithStandbyEnabled=props.capacity?.multiAzWithStandbyEnabled;if(multiAzWithStandbyEnabled===void 0&&cdk().FeatureFlags.of(this).isEnabled(cxapi().ENABLE_OPENSEARCH_MULTIAZ_WITH_STANDBY)&&(multiAzWithStandbyEnabled=!0),isSomeInstanceType("t3")&&multiAzWithStandbyEnabled)throw new Error("T3 instance type does not support Multi-AZ with standby feature.");const offPeakWindowEnabled=props.offPeakWindowEnabled??props.offPeakWindowStart!==void 0;offPeakWindowEnabled&&this.validateWindowStartTime(props.offPeakWindowStart);const samlAuthenticationEnabled=props.fineGrainedAccessControl?.samlAuthenticationEnabled??props.fineGrainedAccessControl?.samlAuthenticationOptions!==void 0;if(samlAuthenticationEnabled){if(!advancedSecurityEnabled)throw new Error("SAML authentication requires fine-grained access control to be enabled.");this.validateSamlAuthenticationOptions(props.fineGrainedAccessControl?.samlAuthenticationOptions)}if(this.domain=new(opensearchservice_generated_1()).CfnDomain(this,"Resource",{domainName:this.physicalName,engineVersion:props.version.version,clusterConfig:{coldStorageOptions:props.coldStorageEnabled!==void 0?{enabled:props.coldStorageEnabled}:void 0,dedicatedMasterEnabled,dedicatedMasterCount:dedicatedMasterEnabled?dedicatedMasterCount:void 0,dedicatedMasterType:dedicatedMasterEnabled?dedicatedMasterType:void 0,instanceCount,instanceType,multiAzWithStandbyEnabled,warmEnabled:warmEnabled||void 0,warmCount:warmEnabled?warmCount:void 0,warmType:warmEnabled?warmType:void 0,zoneAwarenessEnabled,zoneAwarenessConfig:zoneAwarenessEnabled?{availabilityZoneCount}:void 0},ebsOptions:{ebsEnabled,volumeSize:ebsEnabled?volumeSize:void 0,volumeType:ebsEnabled?volumeType:void 0,iops:ebsEnabled?props.ebs?.iops:void 0,throughput:ebsEnabled?props.ebs?.throughput:void 0},encryptionAtRestOptions:{enabled:encryptionAtRestEnabled,kmsKeyId:encryptionAtRestEnabled?props.encryptionAtRest?.kmsKey?.keyId:void 0},nodeToNodeEncryptionOptions:{enabled:nodeToNodeEncryptionEnabled},logPublishingOptions:logPublishing,cognitoOptions:props.cognitoDashboardsAuth?{enabled:!0,identityPoolId:props.cognitoDashboardsAuth?.identityPoolId,roleArn:props.cognitoDashboardsAuth?.role.roleArn,userPoolId:props.cognitoDashboardsAuth?.userPoolId}:void 0,vpcOptions:cfnVpcOptions,snapshotOptions:props.automatedSnapshotStartHour?{automatedSnapshotStartHour:props.automatedSnapshotStartHour}:void 0,domainEndpointOptions:{enforceHttps,tlsSecurityPolicy:props.tlsSecurityPolicy??TLSSecurityPolicy.TLS_1_0,...props.customEndpoint&&{customEndpointEnabled:!0,customEndpoint:props.customEndpoint.domainName,customEndpointCertificateArn:customEndpointCertificate.certificateArn}},advancedSecurityOptions:advancedSecurityEnabled?{enabled:!0,internalUserDatabaseEnabled,masterUserOptions:{masterUserArn,masterUserName,masterUserPassword:this.masterUserPassword?.unsafeUnwrap()},samlOptions:samlAuthenticationEnabled?{enabled:!0,idp:props.fineGrainedAccessControl&&props.fineGrainedAccessControl.samlAuthenticationOptions?{entityId:props.fineGrainedAccessControl.samlAuthenticationOptions.idpEntityId,metadataContent:props.fineGrainedAccessControl.samlAuthenticationOptions.idpMetadataContent}:void 0,masterUserName:props.fineGrainedAccessControl?.samlAuthenticationOptions?.masterUserName,masterBackendRole:props.fineGrainedAccessControl?.samlAuthenticationOptions?.masterBackendRole,rolesKey:props.fineGrainedAccessControl?.samlAuthenticationOptions?.rolesKey??"roles",subjectKey:props.fineGrainedAccessControl?.samlAuthenticationOptions?.subjectKey,sessionTimeoutMinutes:props.fineGrainedAccessControl?.samlAuthenticationOptions?.sessionTimeoutMinutes??60}:void 0}:void 0,advancedOptions:props.advancedOptions,offPeakWindowOptions:offPeakWindowEnabled?{enabled:offPeakWindowEnabled,offPeakWindow:{windowStartTime:props.offPeakWindowStart??{hours:22,minutes:0}}}:void 0,softwareUpdateOptions:props.enableAutoSoftwareUpdate?{autoSoftwareUpdateEnabled:props.enableAutoSoftwareUpdate}:void 0,ipAddressType:props.ipAddressType}),this.domain.applyRemovalPolicy(props.removalPolicy),props.enableVersionUpgrade&&(this.domain.cfnOptions.updatePolicy={...this.domain.cfnOptions.updatePolicy,enableVersionUpgrade:props.enableVersionUpgrade}),logGroupResourcePolicy&&this.domain.node.addDependency(logGroupResourcePolicy),props.domainName){if(!cdk().Token.isUnresolved(props.domainName)){if(!props.domainName.match(/^[a-z0-9\-]+$/))throw new Error(`Invalid domainName '${props.domainName}'. Valid characters are a-z (lowercase only), 0-9, and \u2013 (hyphen).`);if(props.domainName.length<3||props.domainName.length>28)throw new Error(`Invalid domainName '${props.domainName}'. It must be between 3 and 28 characters`);if(props.domainName[0]<"a"||props.domainName[0]>"z")throw new Error(`Invalid domainName '${props.domainName}'. It must start with a lowercase letter`)}this.node.addMetadata("aws:cdk:hasPhysicalName",props.domainName)}this.domainName=this.getResourceNameAttribute(this.domain.ref),this.domainId=this.domain.getAtt("Id").toString(),this.domainEndpoint=this.domain.getAtt("DomainEndpoint").toString(),this.domainArn=this.getResourceArnAttribute(this.domain.attrArn,{service:"es",resource:"domain",resourceName:this.physicalName}),props.customEndpoint?.hostedZone&&new(route53()).CnameRecord(this,"CnameRecord",{recordName:props.customEndpoint.domainName,zone:props.customEndpoint.hostedZone,domainName:this.domainEndpoint}),this.encryptionAtRestOptions=props.encryptionAtRest,props.accessPolicies&&this.addAccessPolicies(...props.accessPolicies),unsignedBasicAuthEnabled&&this.addAccessPolicies(unsignedAccessPolicy)}validateWindowStartTime(windowStartTime){if(windowStartTime){if(windowStartTime.hours<0||windowStartTime.hours>23)throw new Error(`Hours must be a value between 0 and 23, but got ${windowStartTime.hours}.`);if(windowStartTime.minutes<0||windowStartTime.minutes>59)throw new Error(`Minutes must be a value between 0 and 59, but got ${windowStartTime.minutes}.`)}}validateSamlAuthenticationOptions(samlAuthenticationOptions){if(!samlAuthenticationOptions)throw new Error("You need to specify at least an Entity ID and Metadata content for the SAML configuration");if(samlAuthenticationOptions.idpEntityId.length<8||samlAuthenticationOptions.idpEntityId.length>512)throw new Error(`SAML identity provider entity ID must be between 8 and 512 characters long, received ${samlAuthenticationOptions.idpEntityId.length}.`);if(samlAuthenticationOptions.idpMetadataContent.length<1||samlAuthenticationOptions.idpMetadataContent.length>1048576)throw new Error(`SAML identity provider metadata content must be between 1 and 1048576 characters long, received ${samlAuthenticationOptions.idpMetadataContent.length}.`);if(samlAuthenticationOptions.masterUserName&&(samlAuthenticationOptions.masterUserName.length<1||samlAuthenticationOptions.masterUserName.length>64))throw new Error(`SAML master username must be between 1 and 64 characters long, received ${samlAuthenticationOptions.masterUserName.length}.`);if(samlAuthenticationOptions.masterBackendRole&&(samlAuthenticationOptions.masterBackendRole.length<1||samlAuthenticationOptions.masterBackendRole.length>256))throw new Error(`SAML backend role must be between 1 and 256 characters long, received ${samlAuthenticationOptions.masterBackendRole.length}.`);if(samlAuthenticationOptions.sessionTimeoutMinutes&&(samlAuthenticationOptions.sessionTimeoutMinutes<1||samlAuthenticationOptions.sessionTimeoutMinutes>1440))throw new Error(`SAML session timeout must be a value between 1 and 1440, received ${samlAuthenticationOptions.sessionTimeoutMinutes}.`)}get connections(){if(!this._connections)throw new Error("Connections are only available on VPC enabled domains. Use the 'vpc' property to place a domain inside a VPC");return this._connections}addAccessPolicies(...accessPolicyStatements){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(accessPolicyStatements)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addAccessPolicies),error}accessPolicyStatements.length>0&&(this.accessPolicy?this.accessPolicy.addAccessPolicies(...accessPolicyStatements):(this.accessPolicy=new(opensearch_access_policy_1()).OpenSearchAccessPolicy(this,"AccessPolicy",{domainName:this.domainName,domainArn:this.domainArn,accessPolicies:accessPolicyStatements}),this.encryptionAtRestOptions?.kmsKey&&this.accessPolicy.grantPrincipal.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["kms:List*","kms:Describe*","kms:CreateGrant"],resources:[this.encryptionAtRestOptions.kmsKey.keyArn],effect:iam().Effect.ALLOW}))))}}exports.Domain=Domain,_a=JSII_RTTI_SYMBOL_1,Domain[_a]={fqn:"aws-cdk-lib.aws_opensearchservice.Domain",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],Domain.prototype,"addAccessPolicies",null);function extractNameFromEndpoint(domainEndpoint){const{hostname}=new(url_1()).URL(domainEndpoint),domain=hostname.split(".")[0],suffix="-"+domain.split("-").slice(-1)[0];return domain.split(suffix)[0]}function parseVersion(version){const elasticsearchPrefix="Elasticsearch_",openSearchPrefix="OpenSearch_",isElasticsearchVersion=version.version.startsWith(elasticsearchPrefix),versionStr=isElasticsearchVersion?version.version.substring(elasticsearchPrefix.length):version.version.substring(openSearchPrefix.length),firstDot=versionStr.indexOf(".");if(firstDot<1)throw new Error(`Invalid engine version: ${versionStr}. Version string needs to start with major and minor version (x.y).`);const secondDot=versionStr.indexOf(".",firstDot+1);try{return secondDot==-1?{versionNum:parseFloat(versionStr),isElasticsearchVersion}:{versionNum:parseFloat(versionStr.substring(0,secondDot)),isElasticsearchVersion}}catch{throw new Error(`Invalid engine version: ${versionStr}. Version string needs to start with major and minor version (x.y).`)}}function selectSubnets(vpc,vpcSubnets){const selected=[];for(const selection of vpcSubnets)selected.push(...vpc.selectSubnets(selection).subnets);return selected}function zoneAwarenessCheckShouldBeSkipped(vpc,vpcSubnets){for(const selection of vpcSubnets)if(vpc.selectSubnets(selection).isPendingLookup)return!0;return!1}function initializeInstanceType(defaultInstanceType,instanceType){return instanceType?cdk().Token.isUnresolved(instanceType)?instanceType:instanceType.toLowerCase():defaultInstanceType}function formatInstanceTypesList(instanceTypes,conjunction){return instanceTypes.map(type=>type.toUpperCase()).join(", ").replace(/, ([^,]*)$/,` ${conjunction} $1`)}
