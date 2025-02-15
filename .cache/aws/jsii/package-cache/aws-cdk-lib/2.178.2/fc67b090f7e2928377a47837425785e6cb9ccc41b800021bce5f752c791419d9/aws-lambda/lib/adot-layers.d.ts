import { IConstruct } from 'constructs';
import { Architecture } from './architecture';
import { IFunction } from './function-base';
/**
 * The type of ADOT Lambda layer
 */
declare enum AdotLambdaLayerType {
    /**
     * The Lambda layer for ADOT Java instrumentation library. This layer only auto-instruments AWS
     * SDK libraries.
     */
    JAVA_SDK = "JAVA_SDK",
    /**
     * The Lambda layer for ADOT Java Auto-Instrumentation Agent. This layer automatically instruments
     * a large number of libraries and frameworks out of the box and has notable impact on startup
     * performance.
     */
    JAVA_AUTO_INSTRUMENTATION = "JAVA_AUTO_INSTRUMENTATION",
    /**
     * The Lambda layer for ADOT Collector, OpenTelemetry for JavaScript and supported libraries.
     */
    JAVASCRIPT_SDK = "JAVASCRIPT_SDK",
    /**
     * The Lambda layer for ADOT Collector, OpenTelemetry for Python and supported libraries.
     */
    PYTHON_SDK = "PYTHON_SDK",
    /**
     * The generic Lambda layer that contains only ADOT Collector, used for manual instrumentation
     * use cases (such as Go or DotNet runtimes).
     */
    GENERIC = "GENERIC"
}
/**
 * Config returned from `AdotLambdaLayerVersion._bind`
 */
interface AdotLambdaLayerBindConfig {
    /**
     * ARN of the ADOT Lambda layer version
     */
    readonly arn: string;
}
/**
 * Properties for an ADOT instrumentation in Lambda
 */
export interface AdotInstrumentationConfig {
    /**
     * The ADOT Lambda layer.
     */
    readonly layerVersion: AdotLayerVersion;
    /**
     * The startup script to run, see ADOT documentation to pick the right script for your use case: https://aws-otel.github.io/docs/getting-started/lambda
     */
    readonly execWrapper: AdotLambdaExecWrapper;
}
/**
 * An ADOT Lambda layer version that's specific to a lambda layer type and an architecture.
 */
export declare abstract class AdotLayerVersion {
    /**
     * The ADOT Lambda layer for Java SDK
     *
     * @param version The version of the Lambda layer to use
     */
    static fromJavaSdkLayerVersion(version: AdotLambdaLayerJavaSdkVersion): AdotLayerVersion;
    /**
     * The ADOT Lambda layer for Java auto instrumentation
     *
     * @param version The version of the Lambda layer to use
     */
    static fromJavaAutoInstrumentationLayerVersion(version: AdotLambdaLayerJavaAutoInstrumentationVersion): AdotLayerVersion;
    /**
     * The ADOT Lambda layer for JavaScript SDK
     *
     * @param version The version of the Lambda layer to use
     */
    static fromJavaScriptSdkLayerVersion(version: AdotLambdaLayerJavaScriptSdkVersion): AdotLayerVersion;
    /**
     * The ADOT Lambda layer for Python SDK
     *
     * @param version The version of the Lambda layer to use
     */
    static fromPythonSdkLayerVersion(version: AdotLambdaLayerPythonSdkVersion): AdotLayerVersion;
    /**
     * The ADOT Lambda layer for generic use cases
     *
     * @param version The version of the Lambda layer to use
     */
    static fromGenericLayerVersion(version: AdotLambdaLayerGenericVersion): AdotLayerVersion;
    private static fromAdotVersion;
    /**
     * Produce a `AdotLambdaLayerBindConfig` instance from this `AdotLayerVersion` instance.
     *
     * @internal
     */
    abstract _bind(_function: IFunction): AdotLambdaLayerBindConfig;
}
/**
 * The wrapper script to be used for the Lambda function in order to enable auto instrumentation
 * with ADOT.
 */
export declare enum AdotLambdaExecWrapper {
    /**
     * Wrapping regular Lambda handlers.
     */
    REGULAR_HANDLER = "/opt/otel-handler",
    /**
     * Wrapping regular handlers (implementing RequestHandler) proxied through API Gateway, enabling
     * HTTP context propagation.
     */
    PROXY_HANDLER = "/opt/otel-proxy-handler",
    /**
     * Wrapping streaming handlers (implementing RequestStreamHandler), enabling HTTP context
     * propagation for HTTP requests.
     */
    STREAM_HANDLER = "/opt/otel-stream-handler",
    /**
     * Wrapping python lambda handlers see https://aws-otel.github.io/docs/getting-started/lambda/lambda-python
     */
    INSTRUMENT_HANDLER = "/opt/otel-instrument",
    /**
     * Wrapping SQS-triggered function handlers (implementing RequestHandler)
     */
    SQS_HANDLER = "/opt/otel-sqs-handler"
}
declare abstract class AdotLambdaLayerVersion {
    protected readonly type: AdotLambdaLayerType;
    protected readonly version: string;
    protected constructor(type: AdotLambdaLayerType, version: string);
    /**
     * The ARN of the Lambda layer
     *
     * @param scope The binding scope. Usually this is the stack where the Lambda layer is bound to
     * @param architecture The architecture of the Lambda layer (either X86_64 or ARM_64)
     */
    layerArn(scope: IConstruct, architecture: Architecture): string;
}
/**
 * The collection of versions of the ADOT Lambda Layer for Java SDK
 */
