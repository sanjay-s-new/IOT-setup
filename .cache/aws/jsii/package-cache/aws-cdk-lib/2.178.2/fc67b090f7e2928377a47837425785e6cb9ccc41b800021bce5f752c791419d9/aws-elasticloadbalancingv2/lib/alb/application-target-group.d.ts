import { IConstruct, Construct } from 'constructs';
import { IApplicationListener } from './application-listener';
import { HttpCodeTarget } from './application-load-balancer';
import * as cloudwatch from '../../../aws-cloudwatch';
import * as ec2 from '../../../aws-ec2';
import { Duration } from '../../../core';
import { BaseTargetGroupProps, ITargetGroup, LoadBalancerTargetProps, TargetGroupAttributes, TargetGroupBase } from '../shared/base-target-group';
import { ApplicationProtocol, ApplicationProtocolVersion, TargetGroupLoadBalancingAlgorithmType } from '../shared/enums';
/**
 * Properties for defining an Application Target Group
 */
export interface ApplicationTargetGroupProps extends BaseTargetGroupProps {
    /**
     * The protocol used for communication with the target.
     *
     * This is not applicable for Lambda targets.
     *
     * @default - Determined from port if known
     */
    readonly protocol?: ApplicationProtocol;
    /**
     * The protocol version to use
     *
     * @default ApplicationProtocolVersion.HTTP1
     */
    readonly protocolVersion?: ApplicationProtocolVersion;
    /**
     * The port on which the target receives traffic.
     *
     * This is not applicable for Lambda targets.
     *
     * @default - Determined from protocol if known
     */
    readonly port?: number;
    /**
     * The time period during which the load balancer sends a newly registered
     * target a linearly increasing share of the traffic to the target group.
     *
     * The range is 30-900 seconds (15 minutes).
     *
     * @default 0
     */
    readonly slowStart?: Duration;
    /**
     * The stickiness cookie expiration period.
     *
     * Setting this value enables load balancer stickiness.
     *
     * After this period, the cookie is considered stale. The minimum value is
     * 1 second and the maximum value is 7 days (604800 seconds).
     *
     * @default - Stickiness is disabled
     */
    readonly stickinessCookieDuration?: Duration;
    /**
     * The name of an application-based stickiness cookie.
     *
     * Names that start with the following prefixes are not allowed: AWSALB, AWSALBAPP,
     * and AWSALBTG; they're reserved for use by the load balancer.
     *
     * Note: `stickinessCookieName` parameter depends on the presence of `stickinessCookieDuration` parameter.
     * If `stickinessCookieDuration` is not set, `stickinessCookieName` will be omitted.
     *
     * @default - If `stickinessCookieDuration` is set, a load-balancer generated cookie is used. Otherwise, no stickiness is defined.
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html
     */
    readonly stickinessCookieName?: string;
    /**
     * The load balancing algorithm to select targets for routing requests.
     *
     * @default TargetGroupLoadBalancingAlgorithmType.ROUND_ROBIN
     */
    readonly loadBalancingAlgorithmType?: TargetGroupLoadBalancingAlgorithmType;
    /**
     * The targets to add to this target group.
     *
     * Can be `Instance`, `IPAddress`, or any self-registering load balancing
     * target. If you use either `Instance` or `IPAddress` as targets, all
     * target must be of the same type.
     *
     * @default - No targets.
     */
    readonly targets?: IApplicationLoadBalancerTarget[];
    /**
     * Indicates whether anomaly mitigation is enabled.
     *
     * Only available when `loadBalancingAlgorithmType` is `TargetGroupLoadBalancingAlgorithmType.WEIGHTED_RANDOM`
     *
     * @default false
     *
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#automatic-target-weights
     */
    readonly enableAnomalyMitigation?: boolean;
}
/**
 * Contains all metrics for a Target Group of a Application Load Balancer.
 */
