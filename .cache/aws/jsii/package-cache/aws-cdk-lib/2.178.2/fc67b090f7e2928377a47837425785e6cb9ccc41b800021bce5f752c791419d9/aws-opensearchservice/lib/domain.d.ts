import { Construct } from 'constructs';
import { EngineVersion } from './version';
import * as acm from '../../aws-certificatemanager';
import { Metric, MetricOptions } from '../../aws-cloudwatch';
import * as ec2 from '../../aws-ec2';
import * as iam from '../../aws-iam';
import * as kms from '../../aws-kms';
import * as logs from '../../aws-logs';
import * as route53 from '../../aws-route53';
import * as cdk from '../../core';
/**
 * Configures the capacity of the cluster such as the instance type and the
 * number of instances.
 */
export interface CapacityConfig {
    /**
     * The number of instances to use for the master node.
     *
     * @default - no dedicated master nodes
     */
    readonly masterNodes?: number;
    /**
     * The hardware configuration of the computer that hosts the dedicated master
     * node, such as `m3.medium.search`. For valid values, see [Supported
     * Instance Types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html)
     * in the Amazon OpenSearch Service Developer Guide.
     *
     * @default - r5.large.search
     */
    readonly masterNodeInstanceType?: string;
    /**
     * The number of data nodes (instances) to use in the Amazon OpenSearch Service domain.
     *
     * @default - 1
     */
    readonly dataNodes?: number;
    /**
     * The instance type for your data nodes, such as
     * `m3.medium.search`. For valid values, see [Supported Instance
     * Types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html)
     * in the Amazon OpenSearch Service Developer Guide.
     *
     * @default - r5.large.search
     */
    readonly dataNodeInstanceType?: string;
    /**
     * The number of UltraWarm nodes (instances) to use in the Amazon OpenSearch Service domain.
     *
     * @default - no UltraWarm nodes
     */
    readonly warmNodes?: number;
    /**
     * The instance type for your UltraWarm node, such as `ultrawarm1.medium.search`.
     * For valid values, see [UltraWarm Storage
     * Limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#limits-ultrawarm)
     * in the Amazon OpenSearch Service Developer Guide.
     *
     * @default - ultrawarm1.medium.search
     */
    readonly warmInstanceType?: string;
    /**
     * Indicates whether Multi-AZ with Standby deployment option is enabled.
     * For more information, see [Multi-AZ with
     * Standby](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html#managedomains-za-standby)
     *
     * @default - multi-az with standby if the feature flag `ENABLE_OPENSEARCH_MULTIAZ_WITH_STANDBY`
     * is true, no multi-az with standby otherwise
     */
    readonly multiAzWithStandbyEnabled?: boolean;
}
/**
 * Specifies zone awareness configuration options.
 */
export interface ZoneAwarenessConfig {
    /**
     * Indicates whether to enable zone awareness for the Amazon OpenSearch Service domain.
     * When you enable zone awareness, Amazon OpenSearch Service allocates the nodes and replica
     * index shards that belong to a cluster across two Availability Zones (AZs)
     * in the same region to prevent data loss and minimize downtime in the event
     * of node or data center failure. Don't enable zone awareness if your cluster
     * has no replica index shards or is a single-node cluster. For more information,
     * see [Configuring a Multi-AZ Domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html)
     * in the Amazon OpenSearch Service Developer Guide.
     *
     * @default - false
     */
    readonly enabled?: boolean;
    /**
     * If you enabled multiple Availability Zones (AZs), the number of AZs that you
     * want the domain to use. Valid values are 2 and 3.
     *
     * @default - 2 if zone awareness is enabled.
     */
    readonly availabilityZoneCount?: number;
}
/**
 * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that
 * are attached to data nodes in the Amazon OpenSearch Service domain. For more information, see
 * [Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 * in the Amazon Elastic Compute Cloud Developer Guide.
 */
