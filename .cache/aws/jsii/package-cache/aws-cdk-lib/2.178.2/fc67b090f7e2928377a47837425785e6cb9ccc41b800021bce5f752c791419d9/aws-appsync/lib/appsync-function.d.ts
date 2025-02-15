import { Construct } from 'constructs';
import { Code } from './code';
import { BaseDataSource } from './data-source';
import { IGraphqlApi } from './graphqlapi-base';
import { MappingTemplate } from './mapping-template';
import { FunctionRuntime } from './runtime';
import { Resource, IResource } from '../../core';
/**
 * the base properties for AppSync Functions
 */
export interface BaseAppsyncFunctionProps {
    /**
     * the name of the AppSync Function
     */
    readonly name: string;
    /**
     * the description for this AppSync Function
     *
     * @default - no description
     */
    readonly description?: string;
    /**
     * the request mapping template for the AppSync Function
     *
     * @default - no request mapping template
     */
    readonly requestMappingTemplate?: MappingTemplate;
    /**
     * the response mapping template for the AppSync Function
     *
     * @default - no response mapping template
     */
    readonly responseMappingTemplate?: MappingTemplate;
    /**
     * The functions runtime
     *
     * @default - no function runtime, VTL mapping templates used
     */
    readonly runtime?: FunctionRuntime;
    /**
     * The function code
     *
     * @default - no code is used
     */
    readonly code?: Code;
    /**
     * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function
     * in a BatchInvoke operation.
     *
     * Can only be set when using LambdaDataSource.
     *
     * @default - No max batch size
     */
    readonly maxBatchSize?: number;
}
/**
 * the CDK properties for AppSync Functions
 */
export interface AppsyncFunctionProps extends BaseAppsyncFunctionProps {
    /**
     * the GraphQL Api linked to this AppSync Function
     */
    readonly api: IGraphqlApi;
    /**
     * the data source linked to this AppSync Function
     */
    readonly dataSource: BaseDataSource;
}
/**
 * The attributes for imported AppSync Functions
 */
export interface AppsyncFunctionAttributes {
    /**
     * the ARN of the AppSync function
     */
    readonly functionArn: string;
}
/**
 * Interface for AppSync Functions
 */
export interface IAppsyncFunction extends IResource {
    /**
     * the name of this AppSync Function
     *
     * @attribute
     */
    readonly functionId: string;
    /**
     * the ARN of the AppSync function
     *
     * @attribute
     */
    readonly functionArn: string;
}
/**
 * AppSync Functions are local functions that perform certain operations
 * onto a backend data source. Developers can compose operations (Functions)
 * and execute them in sequence with Pipeline Resolvers.
 *
 * @resource AWS::AppSync::FunctionConfiguration
 */
export declare class AppsyncFunction extends Resource implements IAppsyncFunction {
    /**
     * Import Appsync Function from arn
     */
    static fromAppsyncFunctionAttributes(scope: Construct, id: string, attrs: AppsyncFunctionAttributes): IAppsyncFunction;
    /**
     * the name of this AppSync Function
     *
     * @attribute Name
     */
    readonly functionName: string;
    /**
     * the ARN of the AppSync function
     *
     * @attribute
     */
    readonly functionArn: string;
    /**
     * the ID of the AppSync function
     *
     * @attribute
     */
    readonly functionId: string;
    /**
     * the data source of this AppSync Function
     *
     * @attribute DataSourceName
     */
    readonly dataSource: BaseDataSource;
    private readonly function;
    constructor(scope: Construct, id: string, props: AppsyncFunctionProps);
}
