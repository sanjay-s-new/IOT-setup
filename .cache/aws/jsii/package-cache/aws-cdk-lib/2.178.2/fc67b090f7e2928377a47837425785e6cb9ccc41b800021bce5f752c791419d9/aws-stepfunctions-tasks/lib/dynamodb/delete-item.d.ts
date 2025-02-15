import { Construct } from 'constructs';
import { DynamoAttributeValue, DynamoConsumedCapacity, DynamoItemCollectionMetrics, DynamoReturnValues } from './shared-types';
import * as ddb from '../../../aws-dynamodb';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
interface DynamoDeleteItemOptions {
    /**
     * The name of the table containing the requested item.
     */
    readonly table: ddb.ITable;
    /**
     * Primary key of the item to retrieve.
     *
     * For the primary key, you must provide all of the attributes.
     * For example, with a simple primary key, you only need to provide a value for the partition key.
     * For a composite primary key, you must provide values for both the partition key and the sort key.
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html#DDB-GetItem-request-Key
     */
    readonly key: {
        [key: string]: DynamoAttributeValue;
    };
    /**
     * A condition that must be satisfied in order for a conditional DeleteItem to succeed.
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#DDB-DeleteItem-request-ConditionExpression
     *
     * @default - No condition expression
     */
    readonly conditionExpression?: string;
    /**
     * One or more substitution tokens for attribute names in an expression
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#DDB-DeleteItem-request-ExpressionAttributeNames
     *
     * @default - No expression attribute names
     */
    readonly expressionAttributeNames?: {
        [key: string]: string;
    };
    /**
     * One or more values that can be substituted in an expression.
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#DDB-DeleteItem-request-ExpressionAttributeValues
     *
     * @default - No expression attribute values
     */
    readonly expressionAttributeValues?: {
        [key: string]: DynamoAttributeValue;
    };
    /**
     * Determines the level of detail about provisioned throughput consumption that is returned in the response
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#DDB-DeleteItem-request-ReturnConsumedCapacity
     *
     * @default DynamoConsumedCapacity.NONE
     */
    readonly returnConsumedCapacity?: DynamoConsumedCapacity;
    /**
     * Determines whether item collection metrics are returned.
     * If set to SIZE, the response includes statistics about item collections, if any,
     * that were modified during the operation are returned in the response.
     * If set to NONE (the default), no statistics are returned.
     *
     * @default DynamoItemCollectionMetrics.NONE
     */
    readonly returnItemCollectionMetrics?: DynamoItemCollectionMetrics;
    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were deleted.
     *
     * @see https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteItem.html#DDB-DeleteItem-request-ReturnValues
     *
     * @default DynamoReturnValues.NONE
     */
    readonly returnValues?: DynamoReturnValues;
}
/**
 * Properties for DynamoDeleteItem Task using JSONPath
 */
export interface DynamoDeleteItemJsonPathProps extends sfn.TaskStateJsonPathBaseProps, DynamoDeleteItemOptions {
}
/**
 * Properties for DynamoDeleteItem Task using JSONata
 */
export interface DynamoDeleteItemJsonataProps extends sfn.TaskStateJsonataBaseProps, DynamoDeleteItemOptions {
}
/**
 * Properties for DynamoDeleteItem Task
 */
export interface DynamoDeleteItemProps extends sfn.TaskStateBaseProps, DynamoDeleteItemOptions {
}
/**
 * A StepFunctions task to call DynamoDeleteItem
 */
export declare class DynamoDeleteItem extends sfn.TaskStateBase {
    private readonly props;
    /**
     * A StepFunctions task to call DynamoDeleteItem using JSONPath
     */
    static jsonPath(scope: Construct, id: string, props: DynamoDeleteItemJsonPathProps): DynamoDeleteItem;
    /**
     * A StepFunctions task to call DynamoDeleteItem using JSONata
     */
    static jsonata(scope: Construct, id: string, props: DynamoDeleteItemJsonataProps): DynamoDeleteItem;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    constructor(scope: Construct, id: string, props: DynamoDeleteItemProps);
    /**
     * @internal
     */
    protected _renderTask(topLevelQueryLanguage?: sfn.QueryLanguage): any;
}
export {};