export interface EbsOptions {
    /**
     * Specifies whether Amazon EBS volumes are attached to data nodes in the
     * Amazon OpenSearch Service domain.
     *
     * @default - true
     */
    readonly enabled?: boolean;
    /**
     * The number of I/O operations per second (IOPS) that the volume
     * supports. This property applies only to the gp3 and Provisioned IOPS (SSD) EBS
     * volume type.
     *
     * @default - iops are not set.
     */
    readonly iops?: number;
    /**
     * The throughput (in MiB/s) of the EBS volumes attached to data nodes.
     * This property applies only to the gp3 volume type.
     *
     * @default - throughput is not set.
     */
    readonly throughput?: number;
    /**
     * The size (in GiB) of the EBS volume for each data node. The minimum and
     * maximum size of an EBS volume depends on the EBS volume type and the
     * instance type to which it is attached.  For  valid values, see
     * [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource)
     * in the Amazon OpenSearch Service Developer Guide.
     *
     * @default 10
     */
    readonly volumeSize?: number;
    /**
     * The EBS volume type to use with the Amazon OpenSearch Service domain, such as standard, gp2, io1.
     *
     * @default gp2
     */
    readonly volumeType?: ec2.EbsDeviceVolumeType;
}
/**
 * Configures log settings for the domain.
 */
export interface LoggingOptions {
    /**
     * Specify if slow search logging should be set up.
     * Requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.
     * An explicit `false` is required when disabling it from `true`.
     *
     * @default - false
     */
    readonly slowSearchLogEnabled?: boolean;
    /**
     * Log slow searches to this log group.
     *
     * @default - a new log group is created if slow search logging is enabled
     */
    readonly slowSearchLogGroup?: logs.ILogGroup;
    /**
     * Specify if slow index logging should be set up.
     * Requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.
     * An explicit `false` is required when disabling it from `true`.
     *
     * @default - false
     */
    readonly slowIndexLogEnabled?: boolean;
    /**
     * Log slow indices to this log group.
     *
     * @default - a new log group is created if slow index logging is enabled
     */
    readonly slowIndexLogGroup?: logs.ILogGroup;
    /**
     * Specify if Amazon OpenSearch Service application logging should be set up.
     * Requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.
     * An explicit `false` is required when disabling it from `true`.
     *
     * @default - false
     */
    readonly appLogEnabled?: boolean;
    /**
     * Log Amazon OpenSearch Service application logs to this log group.
     *
     * @default - a new log group is created if app logging is enabled
     */
    readonly appLogGroup?: logs.ILogGroup;
    /**
     * Specify if Amazon OpenSearch Service audit logging should be set up.
     * Requires Elasticsearch version 6.7 or later or OpenSearch version 1.0 or later and fine grained access control to be enabled.
     *
     * @default - false
     */
    readonly auditLogEnabled?: boolean;
    /**
     * Log Amazon OpenSearch Service audit logs to this log group.
     *
     * @default - a new log group is created if audit logging is enabled
     */
    readonly auditLogGroup?: logs.ILogGroup;
}
/**
 * Whether the domain should encrypt data at rest, and if so, the AWS Key
 * Management Service (KMS) key to use. Can only be used to create a new domain,
 * not update an existing one. Requires Elasticsearch version 5.1 or later or OpenSearch version 1.0 or later.
 */
export interface EncryptionAtRestOptions {
    /**
     * Specify true to enable encryption at rest.
     *
     * @default - encryption at rest is disabled.
     */
    readonly enabled?: boolean;
    /**
     * Supply if using KMS key for encryption at rest.
     *
     * @default - uses default aws/es KMS key.
     */
    readonly kmsKey?: kms.IKey;
}
/**
 * Configures Amazon OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
 * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html
 */
export interface CognitoOptions {
    /**
     * The Amazon Cognito identity pool ID that you want Amazon OpenSearch Service to use for OpenSearch Dashboards authentication.
     */
    readonly identityPoolId: string;
    /**
     * A role that allows Amazon OpenSearch Service to configure your user pool and identity pool. It must have the `AmazonESCognitoAccess` policy attached to it.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html#cognito-auth-prereq
     */
    readonly role: iam.IRole;
    /**
     * The Amazon Cognito user pool ID that you want Amazon OpenSearch Service to use for OpenSearch Dashboards authentication.
     */
    readonly userPoolId: string;
}
/**
 * The minimum TLS version required for traffic to the domain.
 */
