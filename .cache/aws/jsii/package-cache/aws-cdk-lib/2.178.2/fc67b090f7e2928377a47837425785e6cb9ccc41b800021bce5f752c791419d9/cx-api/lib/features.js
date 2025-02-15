"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LAMBDA_NODEJS_USE_LATEST_RUNTIME=exports.ENABLE_OPENSEARCH_MULTIAZ_WITH_STANDBY=exports.AUTOSCALING_GENERATE_LAUNCH_TEMPLATE=exports.EFS_MOUNTTARGET_ORDERINSENSITIVE_LOGICAL_ID=exports.EFS_DENY_ANONYMOUS_ACCESS=exports.KMS_ALIAS_NAME_REF=exports.INCLUDE_PREFIX_IN_UNIQUE_NAME_GENERATION=exports.APIGATEWAY_REQUEST_VALIDATOR_UNIQUE_ID=exports.EC2_RESTRICT_DEFAULT_SECURITY_GROUP=exports.ENABLE_EMR_SERVICE_POLICY_V2=exports.REDSHIFT_COLUMN_ID=exports.SECRETS_MANAGER_TARGET_ATTACHMENT_RESOURCE_POLICY=exports.EC2_LAUNCH_TEMPLATE_DEFAULT_USER_DATA=exports.APIGATEWAY_AUTHORIZER_CHANGE_DEPLOYMENT_LOGICAL_ID=exports.CODEDEPLOY_REMOVE_ALARMS_FROM_DEPLOYMENT_GROUP=exports.DATABASE_PROXY_UNIQUE_RESOURCE_NAME=exports.AWS_CUSTOM_RESOURCE_LATEST_SDK_DEFAULT=exports.ROUTE53_PATTERNS_USE_CERTIFICATE=exports.S3_SERVER_ACCESS_LOGS_USE_BUCKET_POLICY=exports.ECS_DISABLE_EXPLICIT_DEPLOYMENT_CONTROLLER_FOR_CIRCUIT_BREAKER=exports.EVENTS_TARGET_QUEUE_SAME_ACCOUNT=exports.ENABLE_PARTITION_LITERALS=exports.APIGATEWAY_DISABLE_CLOUDWATCH_ROLE=exports.SNS_SUBSCRIPTIONS_SQS_DECRYPTION_POLICY=exports.S3_CREATE_DEFAULT_LOGGING_POLICY=exports.CODEPIPELINE_CROSS_ACCOUNT_KEY_ALIAS_STACK_SAFE_RESOURCE_NAME=exports.VALIDATE_SNAPSHOT_REMOVAL_POLICY=exports.IAM_IMPORTED_ROLE_STACK_SAFE_DEFAULT_POLICY_NAME=exports.IAM_MINIMIZE_POLICIES=exports.ECS_ARN_FORMAT_INCLUDES_CLUSTER_NAME=exports.EC2_UNIQUE_IMDSV2_LAUNCH_TEMPLATE_NAME=exports.ECS_SERVICE_EXTENSIONS_ENABLE_DEFAULT_LOG_DRIVER=exports.TARGET_PARTITIONS=exports.CHECK_SECRET_USAGE=exports.CLOUDFRONT_DEFAULT_SECURITY_POLICY_TLS_V1_2_2021=exports.LAMBDA_RECOGNIZE_LAYER_VERSION=exports.LAMBDA_RECOGNIZE_VERSION_PROPS=exports.EFS_DEFAULT_ENCRYPTION_AT_REST=exports.APIGATEWAY_USAGEPLANKEY_ORDERINSENSITIVE_ID=exports.RDS_LOWERCASE_DB_IDENTIFIER=exports.ECS_REMOVE_DEFAULT_DESIRED_COUNT=exports.S3_GRANT_WRITE_WITHOUT_ACL=exports.KMS_DEFAULT_KEY_POLICIES=exports.SECRETS_MANAGER_PARSE_OWNED_SECRET_NAME=exports.DOCKER_IGNORE_SUPPORT=exports.STACK_RELATIVE_EXPORTS_CONTEXT=exports.NEW_STYLE_STACK_SYNTHESIS_CONTEXT=exports.ENABLE_DIFF_NO_FAIL=exports.ENABLE_DIFF_NO_FAIL_CONTEXT=exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT=void 0,exports.NEW_PROJECT_DEFAULT_CONTEXT=exports.FUTURE_FLAGS=exports.FUTURE_FLAGS_EXPIRED=exports.CURRENT_VERSION_FLAG_DEFAULTS=exports.CURRENTLY_RECOMMENDED_FLAGS=exports.CURRENT_VERSION_EXPIRED_FLAGS=exports.FLAGS=exports.ENABLE_ADDITIONAL_METADATA_COLLECTION=exports.IAM_OIDC_REJECT_UNAUTHORIZED_CONNECTIONS=exports.ALB_DUALSTACK_WITHOUT_PUBLIC_IPV4_SECURITY_GROUP_RULES_DEFAULT=exports.Disable_ECS_IMDS_Blocking=exports.Enable_IMDS_Blocking_Deprecated_Feature=exports.USER_POOL_DOMAIN_NAME_METHOD_WITHOUT_CUSTOM_RESOURCE=exports.ASPECT_STABILIZATION=exports.BASTION_HOST_USE_AMAZON_LINUX_2023_BY_DEFAULT=exports.STEPFUNCTIONS_TASKS_FIX_RUN_ECS_TASK_POLICY=exports.LAMBDA_NODEJS_SDK_V3_EXCLUDE_SMITHY_PACKAGES=exports.CFN_INCLUDE_REJECT_COMPLEX_RESOURCE_UPDATE_CREATE_POLICY_INTRINSICS=exports.USE_CORRECT_VALUE_FOR_INSTANCE_RESOURCE_ID_PROPERTY=exports.APPSYNC_GRAPHQLAPI_SCOPE_LAMBDA_FUNCTION_PERMISSION=exports.EC2_SUM_TIMEOUT_ENABLED=exports.DYNAMODB_TABLEV2_RESOURCE_POLICY_PER_REPLICA=exports.REDUCE_EC2_FARGATE_CLOUDWATCH_PERMISSIONS=exports.USE_NEW_S3URI_PARAMETERS_FOR_BEDROCK_INVOKE_MODEL_TASK=exports.S3_KEEP_NOTIFICATION_IN_IMPORTED_BUCKET=exports.LOG_API_RESPONSE_DATA_PROPERTY_TRUE_DEFAULT=exports.ECS_REMOVE_DEFAULT_DEPLOYMENT_ALARM=exports.EBS_DEFAULT_GP3=exports.EKS_NODEGROUP_NAME=exports.PIPELINE_REDUCE_ASSET_ROLE_TRUST_SCOPE=exports.KMS_REDUCE_CROSS_ACCOUNT_REGION_POLICY_SCOPE=exports.CODEPIPELINE_DEFAULT_PIPELINE_TYPE_TO_V2=exports.CODEPIPELINE_CROSS_ACCOUNT_KEYS_DEFAULT_VALUE_TO_FALSE=exports.LAMBDA_PERMISSION_LOGICAL_ID_FOR_LAMBDA_ACTION=exports.CODECOMMIT_SOURCE_ACTION_DEFAULT_BRANCH_NAME=exports.APPSYNC_ENABLE_USE_ARN_IDENTIFIER_SOURCE_API_ASSOCIATION=exports.AURORA_CLUSTER_CHANGE_SCOPE_OF_INSTANCE_PARAMETER_GROUP_WITH_EACH_PARAMETERS=exports.RDS_PREVENT_RENDERING_DEPRECATED_CREDENTIALS=void 0,exports.futureFlagDefault=futureFlagDefault;var flag_modeling_1=()=>{var tmp=require("./private/flag-modeling");return flag_modeling_1=()=>tmp,tmp};exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT="@aws-cdk/core:enableStackNameDuplicates",exports.ENABLE_DIFF_NO_FAIL_CONTEXT="aws-cdk:enableDiffNoFail",exports.ENABLE_DIFF_NO_FAIL=exports.ENABLE_DIFF_NO_FAIL_CONTEXT,exports.NEW_STYLE_STACK_SYNTHESIS_CONTEXT="@aws-cdk/core:newStyleStackSynthesis",exports.STACK_RELATIVE_EXPORTS_CONTEXT="@aws-cdk/core:stackRelativeExports",exports.DOCKER_IGNORE_SUPPORT="@aws-cdk/aws-ecr-assets:dockerIgnoreSupport",exports.SECRETS_MANAGER_PARSE_OWNED_SECRET_NAME="@aws-cdk/aws-secretsmanager:parseOwnedSecretName",exports.KMS_DEFAULT_KEY_POLICIES="@aws-cdk/aws-kms:defaultKeyPolicies",exports.S3_GRANT_WRITE_WITHOUT_ACL="@aws-cdk/aws-s3:grantWriteWithoutAcl",exports.ECS_REMOVE_DEFAULT_DESIRED_COUNT="@aws-cdk/aws-ecs-patterns:removeDefaultDesiredCount",exports.RDS_LOWERCASE_DB_IDENTIFIER="@aws-cdk/aws-rds:lowercaseDbIdentifier",exports.APIGATEWAY_USAGEPLANKEY_ORDERINSENSITIVE_ID="@aws-cdk/aws-apigateway:usagePlanKeyOrderInsensitiveId",exports.EFS_DEFAULT_ENCRYPTION_AT_REST="@aws-cdk/aws-efs:defaultEncryptionAtRest",exports.LAMBDA_RECOGNIZE_VERSION_PROPS="@aws-cdk/aws-lambda:recognizeVersionProps",exports.LAMBDA_RECOGNIZE_LAYER_VERSION="@aws-cdk/aws-lambda:recognizeLayerVersion",exports.CLOUDFRONT_DEFAULT_SECURITY_POLICY_TLS_V1_2_2021="@aws-cdk/aws-cloudfront:defaultSecurityPolicyTLSv1.2_2021",exports.CHECK_SECRET_USAGE="@aws-cdk/core:checkSecretUsage",exports.TARGET_PARTITIONS="@aws-cdk/core:target-partitions",exports.ECS_SERVICE_EXTENSIONS_ENABLE_DEFAULT_LOG_DRIVER="@aws-cdk-containers/ecs-service-extensions:enableDefaultLogDriver",exports.EC2_UNIQUE_IMDSV2_LAUNCH_TEMPLATE_NAME="@aws-cdk/aws-ec2:uniqueImdsv2TemplateName",exports.ECS_ARN_FORMAT_INCLUDES_CLUSTER_NAME="@aws-cdk/aws-ecs:arnFormatIncludesClusterName",exports.IAM_MINIMIZE_POLICIES="@aws-cdk/aws-iam:minimizePolicies",exports.IAM_IMPORTED_ROLE_STACK_SAFE_DEFAULT_POLICY_NAME="@aws-cdk/aws-iam:importedRoleStackSafeDefaultPolicyName",exports.VALIDATE_SNAPSHOT_REMOVAL_POLICY="@aws-cdk/core:validateSnapshotRemovalPolicy",exports.CODEPIPELINE_CROSS_ACCOUNT_KEY_ALIAS_STACK_SAFE_RESOURCE_NAME="@aws-cdk/aws-codepipeline:crossAccountKeyAliasStackSafeResourceName",exports.S3_CREATE_DEFAULT_LOGGING_POLICY="@aws-cdk/aws-s3:createDefaultLoggingPolicy",exports.SNS_SUBSCRIPTIONS_SQS_DECRYPTION_POLICY="@aws-cdk/aws-sns-subscriptions:restrictSqsDescryption",exports.APIGATEWAY_DISABLE_CLOUDWATCH_ROLE="@aws-cdk/aws-apigateway:disableCloudWatchRole",exports.ENABLE_PARTITION_LITERALS="@aws-cdk/core:enablePartitionLiterals",exports.EVENTS_TARGET_QUEUE_SAME_ACCOUNT="@aws-cdk/aws-events:eventsTargetQueueSameAccount",exports.ECS_DISABLE_EXPLICIT_DEPLOYMENT_CONTROLLER_FOR_CIRCUIT_BREAKER="@aws-cdk/aws-ecs:disableExplicitDeploymentControllerForCircuitBreaker",exports.S3_SERVER_ACCESS_LOGS_USE_BUCKET_POLICY="@aws-cdk/aws-s3:serverAccessLogsUseBucketPolicy",exports.ROUTE53_PATTERNS_USE_CERTIFICATE="@aws-cdk/aws-route53-patters:useCertificate",exports.AWS_CUSTOM_RESOURCE_LATEST_SDK_DEFAULT="@aws-cdk/customresources:installLatestAwsSdkDefault",exports.DATABASE_PROXY_UNIQUE_RESOURCE_NAME="@aws-cdk/aws-rds:databaseProxyUniqueResourceName",exports.CODEDEPLOY_REMOVE_ALARMS_FROM_DEPLOYMENT_GROUP="@aws-cdk/aws-codedeploy:removeAlarmsFromDeploymentGroup",exports.APIGATEWAY_AUTHORIZER_CHANGE_DEPLOYMENT_LOGICAL_ID="@aws-cdk/aws-apigateway:authorizerChangeDeploymentLogicalId",exports.EC2_LAUNCH_TEMPLATE_DEFAULT_USER_DATA="@aws-cdk/aws-ec2:launchTemplateDefaultUserData",exports.SECRETS_MANAGER_TARGET_ATTACHMENT_RESOURCE_POLICY="@aws-cdk/aws-secretsmanager:useAttachedSecretResourcePolicyForSecretTargetAttachments",exports.REDSHIFT_COLUMN_ID="@aws-cdk/aws-redshift:columnId",exports.ENABLE_EMR_SERVICE_POLICY_V2="@aws-cdk/aws-stepfunctions-tasks:enableEmrServicePolicyV2",exports.EC2_RESTRICT_DEFAULT_SECURITY_GROUP="@aws-cdk/aws-ec2:restrictDefaultSecurityGroup",exports.APIGATEWAY_REQUEST_VALIDATOR_UNIQUE_ID="@aws-cdk/aws-apigateway:requestValidatorUniqueId",exports.INCLUDE_PREFIX_IN_UNIQUE_NAME_GENERATION="@aws-cdk/core:includePrefixInUniqueNameGeneration",exports.KMS_ALIAS_NAME_REF="@aws-cdk/aws-kms:aliasNameRef",exports.EFS_DENY_ANONYMOUS_ACCESS="@aws-cdk/aws-efs:denyAnonymousAccess",exports.EFS_MOUNTTARGET_ORDERINSENSITIVE_LOGICAL_ID="@aws-cdk/aws-efs:mountTargetOrderInsensitiveLogicalId",exports.AUTOSCALING_GENERATE_LAUNCH_TEMPLATE="@aws-cdk/aws-autoscaling:generateLaunchTemplateInsteadOfLaunchConfig",exports.ENABLE_OPENSEARCH_MULTIAZ_WITH_STANDBY="@aws-cdk/aws-opensearchservice:enableOpensearchMultiAzWithStandby",exports.LAMBDA_NODEJS_USE_LATEST_RUNTIME="@aws-cdk/aws-lambda-nodejs:useLatestRuntimeVersion",exports.RDS_PREVENT_RENDERING_DEPRECATED_CREDENTIALS="@aws-cdk/aws-rds:preventRenderingDeprecatedCredentials",exports.AURORA_CLUSTER_CHANGE_SCOPE_OF_INSTANCE_PARAMETER_GROUP_WITH_EACH_PARAMETERS="@aws-cdk/aws-rds:auroraClusterChangeScopeOfInstanceParameterGroupWithEachParameters",exports.APPSYNC_ENABLE_USE_ARN_IDENTIFIER_SOURCE_API_ASSOCIATION="@aws-cdk/aws-appsync:useArnForSourceApiAssociationIdentifier",exports.CODECOMMIT_SOURCE_ACTION_DEFAULT_BRANCH_NAME="@aws-cdk/aws-codepipeline-actions:useNewDefaultBranchForCodeCommitSource",exports.LAMBDA_PERMISSION_LOGICAL_ID_FOR_LAMBDA_ACTION="@aws-cdk/aws-cloudwatch-actions:changeLambdaPermissionLogicalIdForLambdaAction",exports.CODEPIPELINE_CROSS_ACCOUNT_KEYS_DEFAULT_VALUE_TO_FALSE="@aws-cdk/aws-codepipeline:crossAccountKeysDefaultValueToFalse",exports.CODEPIPELINE_DEFAULT_PIPELINE_TYPE_TO_V2="@aws-cdk/aws-codepipeline:defaultPipelineTypeToV2",exports.KMS_REDUCE_CROSS_ACCOUNT_REGION_POLICY_SCOPE="@aws-cdk/aws-kms:reduceCrossAccountRegionPolicyScope",exports.PIPELINE_REDUCE_ASSET_ROLE_TRUST_SCOPE="@aws-cdk/pipelines:reduceAssetRoleTrustScope",exports.EKS_NODEGROUP_NAME="@aws-cdk/aws-eks:nodegroupNameAttribute",exports.EBS_DEFAULT_GP3="@aws-cdk/aws-ec2:ebsDefaultGp3Volume",exports.ECS_REMOVE_DEFAULT_DEPLOYMENT_ALARM="@aws-cdk/aws-ecs:removeDefaultDeploymentAlarm",exports.LOG_API_RESPONSE_DATA_PROPERTY_TRUE_DEFAULT="@aws-cdk/custom-resources:logApiResponseDataPropertyTrueDefault",exports.S3_KEEP_NOTIFICATION_IN_IMPORTED_BUCKET="@aws-cdk/aws-s3:keepNotificationInImportedBucket",exports.USE_NEW_S3URI_PARAMETERS_FOR_BEDROCK_INVOKE_MODEL_TASK="@aws-cdk/aws-stepfunctions-tasks:useNewS3UriParametersForBedrockInvokeModelTask",exports.REDUCE_EC2_FARGATE_CLOUDWATCH_PERMISSIONS="@aws-cdk/aws-ecs:reduceEc2FargateCloudWatchPermissions",exports.DYNAMODB_TABLEV2_RESOURCE_POLICY_PER_REPLICA="@aws-cdk/aws-dynamodb:resourcePolicyPerReplica",exports.EC2_SUM_TIMEOUT_ENABLED="@aws-cdk/aws-ec2:ec2SumTImeoutEnabled",exports.APPSYNC_GRAPHQLAPI_SCOPE_LAMBDA_FUNCTION_PERMISSION="@aws-cdk/aws-appsync:appSyncGraphQLAPIScopeLambdaPermission",exports.USE_CORRECT_VALUE_FOR_INSTANCE_RESOURCE_ID_PROPERTY="@aws-cdk/aws-rds:setCorrectValueForDatabaseInstanceReadReplicaInstanceResourceId",exports.CFN_INCLUDE_REJECT_COMPLEX_RESOURCE_UPDATE_CREATE_POLICY_INTRINSICS="@aws-cdk/core:cfnIncludeRejectComplexResourceUpdateCreatePolicyIntrinsics",exports.LAMBDA_NODEJS_SDK_V3_EXCLUDE_SMITHY_PACKAGES="@aws-cdk/aws-lambda-nodejs:sdkV3ExcludeSmithyPackages",exports.STEPFUNCTIONS_TASKS_FIX_RUN_ECS_TASK_POLICY="@aws-cdk/aws-stepfunctions-tasks:fixRunEcsTaskPolicy",exports.BASTION_HOST_USE_AMAZON_LINUX_2023_BY_DEFAULT="@aws-cdk/aws-ec2:bastionHostUseAmazonLinux2023ByDefault",exports.ASPECT_STABILIZATION="@aws-cdk/core:aspectStabilization",exports.USER_POOL_DOMAIN_NAME_METHOD_WITHOUT_CUSTOM_RESOURCE="@aws-cdk/aws-route53-targets:userPoolDomainNameMethodWithoutCustomResource",exports.Enable_IMDS_Blocking_Deprecated_Feature="@aws-cdk/aws-ecs:enableImdsBlockingDeprecatedFeature",exports.Disable_ECS_IMDS_Blocking="@aws-cdk/aws-ecs:disableEcsImdsBlocking",exports.ALB_DUALSTACK_WITHOUT_PUBLIC_IPV4_SECURITY_GROUP_RULES_DEFAULT="@aws-cdk/aws-elasticloadbalancingV2:albDualstackWithoutPublicIpv4SecurityGroupRulesDefault",exports.IAM_OIDC_REJECT_UNAUTHORIZED_CONNECTIONS="@aws-cdk/aws-iam:oidcRejectUnauthorizedConnections",exports.ENABLE_ADDITIONAL_METADATA_COLLECTION="@aws-cdk/core:enableAdditionalMetadataCollection",exports.FLAGS={[exports.ENABLE_STACK_NAME_DUPLICATES_CONTEXT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Allow multiple stacks with the same name",detailsMd:`
      If this is set, multiple stacks can use the same stack name (e.g. deployed to
      different environments). This means that the name of the synthesized template
      file will be based on the construct path and not on the defined \`stackName\`
      of the stack.`,recommendedValue:!0,introducedIn:{v1:"1.16.0"},defaults:{v2:!0},compatibilityWithOldBehaviorMd:"Pass stack identifiers to the CLI instead of stack names."},[exports.ENABLE_DIFF_NO_FAIL_CONTEXT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Make `cdk diff` not fail when there are differences",detailsMd:"\n      Determines what status code `cdk diff` should return when the specified stack\n      differs from the deployed stack or the local CloudFormation template:\n\n      * `aws-cdk:enableDiffNoFail=true` => status code == 0\n      * `aws-cdk:enableDiffNoFail=false` => status code == 1\n\n      You can override this behavior with the --fail flag:\n\n      * `--fail` => status code == 1\n      * `--no-fail` => status code == 0",introducedIn:{v1:"1.19.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Specify `--fail` to the CLI."},[exports.NEW_STYLE_STACK_SYNTHESIS_CONTEXT]:{type:flag_modeling_1().FlagType.BugFix,summary:"Switch to new stack synthesis method which enables CI/CD",detailsMd:"\n      If this flag is specified, all `Stack`s will use the `DefaultStackSynthesizer` by\n      default. If it is not set, they will use the `LegacyStackSynthesizer`.",introducedIn:{v1:"1.39.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.STACK_RELATIVE_EXPORTS_CONTEXT]:{type:flag_modeling_1().FlagType.BugFix,summary:"Name exports based on the construct paths relative to the stack, rather than the global construct path",detailsMd:`
      Combined with the stack name this relative construct path is good enough to
      ensure uniqueness, and makes the export names robust against refactoring
      the location of the stack in the construct tree (specifically, moving the Stack
      into a Stage).`,introducedIn:{v1:"1.58.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.DOCKER_IGNORE_SUPPORT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"DockerImageAsset properly supports `.dockerignore` files by default",detailsMd:`
      If this flag is not set, the default behavior for \`DockerImageAsset\` is to use
      glob semantics for \`.dockerignore\` files. If this flag is set, the default behavior
      is standard Docker ignore semantics.

      This is a feature flag as the old behavior was technically incorrect but
      users may have come to depend on it.`,introducedIn:{v1:"1.73.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Update your `.dockerignore` file to match standard Docker ignore rules, if necessary."},[exports.SECRETS_MANAGER_PARSE_OWNED_SECRET_NAME]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Fix the referencing of SecretsManager names from ARNs",detailsMd:`
      Secret.secretName for an "owned" secret will attempt to parse the secretName from the ARN,
      rather than the default full resource name, which includes the SecretsManager suffix.

      If this flag is not set, Secret.secretName will include the SecretsManager suffix, which cannot be directly
      used by SecretsManager.DescribeSecret, and must be parsed by the user first (e.g., Fn:Join, Fn:Select, Fn:Split).`,introducedIn:{v1:"1.77.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Use `parseArn(secret.secretName).resourceName` to emulate the incorrect old parsing."},[exports.KMS_DEFAULT_KEY_POLICIES]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Tighten default KMS key policies",detailsMd:`
      KMS Keys start with a default key policy that grants the account access to administer the key,
      mirroring the behavior of the KMS SDK/CLI/Console experience. Users may override the default key
      policy by specifying their own.

      If this flag is not set, the default key policy depends on the setting of the \`trustAccountIdentities\`
      flag. If false (the default, for backwards-compatibility reasons), the default key policy somewhat
      resembles the default admin key policy, but with the addition of 'GenerateDataKey' permissions. If
      true, the policy matches what happens when this feature flag is set.

      Additionally, if this flag is not set and the user supplies a custom key policy, this will be appended
      to the key's default policy (rather than replacing it).`,introducedIn:{v1:"1.78.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `trustAccountIdentities: false` to `Key` construct to restore the old behavior."},[exports.S3_GRANT_WRITE_WITHOUT_ACL]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Remove `PutObjectAcl` from Bucket.grantWrite",detailsMd:`
      Change the old 's3:PutObject*' permission to 's3:PutObject' on Bucket,
      as the former includes 's3:PutObjectAcl',
      which could be used to grant read/write object access to IAM principals in other accounts.
      Use a feature flag to make sure existing customers who might be relying
      on the overly-broad permissions are not broken.`,introducedIn:{v1:"1.85.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Call `bucket.grantPutAcl()` in addition to `bucket.grantWrite()` to grant ACL permissions."},[exports.ECS_REMOVE_DEFAULT_DESIRED_COUNT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Do not specify a default DesiredCount for ECS services",detailsMd:`
      ApplicationLoadBalancedServiceBase, ApplicationMultipleTargetGroupServiceBase,
      NetworkLoadBalancedServiceBase, NetworkMultipleTargetGroupServiceBase, and
      QueueProcessingServiceBase currently determine a default value for the desired count of
      a CfnService if a desiredCount is not provided. The result of this is that on every
      deployment, the service count is reset to the fixed value, even if it was autoscaled.

      If this flag is not set, the default behaviour for CfnService.desiredCount is to set a
      desiredCount of 1, if one is not provided. If true, a default will not be defined for
      CfnService.desiredCount and as such desiredCount will be undefined, if one is not provided.`,introducedIn:{v1:"1.92.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"You can pass `desiredCount: 1` explicitly, but you should never need this."},[exports.RDS_LOWERCASE_DB_IDENTIFIER]:{type:flag_modeling_1().FlagType.BugFix,summary:"Force lowercasing of RDS Cluster names in CDK",detailsMd:`
      Cluster names must be lowercase, and the service will lowercase the name when the cluster
      is created. However, CDK did not use to know about this, and would use the user-provided name
      referencing the cluster, which would fail if it happened to be mixed-case.

      With this flag, lowercase the name in CDK so we can reference it properly.

      Must be behind a permanent flag because changing a name from mixed case to lowercase between deployments
      would lead CloudFormation to think the name was changed and would trigger a cluster replacement
      (losing data!).`,introducedIn:{v1:"1.97.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.APIGATEWAY_USAGEPLANKEY_ORDERINSENSITIVE_ID]:{type:flag_modeling_1().FlagType.BugFix,summary:"Allow adding/removing multiple UsagePlanKeys independently",detailsMd:`
      The UsagePlanKey resource connects an ApiKey with a UsagePlan. API Gateway does not allow more than one UsagePlanKey
      for any given UsagePlan and ApiKey combination. For this reason, CloudFormation cannot replace this resource without
      either the UsagePlan or ApiKey changing.

      The feature addition to support multiple UsagePlanKey resources - 142bd0e2 - recognized this and attempted to keep
      existing UsagePlanKey logical ids unchanged.
      However, this intentionally caused the logical id of the UsagePlanKey to be sensitive to order. That is, when
      the 'first' UsagePlanKey resource is removed, the logical id of the 'second' assumes what was originally the 'first',
      which again is disallowed.

      In effect, there is no way to get out of this mess in a backwards compatible way, while supporting existing stacks.
      This flag changes the logical id layout of UsagePlanKey to not be sensitive to order.`,introducedIn:{v1:"1.98.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.EFS_DEFAULT_ENCRYPTION_AT_REST]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Enable this feature flag to have elastic file systems encrypted at rest by default.",detailsMd:"\n      Encryption can also be configured explicitly using the `encrypted` property.\n      ",introducedIn:{v1:"1.98.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass the `encrypted: false` property to the `FileSystem` construct to disable encryption."},[exports.LAMBDA_RECOGNIZE_VERSION_PROPS]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature flag to opt in to the updated logical id calculation for Lambda Version created using the  `fn.currentVersion`.",detailsMd:`
      The previous calculation incorrectly considered properties of the \`AWS::Lambda::Function\` resource that did
      not constitute creating a new Version.

      See 'currentVersion' section in the aws-lambda module's README for more details.`,introducedIn:{v1:"1.106.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.LAMBDA_RECOGNIZE_LAYER_VERSION]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature flag to opt in to the updated logical id calculation for Lambda Version created using the `fn.currentVersion`.",detailsMd:`
      This flag correct incorporates Lambda Layer properties into the Lambda Function Version.

      See 'currentVersion' section in the aws-lambda module's README for more details.`,introducedIn:{v1:"1.159.0",v2:"2.27.0"},recommendedValue:!0},[exports.CLOUDFRONT_DEFAULT_SECURITY_POLICY_TLS_V1_2_2021]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature flag to have cloudfront distributions use the security policy TLSv1.2_2021 by default.",detailsMd:"\n      The security policy can also be configured explicitly using the `minimumProtocolVersion` property.",introducedIn:{v1:"1.117.0",v2:"2.0.0"},defaults:{v2:!0},recommendedValue:!0},[exports.CHECK_SECRET_USAGE]:{type:flag_modeling_1().FlagType.VisibleContext,summary:"Enable this flag to make it impossible to accidentally use SecretValues in unsafe locations",detailsMd:"\n      With this flag enabled, `SecretValue` instances can only be passed to\n      constructs that accept `SecretValue`s; otherwise, `unsafeUnwrap()` must be\n      called to use it as a regular string.",introducedIn:{v1:"1.153.0",v2:"2.21.0"},recommendedValue:!0},[exports.TARGET_PARTITIONS]:{type:flag_modeling_1().FlagType.VisibleContext,summary:"What regions to include in lookup tables of environment agnostic stacks",detailsMd:`
      Has no effect on stacks that have a defined region, but will limit the amount
      of unnecessary regions included in stacks without a known region.

      The type of this value should be a list of strings.`,introducedIn:{v1:"1.137.0",v2:"2.4.0"},recommendedValue:["aws","aws-cn"]},[exports.ECS_SERVICE_EXTENSIONS_ENABLE_DEFAULT_LOG_DRIVER]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"ECS extensions will automatically add an `awslogs` driver if no logging is specified",detailsMd:`
      Enable this feature flag to configure default logging behavior for the ECS Service Extensions. This will enable the
      \`awslogs\` log driver for the application container of the service to send the container logs to CloudWatch Logs.

      This is a feature flag as the new behavior provides a better default experience for the users.`,introducedIn:{v1:"1.140.0",v2:"2.8.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Specify a log driver explicitly."},[exports.EC2_UNIQUE_IMDSV2_LAUNCH_TEMPLATE_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature flag to have Launch Templates generated by the `InstanceRequireImdsv2Aspect` use unique names.",detailsMd:"\n      Previously, the generated Launch Template names were only unique within a stack because they were based only on the\n      `Instance` construct ID. If another stack that has an `Instance` with the same construct ID is deployed in the same\n      account and region, the deployments would always fail as the generated Launch Template names were the same.\n\n      The new implementation addresses this issue by generating the Launch Template name with the `Names.uniqueId` method.",introducedIn:{v1:"1.140.0",v2:"2.8.0"},recommendedValue:!0},[exports.ECS_ARN_FORMAT_INCLUDES_CLUSTER_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"ARN format used by ECS. In the new ARN format, the cluster name is part of the resource ID.",detailsMd:`
      If this flag is not set, the old ARN format (without cluster name) for ECS is used.
      If this flag is set, the new ARN format (with cluster name) for ECS is used.

      This is a feature flag as the old format is still valid for existing ECS clusters.

      See https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html#ecs-resource-ids
      `,introducedIn:{v2:"2.35.0"},recommendedValue:!0},[exports.IAM_MINIMIZE_POLICIES]:{type:flag_modeling_1().FlagType.VisibleContext,summary:"Minimize IAM policies by combining Statements",detailsMd:`
      Minimize IAM policies by combining Principals, Actions and Resources of two
      Statements in the policies, as long as it doesn't change the meaning of the
      policy.`,introducedIn:{v1:"1.150.0",v2:"2.18.0"},recommendedValue:!0},[exports.VALIDATE_SNAPSHOT_REMOVAL_POLICY]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Error on snapshot removal policies on resources that do not support it.",detailsMd:`
      Makes sure we do not allow snapshot removal policy on resources that do not support it.
      If supplied on an unsupported resource, CloudFormation ignores the policy altogether.
      This flag will reduce confusion and unexpected loss of data when erroneously supplying
      the snapshot removal policy.`,introducedIn:{v2:"2.28.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"The old behavior was incorrect. Update your source to not specify SNAPSHOT policies on resources that do not support it."},[exports.CODEPIPELINE_CROSS_ACCOUNT_KEY_ALIAS_STACK_SAFE_RESOURCE_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"Generate key aliases that include the stack name",detailsMd:`
      Enable this feature flag to have CodePipeline generate a unique cross account key alias name using the stack name.

      Previously, when creating multiple pipelines with similar naming conventions and when crossAccountKeys is true,
      the KMS key alias name created for these pipelines may be the same due to how the uniqueId is generated.

      This new implementation creates a stack safe resource name for the alias using the stack name instead of the stack ID.
      `,introducedIn:{v2:"2.29.0"},recommendedValue:!0},[exports.S3_CREATE_DEFAULT_LOGGING_POLICY]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature flag to create an S3 bucket policy by default in cases where an AWS service would automatically create the Policy if one does not exist.",detailsMd:`
      For example, in order to send VPC flow logs to an S3 bucket, there is a specific Bucket Policy
      that needs to be attached to the bucket. If you create the bucket without a policy and then add the
      bucket as the flow log destination, the service will automatically create the bucket policy with the
      necessary permissions. If you were to then try and add your own bucket policy CloudFormation will throw
      and error indicating that a bucket policy already exists.

      In cases where we know what the required policy is we can go ahead and create the policy so we can
      remain in control of it.

      @see https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-logs-infrastructure-S3
      `,introducedIn:{v2:"2.31.0"},recommendedValue:!0},[exports.SNS_SUBSCRIPTIONS_SQS_DECRYPTION_POLICY]:{type:flag_modeling_1().FlagType.BugFix,summary:"Restrict KMS key policy for encrypted Queues a bit more",detailsMd:`
      Enable this feature flag to restrict the decryption of a SQS queue, which is subscribed to a SNS topic, to
      only the topic which it is subscribed to and not the whole SNS service of an account.

      Previously the decryption was only restricted to the SNS service principal. To make the SQS subscription more
      secure, it is a good practice to restrict the decryption further and only allow the connected SNS topic to decryption
      the subscribed queue.`,introducedIn:{v2:"2.32.0"},recommendedValue:!0},[exports.APIGATEWAY_DISABLE_CLOUDWATCH_ROLE]:{type:flag_modeling_1().FlagType.BugFix,summary:"Make default CloudWatch Role behavior safe for multiple API Gateways in one environment",detailsMd:`
      Enable this feature flag to change the default behavior for aws-apigateway.RestApi and aws-apigateway.SpecRestApi
      to _not_ create a CloudWatch role and Account. There is only a single ApiGateway account per AWS
      environment which means that each time you create a RestApi in your account the ApiGateway account
      is overwritten. If at some point the newest RestApi is deleted, the ApiGateway Account and CloudWatch
      role will also be deleted, breaking any existing ApiGateways that were depending on them.

      When this flag is enabled you should either create the ApiGateway account and CloudWatch role
      separately _or_ only enable the cloudWatchRole on a single RestApi.
      `,introducedIn:{v2:"2.38.0"},recommendedValue:!0},[exports.ENABLE_PARTITION_LITERALS]:{type:flag_modeling_1().FlagType.BugFix,summary:"Make ARNs concrete if AWS partition is known",detailsMd:`
      Enable this feature flag to get partition names as string literals in Stacks with known regions defined in
      their environment, such as "aws" or "aws-cn".  Previously the CloudFormation intrinsic function
      "Ref: AWS::Partition" was used.  For example:

      \`\`\`yaml
      Principal:
        AWS:
          Fn::Join:
            - ""
            - - "arn:"
              - Ref: AWS::Partition
              - :iam::123456789876:root
      \`\`\`

      becomes:

      \`\`\`yaml
      Principal:
        AWS: "arn:aws:iam::123456789876:root"
      \`\`\`

      The intrinsic function will still be used in Stacks where no region is defined or the region's partition
      is unknown.
      `,introducedIn:{v2:"2.38.0"},recommendedValue:!0},[exports.EVENTS_TARGET_QUEUE_SAME_ACCOUNT]:{type:flag_modeling_1().FlagType.BugFix,summary:"Event Rules may only push to encrypted SQS queues in the same account",detailsMd:`
      This flag applies to SQS Queues that are used as the target of event Rules. When enabled, only principals
      from the same account as the Rule can send messages. If a queue is unencrypted, this restriction will
      always apply, regardless of the value of this flag.
      `,introducedIn:{v2:"2.51.0"},recommendedValue:!0},[exports.ECS_DISABLE_EXPLICIT_DEPLOYMENT_CONTROLLER_FOR_CIRCUIT_BREAKER]:{type:flag_modeling_1().FlagType.BugFix,summary:'Avoid setting the "ECS" deployment controller when adding a circuit breaker',detailsMd:`
      Enable this feature flag to avoid setting the "ECS" deployment controller when adding a circuit breaker to an
      ECS Service, as this will trigger a full replacement which fails to deploy when using set service names.
      This does not change any behaviour as the default deployment controller when it is not defined is ECS.

      This is a feature flag as the new behavior provides a better default experience for the users.
      `,introducedIn:{v2:"2.51.0"},recommendedValue:!0},[exports.IAM_IMPORTED_ROLE_STACK_SAFE_DEFAULT_POLICY_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable this feature to by default create default policy names for imported roles that depend on the stack the role is in.",detailsMd:`
      Without this, importing the same role in multiple places could lead to the permissions given for one version of the imported role
      to overwrite permissions given to the role at a different place where it was imported. This was due to all imported instances
      of a role using the same default policy name.

      This new implementation creates default policy names based on the constructs node path in their stack.
      `,introducedIn:{v2:"2.60.0"},recommendedValue:!0},[exports.S3_SERVER_ACCESS_LOGS_USE_BUCKET_POLICY]:{type:flag_modeling_1().FlagType.BugFix,summary:"Use S3 Bucket Policy instead of ACLs for Server Access Logging",detailsMd:`
      Enable this feature flag to use S3 Bucket Policy for granting permission fo Server Access Logging
      rather than using the canned \`LogDeliveryWrite\` ACL. ACLs do not work when Object Ownership is
      enabled on the bucket.

      This flag uses a Bucket Policy statement to allow Server Access Log delivery, following best
      practices for S3.

      @see https://docs.aws.amazon.com/AmazonS3/latest/userguide/enable-server-access-logging.html
    `,introducedIn:{v2:"2.60.0"},recommendedValue:!0},[exports.ROUTE53_PATTERNS_USE_CERTIFICATE]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Use the official `Certificate` resource instead of `DnsValidatedCertificate`",detailsMd:"\n      Enable this feature flag to use the official CloudFormation supported `Certificate` resource instead\n      of the deprecated `DnsValidatedCertificate` construct. If this flag is enabled and you are creating\n      the stack in a region other than us-east-1 then you must also set `crossRegionReferences=true` on the\n      stack.\n      ",introducedIn:{v2:"2.61.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Define a `DnsValidatedCertificate` explicitly and pass in the `certificate` property"},[exports.AWS_CUSTOM_RESOURCE_LATEST_SDK_DEFAULT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Whether to install the latest SDK by default in AwsCustomResource",detailsMd:`
      This was originally introduced and enabled by default to not be limited by the SDK version
      that's installed on AWS Lambda. However, it creates issues for Lambdas bound to VPCs that
      do not have internet access, or in environments where 'npmjs.com' is not available.

      The recommended setting is to disable the default installation behavior, and pass the
      flag on a resource-by-resource basis to enable it if necessary.
    `,compatibilityWithOldBehaviorMd:"Set installLatestAwsSdk: true on all resources that need it.",introducedIn:{v2:"2.60.0"},recommendedValue:!1},[exports.DATABASE_PROXY_UNIQUE_RESOURCE_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"Use unique resource name for Database Proxy",detailsMd:"\n      If this flag is not set, the default behavior for `DatabaseProxy` is\n      to use `id` of the constructor for `dbProxyName` when it's not specified in the argument.\n      In this case, users can't deploy `DatabaseProxy`s that have the same `id` in the same region.\n\n      If this flag is set, the default behavior is to use unique resource names for each `DatabaseProxy`.\n\n      This is a feature flag as the old behavior was technically incorrect, but users may have come to depend on it.\n    ",introducedIn:{v2:"2.65.0"},recommendedValue:!0},[exports.CODEDEPLOY_REMOVE_ALARMS_FROM_DEPLOYMENT_GROUP]:{type:flag_modeling_1().FlagType.BugFix,summary:"Remove CloudWatch alarms from deployment group",detailsMd:`
      Enable this flag to be able to remove all CloudWatch alarms from a deployment group by removing
      the alarms from the construct. If this flag is not set, removing all alarms from the construct
      will still leave the alarms configured for the deployment group.
    `,introducedIn:{v2:"2.65.0"},recommendedValue:!0},[exports.APIGATEWAY_AUTHORIZER_CHANGE_DEPLOYMENT_LOGICAL_ID]:{type:flag_modeling_1().FlagType.BugFix,summary:"Include authorizer configuration in the calculation of the API deployment logical ID.",detailsMd:`
      The logical ID of the AWS::ApiGateway::Deployment resource is calculated by hashing
      the API configuration, including methods, and resources, etc. Enable this feature flag
      to also include the configuration of any authorizer attached to the API in the
      calculation, so any changes made to an authorizer will create a new deployment.
      `,introducedIn:{v2:"2.66.0"},recommendedValue:!0},[exports.EC2_LAUNCH_TEMPLATE_DEFAULT_USER_DATA]:{type:flag_modeling_1().FlagType.BugFix,summary:"Define user data for a launch template by default when a machine image is provided.",detailsMd:`
      The ec2.LaunchTemplate construct did not define user data when a machine image is
      provided despite the document. If this is set, a user data is automatically defined
      according to the OS of the machine image.
      `,recommendedValue:!0,introducedIn:{v2:"2.67.0"}},[exports.SECRETS_MANAGER_TARGET_ATTACHMENT_RESOURCE_POLICY]:{type:flag_modeling_1().FlagType.BugFix,summary:"SecretTargetAttachments uses the ResourcePolicy of the attached Secret.",detailsMd:`
      Enable this feature flag to make SecretTargetAttachments use the ResourcePolicy of the attached Secret.
      SecretTargetAttachments are created to connect a Secret to a target resource.
      In CDK code, they behave like regular Secret and can be used as a stand-in in most situations.
      Previously, adding to the ResourcePolicy of a SecretTargetAttachment did attempt to create a separate ResourcePolicy for the same Secret.
      However Secrets can only have a single ResourcePolicy, causing the CloudFormation deployment to fail.

      When enabling this feature flag for an existing Stack, ResourcePolicies created via a SecretTargetAttachment will need replacement.
      This won't be possible without intervention due to limitation outlined above.
      First remove all permissions granted to the Secret and deploy without the ResourcePolicies.
      Then you can re-add the permissions and deploy again.
      `,recommendedValue:!0,introducedIn:{v2:"2.67.0"}},[exports.REDSHIFT_COLUMN_ID]:{type:flag_modeling_1().FlagType.BugFix,summary:"Whether to use an ID to track Redshift column changes",detailsMd:"\n      Redshift columns are identified by their `name`. If a column is renamed, the old column\n      will be dropped and a new column will be created. This can cause data loss.\n\n      This flag enables the use of an `id` attribute for Redshift columns. If this flag is enabled, the\n      internal CDK architecture will track changes of Redshift columns through their `id`, rather\n      than their `name`. This will prevent data loss when columns are renamed.\n\n      **NOTE** - Enabling this flag comes at a **risk**. When enabled, update the `id`s of all columns,\n      **however** do not change the `names`s of the columns. If the `name`s of the columns are changed during\n      initial deployment, the columns will be dropped and recreated, causing data loss. After the initial deployment\n      of the `id`s, the `name`s of the columns can be changed without data loss.\n      ",introducedIn:{v2:"2.68.0"},recommendedValue:!0},[exports.ENABLE_EMR_SERVICE_POLICY_V2]:{type:flag_modeling_1().FlagType.BugFix,summary:"Enable AmazonEMRServicePolicy_v2 managed policies",detailsMd:`
      If this flag is not set, the default behavior for \`EmrCreateCluster\` is
      to use \`AmazonElasticMapReduceRole\` managed policies.

      If this flag is set, the default behavior is to use the new \`AmazonEMRServicePolicy_v2\`
      managed policies.

      This is a feature flag as the old behavior will be deprecated, but some resources may require manual
      intervention since they might not have the appropriate tags propagated automatically.
      `,introducedIn:{v2:"2.72.0"},recommendedValue:!0},[exports.EC2_RESTRICT_DEFAULT_SECURITY_GROUP]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Restrict access to the VPC default security group",detailsMd:`
      Enable this feature flag to remove the default ingress/egress rules from the
      VPC default security group.

      When a VPC is created, a default security group is created as well and this cannot
      be deleted. The default security group is created with ingress/egress rules that allow
      _all_ traffic. [AWS Security best practices recommend](https://docs.aws.amazon.com/securityhub/latest/userguide/ec2-controls.html#ec2-2)
      removing these ingress/egress rules in order to restrict access to the default security group.
    `,introducedIn:{v2:"2.78.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:`
      To allow all ingress/egress traffic to the VPC default security group you
      can set the \`restrictDefaultSecurityGroup: false\`.
    `},[exports.APIGATEWAY_REQUEST_VALIDATOR_UNIQUE_ID]:{type:flag_modeling_1().FlagType.BugFix,summary:"Generate a unique id for each RequestValidator added to a method",detailsMd:"\n      This flag allows multiple RequestValidators to be added to a RestApi when\n      providing the `RequestValidatorOptions` in the `addMethod()` method.\n\n      If the flag is not set then only a single RequestValidator can be added in this way.\n      Any additional RequestValidators have to be created directly with `new RequestValidator`.\n    ",introducedIn:{v2:"2.78.0"},recommendedValue:!0},[exports.KMS_ALIAS_NAME_REF]:{type:flag_modeling_1().FlagType.BugFix,summary:"KMS Alias name and keyArn will have implicit reference to KMS Key",detailsMd:`
      This flag allows an implicit dependency to be created between KMS Alias and KMS Key
      when referencing key.aliasName or key.keyArn.

      If the flag is not set then a raw string is passed as the Alias name and no
      implicit dependencies will be set.
    `,introducedIn:{v2:"2.83.0"},recommendedValue:!0},[exports.AUTOSCALING_GENERATE_LAUNCH_TEMPLATE]:{type:flag_modeling_1().FlagType.BugFix,summary:"Generate a launch template when creating an AutoScalingGroup",detailsMd:`
      Enable this flag to allow AutoScalingGroups to generate a launch template when being created.
      Launch configurations have been deprecated and cannot be created in AWS Accounts created after
      December 31, 2023. Existing 'AutoScalingGroup' properties used for creating a launch configuration
      will now create an equivalent 'launchTemplate'. Alternatively, users can provide an explicit
      'launchTemplate' or 'mixedInstancesPolicy'. When this flag is enabled a 'launchTemplate' will
      attempt to set user data according to the OS of the machine image if explicit user data is not
      provided.
    `,introducedIn:{v2:"2.88.0"},compatibilityWithOldBehaviorMd:`
      If backwards compatibility needs to be maintained due to an existing autoscaling group
      using a launch config, set this flag to false.
    `,recommendedValue:!0},[exports.INCLUDE_PREFIX_IN_UNIQUE_NAME_GENERATION]:{type:flag_modeling_1().FlagType.BugFix,summary:"Include the stack prefix in the stack name generation process",detailsMd:`
      This flag prevents the prefix of a stack from making the stack's name longer than the 128 character limit.

      If the flag is set, the prefix is included in the stack name generation process.
      If the flag is not set, then the prefix of the stack is prepended to the generated stack name.

      **NOTE** - Enabling this flag comes at a **risk**. If you have already deployed stacks, changing the status of this
      feature flag can lead to a change in stacks' name. Changing a stack name mean recreating the whole stack, which
      is not viable in some productive setups.
    `,introducedIn:{v2:"2.84.0"},recommendedValue:!0},[exports.EFS_DENY_ANONYMOUS_ACCESS]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"EFS denies anonymous clients accesses",detailsMd:`
      This flag adds the file system policy that denies anonymous clients
      access to \`efs.FileSystem\`.

      If this flag is not set, \`efs.FileSystem\` will allow all anonymous clients
      that can access over the network.`,introducedIn:{v2:"2.93.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"You can pass `allowAnonymousAccess: true` so allow anonymous clients access."},[exports.ENABLE_OPENSEARCH_MULTIAZ_WITH_STANDBY]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Enables support for Multi-AZ with Standby deployment for opensearch domains",detailsMd:`
      If this is set, an opensearch domain will automatically be created with
      multi-az with standby enabled.
    `,introducedIn:{v2:"2.88.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `capacity.multiAzWithStandbyEnabled: false` to `Domain` construct to restore the old behavior."},[exports.LAMBDA_NODEJS_USE_LATEST_RUNTIME]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Enables aws-lambda-nodejs.Function to use the latest available NodeJs runtime as the default",detailsMd:`
      If this is set, and a \`runtime\` prop is not passed to, Lambda NodeJs
      functions will us the latest version of the runtime provided by the Lambda
      service. Do not use this if you your lambda function is reliant on dependencies
      shipped as part of the runtime environment.
    `,introducedIn:{v2:"2.93.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `runtime: lambda.Runtime.NODEJS_16_X` to `Function` construct to restore the previous behavior."},[exports.EFS_MOUNTTARGET_ORDERINSENSITIVE_LOGICAL_ID]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, mount targets will have a stable logicalId that is linked to the associated subnet.",detailsMd:`
      When this feature flag is enabled, each mount target will have a stable
      logicalId that is linked to the associated subnet. If the flag is set to
      false then the logicalIds of the mount targets can change if the number of
      subnets changes.

      Set this flag to false for existing mount targets.
    `,introducedIn:{v2:"2.93.0"},recommendedValue:!0},[exports.AURORA_CLUSTER_CHANGE_SCOPE_OF_INSTANCE_PARAMETER_GROUP_WITH_EACH_PARAMETERS]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, a scope of InstanceParameterGroup for AuroraClusterInstance with each parameters will change.",detailsMd:"\n      When this feature flag is enabled, a scope of `InstanceParameterGroup` for\n      `AuroraClusterInstance` with each parameters will change to AuroraClusterInstance\n      from AuroraCluster.\n\n      If the flag is set to false then it can only make one `AuroraClusterInstance`\n      with each `InstanceParameterGroup` in the AuroraCluster.\n    ",introducedIn:{v2:"2.97.0"},recommendedValue:!0},[exports.APPSYNC_ENABLE_USE_ARN_IDENTIFIER_SOURCE_API_ASSOCIATION]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, will always use the arn for identifiers for CfnSourceApiAssociation in the GraphqlApi construct rather than id.",detailsMd:`
      When this feature flag is enabled, we use the IGraphqlApi ARN rather than ID when creating or updating CfnSourceApiAssociation in
      the GraphqlApi construct. Using the ARN allows the association to support an association with a source api or merged api in another account.
      Note that for existing source api associations created with this flag disabled, enabling the flag will lead to a resource replacement.
    `,introducedIn:{v2:"2.97.0"},recommendedValue:!0},[exports.RDS_PREVENT_RENDERING_DEPRECATED_CREDENTIALS]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, creating an RDS database cluster from a snapshot will only render credentials for snapshot credentials.",detailsMd:"\n      The `credentials` property on the `DatabaseClusterFromSnapshotProps`\n      interface was deprecated with the new `snapshotCredentials` property being\n      recommended. Before deprecating `credentials`, a secret would be generated\n      while rendering credentials if the `credentials` property was undefined or\n      if a secret wasn't provided via the `credentials` property. This behavior\n      is replicated with the new `snapshotCredentials` property, but the original\n      `credentials` secret can still be created resulting in an extra database\n      secret.\n\n      Set this flag to prevent rendering deprecated `credentials` and creating an\n      extra database secret when only using `snapshotCredentials` to create an RDS\n      database cluster from a snapshot.\n    ",introducedIn:{v2:"2.98.0"},recommendedValue:!0},[exports.CODECOMMIT_SOURCE_ACTION_DEFAULT_BRANCH_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the CodeCommit source action is using the default branch name 'main'.",detailsMd:`
      When setting up a CodeCommit source action for the source stage of a pipeline, please note that the
      default branch is 'master'.
      However, with the activation of this feature flag, the default branch is updated to 'main'.
    `,introducedIn:{v2:"2.103.1"},recommendedValue:!0},[exports.LAMBDA_PERMISSION_LOGICAL_ID_FOR_LAMBDA_ACTION]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the logical ID of a Lambda permission for a Lambda action includes an alarm ID.",detailsMd:"\n      When this feature flag is enabled, a logical ID of `LambdaPermission` for a\n      `LambdaAction` will include an alarm ID. Therefore multiple alarms for the same Lambda\n      can be created with `LambdaAction`.\n\n      If the flag is set to false then it can only make one alarm for the Lambda with\n      `LambdaAction`.\n    ",introducedIn:{v2:"2.124.0"},recommendedValue:!0},[exports.CODEPIPELINE_CROSS_ACCOUNT_KEYS_DEFAULT_VALUE_TO_FALSE]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Enables Pipeline to set the default value for crossAccountKeys to false.",detailsMd:"\n      When this feature flag is enabled, and the `crossAccountKeys` property is not provided in a `Pipeline`\n      construct, the construct automatically defaults the value of this property to false.\n    ",introducedIn:{v2:"2.127.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `crossAccountKeys: true` to `Pipeline` construct to restore the previous behavior."},[exports.CODEPIPELINE_DEFAULT_PIPELINE_TYPE_TO_V2]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Enables Pipeline to set the default pipeline type to V2.",detailsMd:"\n      When this feature flag is enabled, and the `pipelineType` property is not provided in a `Pipeline`\n      construct, the construct automatically defaults the value of this property to `PipelineType.V2`.\n    ",introducedIn:{v2:"2.133.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `pipelineType: PipelineType.V1` to `Pipeline` construct to restore the previous behavior."},[exports.KMS_REDUCE_CROSS_ACCOUNT_REGION_POLICY_SCOPE]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, IAM Policy created from KMS key grant will reduce the resource scope to this key only.",detailsMd:`
      When this feature flag is enabled and calling KMS key grant method, the created IAM policy will reduce the resource scope from
      '*' to this specific granting KMS key.
    `,introducedIn:{v2:"2.134.0"},recommendedValue:!0},[exports.PIPELINE_REDUCE_ASSET_ROLE_TRUST_SCOPE]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"Remove the root account principal from PipelineAssetsFileRole trust policy",detailsMd:`
      When this feature flag is enabled, the root account principal will not be added to the trust policy of asset role.
      When this feature flag is disabled, it will keep the root account principal in the trust policy.
    `,introducedIn:{v2:"2.141.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to add the root account principal back"},[exports.EKS_NODEGROUP_NAME]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, nodegroupName attribute of the provisioned EKS NodeGroup will not have the cluster name prefix.",detailsMd:`
      When this feature flag is enabled, the nodegroupName attribute will be exactly the name of the nodegroup without
      any prefix.
    `,introducedIn:{v2:"2.139.0"},recommendedValue:!0},[exports.EBS_DEFAULT_GP3]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"When enabled, the default volume type of the EBS volume will be GP3",detailsMd:"\n      When this featuer flag is enabled, the default volume type of the EBS volume will be `EbsDeviceVolumeType.GENERAL_PURPOSE_SSD_GP3`.\n    ",introducedIn:{v2:"2.140.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Pass `volumeType: EbsDeviceVolumeType.GENERAL_PURPOSE_SSD` to `Volume` construct to restore the previous behavior."},[exports.ECS_REMOVE_DEFAULT_DEPLOYMENT_ALARM]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"When enabled, remove default deployment alarm settings",detailsMd:`
      When this featuer flag is enabled, remove the default deployment alarm settings when creating a AWS ECS service.
    `,introducedIn:{v2:"2.143.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Set AWS::ECS::Service 'DeploymentAlarms' manually to restore the previous behavior."},[exports.LOG_API_RESPONSE_DATA_PROPERTY_TRUE_DEFAULT]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the custom resource used for `AwsCustomResource` will configure the `logApiResponseData` property as true by default",detailsMd:`
      This results in 'logApiResponseData' being passed as true to the custom resource provider. This will cause the custom resource handler to receive an 'Update' event. If you don't
      have an SDK call configured for the 'Update' event and you're dependent on specific SDK call response data, you will see this error from CFN:

      CustomResource attribute error: Vendor response doesn't contain <attribute-name> attribute in object. See https://github.com/aws/aws-cdk/issues/29949) for more details.

      Unlike most feature flags, we don't recommend setting this feature flag to true. However, if you're using the 'AwsCustomResource' construct with 'logApiResponseData' as true in
      the event object, then setting this feature flag will keep this behavior. Otherwise, setting this feature flag to false will trigger an 'Update' event by removing the 'logApiResponseData'
      property from the event object.
    `,introducedIn:{v2:"2.145.0"},recommendedValue:!1},[exports.S3_KEEP_NOTIFICATION_IN_IMPORTED_BUCKET]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, Adding notifications to a bucket in the current stack will not remove notification from imported stack.",detailsMd:`
      Currently, adding notifications to a bucket where it was created by ourselves will override notification added where it is imported.

      When this feature flag is enabled, adding notifications to a bucket in the current stack will only update notification defined in this stack.
      Other notifications that are not managed by this stack will be kept.
    `,introducedIn:{v2:"2.155.0"},recommendedValue:!1},[exports.USE_NEW_S3URI_PARAMETERS_FOR_BEDROCK_INVOKE_MODEL_TASK]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, use new props for S3 URI field in task definition of state machine for bedrock invoke model.",detailsMd:`
    Currently, 'inputPath' and 'outputPath' from the TaskStateBase Props is being used under BedrockInvokeModelProps to define S3URI under 'input' and 'output' fields
    of State Machine Task definition.

    When this feature flag is enabled, specify newly introduced props 's3InputUri' and
    's3OutputUri' to populate S3 uri under input and output fields in state machine task definition for Bedrock invoke model.

    `,introducedIn:{v2:"2.156.0"},defaults:{v2:!0},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to use input and output path fields for s3 URI"},[exports.Enable_IMDS_Blocking_Deprecated_Feature]:{type:flag_modeling_1().FlagType.Temporary,summary:"When set to true along with canContainersAccessInstanceRole=false in ECS cluster, new updated commands will be added to UserData to block container accessing IMDS. **Applicable to Linux only. IMPORTANT: See [details.](#aws-cdkaws-ecsenableImdsBlockingDeprecatedFeature)**",detailsMd:`
    In an ECS Cluster with \`MachineImageType.AMAZON_LINUX_2\`, the canContainersAccessInstanceRole=false option attempts to add commands to block containers from
    accessing IMDS. Set this flag to true in order to use new and updated commands. Please note that this 
    feature alone with this feature flag will be deprecated by <ins>**end of 2025**</ins> as CDK cannot 
    guarantee the correct execution of the feature in all platforms. See [Github discussion](https://github.com/aws/aws-cdk/discussions/32609) for more information.
    It is recommended to follow ECS documentation to block IMDS for your specific platform and cluster configuration.
    `,introducedIn:{v2:"2.175.0"},recommendedValue:!1,compatibilityWithOldBehaviorMd:"Set this flag to false in order to continue using old and outdated commands. However, it is **not** recommended."},[exports.Disable_ECS_IMDS_Blocking]:{type:flag_modeling_1().FlagType.Temporary,summary:"When set to true, CDK synth will throw exception if canContainersAccessInstanceRole is false. **IMPORTANT: See [details.](#aws-cdkaws-ecsdisableEcsImdsBlocking)**",detailsMd:`
    In an ECS Cluster with \`MachineImageType.AMAZON_LINUX_2\`, the canContainersAccessInstanceRole=false option attempts to add commands to block containers from
    accessing IMDS. CDK cannot guarantee the correct execution of the feature in all platforms. Setting this feature flag
    to true will ensure CDK does not attempt to implement IMDS blocking. By <ins>**end of 2025**</ins>, CDK will remove the 
    IMDS blocking feature. See [Github discussion](https://github.com/aws/aws-cdk/discussions/32609) for more information.
    
    It is recommended to follow ECS documentation to block IMDS for your specific platform and cluster configuration.
    `,introducedIn:{v2:"2.175.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"It is strongly recommended to set this flag to true. However, if necessary, set this flag to false to continue using the old implementation."},[exports.REDUCE_EC2_FARGATE_CLOUDWATCH_PERMISSIONS]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, we will only grant the necessary permissions when users specify cloudwatch log group through logConfiguration",detailsMd:`
    Currently, we automatically add a number of cloudwatch permissions to the task role when no cloudwatch log group is
    specified as logConfiguration and it will grant 'Resources': ['*'] to the task role.

    When this feature flag is enabled, we will only grant the necessary permissions when users specify cloudwatch log group.
    `,introducedIn:{v2:"2.159.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to continue grant permissions to log group when no log group is specified"},[exports.DYNAMODB_TABLEV2_RESOURCE_POLICY_PER_REPLICA]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled will allow you to specify a resource policy per replica, and not copy the source table policy to all replicas",detailsMd:"\n      If this flag is not set, the default behavior for `TableV2` is to use a different `resourcePolicy` for each replica.\n\n      If this flag is set to false, the behavior is that each replica shares the same `resourcePolicy` as the source table.\n      This will prevent you from creating a new table which has an additional replica and a resource policy.\n\n      This is a feature flag as the old behavior was technically incorrect but users may have come to depend on it.",introducedIn:{v2:"2.164.0"},recommendedValue:!0},[exports.EC2_SUM_TIMEOUT_ENABLED]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, initOptions.timeout and resourceSignalTimeout values will be summed together.",detailsMd:`
      Currently is both initOptions.timeout and resourceSignalTimeout are both specified in the options for creating an EC2 Instance,
      only the value from 'resourceSignalTimeout' will be used.

      When this feature flag is enabled, if both initOptions.timeout and resourceSignalTimeout are specified, the values will to be summed together.
      `,recommendedValue:!0,introducedIn:{v2:"2.160.0"}},[exports.APPSYNC_GRAPHQLAPI_SCOPE_LAMBDA_FUNCTION_PERMISSION]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, a Lambda authorizer Permission created when using GraphqlApi will be properly scoped with a SourceArn.",detailsMd:`
        Currently, when using a Lambda authorizer with an AppSync GraphQL API, the AWS CDK automatically generates the necessary AWS::Lambda::Permission
        to allow the AppSync API to invoke the Lambda authorizer. This permission is overly permissive because it lacks a SourceArn, meaning
        it allows invocations from any source.

        When this feature flag is enabled, the AWS::Lambda::Permission will be properly scoped with the SourceArn corresponding to the
        specific AppSync GraphQL API.
        `,recommendedValue:!0,introducedIn:{v2:"2.161.0"}},[exports.USE_CORRECT_VALUE_FOR_INSTANCE_RESOURCE_ID_PROPERTY]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the value of property `instanceResourceId` in construct `DatabaseInstanceReadReplica` will be set to the correct value which is `DbiResourceId` instead of currently `DbInstanceArn`",detailsMd:`
      Currently, the value of the property 'instanceResourceId' in construct 'DatabaseInstanceReadReplica' is not correct, and set to 'DbInstanceArn' which is not correct when it is used to create the IAM Policy in the grantConnect method.

      When this feature flag is enabled, the value of that property will be as expected set to 'DbiResourceId' attribute, and that will fix the grantConnect method.
    `,introducedIn:{v2:"2.161.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to use `DbInstanceArn` as value for property `instanceResourceId`"},[exports.CFN_INCLUDE_REJECT_COMPLEX_RESOURCE_UPDATE_CREATE_POLICY_INTRINSICS]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, CFN templates added with `cfn-include` will error if the template contains Resource Update or Create policies with CFN Intrinsics that include non-primitive values.",detailsMd:"\n    Without enabling this feature flag, `cfn-include` will silently drop resource update or create policies that contain CFN Intrinsics if they include non-primitive values.\n\n    Enabling this feature flag will make `cfn-include` throw on these templates, unless you specify the logical ID of the resource in the 'unhydratedResources' property.\n    ",recommendedValue:!0,introducedIn:{v2:"2.161.0"}},[exports.LAMBDA_NODEJS_SDK_V3_EXCLUDE_SMITHY_PACKAGES]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, both `@aws-sdk` and `@smithy` packages will be excluded from the Lambda Node.js 18.x runtime to prevent version mismatches in bundled applications.",detailsMd:`
      Currently, when bundling Lambda functions with the non-latest runtime that supports AWS SDK JavaScript (v3), only the '@aws-sdk/*' packages are excluded by default.
      However, this can cause version mismatches between the '@aws-sdk/*' and '@smithy/*' packages, as they are tightly coupled dependencies in AWS SDK v3.

      When this feature flag is enabled, both '@aws-sdk/*' and '@smithy/*' packages will be excluded during the bundling process. This ensures that no mismatches
      occur between these tightly coupled dependencies when using the AWS SDK v3 in Lambda functions.
    `,introducedIn:{v2:"2.161.0"},recommendedValue:!0},[exports.STEPFUNCTIONS_TASKS_FIX_RUN_ECS_TASK_POLICY]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the resource of IAM Run Ecs policy generated by SFN EcsRunTask will reference the definition, instead of constructing ARN.",detailsMd:`
      Currently, in the IAM Run Ecs policy generated by SFN EcsRunTask(), CDK will construct the ARN with wildcard attached at the end.
      The revision number at the end will be replaced with a wildcard which it shouldn't.

      When this feature flag is enabled, if the task definition is created in the stack, the 'Resource' section will 'Ref' the taskDefinition.
    `,introducedIn:{v2:"2.163.0"},recommendedValue:!0},[exports.BASTION_HOST_USE_AMAZON_LINUX_2023_BY_DEFAULT]:{type:flag_modeling_1().FlagType.ApiDefault,summary:"When enabled, the BastionHost construct will use the latest Amazon Linux 2023 AMI, instead of Amazon Linux 2.",detailsMd:`
      Currently, if the machineImage property of the BastionHost construct defaults to using the latest Amazon Linux 2
      AMI. Amazon Linux 2 hits end-of-life in June 2025, so using Amazon Linux 2023 by default is a more future-proof
      and secure option.

      When this feature flag is enabled, if you do not pass the machineImage property to the BastionHost construct,
      the latest Amazon Linux 2023 version will be used instead of Amazon Linux 2.
    `,introducedIn:{v2:"2.172.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag or explicitly pass an Amazon Linux 2 machine image to the BastionHost construct."},[exports.ASPECT_STABILIZATION]:{type:flag_modeling_1().FlagType.VisibleContext,summary:"When enabled, a stabilization loop will be run when invoking Aspects during synthesis.",detailsMd:`
      Currently, when Aspects are invoked in one single pass of the construct tree.
      This means that the Aspects that create other Aspects are not run and Aspects that create new nodes of the tree sometimes do not inherit their parent Aspects.

      When this feature flag is enabled, a stabilization loop is run to recurse the construct tree multiple times when invoking Aspects.
    `,defaults:{v2:!0},introducedIn:{v2:"2.172.0"},recommendedValue:!0},[exports.USER_POOL_DOMAIN_NAME_METHOD_WITHOUT_CUSTOM_RESOURCE]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, use a new method for DNS Name of user pool domain target without creating a custom resource.",detailsMd:`
    When this feature flag is enabled, a new method will be used to get the DNS Name of the user pool domain target. The old method
    creates a custom resource internally, but the new method doesn't need a custom resource.

    If the flag is set to false then a custom resource will be created when using \`UserPoolDomainTarget\`.
    `,introducedIn:{v2:"2.174.0"},recommendedValue:!0},[exports.ALB_DUALSTACK_WITHOUT_PUBLIC_IPV4_SECURITY_GROUP_RULES_DEFAULT]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the default security group ingress rules will allow IPv6 ingress from anywhere",detailsMd:`
      For internet facing ALBs with 'dualstack-without-public-ipv4' IP address type, the default security group rules
      will allow IPv6 ingress from anywhere (::/0). Previously, the default security group rules would only allow IPv4 ingress.

      Using a feature flag to make sure existing customers who might be relying
      on the overly restrictive permissions are not broken.`,introducedIn:{v2:"2.176.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to only allow IPv4 ingress in the default security group rules."},[exports.IAM_OIDC_REJECT_UNAUTHORIZED_CONNECTIONS]:{type:flag_modeling_1().FlagType.BugFix,summary:"When enabled, the default behaviour of OIDC provider will reject unauthorized connections",detailsMd:`
      When this feature flag is enabled, the default behaviour of OIDC Provider's custom resource handler will
      default to reject unauthorized connections when downloading CA Certificates.
      
      When this feature flag is disabled, the behaviour will be the same as current and will allow downloading
      thumbprints from unsecure connections.`,introducedIn:{v2:"2.177.0"},recommendedValue:!0,compatibilityWithOldBehaviorMd:"Disable the feature flag to allow unsecure OIDC connection."},[exports.ENABLE_ADDITIONAL_METADATA_COLLECTION]:{type:flag_modeling_1().FlagType.VisibleContext,summary:"When enabled, CDK will expand the scope of usage data collected to better inform CDK development and improve communication for security concerns and emerging issues.",detailsMd:`
    When this feature flag is enabled, CDK expands the scope of usage data collection to include the following:
      * L2 construct property keys - Collect which property keys you use from the L2 constructs in your app. This includes property keys nested in dictionary objects.
      * L2 construct property values of BOOL and ENUM types - Collect property key values of only BOOL and ENUM types. All other types, such as string values or construct references will be redacted. 
      * L2 construct method usage - Collection method name, parameter keys and parameter values of BOOL and ENUM type.
    `,introducedIn:{v2:"2.178.0"},recommendedValue:!0}};const CURRENT_MV="v2";exports.CURRENT_VERSION_EXPIRED_FLAGS=Object.entries(exports.FLAGS).filter(([_,flag])=>flag.introducedIn[CURRENT_MV]===void 0).map(([name,_])=>name).sort(),exports.CURRENTLY_RECOMMENDED_FLAGS=Object.fromEntries(Object.entries(exports.FLAGS).filter(([_,flag])=>flag.recommendedValue!==flag.defaults?.[CURRENT_MV]&&flag.introducedIn[CURRENT_MV]).map(([name,flag])=>[name,flag.recommendedValue])),exports.CURRENT_VERSION_FLAG_DEFAULTS=Object.fromEntries(Object.entries(exports.FLAGS).filter(([_,flag])=>flag.defaults?.[CURRENT_MV]!==void 0).map(([name,flag])=>[name,flag.defaults?.[CURRENT_MV]]));function futureFlagDefault(flag){const value=exports.CURRENT_VERSION_FLAG_DEFAULTS[flag]??!1;if(typeof value!="boolean")throw new Error(`futureFlagDefault: default type of flag '${flag}' should be boolean, got '${typeof value}'`);return value}exports.FUTURE_FLAGS_EXPIRED=exports.CURRENT_VERSION_EXPIRED_FLAGS,exports.FUTURE_FLAGS=Object.fromEntries(Object.entries(exports.CURRENTLY_RECOMMENDED_FLAGS).filter(([_,v])=>typeof v=="boolean")),exports.NEW_PROJECT_DEFAULT_CONTEXT=Object.fromEntries(Object.entries(exports.CURRENTLY_RECOMMENDED_FLAGS).filter(([_,v])=>typeof v!="boolean"));
