import * as events from '../../aws-events';
import * as iam from '../../aws-iam';
type AwsSdkMetadataItem = {
    iamPrefix: string;
};
/**
 * AWS SDK service metadata.
 */
export type AwsSdkMetadata = {
    [key: string]: AwsSdkMetadataItem | {};
};
/**
 * Rule target input for an AwsApi target.
 */
export interface AwsApiInput {
    /**
     * The service to call
     *
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html
     */
    readonly service: string;
    /**
     * The service action to call
     *
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html
     */
    readonly action: string;
    /**
     * The parameters for the service action
     *
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html
     *
     * @default - no parameters
     */
    readonly parameters?: any;
    /**
     * The regex pattern to use to catch API errors. The `code` property of the
     * `Error` object will be tested against this pattern. If there is a match an
     * error will not be thrown.
     *
     * @default - do not catch errors
     */
    readonly catchErrorPattern?: string;
    /**
     * API version to use for the service
     *
     * @deprecated the handler code was migrated to AWS SDK for JavaScript v3, which does not support this feature anymore
     */
    readonly apiVersion?: string;
}
/**
 * Properties for an AwsApi target.
 */
export interface AwsApiProps extends AwsApiInput {
    /**
     * The IAM policy statement to allow the API call. Use only if
     * resource restriction is needed.
     *
     * @default - extract the permission from the API call
     */
    readonly policyStatement?: iam.PolicyStatement;
}
/**
 * Use an AWS Lambda function that makes API calls as an event rule target.
 */
export declare class AwsApi implements events.IRuleTarget {
    private readonly props;
    constructor(props: AwsApiProps);
    /**
     * Returns a RuleTarget that can be used to trigger this AwsApi as a
     * result from an EventBridge event.
     */
    bind(rule: events.IRule, id?: string): events.RuleTargetConfig;
}
export {};
