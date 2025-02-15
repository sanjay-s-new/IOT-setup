import { EmrCreateCluster } from '../emr-create-cluster';
import { EmrModifyInstanceGroupByName } from '../emr-modify-instance-group-by-name';
/**
 * Render the KerberosAttributesProperty as JSON
 */
export declare function KerberosAttributesPropertyToJson(property: EmrCreateCluster.KerberosAttributesProperty): {
    ADDomainJoinPassword: any;
    ADDomainJoinUser: any;
    CrossRealmTrustPrincipalPassword: any;
    KdcAdminPassword: any;
    Realm: any;
};
/**
 * Render the InstancesConfigProperty to JSON
 */
export declare function InstancesConfigPropertyToJson(property: EmrCreateCluster.InstancesConfigProperty): {
    AdditionalMasterSecurityGroups: any;
    AdditionalSlaveSecurityGroups: any;
    Ec2KeyName: any;
    Ec2SubnetId: any;
    Ec2SubnetIds: any;
    EmrManagedMasterSecurityGroup: any;
    EmrManagedSlaveSecurityGroup: any;
    HadoopVersion: any;
    InstanceCount: any;
    InstanceFleets: any;
    InstanceGroups: any;
    KeepJobFlowAliveWhenNoSteps: boolean;
    MasterInstanceType: any;
    Placement: {
        AvailabilityZone: any;
        AvailabilityZones: any;
    } | undefined;
    ServiceAccessSecurityGroup: any;
    SlaveInstanceType: any;
    TerminationProtected: any;
};
/**
 * Render the ApplicationConfigProperty as JSON
 */
export declare function ApplicationConfigPropertyToJson(property: EmrCreateCluster.ApplicationConfigProperty): {
    Name: any;
    Args: any;
    Version: any;
    AdditionalInfo: any;
};
/**
 * Render the ConfigurationProperty as JSON
 */
export declare function ConfigurationPropertyToJson(property: EmrCreateCluster.ConfigurationProperty): {
    Classification: any;
    Properties: any;
    Configurations: any;
};
/**
 * Render the EbsBlockDeviceConfigProperty as JSON
 */
export declare function EbsBlockDeviceConfigPropertyToJson(property: EmrCreateCluster.EbsBlockDeviceConfigProperty): {
    VolumeSpecification: {
        Iops: any;
        SizeInGB: number;
        VolumeType: any;
    };
    VolumesPerInstance: any;
};
/**
 * Render the EbsConfigurationProperty to JSON
 */
export declare function EbsConfigurationPropertyToJson(property: EmrCreateCluster.EbsConfigurationProperty): {
    EbsBlockDeviceConfigs: any;
    EbsOptimized: any;
};
/**
 * Render the InstanceTypeConfigProperty to JSON]
 */
export declare function InstanceTypeConfigPropertyToJson(property: EmrCreateCluster.InstanceTypeConfigProperty): {
    BidPrice: any;
    BidPriceAsPercentageOfOnDemandPrice: any;
    Configurations: any;
    EbsConfiguration: {
        EbsBlockDeviceConfigs: any;
        EbsOptimized: any;
    } | undefined;
    InstanceType: any;
    WeightedCapacity: any;
};
/**
 * Render the InstanceFleetProvisioningSpecificationsProperty to JSON
 */
export declare function InstanceFleetProvisioningSpecificationsPropertyToJson(property: EmrCreateCluster.InstanceFleetProvisioningSpecificationsProperty): {
    OnDemandSpecification: {
        AllocationStrategy: any;
    } | undefined;
    SpotSpecification: {
        AllocationStrategy: any;
        BlockDurationMinutes: any;
        TimeoutAction: any;
        TimeoutDurationMinutes: any;
    } | undefined;
};
/**
 * Render the InstanceFleetConfigProperty as JSON
 */
