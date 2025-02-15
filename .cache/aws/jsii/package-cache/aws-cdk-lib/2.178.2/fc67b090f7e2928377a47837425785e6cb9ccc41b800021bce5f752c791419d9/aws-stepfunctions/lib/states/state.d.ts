import { IConstruct, Construct } from 'constructs';
import { Condition } from '../condition';
import { StateGraph } from '../state-graph';
import { CatchProps, IChainable, INextable, ProcessorConfig, ProcessorMode, QueryLanguage, RetryProps } from '../types';
/**
 * Properties shared by all states
 */
export interface StateBaseProps {
    /**
     * The name of the query language used by the state.
     * If the state does not contain a `queryLanguage` field,
     * then it will use the query language specified in the top-level `queryLanguage` field.
     *
     * @default - JSONPath
     */
    readonly queryLanguage?: QueryLanguage;
    /**
     * Optional name for this state
     *
     * @default - The construct ID will be used as state name
     */
    readonly stateName?: string;
    /**
     * A comment describing this state
     *
     * @default No comment
     */
    readonly comment?: string;
}
/**
 * Option properties for JSONPath state.
 */
export interface JsonPathCommonOptions {
    /**
     * JSONPath expression to select part of the state to be the input to this state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * input to be the empty object {}.
     *
     * @default $
     */
    readonly inputPath?: string;
    /**
     * JSONPath expression to select part of the state to be the output to this state.
     *
     * May also be the special value JsonPath.DISCARD, which will cause the effective
     * output to be the empty object {}.
     *
     * @default $
     */
    readonly outputPath?: string;
}
interface JsonPathStateOptions extends JsonPathCommonOptions {
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
    /**
     * Parameters pass a collection of key-value pairs, either static values or JSONPath expressions that select from the input.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-parameters
     *
     * @default No parameters
     */
    readonly parameters?: {
        [name: string]: any;
    };
}
/**
 * Option properties for JSONata state.
 */
export interface JsonataCommonOptions {
    /**
     * Used to specify and transform output from the state.
     * When specified, the value overrides the state output default.
     * The output field accepts any JSON value (object, array, string, number, boolean, null).
     * Any string value, including those inside objects or arrays,
     * will be evaluated as JSONata if surrounded by {% %} characters.
     * Output also accepts a JSONata expression directly.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html
     *
     * @default - $states.result or $states.errorOutput
     */
    readonly outputs?: any;
}
/**
 * Option properties for JSONata task state.
 */
export interface JsonataStateOptions extends JsonataCommonOptions {
    /**
     * Parameters pass a collection of key-value pairs, either static values or JSONata expressions that select from the input.
     *
     * @see
     * https://docs.aws.amazon.com/step-functions/latest/dg/transforming-data.html
     *
     * @default - No arguments
     */
    readonly arguments?: any;
}
/**
 * Option properties for state that can assign variables.
 */
export interface AssignableStateOptions {
    /**
     * Workflow variables to store in this step.
     * Using workflow variables, you can store data in a step and retrieve that data in future steps.
     *
     * @see
     * https://docs.aws.amazon.com/ja_jp/step-functions/latest/dg/workflow-variables.html
     *
     * @default - Not assign variables
     */
    readonly assign?: {
        [name: string]: any;
    };
}
/**
 * Properties shared by all states that use JSONPath
 */
export interface JsonPathStateProps extends StateBaseProps, JsonPathStateOptions, AssignableStateOptions {
}
/**
 * Properties shared by all states that use JSONata
 */
export interface JsonataStateProps extends StateBaseProps, JsonataStateOptions, AssignableStateOptions {
}
/**
 * Properties shared by all states
 */
export interface StateProps extends StateBaseProps, JsonPathStateOptions, JsonataStateOptions, AssignableStateOptions {
}
/**
 * Base class for all other state classes
 */
