import { ContainerOverride } from './ecs-task-properties';
import { TargetBaseProps } from './util';
import * as ec2 from '../../aws-ec2';
import * as ecs from '../../aws-ecs';
import * as events from '../../aws-events';
import * as iam from '../../aws-iam';
/**
 * Metadata that you apply to a resource to help categorize and organize the resource. Each tag consists of a key and an optional value, both of which you define.
 */
export interface Tag {
    /**
     * Key is the name of the tag
     */
    readonly key: string;
    /**
     * Value is the metadata contents of the tag
     */
    readonly value: string;
}
/**
 * Properties to define an ECS Event Task
 */
export interface EcsTaskProps extends TargetBaseProps {
    /**
     * Cluster where service will be deployed
     */
    readonly cluster: ecs.ICluster;
    /**
     * Task Definition of the task that should be started
     */
    readonly taskDefinition: ecs.ITaskDefinition;
    /**
     * How many tasks should be started when this event is triggered
     *
     * @default 1
     */
    readonly taskCount?: number;
    /**
     * Container setting overrides
     *
     * Key is the name of the container to override, value is the
     * values you want to override.
     */
    readonly containerOverrides?: ContainerOverride[];
    /**
     * In what subnets to place the task's ENIs
     *
     * (Only applicable in case the TaskDefinition is configured for AwsVpc networking)
     *
     * @default Private subnets
     */
    readonly subnetSelection?: ec2.SubnetSelection;
    /**
     * Existing security groups to use for the task's ENIs
     *
     * (Only applicable in case the TaskDefinition is configured for AwsVpc networking)
     *
     * @default A new security group is created
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    /**
     * Existing IAM role to run the ECS task
     *
     * @default A new IAM role is created
     */
    readonly role?: iam.IRole;
    /**
     * The platform version on which to run your task
     *
     * Unless you have specific compatibility requirements, you don't need to specify this.
     *
     * @see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html
     *
     * @default - ECS will set the Fargate platform version to 'LATEST'
     */
    readonly platformVersion?: ecs.FargatePlatformVersion;
    /**
     * Specifies whether the task's elastic network interface receives a public IP address.
     * You can specify true only when LaunchType is set to FARGATE.
     *
     * @default - true if the subnet type is PUBLIC, otherwise false
     */
    readonly assignPublicIp?: boolean;
    /**
     * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated.
     *
     * @default - Tags will not be propagated
     */
    readonly propagateTags?: ecs.PropagatedTagSource;
    /**
     * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
     *
     * @default - No additional tags are applied to the task
     */
    readonly tags?: Tag[];
    /**
     * Whether or not to enable the execute command functionality for the containers in this task.
     * If true, this enables execute command functionality on all containers in the task.
     *
     * @default - false
     */
    readonly enableExecuteCommand?: boolean;
    /**
     * Specifies the launch type on which your task is running. The launch type that you specify here
     * must match one of the launch type (compatibilities) of the target task.
     *
     * @default - 'EC2' if `isEc2Compatible` for the `taskDefinition` is true, otherwise 'FARGATE'
     */
    readonly launchType?: ecs.LaunchType;
}
/**
 * Start a task on an ECS cluster
 */
export declare class EcsTask implements events.IRuleTarget {
    private readonly props;
    /**
     * The security groups associated with the task. Only applicable with awsvpc network mode.
     *
     * @default - A new security group is created.
     */
    readonly securityGroups?: ec2.ISecurityGroup[];
    private readonly cluster;
    private readonly taskDefinition;
    private readonly taskCount;
    private readonly role;
    private readonly platformVersion?;
    private readonly assignPublicIp?;
    private readonly propagateTags?;
    private readonly tags?;
    private readonly enableExecuteCommand?;
    private readonly launchType?;
    constructor(props: EcsTaskProps);
    /**
     * Allows using tasks as target of EventBridge events
     */
    bind(_rule: events.IRule, _id?: string): events.RuleTargetConfig;
    private createEventRolePolicyStatements;
}
