import { Construct } from 'constructs';
import { Stage } from '../../../core';
import { AddStageOpts as StageOptions, WaveOptions, Wave, IFileSetProducer, FileSet } from '../blueprint';
/**
 * Properties for a `Pipeline`
 */
export interface PipelineBaseProps {
    /**
     * The build step that produces the CDK Cloud Assembly
     *
     * The primary output of this step needs to be the `cdk.out` directory
     * generated by the `cdk synth` command.
     *
     * If you use a `ShellStep` here and you don't configure an output directory,
     * the output directory will automatically be assumed to be `cdk.out`.
     */
    readonly synth: IFileSetProducer;
}
/**
 * A generic CDK Pipelines pipeline
 *
 * Different deployment systems will provide subclasses of `Pipeline` that generate
 * the deployment infrastructure necessary to deploy CDK apps, specific to that system.
 *
 * This library comes with the `CodePipeline` class, which uses AWS CodePipeline
 * to deploy CDK apps.
 *
 * The actual pipeline infrastructure is constructed (by invoking the engine)
 * when `buildPipeline()` is called, or when `app.synth()` is called (whichever
 * happens first).
 */
export declare abstract class PipelineBase extends Construct {
    /**
     * Return whether the given object extends `PipelineBase`.
     *
     * We do attribute detection since we can't reliably use 'instanceof'.
     */
    static isPipeline(x: any): x is PipelineBase;
    /**
     * The build step that produces the CDK Cloud Assembly
     */
    readonly synth: IFileSetProducer;
    /**
     * The waves in this pipeline
     */
    readonly waves: Wave[];
    /**
     * The FileSet tha contains the cloud assembly
     *
     * This is the primary output of the synth step.
     */
    readonly cloudAssemblyFileSet: FileSet;
    private built;
    constructor(scope: Construct, id: string, props: PipelineBaseProps);
    /**
     * Deploy a single Stage by itself
     *
     * Add a Stage to the pipeline, to be deployed in sequence with other
     * Stages added to the pipeline. All Stacks in the stage will be deployed
     * in an order automatically determined by their relative dependencies.
     */
    addStage(stage: Stage, options?: StageOptions): import("../blueprint").StageDeployment;
    /**
     * Add a Wave to the pipeline, for deploying multiple Stages in parallel
     *
     * Use the return object of this method to deploy multiple stages in parallel.
     *
     * Example:
     *
     * ```ts
     * declare const pipeline: pipelines.CodePipeline;
     *
     * const wave = pipeline.addWave('MyWave');
     * wave.addStage(new MyApplicationStage(this, 'Stage1'));
     * wave.addStage(new MyApplicationStage(this, 'Stage2'));
     * ```
     */
    addWave(id: string, options?: WaveOptions): Wave;
    /**
     * Send the current pipeline definition to the engine, and construct the pipeline
     *
     * It is not possible to modify the pipeline after calling this method.
     */
    buildPipeline(): void;
    /**
     * Implemented by subclasses to do the actual pipeline construction
     */
    protected abstract doBuildPipeline(): void;
    /**
     * Automatically call 'build()' just before synthesis if the user hasn't explicitly called it yet
     */
    private buildJustInTime;
}
