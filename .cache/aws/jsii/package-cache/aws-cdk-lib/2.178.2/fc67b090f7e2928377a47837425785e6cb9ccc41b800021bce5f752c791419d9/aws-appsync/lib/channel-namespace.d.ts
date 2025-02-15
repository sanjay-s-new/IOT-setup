import { Construct } from 'constructs';
import { AppSyncAuthorizationType } from './auth-config';
import { Code } from './code';
import { IEventApi } from './eventapi';
import { IGrantable } from '../../aws-iam';
import { IResource, Resource } from '../../core';
/**
 * An AppSync channel namespace
 */
export interface IChannelNamespace extends IResource {
    /**
     * The ARN of the AppSync channel namespace
     *
     * @attribute
     */
    readonly channelNamespaceArn: string;
}
/**
 * Authorization configuration for the Channel Namespace
 */
export interface NamespaceAuthConfig {
    /**
     * The publish auth modes for this Event Api
     * @default - API Key authorization
     */
    readonly publishAuthModeTypes?: AppSyncAuthorizationType[];
    /**
     * The subscribe auth modes for this Event Api
     * @default - API Key authorization
     */
    readonly subscribeAuthModeTypes?: AppSyncAuthorizationType[];
}
/**
 * the base properties for a channel namespace
 */
export interface BaseChannelNamespaceProps {
    /**
     * the name of the channel namespace
     *
     * @default - the construct's id will be used
     */
    readonly channelNamespaceName?: string;
    /**
     * The Event Handler code
     *
     * @default - no code is used
     */
    readonly code?: Code;
    /**
     * Authorization config for channel namespace
     *
     * @default - defaults to Event API default auth config
     */
    readonly authorizationConfig?: NamespaceAuthConfig;
}
/**
 * Additional property for an AppSync channel namespace for an Event API reference
 */
export interface ChannelNamespaceProps extends BaseChannelNamespaceProps {
    /**
     * The API this channel namespace is associated with
     */
    readonly api: IEventApi;
}
/**
 * Option configuration for channel namespace
 */
export interface ChannelNamespaceOptions {
    /**
     * The Channel Namespace name
     *
     * @default - the construct's id will be used
     */
    readonly channelNamespaceName?: string;
    /**
     * The Event Handler code
     *
     * @default - no code is used
     */
    readonly code?: Code;
    /**
     * Authorization config for channel namespace
     *
     * @default - defaults to Event API default auth config
     */
    readonly authorizationConfig?: NamespaceAuthConfig;
}
/**
 * A Channel Namespace
 */
export declare class ChannelNamespace extends Resource implements IChannelNamespace {
    /**
     * Use an existing channel namespace by ARN
     */
    static fromChannelNamespaceArn(scope: Construct, id: string, channelNamespaceArn: string): IChannelNamespace;
    /**
     * the ARN of the channel namespace
     */
    readonly channelNamespaceArn: string;
    private channelNamespace;
    private api;
    constructor(scope: Construct, id: string, props: ChannelNamespaceProps);
    /**
     * Adds an IAM policy statement for EventSubscribe access to this channel namespace to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     */
    grantSubscribe(grantee: IGrantable): import("../../aws-iam").Grant;
    /**
     * Adds an IAM policy statement for EventPublish access to this channel namespace to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     */
    grantPublish(grantee: IGrantable): import("../../aws-iam").Grant;
    /**
     * Adds an IAM policy statement for EventPublish and EventSubscribe access to this channel namespace to an IAM
     * principal's policy.
     *
     * @param grantee The principal
     */
    grantPublishAndSubscribe(grantee: IGrantable): import("../../aws-iam").Grant;
    private validateAuthorizationConfig;
}
