import { Construct } from 'constructs';
import { IApi, ApiBase } from './api-base';
import { AppSyncLogConfig, AppSyncDomainOptions, AppSyncEventResource } from './appsync-common';
import { CfnApiKey } from './appsync.generated';
import { AppSyncAuthorizationType, AppSyncAuthProvider } from './auth-config';
import { ChannelNamespace, ChannelNamespaceOptions } from './channel-namespace';
import { Grant, IGrantable } from '../../aws-iam';
import { ILogGroup } from '../../aws-logs';
/**
 * Authorization configuration for the Event API
 */
export interface EventApiAuthConfig {
    /**
     * Auth providers for use in connection,
     * publish, and subscribe operations.
     * @default - API Key authorization
     */
    readonly authProviders?: AppSyncAuthProvider[];
    /**
     * Connection auth modes
     * @default - API Key authorization
     */
    readonly connectionAuthModeTypes?: AppSyncAuthorizationType[];
    /**
     * Default publish auth modes
     * @default - API Key authorization
     */
    readonly defaultPublishAuthModeTypes?: AppSyncAuthorizationType[];
    /**
     * Default subscribe auth modes
     * @default - API Key authorization
     */
    readonly defaultSubscribeAuthModeTypes?: AppSyncAuthorizationType[];
}
/**
 * Interface for Event API
 */
