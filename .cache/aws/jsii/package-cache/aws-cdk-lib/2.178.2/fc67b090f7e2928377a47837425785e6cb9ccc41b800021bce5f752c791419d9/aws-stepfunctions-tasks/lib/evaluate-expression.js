"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EvaluateExpression=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},lambda=()=>{var tmp=require("../../aws-lambda");return lambda=()=>tmp,tmp},sfn=()=>{var tmp=require("../../aws-stepfunctions");return sfn=()=>tmp,tmp},eval_nodejs_provider_generated_1=()=>{var tmp=require("../../custom-resource-handlers/dist/aws-stepfunctions-tasks/eval-nodejs-provider.generated");return eval_nodejs_provider_generated_1=()=>tmp,tmp};class EvaluateExpression extends sfn().TaskStateBase{constructor(scope,id,props){super(scope,id,props),this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_tasks_EvaluateExpressionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EvaluateExpression),error}this.evalFn=createEvalFn(this.props.runtime,this),this.taskPolicies=[new(iam()).PolicyStatement({resources:this.evalFn.resourceArnsForGrantInvoke,actions:["lambda:InvokeFunction"]})]}_renderTask(){const matches=this.props.expression.match(/\$[.\[][.a-zA-Z[\]0-9-_]+/g);let expressionAttributeValues={};matches&&(expressionAttributeValues=matches.reduce((acc,m)=>({...acc,[m]:sfn().JsonPath.stringAt(m)}),{}));const parameters={expression:this.props.expression,expressionAttributeValues};return{Resource:this.evalFn.functionArn,Parameters:sfn().FieldUtils.renderObject(parameters)}}}exports.EvaluateExpression=EvaluateExpression,_a=JSII_RTTI_SYMBOL_1,EvaluateExpression[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.EvaluateExpression",version:"2.178.2"};function createEvalFn(runtime,scope){const NO_RUNTIME=Symbol.for("no-runtime"),lambdaPurpose="Eval",uuid={[lambda().Runtime.NODEJS_20_X.name]:"9757c267-6d7c-45c2-af77-37a30d93d2c6",[lambda().Runtime.NODEJS_18_X.name]:"078d40d3-fb4e-4d53-94a7-9c46fc11fe02",[lambda().Runtime.NODEJS_16_X.name]:"2a430b68-eb4b-4026-9232-ee39b71c1db8",[lambda().Runtime.NODEJS_14_X.name]:"da2d1181-604e-4a45-8694-1a6abd7fe42d",[lambda().Runtime.NODEJS_12_X.name]:"2b81e383-aad2-44db-8aaf-b4809ae0e3b4",[lambda().Runtime.NODEJS_10_X.name]:"a0d2ce44-871b-4e74-87a1-f5e63d7c3bdc",[NO_RUNTIME]:"41256dc5-4457-4273-8ed9-17bc818694e5"}[runtime?.name??NO_RUNTIME];if(!uuid)throw new Error(`The runtime ${runtime?.name} is currently not supported.`);return new(eval_nodejs_provider_generated_1()).EvalNodejsSingletonFunction(scope,"EvalFunction",{uuid,lambdaPurpose,runtime})}
