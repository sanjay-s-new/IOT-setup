"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PipelineNotificationEvents=exports.Action=exports.GlobalVariables=exports.ActionCategory=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var events=()=>{var tmp=require("../../aws-events");return events=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},ActionCategory;(function(ActionCategory2){ActionCategory2.SOURCE="Source",ActionCategory2.BUILD="Build",ActionCategory2.TEST="Test",ActionCategory2.APPROVAL="Approval",ActionCategory2.DEPLOY="Deploy",ActionCategory2.INVOKE="Invoke"})(ActionCategory||(exports.ActionCategory=ActionCategory={}));class GlobalVariables{}exports.GlobalVariables=GlobalVariables,_a=JSII_RTTI_SYMBOL_1,GlobalVariables[_a]={fqn:"aws-cdk-lib.aws_codepipeline.GlobalVariables",version:"2.178.2"},GlobalVariables.executionId="#{codepipeline.PipelineExecutionId}";class Action{constructor(){this._variableReferenced=!1,this._namespaceToken=core_1().Lazy.string({produce:()=>{if(this._actualNamespace===void 0)throw new Error(`Cannot reference variables of action '${this.actionProperties.actionName}', as that action was never added to a pipeline`);return this._customerProvidedNamespace!==void 0?this._customerProvidedNamespace:this._variableReferenced?this._actualNamespace:void 0}})}get actionProperties(){if(this.__actionProperties===void 0){const actionProperties=this.providedActionProperties;this._customerProvidedNamespace=actionProperties.variablesNamespace,this.__actionProperties={...actionProperties,variablesNamespace:this._customerProvidedNamespace===void 0?this._namespaceToken:this._customerProvidedNamespace}}return this.__actionProperties}bind(scope,stage,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_IStage(stage),jsiiDeprecationWarnings().aws_cdk_lib_aws_codepipeline_ActionBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return this.__pipeline=stage.pipeline,this.__stage=stage,this.__scope=scope,this._actualNamespace=this._customerProvidedNamespace===void 0?`${stage.stageName}_${this.actionProperties.actionName}_NS`:this._customerProvidedNamespace,this.bound(scope,stage,options)}onStateChange(name,target,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_events_IRuleTarget(target),jsiiDeprecationWarnings().aws_cdk_lib_aws_events_RuleProps(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.onStateChange),error}const rule=new(events()).Rule(this._scope,name,options);return rule.addTarget(target),rule.addEventPattern({detailType:["CodePipeline Action Execution State Change"],source:["aws.codepipeline"],resources:[this._pipeline.pipelineArn],detail:{stage:[this._stage.stageName],action:[this.actionProperties.actionName]}}),rule}variableExpression(variableName){return this._variableReferenced=!0,`#{${this._namespaceToken}.${variableName}}`}get _pipeline(){if(this.__pipeline)return this.__pipeline;throw new Error("Action must be added to a stage that is part of a pipeline before using onStateChange")}get _stage(){if(this.__stage)return this.__stage;throw new Error("Action must be added to a stage that is part of a pipeline before using onStateChange")}get _scope(){if(this.__scope)return this.__scope;throw new Error("Action must be added to a stage that is part of a pipeline first")}}exports.Action=Action,_b=JSII_RTTI_SYMBOL_1,Action[_b]={fqn:"aws-cdk-lib.aws_codepipeline.Action",version:"2.178.2"};var PipelineNotificationEvents;(function(PipelineNotificationEvents2){PipelineNotificationEvents2.PIPELINE_EXECUTION_FAILED="codepipeline-pipeline-pipeline-execution-failed",PipelineNotificationEvents2.PIPELINE_EXECUTION_CANCELED="codepipeline-pipeline-pipeline-execution-canceled",PipelineNotificationEvents2.PIPELINE_EXECUTION_STARTED="codepipeline-pipeline-pipeline-execution-started",PipelineNotificationEvents2.PIPELINE_EXECUTION_RESUMED="codepipeline-pipeline-pipeline-execution-resumed",PipelineNotificationEvents2.PIPELINE_EXECUTION_SUCCEEDED="codepipeline-pipeline-pipeline-execution-succeeded",PipelineNotificationEvents2.PIPELINE_EXECUTION_SUPERSEDED="codepipeline-pipeline-pipeline-execution-superseded",PipelineNotificationEvents2.STAGE_EXECUTION_STARTED="codepipeline-pipeline-stage-execution-started",PipelineNotificationEvents2.STAGE_EXECUTION_SUCCEEDED="codepipeline-pipeline-stage-execution-succeeded",PipelineNotificationEvents2.STAGE_EXECUTION_RESUMED="codepipeline-pipeline-stage-execution-resumed",PipelineNotificationEvents2.STAGE_EXECUTION_CANCELED="codepipeline-pipeline-stage-execution-canceled",PipelineNotificationEvents2.STAGE_EXECUTION_FAILED="codepipeline-pipeline-stage-execution-failed",PipelineNotificationEvents2.ACTION_EXECUTION_SUCCEEDED="codepipeline-pipeline-action-execution-succeeded",PipelineNotificationEvents2.ACTION_EXECUTION_FAILED="codepipeline-pipeline-action-execution-failed",PipelineNotificationEvents2.ACTION_EXECUTION_CANCELED="codepipeline-pipeline-action-execution-canceled",PipelineNotificationEvents2.ACTION_EXECUTION_STARTED="codepipeline-pipeline-action-execution-started",PipelineNotificationEvents2.MANUAL_APPROVAL_FAILED="codepipeline-pipeline-manual-approval-failed",PipelineNotificationEvents2.MANUAL_APPROVAL_NEEDED="codepipeline-pipeline-manual-approval-needed",PipelineNotificationEvents2.MANUAL_APPROVAL_SUCCEEDED="codepipeline-pipeline-manual-approval-succeeded"})(PipelineNotificationEvents||(exports.PipelineNotificationEvents=PipelineNotificationEvents={}));