export interface IEventApi extends IApi {
    /**
     * The Authorization Types for this Event Api
     */
    readonly authProviderTypes: AppSyncAuthorizationType[];
    /**
     * The domain name of the Api's HTTP endpoint.
     *
     * @attribute
     */
    readonly httpDns: string;
    /**
     * The domain name of the Api's real-time endpoint.
     *
     * @attribute
     */
    readonly realtimeDns: string;
    /**
     * add a new channel namespace.
     * @param id the id of the channel namespace
     * @param options the options for the channel namespace
     * @returns the channel namespace
     */
    addChannelNamespace(id: string, options?: ChannelNamespaceOptions): ChannelNamespace;
    /**
     * Adds an IAM policy statement associated with this Event API to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     * @param resources The set of resources to allow (i.e. ...:[region]:[accountId]:apis/EventApiId/...)
     * @param actions The actions that should be granted to the principal (i.e. appsync:EventPublish )
     */
    grant(grantee: IGrantable, resources: AppSyncEventResource, ...actions: string[]): Grant;
    /**
     * Adds an IAM policy statement for EventPublish access to this EventApi to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     */
    grantPublish(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement for EventSubscribe access to this EventApi to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     */
    grantSubscribe(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement to publish and subscribe to this API for an IAM principal's policy.
     *
     * @param grantee The principal
     */
    grantPublishAndSubscribe(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement for EventConnect access to this EventApi to an IAM principal's policy.
     *
     * @param grantee The principal
     */
    grantConnect(grantee: IGrantable): Grant;
}
/**
 * Base Class for Event API
 */
export declare abstract class EventApiBase extends ApiBase implements IEventApi {
    /**
     * The domain name of the Api's HTTP endpoint.
     */
    abstract readonly httpDns: string;
    /**
     * The domain name of the Api's real-time endpoint.
     */
    abstract readonly realtimeDns: string;
    /**
     * The Authorization Types for this Event Api
     */
    abstract readonly authProviderTypes: AppSyncAuthorizationType[];
    /**
     * add a new Channel Namespace to this API
     */
    addChannelNamespace(id: string, options?: ChannelNamespaceOptions): ChannelNamespace;
    /**
     * Adds an IAM policy statement associated with this Event API to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     * @param resources The set of resources to allow (i.e. ...:[region]:[accountId]:apis/EventApiId/...)
     * @param actions The actions that should be granted to the principal (i.e. appsync:EventPublish )
     */
    grant(grantee: IGrantable, resources: AppSyncEventResource, ...actions: string[]): Grant;
    /**
     * Adds an IAM policy statement for EventPublish access to this EventApi to an IAM
     * principal's policy. This grants publish permission for all channels within the API.
     *
     * @param grantee The principal
     */
    grantPublish(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement for EventSubscribe access to this EventApi to an IAM
     * principal's policy. This grants subscribe permission for all channels within the API.
     *
     * @param grantee The principal
     */
    grantSubscribe(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement to publish and subscribe to this API for an IAM principal's policy.
     * This grants publish & subscribe permission for all channels within the API.
     *
     * @param grantee The principal
     */
    grantPublishAndSubscribe(grantee: IGrantable): Grant;
    /**
     * Adds an IAM policy statement for EventConnect access to this EventApi to an IAM principal's policy.
     *
     * @param grantee The principal
     */
    grantConnect(grantee: IGrantable): Grant;
}
/**
 * Properties for an AppSync Event API
 */
export interface EventApiProps {
    /**
     * the name of the Event API
     */
    readonly apiName: string;
    /**
     * Optional authorization configuration
     *
     * @default - API Key authorization
     */
    readonly authorizationConfig?: EventApiAuthConfig;
    /**
     * Logging configuration for this api
     *
     * @default - None
     */
    readonly logConfig?: AppSyncLogConfig;
    /**
     * The owner contact information for an API resource.
     *
     * This field accepts any string input with a length of 0 - 256 characters.
     *
     * @default - No owner contact.
     */
    readonly ownerContact?: string;
    /**
     * The domain name configuration for the Event API
     *
     * The Route 53 hosted zone and CName DNS record must be configured in addition to this setting to
     * enable custom domain URL
     *
     * @default - no domain name
     */
    readonly domainName?: AppSyncDomainOptions;
}
/**
 * Attributes for Event API imports
 */
export interface EventApiAttributes {
    /**
     * the name of the Event API
     */
    readonly apiName: string;
    /**
     * an unique AWS AppSync Event API identifier
     * i.e. 'lxz775lwdrgcndgz3nurvac7oa'
     */
    readonly apiId: string;
    /**
     * the ARN of the Event API
     */
    readonly apiArn: string;
    /**
     * the domain name of the Api's HTTP endpoint.
     */
    readonly httpDns: string;
    /**
     * the domain name of the Api's real-time endpoint.
     */
    readonly realtimeDns: string;
    /**
     * The Authorization Types for this Event Api
     * @default - none, required to construct event rules from imported APIs
     */
    readonly authProviderTypes?: AppSyncAuthorizationType[];
}
/**
 * An AppSync Event API
 *
 * @resource AWS::AppSync::Api
 */
export declare class EventApi extends EventApiBase {
    /**
     * Import a Event API through this function
     *
     * @param scope scope
     * @param id id
     * @param attrs Event API Attributes of an API
     */
    static fromEventApiAttributes(scope: Construct, id: string, attrs: EventApiAttributes): IEventApi;
    /**
     * an unique AWS AppSync Event API identifier
     * i.e. 'lxz775lwdrgcndgz3nurvac7oa'
     */
    readonly apiId: string;
    /**
     * the ARN of the API
     */
    readonly apiArn: string;
    /**
     * the domain name of the Api's HTTP endpoint.
     */
    readonly httpDns: string;
    /**
     * the domain name of the Api's real-time endpoint.
     */
    readonly realtimeDns: string;
    /**
     * The Authorization Types for this Event Api
     */
    readonly authProviderTypes: AppSyncAuthorizationType[];
    /**
     * The connection auth modes for this Event Api
     */
    readonly connectionModeTypes: AppSyncAuthorizationType[];
    /**
     * The default publish auth modes for this Event Api
     */
    readonly defaultPublishModeTypes: AppSyncAuthorizationType[];
    /**
     * The default subscribe auth modes for this Event Api
     */
    readonly defaultSubscribeModeTypes: AppSyncAuthorizationType[];
    /**
     * the configured API keys, if present
     *
     * @default - no api key
     * @attribute ApiKeys
     */
    readonly apiKeys: {
        [key: string]: CfnApiKey;
    };
    /**
     * the CloudWatch Log Group for this API
     */
    readonly logGroup: ILogGroup;
    private api;
    private eventConfig;
    private domainNameResource?;
    constructor(scope: Construct, id: string, props: EventApiProps);
    /**
     * Validate Event API configuration
     */
    private validateEventApiConfiguration;
    /**
     * Validate ownerContact property
     */
    private validateOwnerContact;
    private setupLogConfig;
    private setupAuthProviderTypes;
    private mapAuthorizationProviders;
    private mapAuthorizationConfig;
    private validateAuthorizationProps;
    private validateAuthorizationConfig;
    /**
     * The AppSyncDomainName of the associated custom domain
     */
    get appSyncDomainName(): string;
    /**
     * The HTTP Endpoint of the associated custom domain
     */
    get customHttpEndpoint(): string;
    /**
     * The Realtime Endpoint of the associated custom domain
     */
    get customRealtimeEndpoint(): string;
}
