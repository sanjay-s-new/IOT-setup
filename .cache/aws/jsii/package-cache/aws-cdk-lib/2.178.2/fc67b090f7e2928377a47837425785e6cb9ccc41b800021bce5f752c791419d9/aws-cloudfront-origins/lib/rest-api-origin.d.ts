import * as apigateway from '../../aws-apigateway';
import * as cloudfront from '../../aws-cloudfront';
import * as cdk from '../../core';
/**
 * Properties for an Origin for an API Gateway REST API.
 */
export interface RestApiOriginProps extends cloudfront.OriginProps {
    /**
     * Specifies how long, in seconds, CloudFront waits for a response from the origin, also known as the origin response timeout.
     * The valid range is from 1 to 180 seconds, inclusive.
     *
     * Note that values over 60 seconds are possible only after a limit increase request for the origin response timeout quota
     * has been approved in the target account; otherwise, values over 60 seconds will produce an error at deploy time.
     *
     * @default Duration.seconds(30)
     */
    readonly readTimeout?: cdk.Duration;
    /**
     * Specifies how long, in seconds, CloudFront persists its connection to the origin.
     * The valid range is from 1 to 180 seconds, inclusive.
     *
     * Note that values over 60 seconds are possible only after a limit increase request for the origin response timeout quota
     * has been approved in the target account; otherwise, values over 60 seconds will produce an error at deploy time.
     *
     * @default Duration.seconds(5)
     */
    readonly keepaliveTimeout?: cdk.Duration;
}
/**
 * An Origin for an API Gateway REST API.
 */
export declare class RestApiOrigin extends cloudfront.OriginBase {
    private readonly props;
    constructor(restApi: apigateway.RestApiBase, props?: RestApiOriginProps);
    protected renderCustomOriginConfig(): cloudfront.CfnDistribution.CustomOriginConfigProperty | undefined;
}
