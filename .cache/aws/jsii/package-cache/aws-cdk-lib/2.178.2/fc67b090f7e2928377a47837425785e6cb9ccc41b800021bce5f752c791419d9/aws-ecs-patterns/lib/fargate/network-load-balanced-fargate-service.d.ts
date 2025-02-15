import { Construct } from 'constructs';
import { ISecurityGroup, SubnetSelection } from '../../../aws-ec2';
import { FargateService, FargateTaskDefinition } from '../../../aws-ecs';
import { FargateServiceBaseProps } from '../base/fargate-service-base';
import { NetworkLoadBalancedServiceBase, NetworkLoadBalancedServiceBaseProps } from '../base/network-load-balanced-service-base';
/**
 * The properties for the NetworkLoadBalancedFargateService service.
 */
export interface NetworkLoadBalancedFargateServiceProps extends NetworkLoadBalancedServiceBaseProps, FargateServiceBaseProps {
    /**
     * Determines whether the service will be assigned a public IP address.
     *
     * @default false
     */
    readonly assignPublicIp?: boolean;
    /**
     * The subnets to associate with the service.
     *
     * @default - Public subnets if `assignPublicIp` is set, otherwise the first available one of Private, Isolated, Public, in that order.
     */
    readonly taskSubnets?: SubnetSelection;
    /**
     * The security groups to associate with the service. If you do not specify a security group, a new security group is created.
     *
     * @default - A new security group is created.
     */
    readonly securityGroups?: ISecurityGroup[];
}
/**
 * A Fargate service running on an ECS cluster fronted by a network load balancer.
 */
export declare class NetworkLoadBalancedFargateService extends NetworkLoadBalancedServiceBase {
    readonly assignPublicIp: boolean;
    /**
     * The Fargate service in this construct.
     */
    readonly service: FargateService;
    /**
     * The Fargate task definition in this construct.
     */
    readonly taskDefinition: FargateTaskDefinition;
    /**
     * Constructs a new instance of the NetworkLoadBalancedFargateService class.
     */
    constructor(scope: Construct, id: string, props?: NetworkLoadBalancedFargateServiceProps);
}