export declare abstract class State extends Construct implements IChainable {
    /**
     * Add a prefix to the stateId of all States found in a construct tree
     */
    static prefixStates(root: IConstruct, prefix: string): void;
    /**
     * Find the set of states reachable through transitions from the given start state.
     * This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.
     */
    static findReachableStates(start: State, options?: FindStateOptions): State[];
    /**
     * Find the set of end states states reachable through transitions from the given start state
     */
    static findReachableEndStates(start: State, options?: FindStateOptions): State[];
    /**
     * Return only the states that allow chaining from an array of states
     */
    static filterNextables(states: State[]): INextable[];
    /**
     * First state of this Chainable
     */
    readonly startState: State;
    /**
     * Continuable states of this Chainable
     */
    abstract readonly endStates: INextable[];
    protected readonly stateName?: string;
    protected readonly comment?: string;
    protected readonly inputPath?: string;
    protected readonly parameters?: object;
    protected readonly outputPath?: string;
    protected readonly resultPath?: string;
    protected readonly resultSelector?: object;
    protected readonly branches: StateGraph[];
    protected readonly queryLanguage?: QueryLanguage;
    protected readonly outputs?: object;
    protected readonly arguments?: object;
    protected readonly assign?: object;
    protected iteration?: StateGraph;
    protected processorMode?: ProcessorMode;
    protected processor?: StateGraph;
    protected processorConfig?: ProcessorConfig;
    protected defaultChoice?: State;
    /**
     * @internal
     */
    protected _next?: State;
    private readonly retries;
    private readonly catches;
    private readonly choices;
    private readonly prefixes;
    /**
     * The graph that this state is part of.
     *
     * Used for guaranteeing consistency between graphs and graph components.
     */
    private containingGraph?;
    /**
     * States with references to this state.
     *
     * Used for finding complete connected graph that a state is part of.
     */
    private readonly incomingStates;
    constructor(scope: Construct, id: string, props: StateProps);
    /**
     * Allows the state to validate itself.
     */
    protected validateState(): string[];
    get id(): string;
    /**
     * Tokenized string that evaluates to the state's ID
     */
    get stateId(): string;
    /**
     * Add a prefix to the stateId of this state
     */
    addPrefix(x: string): void;
    /**
     * Register this state as part of the given graph
     *
     * Don't call this. It will be called automatically when you work
     * with states normally.
     */
    bindToGraph(graph: StateGraph): void;
    /**
     * Render the state as JSON
     */
    abstract toStateJson(stateMachineQueryLanguage?: QueryLanguage): object;
    /**
     * Add a retrier to the retry list of this state
     * @internal
     */
    protected _addRetry(props?: RetryProps): void;
    /**
     * Add an error handler to the catch list of this state
     * @internal
     */
    protected _addCatch(handler: State, props?: CatchProps): void;
    /**
     * Make the indicated state the default transition of this state
     */
    protected makeNext(next: State): void;
    /**
     * Add a choice branch to this state
     */
    protected addChoice(condition: Condition, next: State, options?: ChoiceTransitionOptions): void;
    /**
     * Add a parallel branch to this state
     */
    protected addBranch(branch: StateGraph): void;
    /**
     * Add a map iterator to this state
     */
    protected addIterator(iteration: StateGraph): void;
    /**
     * Add a item processor to this state
     */
    protected addItemProcessor(processor: StateGraph, config?: ProcessorConfig): void;
    /**
     * Make the indicated state the default choice transition of this state
     */
    protected makeDefault(def: State): void;
    /**
     * Render the default next state in ASL JSON format
     */
    protected renderNextEnd(): any;
    /**
     * Render the choices in ASL JSON format
     */
    protected renderChoices(topLevelQueryLanguage?: QueryLanguage): any;
    /**
     * Render InputPath/Parameters/OutputPath/Arguments/Output in ASL JSON format
     */
    protected renderInputOutput(): any;
    /**
     * Render parallel branches in ASL JSON format
     */
    protected renderBranches(): any;
    /**
     * Render map iterator in ASL JSON format
     */
    protected renderIterator(): any;
    /**
     * Render error recovery options in ASL JSON format
     */
    protected renderRetryCatch(topLevelQueryLanguage?: QueryLanguage): any;
    /**
     * Render ResultSelector in ASL JSON format
     */
    protected renderResultSelector(): any;
    /**
     * Render ItemProcessor in ASL JSON format
     */
    protected renderItemProcessor(): any;
    /**
     * Render ProcessorConfig in ASL JSON format
     */
    private renderProcessorConfig;
    /**
     * Render QueryLanguage in ASL JSON format if needed.
     */
    protected renderQueryLanguage(topLevelQueryLanguage?: QueryLanguage): any;
    /**
     * Render the assign in ASL JSON format
     */
    protected renderAssign(topLevelQueryLanguage?: QueryLanguage): any;
    /**
     * Called whenever this state is bound to a graph
     *
     * Can be overridden by subclasses.
     */
    protected whenBoundToGraph(graph: StateGraph): void;
    /**
     * Add a state to the incoming list
     */
    private addIncoming;
    /**
     * Return all states this state can transition to
     */
    private outgoingTransitions;
}
/**
 * Options for finding reachable states
 */
export interface FindStateOptions {
    /**
     * Whether or not to follow error-handling transitions
     *
     * @default false
     */
    readonly includeErrorHandlers?: boolean;
}
/**
 * Options for Choice Transition
 */
export interface ChoiceTransitionOptions extends AssignableStateOptions {
    /**
     * An optional description for the choice transition
     *
     * @default No comment
     */
    readonly comment?: string;
    /**
     * This option for JSONata only. When you use JSONPath, then the state ignores this property.
     * Used to specify and transform output from the state.
     * When specified, the value overrides the state output default.
     * The output field accepts any JSON value (object, array, string, number, boolean, null).
     * Any string value, including those inside objects or arrays,
     * will be evaluated as JSONata if surrounded by {% %} characters.
     * Output also accepts a JSONata expression directly.
     *
     * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html
     *
     * @default - $states.result or $states.errorOutput
     */
    readonly outputs?: any;
}
/**
 * Render a list or return undefined for an empty list
 */
export declare function renderList<T>(xs: T[], mapFn: (x: T) => any, sortFn?: (a: T, b: T) => number): any;
/**
 * Render JSON path, respecting the special value JsonPath.DISCARD
 */
export declare function renderJsonPath(jsonPath?: string): undefined | null | string;
/**
 * @internal
 */
export declare function _getActualQueryLanguage(topLevelQueryLanguage?: QueryLanguage, stateLevelQueryLanguage?: QueryLanguage): QueryLanguage;
export {};
