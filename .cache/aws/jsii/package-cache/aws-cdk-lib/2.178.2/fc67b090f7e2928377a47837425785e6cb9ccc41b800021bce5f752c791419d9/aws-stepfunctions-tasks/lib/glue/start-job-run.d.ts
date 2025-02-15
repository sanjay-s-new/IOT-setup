import { Construct } from 'constructs';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
import { Duration } from '../../../core';
/**
 * Properties for the worker configuration.
 */
export interface WorkerConfigurationProperty {
    /**
     * The type of predefined worker that is allocated when a job runs.
     *
     * @default - must choose one of `workerType` or `workerTypeV2`
     * @deprecated Use `workerTypeV2` for more flexibility in defining worker types.
     */
    readonly workerType?: WorkerType;
    /**
     * The type of predefined worker that is allocated when a job runs. Can be one of the
     * predefined values or dynamic values using `WorkerTypeV2.of(...)`.
     *
     * @default - must choose one of `workerType` or `workerTypeV2`
     */
    readonly workerTypeV2?: WorkerTypeV2;
    /**
     * The number of workers of a defined `WorkerType` that are allocated when a job runs.
     */
    readonly numberOfWorkers: number;
}
interface GlueStartJobRunOptions {
    /**
     * Glue job name
     */
    readonly glueJobName: string;
    /**
     * The job arguments specifically for this run.
     *
     * For this job run, they replace the default arguments set in the job
     * definition itself.
     *
     * @default - Default arguments set in the job definition
     */
    readonly arguments?: sfn.TaskInput;
    /**
     * The name of the SecurityConfiguration structure to be used with this job run.
     *
     * This must match the Glue API
     * @see https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-oneLine
     *
     * @default - Default configuration set in the job definition
     */
    readonly securityConfiguration?: string;
    /**
     * After a job run starts, the number of minutes to wait before sending a job run delay notification.
     *
     * Must be at least 1 minute.
     *
     * @default - Default delay set in the job definition
     */
    readonly notifyDelayAfter?: Duration;
    /**
     * The worker configuration for this run.
     *
     * @default - Default worker configuration in the job definition
     */
    readonly workerConfiguration?: WorkerConfigurationProperty;
    /**
     * The excecution class of the job.
     *
     * @default - STANDARD
     */
    readonly executionClass?: ExecutionClass;
}
/**
 * Properties for starting an AWS Glue job as a task
 */
export interface GlueStartJobRunJsonPathProps extends sfn.TaskStateJsonPathBaseProps, GlueStartJobRunOptions {
}
/**
 * Properties for starting an AWS Glue job as a task
 */
export interface GlueStartJobRunJsonataProps extends sfn.TaskStateJsonataBaseProps, GlueStartJobRunOptions {
}
/**
 * Properties for starting an AWS Glue job as a task
 */
export interface GlueStartJobRunProps extends sfn.TaskStateBaseProps, GlueStartJobRunOptions {
}
/**
 * Starts an AWS Glue job in a Task state
 *
 * OUTPUT: the output of this task is a JobRun structure, for details consult
 * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-JobRun
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-glue.html
 */
export declare class GlueStartJobRun extends sfn.TaskStateBase {
    private readonly props;
    /**
     * Starts an AWS Glue job in a Task state using JSONPath
     *
     * OUTPUT: the output of this task is a JobRun structure, for details consult
     * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-JobRun
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-glue.html
     */
    static jsonPath(scope: Construct, id: string, props: GlueStartJobRunJsonPathProps): GlueStartJobRun;
    /**
     * Starts an AWS Glue job in a Task state using JSONata
     *
     * OUTPUT: the output of this task is a JobRun structure, for details consult
     * https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-runs.html#aws-glue-api-jobs-runs-JobRun
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/connect-glue.html
     */
    static jsonata(scope: Construct, id: string, props: GlueStartJobRunJsonataProps): GlueStartJobRun;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    private readonly jobArguments?;
    constructor(scope: Construct, id: string, props: GlueStartJobRunProps);
    /**
     * @internal
     */
    protected _renderTask(topLevelQueryLanguage?: sfn.QueryLanguage): any;
    private getPolicies;
}
/**
 * The type of predefined worker that is allocated when a job runs.
 *
 * @deprecated Use `workerTypeV2` property for `WorkerConfigurationProperty`
 */
export declare enum WorkerType {
    /**
     * Each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
     */
    STANDARD = "Standard",
    /**
     * Each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. Suitable for low volume streaming jobs.
     */
    G_025X = "G.025X",
    /**
     * Each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. Suitable for memory-intensive jobs.
     */
    G_1X = "G.1X",
    /**
     * Each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. Suitable for memory-intensive jobs.
     */
    G_2X = "G.2X",
    /**
     * Each worker maps to 4 DPU (16 vCPU, 64 GB of memory, 256 GB disk), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later jobs.
     */
    G_4X = "G.4X",
    /**
     * Each worker maps to 8 DPU (32 vCPU, 128 GB of memory, 512 GB disk), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later jobs.
     */
    G_8X = "G.8X",
    /**
     * Each worker maps to 2 high-memory DPU [M-DPU] (8 vCPU, 64 GB of memory, 128 GB disk). Supported in Ray jobs.
     */
    Z_2X = "Z.2X"
}
/**
 * The type of predefined worker that is allocated when a job runs.
 *
 * If you need to use a WorkerTypeV2 that doesn't exist as a static member, you
 * can instantiate a `WorkerTypeV2` object, e.g: `WorkerTypeV2.of('other type')`.
 */
export declare class WorkerTypeV2 {
    /**
     * Each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.
     */
    static readonly STANDARD: WorkerTypeV2;
    /**
     * Each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. Suitable for memory-intensive jobs.
     */
    static readonly G_1X: WorkerTypeV2;
    /**
     * Each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. Suitable for memory-intensive jobs.
     */
    static readonly G_2X: WorkerTypeV2;
    /**
     * Each worker maps to 4 DPU (16 vCPU, 64 GB of memory, 256 GB disk), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later jobs.
     */
    static readonly G_4X: WorkerTypeV2;
    /**
     * Each worker maps to 8 DPU (32 vCPU, 128 GB of memory, 512 GB disk), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for AWS Glue version 3.0 or later jobs.
     */
    static readonly G_8X: WorkerTypeV2;
    /**
     * Each worker maps to 0.25 DPU (2 vCPU, 4 GB of memory, 64 GB disk), and provides 1 executor per worker. Suitable for low volume streaming jobs.
     */
    static readonly G_025X: WorkerTypeV2;
    /**
     * Each worker maps to 2 high-memory DPU [M-DPU] (8 vCPU, 64 GB of memory, 128 GB disk). Supported in Ray jobs.
     */
    static readonly Z_2X: WorkerTypeV2;
    /**
     * Custom worker type
     * @param workerType custom worker type
     */
    static of(workerType: string): WorkerTypeV2;
    /**
     * The name of this WorkerType, as expected by Job resource.
     */
    readonly name: string;
    private constructor();
}
/**
 * The excecution class of the job.
 */
export declare enum ExecutionClass {
    /**
     * The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
     * Only jobs with AWS Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX`.
     * The flexible execution class is available for Spark jobs.
     */
    FLEX = "FLEX",
    /**
     * The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
     */
    STANDARD = "STANDARD"
}
export {};
