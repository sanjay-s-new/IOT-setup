import { IConstruct } from 'constructs';
/**
 * Helper to check if an error is of a certain type.
 */
export declare class Errors {
    /**
     * Test whether the given errors is a ConstructionError.
     *
     * A ConstructionError is a generic error that will be thrown during the App construction or synthesis.
     * To check for more specific errors, use the respective methods.
     */
    static isConstructError(x: any): x is ConstructError;
    /**
     * Test whether the given error is a ValidationError.
     *
     * A ValidationError is thrown when input props are failing to pass the rules of the construct.
     * It usually means the underlying CloudFormation resource(s) would not deploy with a given configuration.
     */
    static isValidationError(x: any): x is ValidationError;
}
interface ConstructInfo {
    readonly fqn: string;
    readonly version: string;
}
/**
 * Generic, abstract error class used for errors thrown from the users app during construction or synth.
 */
declare abstract class ConstructError extends Error {
    #private;
    /**
     * The time the error was thrown.
     */
    get time(): string;
    /**
     * The level. Always `'error'`.
     */
    get level(): 'error';
    /**
     * The type of the error.
     */
    abstract get type(): string;
    /**
     * The path of the construct this error is thrown from, if available.
     */
    get constructPath(): string | undefined;
    /**
     * Information on the construct this error is thrown from, if available.
     */
    get constructInfo(): ConstructInfo | undefined;
    constructor(msg: string, scope?: IConstruct, name?: string);
    /**
     * Helper message to clean-up the stack and amend with construct information.
     */
    private constructStack;
}
/**
 * A ValidationError should be used when input props fail to pass the validation rules of a construct
 * or class or late binding. The error indicates that the underlying CloudFormation resource(s) would
 * not deploy with a given configuration, or that some other prerequisites are not met.
 *
 * A ValidationError is always attached to a Construct scope. To a user, the error will present with additional
 * information on the construct that caused the validation to fail.
 *
 * @internal
 */
export declare class ValidationError extends ConstructError {
    get type(): 'validation';
    constructor(msg: string, scope: IConstruct);
}
/**
 * An UnscopedValidationError is a ValidationError that is not attached to a specific construct.
 * This can be used to report validation errors that are thrown when no construct scope is available.
 * The common use case here are data classes that assert on props, but are not constructs itself.
 *
 * To a User, these errors still present themselves as a "ValidationError".
 * However they do not contain any information about the location in the construct tree.
 *
 * @internal
 */
export declare class UnscopedValidationError extends ConstructError {
    get type(): 'validation';
    constructor(msg: string);
}
export {};