export interface IApplicationTargetGroupMetrics {
    /**
     * Return the given named metric for this Network Target Group
     *
     * @default Average over 5 minutes
     */
    custom(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of IPv6 requests received by the target group
     *
     * @default Sum over 5 minutes
     */
    ipv6RequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of requests processed over IPv4 and IPv6.
     *
     * This count includes only the requests with a response generated by a target of the load balancer.
     *
     * @default Sum over 5 minutes
     */
    requestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of healthy hosts in the target group
     *
     * @default Average over 5 minutes
     */
    healthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of unhealthy hosts in the target group
     *
     * @default Average over 5 minutes
     */
    unhealthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets in this target group.
     *
     * This does not include any response codes generated by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    httpCodeTarget(code: HttpCodeTarget, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The average number of requests received by each target in a target group.
     *
     * The only valid statistic is Sum. Note that this represents the average not the sum.
     *
     * @default Sum over 5 minutes
     */
    requestCountPerTarget(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were not successfully established between the load balancer and target.
     *
     * @default Sum over 5 minutes
     */
    targetConnectionErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received.
     *
     * @default Average over 5 minutes
     */
    targetResponseTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the load balancer that did not establish a session with the target.
     *
     * Possible causes include a mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     */
    targetTLSNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * Define an Application Target Group
 */
export declare class ApplicationTargetGroup extends TargetGroupBase implements IApplicationTargetGroup {
    /**
     * Import an existing target group
     */
    static fromTargetGroupAttributes(scope: Construct, id: string, attrs: TargetGroupAttributes): IApplicationTargetGroup;
    private readonly connectableMembers;
    private readonly listeners;
    private readonly protocol?;
    private readonly port?;
    private _metrics?;
    constructor(scope: Construct, id: string, props?: ApplicationTargetGroupProps);
    get metrics(): IApplicationTargetGroupMetrics;
    /**
     * Add a load balancing target to this target group
     */
    addTarget(...targets: IApplicationLoadBalancerTarget[]): void;
    /**
     * Enable sticky routing via a cookie to members of this target group.
     *
     * Note: If the `cookieName` parameter is set, application-based stickiness will be applied,
     * otherwise it defaults to duration-based stickiness attributes (`lb_cookie`).
     *
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html
     */
    enableCookieStickiness(duration: Duration, cookieName?: string): void;
    /**
     * Register a connectable as a member of this target group.
     *
     * Don't call this directly. It will be called by load balancing targets.
     */
    registerConnectable(connectable: ec2.IConnectable, portRange?: ec2.Port): void;
    /**
     * Register a listener that is load balancing to this target group.
     *
     * Don't call this directly. It will be called by listeners.
     */
    registerListener(listener: IApplicationListener, associatingConstruct?: IConstruct): void;
    /**
     * Full name of first load balancer
     */
    get firstLoadBalancerFullName(): string;
    /**
     * Return the given named metric for this Application Load Balancer Target Group
     *
     * Returns the metric for this target group from the point of view of the first
     * load balancer load balancing to it. If you have multiple load balancers load
     * sending traffic to the same target group, you will have to override the dimensions
     * on this metric.
     *
     * @default Average over 5 minutes
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of IPv6 requests received by the target group
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.ipv6RequestCount`` instead
     */
    metricIpv6RequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of requests processed over IPv4 and IPv6.
     *
     * This count includes only the requests with a response generated by a target of the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.requestCount`` instead
     */
    metricRequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of healthy hosts in the target group
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.healthyHostCount`` instead
     */
    metricHealthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of unhealthy hosts in the target group
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.unhealthyHostCount`` instead
     */
    metricUnhealthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets in this target group.
     *
     * This does not include any response codes generated by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.httpCodeTarget`` instead
     */
    metricHttpCodeTarget(code: HttpCodeTarget, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The average number of requests received by each target in a target group.
     *
     * The only valid statistic is Sum. Note that this represents the average not the sum.
     *
     * @default Sum over 5 minutes
     * @deprecated Use `ApplicationTargetGroup.metrics.requestCountPerTarget` instead
     */
    metricRequestCountPerTarget(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were not successfully established between the load balancer and target.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.targetConnectionErrorCount`` instead
     */
    metricTargetConnectionErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received.
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.targetResponseTime`` instead
     */
    metricTargetResponseTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the load balancer that did not establish a session with the target.
     *
     * Possible causes include a mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationTargetGroup.metrics.tlsNegotiationErrorCount`` instead
     */
    metricTargetTLSNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    protected validateTargetGroup(): string[];
}
/**
 * A Target Group for Application Load Balancers
 */
export interface IApplicationTargetGroup extends ITargetGroup {
    /**
     * All metrics available for this target group.
     */
    readonly metrics: IApplicationTargetGroupMetrics;
    /**
     * Register a listener that is load balancing to this target group.
     *
     * Don't call this directly. It will be called by listeners.
     */
    registerListener(listener: IApplicationListener, associatingConstruct?: IConstruct): void;
    /**
     * Register a connectable as a member of this target group.
     *
     * Don't call this directly. It will be called by load balancing targets.
     */
    registerConnectable(connectable: ec2.IConnectable, portRange?: ec2.Port): void;
    /**
     * Add a load balancing target to this target group
     */
    addTarget(...targets: IApplicationLoadBalancerTarget[]): void;
}
/**
 * Interface for constructs that can be targets of an application load balancer
 */
export interface IApplicationLoadBalancerTarget {
    /**
     * Attach load-balanced target to a TargetGroup
     *
     * May return JSON to directly add to the [Targets] list, or return undefined
     * if the target will register itself with the load balancer.
     */
    attachToApplicationTargetGroup(targetGroup: IApplicationTargetGroup): LoadBalancerTargetProps;
}