export declare enum TLSSecurityPolicy {
    /** Cipher suite TLS 1.0 */
    TLS_1_0 = "Policy-Min-TLS-1-0-2019-07",
    /** Cipher suite TLS 1.2 */
    TLS_1_2 = "Policy-Min-TLS-1-2-2019-07",
    /** Cipher suite TLS 1.2 to 1.3 with perfect forward secrecy (PFS) */
    TLS_1_2_PFS = "Policy-Min-TLS-1-2-PFS-2023-10"
}
/**
 * Container for information about the SAML configuration for OpenSearch Dashboards.
 */
export interface SAMLOptionsProperty {
    /**
     * The unique entity ID of the application in the SAML identity provider.
     */
    readonly idpEntityId: string;
    /**
     * The metadata of the SAML application, in XML format.
     */
    readonly idpMetadataContent: string;
    /**
     * The SAML master username, which is stored in the domain's internal user database.
     * This SAML user receives full permission in OpenSearch Dashboards/Kibana.
     * Creating a new master username does not delete any existing master usernames.
     *
     * @default - No master user name is configured
     */
    readonly masterUserName?: string;
    /**
     * The backend role that the SAML master user is mapped to.
     * Any users with this backend role receives full permission in OpenSearch Dashboards/Kibana.
     * To use a SAML master backend role, configure the `rolesKey` property.
     *
     * @default - The master user is not mapped to a backend role
     */
    readonly masterBackendRole?: string;
    /**
     * Element of the SAML assertion to use for backend roles.
     *
     * @default - roles
     */
    readonly rolesKey?: string;
    /**
     * Element of the SAML assertion to use for the user name.
     *
     * @default - NameID element of the SAML assertion fot the user name
     */
    readonly subjectKey?: string;
    /**
     * The duration, in minutes, after which a user session becomes inactive.
     *
     * @default - 60
     */
    readonly sessionTimeoutMinutes?: number;
}
/**
 * Specifies options for fine-grained access control.
 */
export interface AdvancedSecurityOptions {
    /**
     * ARN for the master user. Only specify this or masterUserName, but not both.
     *
     * @default - fine-grained access control is disabled
     */
    readonly masterUserArn?: string;
    /**
     * Username for the master user. Only specify this or masterUserArn, but not both.
     *
     * @default - fine-grained access control is disabled
     */
    readonly masterUserName?: string;
    /**
     * Password for the master user.
     *
     * You can use `SecretValue.unsafePlainText` to specify a password in plain text or
     * use `secretsmanager.Secret.fromSecretAttributes` to reference a secret in
     * Secrets Manager.
     *
     * @default - A Secrets Manager generated password
     */
    readonly masterUserPassword?: cdk.SecretValue;
    /**
     * True to enable SAML authentication for a domain.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/saml.html
     *
     * @default - SAML authentication is disabled. Enabled if `samlAuthenticationOptions` is set.
     */
    readonly samlAuthenticationEnabled?: boolean;
    /**
     * Container for information about the SAML configuration for OpenSearch Dashboards.
     * If set, `samlAuthenticationEnabled` will be enabled.
     *
     * @default - no SAML authentication options
     */
    readonly samlAuthenticationOptions?: SAMLOptionsProperty;
}
/**
 * Configures a custom domain endpoint for the Amazon OpenSearch Service domain
 */
export interface CustomEndpointOptions {
    /**
     * The custom domain name to assign
     */
    readonly domainName: string;
    /**
     * The certificate to use
     * @default - create a new one
     */
    readonly certificate?: acm.ICertificate;
    /**
     * The hosted zone in Route53 to create the CNAME record in
     * @default - do not create a CNAME
     */
    readonly hostedZone?: route53.IHostedZone;
}
export interface WindowStartTime {
    /**
     * The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time.
     * For example, 17 refers to 5:00 P.M. UTC.
     *
     * @default - 22
     */
    readonly hours: number;
    /**
     * The start minute of the window, in UTC.
     *
     * @default - 0
     */
    readonly minutes: number;
}
/**
 * The IP address type for the domain.
 */