export declare class AdotLambdaLayerJavaSdkVersion extends AdotLambdaLayerVersion {
    protected readonly layerVersion: string;
    /**
     * Version 1.32.0
     */
    static readonly V1_32_0_1: AdotLambdaLayerJavaSdkVersion;
    /**
     * Version 1.32.0
     */
    static readonly V1_32_0: AdotLambdaLayerJavaSdkVersion;
    /**
     * Version 1.31.0
     */
    static readonly V1_31_0: AdotLambdaLayerJavaSdkVersion;
    /**
     * Version 1.30.0
     */
    static readonly V1_30_0: AdotLambdaLayerJavaSdkVersion;
    /**
     * Version 1.28.1
     */
    static readonly V1_28_1: AdotLambdaLayerJavaSdkVersion;
    /**
     * Version 1.19.0
     */
    static readonly V1_19_0: AdotLambdaLayerJavaSdkVersion;
    /**
     * The latest layer version available in this CDK version. New versions could
     * introduce incompatible changes. Make sure to test them before deploying to production.
     */
    static readonly LATEST: AdotLambdaLayerJavaSdkVersion;
    private constructor();
}
/**
 * The collection of versions of the ADOT Lambda Layer for Java auto-instrumentation
 */
export declare class AdotLambdaLayerJavaAutoInstrumentationVersion extends AdotLambdaLayerVersion {
    protected readonly layerVersion: string;
    /**
     * Version 1.32.0
     */
    static readonly V1_32_0_1: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * Version 1.32.0
     */
    static readonly V1_32_0: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * Version 1.31.0
     */
    static readonly V1_31_0: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * Version 1.30.0
     */
    static readonly V1_30_0: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * Version 1.28.1
     */
    static readonly V1_28_1: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * Version 1.19.2
     */
    static readonly V1_19_2: AdotLambdaLayerJavaAutoInstrumentationVersion;
    /**
     * The latest layer version available in this CDK version. New versions could
     * introduce incompatible changes. Make sure to test them before deploying to production.
     */
    static readonly LATEST: AdotLambdaLayerJavaAutoInstrumentationVersion;
    private constructor();
}
/**
 * The collection of versions of the ADOT Lambda Layer for Python SDK
 */
export declare class AdotLambdaLayerPythonSdkVersion extends AdotLambdaLayerVersion {
    protected readonly layerVersion: string;
    /**
     * Version 1.29.0
     */
    static readonly V1_29_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.25.0
     */
    static readonly V1_25_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.24.0
     */
    static readonly V1_24_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.21.0
     */
    static readonly V1_21_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.20.0
     */
    static readonly V1_20_0_1: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.20.0
     */
    static readonly V1_20_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.19.0
     */
    static readonly V1_19_0_1: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.18.0
     */
    static readonly V1_18_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.17.0
     */
    static readonly V1_17_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.16.0
     */
    static readonly V1_16_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.15.0
     */
    static readonly V1_15_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.14.0
     */
    static readonly V1_14_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * Version 1.13.0
     */
    static readonly V1_13_0: AdotLambdaLayerPythonSdkVersion;
    /**
     * The latest layer version available in this CDK version. New versions could
     * introduce incompatible changes. Make sure to test them before deploying to production.
     */
    static readonly LATEST: AdotLambdaLayerPythonSdkVersion;
    private constructor();
}
/**
 * The collection of versions of the ADOT Lambda Layer for JavaScript SDK
 */
export declare class AdotLambdaLayerJavaScriptSdkVersion extends AdotLambdaLayerVersion {
    protected readonly layerVersion: string;
    /**
     * Version 1.30.0
     */
    static readonly V1_30_0: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * Version 1.18.1
     */
    static readonly V1_18_1: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * Version 1.17.1
     */
    static readonly V1_17_1: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * Version 1.16.0
     */
    static readonly V1_16_0: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * Version 1.15.0
     */
    static readonly V1_15_0_1: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * Version 1.7.0
     */
    static readonly V1_7_0: AdotLambdaLayerJavaScriptSdkVersion;
    /**
     * The latest layer version available in this CDK version. New versions could
     * introduce incompatible changes. Make sure to test them before deploying to production.
     */
    static readonly LATEST: AdotLambdaLayerJavaScriptSdkVersion;
    private constructor();
}
/**
 * The collection of versions of the ADOT Lambda Layer for generic purpose
 */
export declare class AdotLambdaLayerGenericVersion extends AdotLambdaLayerVersion {
    protected readonly layerVersion: string;
    /**
     * Version 0.115.0
     */
    static readonly V0_115_0: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.102.1
     */
    static readonly V0_102_1: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.98.0
     */
    static readonly V0_98_0: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.90.1
     */
    static readonly V0_90_1: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.88.0
     */
    static readonly V0_88_0: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.84.0
     */
    static readonly V0_84_0: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.82.0
     */
    static readonly V0_82_0: AdotLambdaLayerGenericVersion;
    /**
     * Version 0.62.1
     */
    static readonly V0_62_1: AdotLambdaLayerGenericVersion;
    /**
     * The latest layer version available in this CDK version. New versions could
     * introduce incompatible changes. Make sure to test them before deploying to production.
     */
    static readonly LATEST: AdotLambdaLayerGenericVersion;
    private constructor();
}
export {};