export declare function InstanceFleetConfigPropertyToJson(property: EmrCreateCluster.InstanceFleetConfigProperty): {
    InstanceFleetType: any;
    InstanceTypeConfigs: any;
    LaunchSpecifications: {
        OnDemandSpecification: {
            AllocationStrategy: any;
        } | undefined;
        SpotSpecification: {
            AllocationStrategy: any;
            BlockDurationMinutes: any;
            TimeoutAction: any;
            TimeoutDurationMinutes: any;
        } | undefined;
    } | undefined;
    Name: any;
    TargetOnDemandCapacity: any;
    TargetSpotCapacity: any;
};
/**
 * Render the MetricDimensionProperty as JSON
 */
export declare function MetricDimensionPropertyToJson(property: EmrCreateCluster.MetricDimensionProperty): {
    Key: any;
    Value: any;
};
/**
 * Render the ScalingTriggerProperty to JSON
 */
export declare function ScalingTriggerPropertyToJson(property: EmrCreateCluster.ScalingTriggerProperty): {
    CloudWatchAlarmDefinition: {
        ComparisonOperator: any;
        Dimensions: any;
        EvaluationPeriods: any;
        MetricName: any;
        Namespace: any;
        Period: any;
        Statistic: any;
        Threshold: any;
        Unit: any;
    };
};
/**
 * Render the ScalingActionProperty to JSON
 */
export declare function ScalingActionPropertyToJson(property: EmrCreateCluster.ScalingActionProperty): {
    Market: any;
    SimpleScalingPolicyConfiguration: {
        AdjustmentType: any;
        CoolDown: any;
        ScalingAdjustment: any;
    };
};
/**
 * Render the ScalingRuleProperty to JSON
 */
export declare function ScalingRulePropertyToJson(property: EmrCreateCluster.ScalingRuleProperty): {
    Action: {
        Market: any;
        SimpleScalingPolicyConfiguration: {
            AdjustmentType: any;
            CoolDown: any;
            ScalingAdjustment: any;
        };
    };
    Description: any;
    Name: any;
    Trigger: {
        CloudWatchAlarmDefinition: {
            ComparisonOperator: any;
            Dimensions: any;
            EvaluationPeriods: any;
            MetricName: any;
            Namespace: any;
            Period: any;
            Statistic: any;
            Threshold: any;
            Unit: any;
        };
    };
};
/**
 * Render the AutoScalingPolicyProperty to JSON
 */
export declare function AutoScalingPolicyPropertyToJson(property: EmrCreateCluster.AutoScalingPolicyProperty): {
    Constraints: {
        MaxCapacity: any;
        MinCapacity: any;
    };
    Rules: any;
};
/**
 * Render the InstanceGroupConfigProperty to JSON
 */
export declare function InstanceGroupConfigPropertyToJson(property: EmrCreateCluster.InstanceGroupConfigProperty): {
    AutoScalingPolicy: {
        Constraints: {
            MaxCapacity: any;
            MinCapacity: any;
        };
        Rules: any;
    } | undefined;
    BidPrice: any;
    Configurations: any;
    EbsConfiguration: {
        EbsBlockDeviceConfigs: any;
        EbsOptimized: any;
    } | undefined;
    InstanceCount: any;
    InstanceRole: any;
    InstanceType: any;
    Market: any;
    Name: any;
};
/**
 * Render the PlacementTypeProperty to JSON
 */
export declare function PlacementTypePropertyToJson(property: EmrCreateCluster.PlacementTypeProperty): {
    AvailabilityZone: any;
    AvailabilityZones: any;
};
/**
 * Render the BootstrapActionProperty as JSON
 */
export declare function BootstrapActionConfigToJson(property: EmrCreateCluster.BootstrapActionConfigProperty): {
    Name: any;
    ScriptBootstrapAction: {
        Path: any;
        Args: any;
    };
};
/**
 * Render the InstanceGroupModifyConfigProperty to JSON
 */
export declare function InstanceGroupModifyConfigPropertyToJson(property: EmrModifyInstanceGroupByName.InstanceGroupModifyConfigProperty): {
    Configurations: any;
    EC2InstanceIdsToTerminate: any;
    InstanceCount: any;
    ShrinkPolicy: {
        DecommissionTimeout: any;
        InstanceResizePolicy: {
            InstancesToProtect: any;
            InstancesToTerminate: any;
            InstanceTerminationTimeout: any;
        } | undefined;
    } | undefined;
};