export declare enum IpAddressType {
    /**
     * IPv4 addresses only
     */
    IPV4 = "ipv4",
    /**
     * IPv4 and IPv6 addresses
     */
    DUAL_STACK = "dualstack"
}
/**
 * Properties for an Amazon OpenSearch Service domain.
 */
export interface DomainProps {
    /**
     * Domain access policies.
     *
     * @default - No access policies.
     */
    readonly accessPolicies?: iam.PolicyStatement[];
    /**
     * Additional options to specify for the Amazon OpenSearch Service domain.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options
     * @default - no advanced options are specified
     */
    readonly advancedOptions?: {
        [key: string]: (string);
    };
    /**
     * Configures Amazon OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
     *
     * @default - Cognito not used for authentication to OpenSearch Dashboards.
     */
    readonly cognitoDashboardsAuth?: CognitoOptions;
    /**
     * Enforces a particular physical domain name.
     *
     * @default - A name will be auto-generated.
     */
    readonly domainName?: string;
    /**
     * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that
     * are attached to data nodes in the Amazon OpenSearch Service domain.
     *
     * @default - 10 GiB General Purpose (SSD) volumes per node.
     */
    readonly ebs?: EbsOptions;
    /**
     * The cluster capacity configuration for the Amazon OpenSearch Service domain.
     *
     * @default - 1 r5.large.search data node; no dedicated master nodes.
     */
    readonly capacity?: CapacityConfig;
    /**
     * The cluster zone awareness configuration for the Amazon OpenSearch Service domain.
     *
     * @default - no zone awareness (1 AZ)
     */
    readonly zoneAwareness?: ZoneAwarenessConfig;
    /**
     * The Elasticsearch/OpenSearch version that your domain will leverage.
     */
    readonly version: EngineVersion;
    /**
     * Encryption at rest options for the cluster.
     *
     * @default - No encryption at rest
     */
    readonly encryptionAtRest?: EncryptionAtRestOptions;
    /**
     * Configuration log publishing configuration options.
     *
     * @default - No logs are published
     */
    readonly logging?: LoggingOptions;
    /**
     * Specify true to enable node to node encryption.
     * Requires Elasticsearch version 6.0 or later or OpenSearch version 1.0 or later.
     *
     * @default - Node to node encryption is not enabled.
     */
    readonly nodeToNodeEncryption?: boolean;
    /**
     * The hour in UTC during which the service takes an automated daily snapshot
     * of the indices in the Amazon OpenSearch Service domain. Only applies for Elasticsearch versions
     * below 5.3.
     *
     * @default - Hourly automated snapshots not used
     */
    readonly automatedSnapshotStartHour?: number;
    /**
     * Place the domain inside this VPC.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html
     * @default - Domain is not placed in a VPC.
     */
    readonly vpc?: ec2.IVpc;
    /**
     * The list of security groups that are associated with the VPC endpoints
     * for the domain.
     *
     * Only used if `vpc` is specified.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
     * @default - One new security group is created.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * The specific vpc subnets the domain will be placed in. You must provide one subnet for each Availability Zone
     * that your domain uses. For example, you must specify three subnet IDs for a three Availability Zone
     * domain.
     *
     * Only used if `vpc` is specified.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
     * @default - All private subnets.
     */
    readonly vpcSubnets?: ec2.SubnetSelection[];
    /**
     * True to require that all traffic to the domain arrive over HTTPS.
     *
     * @default - false
     */
    readonly enforceHttps?: boolean;
    /**
     * The minimum TLS version required for traffic to the domain.
     *
     * @default - TLSSecurityPolicy.TLS_1_0
     */
    readonly tlsSecurityPolicy?: TLSSecurityPolicy;
    /**
     * Specifies options for fine-grained access control.
     * Requires Elasticsearch version 6.7 or later or OpenSearch version 1.0 or later. Enabling fine-grained access control
     * also requires encryption of data at rest and node-to-node encryption, along with
     * enforced HTTPS.
     *
     * @default - fine-grained access control is disabled
     */
    readonly fineGrainedAccessControl?: AdvancedSecurityOptions;
    /**
     * Configures the domain so that unsigned basic auth is enabled. If no master user is provided a default master user
     * with username `admin` and a dynamically generated password stored in KMS is created. The password can be retrieved
     * by getting `masterUserPassword` from the domain instance.
     *
     * Setting this to true will also add an access policy that allows unsigned
     * access, enable node to node encryption, encryption at rest. If conflicting
     * settings are encountered (like disabling encryption at rest) enabling this
     * setting will cause a failure.
     *
     * @default - false
     */
    readonly useUnsignedBasicAuth?: boolean;
    /**
     * To upgrade an Amazon OpenSearch Service domain to a new version, rather than replacing the entire
     * domain resource, use the EnableVersionUpgrade update policy.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeopensearchdomain
     *
     * @default - false
     */
    readonly enableVersionUpgrade?: boolean;
    /**
     * Policy to apply when the domain is removed from the stack
     *
     * @default RemovalPolicy.RETAIN
     */
    readonly removalPolicy?: cdk.RemovalPolicy;
    /**
     * To configure a custom domain configure these options
     *
     * If you specify a Route53 hosted zone it will create a CNAME record and use DNS validation for the certificate
     *
     * @default - no custom domain endpoint will be configured
     */
    readonly customEndpoint?: CustomEndpointOptions;
    /**
     * Options for enabling a domain's off-peak window, during which OpenSearch Service can perform mandatory
     * configuration changes on the domain.
     *
     * Off-peak windows were introduced on February 16, 2023.
     * All domains created before this date have the off-peak window disabled by default.
     * You must manually enable and configure the off-peak window for these domains.
     * All domains created after this date will have the off-peak window enabled by default.
     * You can't disable the off-peak window for a domain after it's enabled.
     *
     * @see https://docs.aws.amazon.com/it_it/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html
     *
     * @default - Disabled for domains created before February 16, 2023. Enabled for domains created after. Enabled if `offPeakWindowStart` is set.
     */
    readonly offPeakWindowEnabled?: boolean;
    /**
     * Start time for the off-peak window, in Coordinated Universal Time (UTC).
     * The window length will always be 10 hours, so you can't specify an end time.
     * For example, if you specify 11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.
     *
     * @default - 10:00 P.M. local time
     */
    readonly offPeakWindowStart?: WindowStartTime;
    /**
     * Specifies whether automatic service software updates are enabled for the domain.
     *
     * @see https://docs.aws.amazon.com/it_it/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html
     *
     * @default - false
     */
    readonly enableAutoSoftwareUpdate?: boolean;
    /**
     * Specify either dual stack or IPv4 as your IP address type.
     * Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option.
     *
     * If you set your IP address type to dual stack, you can't change your address type later.
     *
     * @default - IpAddressType.IPV4
     */
    readonly ipAddressType?: IpAddressType;
    /**
     * Specify whether to create a CloudWatch Logs resource policy or not.
     *
     * When logging is enabled for the domain, a CloudWatch Logs resource policy is created by default.
     * However, CloudWatch Logs supports only 10 resource policies per region.
     * If you enable logging for several domains, it may hit the quota and cause an error.
     * By setting this property to true, creating a resource policy is suppressed, allowing you to avoid this problem.
     *
     * If you set this option to true, you must create a resource policy before deployment.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html
     *
     * @default - false
     */
    readonly suppressLogsResourcePolicy?: boolean;
    /**
     * Whether to enable or disable cold storage on the domain. You must enable UltraWarm storage to enable cold storage.
     *
     * @see https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html
     *
     * @default - undefined
     */
    readonly coldStorageEnabled?: boolean;
}
/**
 * An interface that represents an Amazon OpenSearch Service domain - either created with the CDK, or an existing one.
 */
