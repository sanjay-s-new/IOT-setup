import { Construct } from 'constructs';
import * as codebuild from '../../../aws-codebuild';
import * as iam from '../../../aws-iam';
import * as sfn from '../../../aws-stepfunctions';
interface CodeBuildStartBuildBatchOptions {
    /**
     * CodeBuild project to start
     */
    readonly project: codebuild.IProject;
    /**
     * A set of environment variables to be used for this build only.
     *
     * @default - the latest environment variables already defined in the build project.
     */
    readonly environmentVariablesOverride?: {
        [name: string]: codebuild.BuildEnvironmentVariable;
    };
}
/**
 * Properties for CodeBuildStartBuildBatch using JSONPath
 */
export interface CodeBuildStartBuildBatchJsonPathProps extends sfn.TaskStateJsonPathBaseProps, CodeBuildStartBuildBatchOptions {
}
/**
 * Properties for CodeBuildStartBuildBatch using JSONata
 */
export interface CodeBuildStartBuildBatchJsonataProps extends sfn.TaskStateJsonataBaseProps, CodeBuildStartBuildBatchOptions {
}
/**
 * Properties for CodeBuildStartBuildBatch
 */
export interface CodeBuildStartBuildBatchProps extends sfn.TaskStateBaseProps, CodeBuildStartBuildBatchOptions {
}
/**
 * Start a CodeBuild BatchBuild as a task
 *
 * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
 */
export declare class CodeBuildStartBuildBatch extends sfn.TaskStateBase {
    private readonly props;
    /**
     * Start a CodeBuild BatchBuild as a task using JSONPath
     *
     * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
     */
    static jsonPath(scope: Construct, id: string, props: CodeBuildStartBuildBatchJsonPathProps): CodeBuildStartBuildBatch;
    /**
     * Start a CodeBuild BatchBuild as a task using JSONata
     *
     * @see https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuildBatch.html
     */
    static jsonata(scope: Construct, id: string, props: CodeBuildStartBuildBatchJsonataProps): CodeBuildStartBuildBatch;
    private static readonly SUPPORTED_INTEGRATION_PATTERNS;
    protected readonly taskMetrics?: sfn.TaskMetricsConfig;
    protected readonly taskPolicies?: iam.PolicyStatement[];
    private readonly integrationPattern;
    constructor(scope: Construct, id: string, props: CodeBuildStartBuildBatchProps);
    /**
     * Configure the necessary permissions to invoke the CodeBuild StartBuildBatch API
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/codebuild-iam.html#codebuild-iam-startbuildbatch
     */
    private configurePolicyStatements;
    /**
     * Provides the CodeBuild StartBuild service integration task configuration
     *
     * @internal
     */
    protected _renderTask(topLevelQueryLanguage?: sfn.QueryLanguage): any;
    private serializeEnvVariables;
}
export {};
