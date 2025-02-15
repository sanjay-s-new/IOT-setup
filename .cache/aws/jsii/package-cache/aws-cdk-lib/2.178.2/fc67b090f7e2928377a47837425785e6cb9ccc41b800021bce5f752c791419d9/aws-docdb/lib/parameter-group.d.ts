import { Construct } from 'constructs';
import { IResource, Resource } from '../../core';
/**
 * A parameter group
 */
export interface IClusterParameterGroup extends IResource {
    /**
     * The name of this parameter group
     */
    readonly parameterGroupName: string;
}
/**
 * A new cluster or instance parameter group
 */
declare abstract class ClusterParameterGroupBase extends Resource implements IClusterParameterGroup {
    /**
     * Imports a parameter group
     */
    static fromParameterGroupName(scope: Construct, id: string, parameterGroupName: string): IClusterParameterGroup;
    /**
     * The name of the parameter group
     */
    abstract readonly parameterGroupName: string;
}
/**
 * Properties for a cluster parameter group
 */
export interface ClusterParameterGroupProps {
    /**
     * Description for this parameter group
     *
     * @default a CDK generated description
     */
    readonly description?: string;
    /**
     * Database family of this parameter group
     */
    readonly family: string;
    /**
     * The name of the cluster parameter group
     *
     * @default A CDK generated name for the cluster parameter group
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * The parameters in this parameter group
     */
    readonly parameters: {
        [key: string]: string;
    };
}
/**
 * A cluster parameter group
 *
 * @resource AWS::DocDB::DBClusterParameterGroup
 */
export declare class ClusterParameterGroup extends ClusterParameterGroupBase implements IClusterParameterGroup {
    /**
     * The name of the parameter group
     */
    readonly parameterGroupName: string;
    constructor(scope: Construct, id: string, props: ClusterParameterGroupProps);
}
export {};
