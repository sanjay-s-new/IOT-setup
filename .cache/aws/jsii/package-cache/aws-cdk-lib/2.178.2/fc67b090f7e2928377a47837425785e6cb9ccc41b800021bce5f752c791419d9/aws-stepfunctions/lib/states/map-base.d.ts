import { Construct } from 'constructs';
import { AssignableStateOptions, JsonataCommonOptions, JsonPathCommonOptions, State, StateBaseProps } from './state';
import { Chain } from '../chain';
import { IChainable, INextable, QueryLanguage } from '../types';
/**
 * Base properties for defining a Map state that using JSONPath
 */
export interface MapBaseJsonPathOptions extends JsonPathCommonOptions {
    /**
     * JSONPath expression to select the array to iterate over
     *
     * @default $
     */
    readonly itemsPath?: string;
    /**
     * MaxConcurrencyPath
     *
     * A JsonPath that specifies the maximum concurrency dynamically from the state input.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
     *
     * @default - full concurrency
     */
    readonly maxConcurrencyPath?: string;
    /**
     * JSONPath expression to indicate where to inject the state's output
     *
     * May also be the special value JsonPath.DISCARD, which will cause the state's
     * input to become its output.
     *
     * @default $
     */
    readonly resultPath?: string;
    /**
     * The JSON that will replace the state's raw result and become the effective
     * result before ResultPath is applied.
     *
     * You can use ResultSelector to create a payload with values that are static
     * or selected from the state's raw result.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector
     *
     * @default - None
     */
    readonly resultSelector?: {
        [key: string]: any;
    };
}
/**
 * The array that the Map state will iterate over.
 */
export declare abstract class ProvideItems {
    /**
     * Use a JSON array as Map state items.
     *
     * Example value: `[1, "{% $two %}", 3]`
     */
    static jsonArray(array: any[]): ProvideItems;
    /**
     * Use a JSONata expression as Map state items.
     *
     * Example value: `{% $states.input.items %}`
     */
    static jsonata(jsonataExpression: string): ProvideItems;
    /**
     * The array that the Map state will iterate over.
     */
    abstract readonly items: any;
}
/**
 * Base properties for defining a Map state that using JSONata
 */
export interface MapBaseJsonataOptions extends JsonataCommonOptions {
    /**
     * The array that the Map state will iterate over.
     * @default - The state input as is.
     */
    readonly items?: ProvideItems;
}
/**
 * Base properties for defining a Map state
 */
export interface MapBaseOptions {
    /**
     * MaxConcurrency
     *
     * An upper bound on the number of iterations you want running at once.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-asl-use-map-state-inline.html#map-state-inline-additional-fields
     *
     * @default - full concurrency
     */
    readonly maxConcurrency?: number;
    /**
     * The JSON that you want to override your default iteration input (mutually exclusive  with `parameters`).
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-itemselector.html
     *
     * @default $
     */
    readonly itemSelector?: {
        [key: string]: any;
    };
}
/**
 * Properties for defining a Map state
 */
export interface MapBaseProps extends StateBaseProps, AssignableStateOptions, MapBaseOptions, MapBaseJsonPathOptions, MapBaseJsonataOptions {
}
/**
 * Returns true if the value passed is a positive integer
 * @param value the value to validate
 */
export declare const isPositiveInteger: (value: number) => boolean;
/**
 * Define a Map state in the state machine
 *
 * A `Map` state can be used to run a set of steps for each element of an input array.
 * A Map state will execute the same steps for multiple entries of an array in the state input.
 *
 * While the Parallel state executes multiple branches of steps using the same input, a Map state
 * will execute the same steps for multiple entries of an array in the state input.
 *
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html
 */
export declare abstract class MapBase extends State implements INextable {
    readonly endStates: INextable[];
    private readonly maxConcurrency?;
    private readonly maxConcurrencyPath?;
    protected readonly items?: ProvideItems;
    protected readonly itemsPath?: string;
    protected readonly itemSelector?: {
        [key: string]: any;
    };
    constructor(scope: Construct, id: string, props?: MapBaseProps);
    /**
     * Continue normal execution with the given state
     */
    next(next: IChainable): Chain;
    /**
     * Return the Amazon States Language object for this state
     */
    toStateJson(topLevelQueryLanguage?: QueryLanguage): object;
    /**
     * Validate this state
     */
    protected validateState(): string[];
    private renderItemsPath;
    /**
     * Render ItemSelector in ASL JSON format
     */
    private renderItemSelector;
}