export interface IDomain extends cdk.IResource {
    /**
     * Arn of the Amazon OpenSearch Service domain.
     *
     * @attribute
     */
    readonly domainArn: string;
    /**
     * Domain name of the Amazon OpenSearch Service domain.
     *
     * @attribute
     */
    readonly domainName: string;
    /**
     * Identifier of the Amazon OpenSearch Service domain.
     *
     * @attribute
     */
    readonly domainId: string;
    /**
     * Endpoint of the Amazon OpenSearch Service domain.
     *
     * @attribute
     */
    readonly domainEndpoint: string;
    /**
     * Grant read permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantRead(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantReadWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexRead(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexReadWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathRead(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathReadWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Return the given named metric for this domain.
     */
    metric(metricName: string, props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is red.
     *
     * @default maximum over 5 minutes
     */
    metricClusterStatusRed(props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is yellow.
     *
     * @default maximum over 5 minutes
     */
    metricClusterStatusYellow(props?: MetricOptions): Metric;
    /**
     * Metric for the storage space of nodes in the cluster.
     *
     * @default minimum over 5 minutes
     */
    metricFreeStorageSpace(props?: MetricOptions): Metric;
    /**
     * Metric for the cluster blocking index writes.
     *
     * @default maximum over 1 minute
     */
    metricClusterIndexWritesBlocked(props?: MetricOptions): Metric;
    /**
     * Metric for the number of nodes.
     *
     * @default minimum over 1 hour
     */
    metricNodes(props?: MetricOptions): Metric;
    /**
     * Metric for automated snapshot failures.
     *
     * @default maximum over 5 minutes
     */
    metricAutomatedSnapshotFailure(props?: MetricOptions): Metric;
    /**
     * Metric for CPU utilization.
     *
     * @default maximum over 5 minutes
     */
    metricCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for JVM memory pressure.
     *
     * @default maximum over 5 minutes
     */
    metricJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for master CPU utilization.
     *
     * @default maximum over 5 minutes
     */
    metricMasterCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for master JVM memory pressure.
     *
     * @default maximum over 5 minutes
     */
    metricMasterJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key errors.
     *
     * @default maximum over 5 minutes
     */
    metricKMSKeyError(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key being inaccessible.
     *
     * @default maximum over 5 minutes
     */
    metricKMSKeyInaccessible(props?: MetricOptions): Metric;
    /**
     * Metric for number of searchable documents.
     *
     * @default maximum over 5 minutes
     */
    metricSearchableDocuments(props?: MetricOptions): Metric;
    /**
     * Metric for search latency.
     *
     * @default p99 over 5 minutes
     */
    metricSearchLatency(props?: MetricOptions): Metric;
    /**
     * Metric for indexing latency.
     *
     * @default p99 over 5 minutes
     */
    metricIndexingLatency(props?: MetricOptions): Metric;
}
/**
 * A new or imported domain.
 */
declare abstract class DomainBase extends cdk.Resource implements IDomain {
    abstract readonly domainArn: string;
    abstract readonly domainName: string;
    abstract readonly domainId: string;
    abstract readonly domainEndpoint: string;
    /**
     * Grant read permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantRead(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for this domain and its contents to an IAM
     * principal (Role/Group/User).
     *
     * @param identity The principal
     */
    grantReadWrite(identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexRead(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for an index in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param index The index to grant permissions for
     * @param identity The principal
     */
    grantIndexReadWrite(index: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathRead(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Grant read/write permissions for a specific path in this domain to an IAM
     * principal (Role/Group/User).
     *
     * @param path The path to grant permissions for
     * @param identity The principal
     */
    grantPathReadWrite(path: string, identity: iam.IGrantable): iam.Grant;
    /**
     * Return the given named metric for this domain.
     */
    metric(metricName: string, props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is red.
     *
     * @default maximum over 5 minutes
     */
    metricClusterStatusRed(props?: MetricOptions): Metric;
    /**
     * Metric for the time the cluster status is yellow.
     *
     * @default maximum over 5 minutes
     */
    metricClusterStatusYellow(props?: MetricOptions): Metric;
    /**
     * Metric for the storage space of nodes in the cluster.
     *
     * @default minimum over 5 minutes
     */
    metricFreeStorageSpace(props?: MetricOptions): Metric;
    /**
     * Metric for the cluster blocking index writes.
     *
     * @default maximum over 1 minute
     */
    metricClusterIndexWritesBlocked(props?: MetricOptions): Metric;
    /**
     * Metric for the number of nodes.
     *
     * @default minimum over 1 hour
     */
    metricNodes(props?: MetricOptions): Metric;
    /**
     * Metric for automated snapshot failures.
     *
     * @default maximum over 5 minutes
     */
    metricAutomatedSnapshotFailure(props?: MetricOptions): Metric;
    /**
     * Metric for CPU utilization.
     *
     * @default maximum over 5 minutes
     */
    metricCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for JVM memory pressure.
     *
     * @default maximum over 5 minutes
     */
    metricJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for master CPU utilization.
     *
     * @default maximum over 5 minutes
     */
    metricMasterCPUUtilization(props?: MetricOptions): Metric;
    /**
     * Metric for master JVM memory pressure.
     *
     * @default maximum over 5 minutes
     */
    metricMasterJVMMemoryPressure(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key errors.
     *
     * @default maximum over 5 minutes
     */
    metricKMSKeyError(props?: MetricOptions): Metric;
    /**
     * Metric for KMS key being inaccessible.
     *
     * @default maximum over 5 minutes
     */
    metricKMSKeyInaccessible(props?: MetricOptions): Metric;
    /**
     * Metric for number of searchable documents.
     *
     * @default maximum over 5 minutes
     */
    metricSearchableDocuments(props?: MetricOptions): Metric;
    /**
     * Metric for search latency.
     *
     * @default p99 over 5 minutes
     */
    metricSearchLatency(props?: MetricOptions): Metric;
    /**
     * Metric for indexing latency.
     *
     * @default p99 over 5 minutes
     */
    metricIndexingLatency(props?: MetricOptions): Metric;
    private grant;
}
/**
 * Reference to an Amazon OpenSearch Service domain.
 */
export interface DomainAttributes {
    /**
     * The ARN of the Amazon OpenSearch Service domain.
     */
    readonly domainArn: string;
    /**
     * The domain endpoint of the Amazon OpenSearch Service domain.
     */
    readonly domainEndpoint: string;
}
/**
 * Provides an Amazon OpenSearch Service domain.
 */
export declare class Domain extends DomainBase implements IDomain, ec2.IConnectable {
    /**
     * Creates a domain construct that represents an external domain via domain endpoint.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param domainEndpoint The domain's endpoint.
     */
    static fromDomainEndpoint(scope: Construct, id: string, domainEndpoint: string): IDomain;
    /**
     * Creates a domain construct that represents an external domain.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param attrs A `DomainAttributes` object.
     */
    static fromDomainAttributes(scope: Construct, id: string, attrs: DomainAttributes): IDomain;
    readonly domainArn: string;
    readonly domainName: string;
    readonly domainId: string;
    readonly domainEndpoint: string;
    /**
     * Log group that slow searches are logged to.
     *
     * @attribute
     */
    readonly slowSearchLogGroup?: logs.ILogGroup;
    /**
     * Log group that slow indices are logged to.
     *
     * @attribute
     */
    readonly slowIndexLogGroup?: logs.ILogGroup;
    /**
     * Log group that application logs are logged to.
     *
     * @attribute
     */
    readonly appLogGroup?: logs.ILogGroup;
    /**
     * Log group that audit logs are logged to.
     *
     * @attribute
     */
    readonly auditLogGroup?: logs.ILogGroup;
    /**
     * Master user password if fine grained access control is configured.
     */
    readonly masterUserPassword?: cdk.SecretValue;
    private readonly domain;
    private accessPolicy?;
    private encryptionAtRestOptions?;
    private readonly _connections;
    constructor(scope: Construct, id: string, props: DomainProps);
    /**
     * Validate windowStartTime property according to
     * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html
     */
    private validateWindowStartTime;
    /**
     * Validate SAML configuration according to
     * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html
     */
    private validateSamlAuthenticationOptions;
    /**
     * Manages network connections to the domain. This will throw an error in case the domain
     * is not placed inside a VPC.
     */
    get connections(): ec2.Connections;
    /**
     * Add policy statements to the domain access policy
     */
    addAccessPolicies(...accessPolicyStatements: iam.PolicyStatement[]): void;
}
export {};
