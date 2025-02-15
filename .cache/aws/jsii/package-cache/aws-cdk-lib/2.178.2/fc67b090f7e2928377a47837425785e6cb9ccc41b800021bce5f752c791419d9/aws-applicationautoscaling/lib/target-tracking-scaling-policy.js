"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PredefinedMetric=exports.TargetTrackingScalingPolicy=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},applicationautoscaling_generated_1=()=>{var tmp=require("./applicationautoscaling.generated");return applicationautoscaling_generated_1=()=>tmp,tmp},cdk=()=>{var tmp=require("../../core");return cdk=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp};class TargetTrackingScalingPolicy extends constructs_1().Construct{constructor(scope,id,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_applicationautoscaling_TargetTrackingScalingPolicyProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,TargetTrackingScalingPolicy),error}if(props.customMetric===void 0==(props.predefinedMetric===void 0))throw new(errors_1()).ValidationError("Exactly one of 'customMetric' or 'predefinedMetric' must be specified.",scope);if(props.customMetric&&!props.customMetric.toMetricConfig().metricStat)throw new(errors_1()).ValidationError("Only direct metrics are supported for Target Tracking. Use Step Scaling or supply a Metric object.",scope);super(scope,id);const predefinedMetric=props.predefinedMetric===PredefinedMetric.DYNAMODB_WRITE_CAPACITY_UTILIZATION?PredefinedMetric.DYANMODB_WRITE_CAPACITY_UTILIZATION:props.predefinedMetric,resource=new(applicationautoscaling_generated_1()).CfnScalingPolicy(this,"Resource",{policyName:props.policyName||cdk().Names.uniqueId(this),policyType:"TargetTrackingScaling",scalingTargetId:props.scalingTarget.scalableTargetId,targetTrackingScalingPolicyConfiguration:{customizedMetricSpecification:renderCustomMetric(this,props.customMetric),disableScaleIn:props.disableScaleIn,predefinedMetricSpecification:predefinedMetric!==void 0?{predefinedMetricType:predefinedMetric,resourceLabel:props.resourceLabel}:void 0,scaleInCooldown:props.scaleInCooldown&&props.scaleInCooldown.toSeconds(),scaleOutCooldown:props.scaleOutCooldown&&props.scaleOutCooldown.toSeconds(),targetValue:props.targetValue}});this.scalingPolicyArn=resource.ref}}exports.TargetTrackingScalingPolicy=TargetTrackingScalingPolicy,_a=JSII_RTTI_SYMBOL_1,TargetTrackingScalingPolicy[_a]={fqn:"aws-cdk-lib.aws_applicationautoscaling.TargetTrackingScalingPolicy",version:"2.178.2"};function renderCustomMetric(scope,metric){if(!metric)return;const c=metric.toMetricConfig().metricStat;if(c.statistic.startsWith("p"))throw new(errors_1()).ValidationError(`Cannot use statistic '${c.statistic}' for Target Tracking: only 'Average', 'Minimum', 'Maximum', 'SampleCount', and 'Sum' are supported.`,scope);return{dimensions:c.dimensions,metricName:c.metricName,namespace:c.namespace,statistic:c.statistic,unit:c.unitFilter}}var PredefinedMetric;(function(PredefinedMetric2){PredefinedMetric2.APPSTREAM_AVERAGE_CAPACITY_UTILIZATION="AppStreamAverageCapacityUtilization",PredefinedMetric2.CASSANDRA_READ_CAPACITY_UTILIZATION="CassandraReadCapacityUtilization",PredefinedMetric2.CASSANDRA_WRITE_CAPACITY_UTILIZATION="CassandraWriteCapacityUtilization",PredefinedMetric2.COMPREHEND_INFERENCE_UTILIZATION="ComprehendInferenceUtilization",PredefinedMetric2.NEPTURE_READER_AVERAGE_CPU_UTILIZATION="NeptuneReaderAverageCPUUtilization",PredefinedMetric2.DYNAMODB_READ_CAPACITY_UTILIZATION="DynamoDBReadCapacityUtilization",PredefinedMetric2.DYNAMODB_WRITE_CAPACITY_UTILIZATION="DynamoDBWriteCapacityUtilization-dummy",PredefinedMetric2.DYANMODB_WRITE_CAPACITY_UTILIZATION="DynamoDBWriteCapacityUtilization",PredefinedMetric2.ALB_REQUEST_COUNT_PER_TARGET="ALBRequestCountPerTarget",PredefinedMetric2.RDS_READER_AVERAGE_CPU_UTILIZATION="RDSReaderAverageCPUUtilization",PredefinedMetric2.RDS_READER_AVERAGE_DATABASE_CONNECTIONS="RDSReaderAverageDatabaseConnections",PredefinedMetric2.EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION="EC2SpotFleetRequestAverageCPUUtilization",PredefinedMetric2.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN="EC2SpotFleetRequestAverageNetworkIn",PredefinedMetric2.EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT="EC2SpotFleetRequestAverageNetworkOut",PredefinedMetric2.SAGEMAKER_VARIANT_INVOCATIONS_PER_INSTANCE="SageMakerVariantInvocationsPerInstance",PredefinedMetric2.SAGEMAKER_VARIANT_PROVISIONED_CONCURRENCY_UTILIZATION="SageMakerVariantProvisionedConcurrencyUtilization",PredefinedMetric2.SAGEMAKER_INFERENCE_COMPONENT_INVOCATIONS_PER_COPY="SageMakerInferenceComponentInvocationsPerCopy",PredefinedMetric2.ECS_SERVICE_AVERAGE_CPU_UTILIZATION="ECSServiceAverageCPUUtilization",PredefinedMetric2.ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION="ECSServiceAverageMemoryUtilization",PredefinedMetric2.LAMBDA_PROVISIONED_CONCURRENCY_UTILIZATION="LambdaProvisionedConcurrencyUtilization",PredefinedMetric2.KAFKA_BROKER_STORAGE_UTILIZATION="KafkaBrokerStorageUtilization",PredefinedMetric2.ELASTICACHE_PRIMARY_ENGINE_CPU_UTILIZATION="ElastiCachePrimaryEngineCPUUtilization",PredefinedMetric2.ELASTICACHE_REPLICA_ENGINE_CPU_UTILIZATION="ElastiCacheReplicaEngineCPUUtilization",PredefinedMetric2.ELASTICACHE_DATABASE_MEMORY_USAGE_COUNTED_FOR_EVICT_PERCENTAGE="ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage",PredefinedMetric2.ELASTICACHE_DATABASE_CAPACITY_USAGE_COUNTED_FOR_EVICT_PERCENTAGE="ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage",PredefinedMetric2.SAGEMAKER_INFERENCE_COMPONENT_CONCURRENT_REQUESTS_PER_COPY_HIGH_RESOLUTION="SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution",PredefinedMetric2.SAGEMAKER_VARIANT_CONCURRENT_REQUESTS_PER_MODEL_HIGH_RESOLUTION="SageMakerVariantConcurrentRequestsPerModelHighResolution",PredefinedMetric2.WORKSPACES_AVERAGE_USER_SESSIONS_CAPACITY_UTILIZATION="WorkSpacesAverageUserSessionsCapacityUtilization"})(PredefinedMetric||(exports.PredefinedMetric=PredefinedMetric={}));
