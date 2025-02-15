"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a,_b,_c,_d,_e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ChainDefinitionBody=exports.StringDefinitionBody=exports.FileDefinitionBody=exports.DefinitionBody=exports.StateMachine=exports.LogLevel=exports.StateMachineType=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var customer_managed_key_encryption_configuration_1=()=>{var tmp=require("./customer-managed-key-encryption-configuration");return customer_managed_key_encryption_configuration_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./private/util");return util_1=()=>tmp,tmp},state_graph_1=()=>{var tmp=require("./state-graph");return state_graph_1=()=>tmp,tmp},stepfunctions_canned_metrics_generated_1=()=>{var tmp=require("./stepfunctions-canned-metrics.generated");return stepfunctions_canned_metrics_generated_1=()=>tmp,tmp},stepfunctions_generated_1=()=>{var tmp=require("./stepfunctions.generated");return stepfunctions_generated_1=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},s3_assets=()=>{var tmp=require("../../aws-s3-assets");return s3_assets=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},StateMachineType;(function(StateMachineType2){StateMachineType2.EXPRESS="EXPRESS",StateMachineType2.STANDARD="STANDARD"})(StateMachineType||(exports.StateMachineType=StateMachineType={}));var LogLevel;(function(LogLevel2){LogLevel2.OFF="OFF",LogLevel2.ALL="ALL",LogLevel2.ERROR="ERROR",LogLevel2.FATAL="FATAL"})(LogLevel||(exports.LogLevel=LogLevel={}));class StateMachineBase extends core_1().Resource{static fromStateMachineArn(scope,id,stateMachineArn){class Import extends StateMachineBase{constructor(){super(...arguments),this.stateMachineArn=stateMachineArn,this.grantPrincipal=new(iam()).UnknownPrincipal({resource:this})}}return new Import(scope,id,{environmentFromArn:stateMachineArn})}static fromStateMachineName(scope,id,stateMachineName){const stateMachineArn=core_1().Stack.of(scope).formatArn({service:"states",resource:"stateMachine",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME,resourceName:stateMachineName});return this.fromStateMachineArn(scope,id,stateMachineArn)}grantStartExecution(identity){return iam().Grant.addToPrincipal({grantee:identity,actions:["states:StartExecution"],resourceArns:[this.stateMachineArn]})}grantStartSyncExecution(identity){return iam().Grant.addToPrincipal({grantee:identity,actions:["states:StartSyncExecution"],resourceArns:[this.stateMachineArn]})}grantRead(identity){return iam().Grant.addToPrincipal({grantee:identity,actions:["states:ListExecutions","states:ListStateMachines"],resourceArns:[this.stateMachineArn]}),iam().Grant.addToPrincipal({grantee:identity,actions:["states:DescribeExecution","states:DescribeStateMachineForExecution","states:GetExecutionHistory"],resourceArns:[`${this.executionArn()}:*`]}),iam().Grant.addToPrincipal({grantee:identity,actions:["states:ListActivities","states:DescribeStateMachine","states:DescribeActivity"],resourceArns:["*"]})}grantTaskResponse(identity){return iam().Grant.addToPrincipal({grantee:identity,actions:["states:SendTaskSuccess","states:SendTaskFailure","states:SendTaskHeartbeat"],resourceArns:[this.stateMachineArn]})}grantExecution(identity,...actions){return iam().Grant.addToPrincipal({grantee:identity,actions,resourceArns:[`${this.executionArn()}:*`]})}grant(identity,...actions){return iam().Grant.addToPrincipal({grantee:identity,actions,resourceArns:[this.stateMachineArn]})}metric(metricName,props){return new(cloudwatch()).Metric({namespace:"AWS/States",metricName,dimensionsMap:{StateMachineArn:this.stateMachineArn},statistic:"sum",...props}).attachTo(this)}metricFailed(props){return this.cannedMetric(stepfunctions_canned_metrics_generated_1().StatesMetrics.executionsFailedSum,props)}metricThrottled(props){return this.metric("ExecutionThrottled",props)}metricAborted(props){return this.cannedMetric(stepfunctions_canned_metrics_generated_1().StatesMetrics.executionsAbortedSum,props)}metricSucceeded(props){return this.cannedMetric(stepfunctions_canned_metrics_generated_1().StatesMetrics.executionsSucceededSum,props)}metricTimedOut(props){return this.cannedMetric(stepfunctions_canned_metrics_generated_1().StatesMetrics.executionsTimedOutSum,props)}metricStarted(props){return this.metric("ExecutionsStarted",props)}metricTime(props){return this.cannedMetric(stepfunctions_canned_metrics_generated_1().StatesMetrics.executionTimeAverage,props)}executionArn(){return core_1().Stack.of(this).formatArn({resource:"execution",service:"states",resourceName:core_1().Arn.split(this.stateMachineArn,core_1().ArnFormat.COLON_RESOURCE_NAME).resourceName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME})}cannedMetric(fn,props){return new(cloudwatch()).Metric({...fn({StateMachineArn:this.stateMachineArn}),...props}).attachTo(this)}}class StateMachine extends StateMachineBase{constructor(scope,id,props){super(scope,id,{physicalName:props.stateMachineName});try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateMachineProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,StateMachine),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.definition&&props.definitionBody)throw new Error("Cannot specify definition and definitionBody at the same time");if(!props.definition&&!props.definitionBody)throw new Error("You need to specify either definition or definitionBody");props.stateMachineName!==void 0&&this.validateStateMachineName(props.stateMachineName),this.role=props.role||new(iam()).Role(this,"Role",{assumedBy:new(iam()).ServicePrincipal("states.amazonaws.com")});const definitionBody=props.definitionBody??DefinitionBody.fromChainable(props.definition);this.stateMachineType=props.stateMachineType??StateMachineType.STANDARD;let graph;if(definitionBody instanceof ChainDefinitionBody){graph=new(state_graph_1()).StateGraph(definitionBody.chainable.startState,"State Machine definition"),graph.timeout=props.timeout;for(const statement of graph.policyStatements)this.addToRolePolicy(statement)}props.encryptionConfiguration instanceof customer_managed_key_encryption_configuration_1().CustomerManagedEncryptionConfiguration&&(this.role.addToPrincipalPolicy(new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["kms:Decrypt","kms:GenerateDataKey"],resources:[`${props.encryptionConfiguration.kmsKey.keyArn}`],conditions:{StringEquals:{"kms:EncryptionContext:aws:states:stateMachineArn":core_1().Stack.of(this).formatArn({service:"states",resource:"stateMachine",sep:":",resourceName:this.physicalName})}}})),props.logs&&props.logs.level!==LogLevel.OFF&&(this.role.addToPrincipalPolicy(new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["kms:GenerateDataKey"],resources:[`${props.encryptionConfiguration.kmsKey.keyArn}`],conditions:{StringEquals:{"kms:EncryptionContext:SourceArn":core_1().Stack.of(this).formatArn({service:"logs",resource:"*",sep:":"})}}})),props.encryptionConfiguration.kmsKey.addToResourcePolicy(new(iam()).PolicyStatement({resources:["*"],actions:["kms:Decrypt*"],principals:[new(iam()).ServicePrincipal("delivery.logs.amazonaws.com")]}))));const resource=new(stepfunctions_generated_1()).CfnStateMachine(this,"Resource",{stateMachineName:this.physicalName,stateMachineType:props.stateMachineType??void 0,roleArn:this.role.roleArn,loggingConfiguration:props.logs?this.buildLoggingConfiguration(props.logs):void 0,tracingConfiguration:this.buildTracingConfiguration(props.tracingEnabled),...definitionBody.bind(this,this.role,props,graph),definitionSubstitutions:props.definitionSubstitutions,encryptionConfiguration:(0,util_1().buildEncryptionConfiguration)(props.encryptionConfiguration)});resource.applyRemovalPolicy(props.removalPolicy,{default:core_1().RemovalPolicy.DESTROY}),resource.node.addDependency(this.role),this.stateMachineName=this.getResourceNameAttribute(resource.attrName),this.stateMachineArn=this.getResourceArnAttribute(resource.ref,{service:"states",resource:"stateMachine",resourceName:this.physicalName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME}),definitionBody instanceof ChainDefinitionBody&&graph.bind(this),this.stateMachineRevisionId=resource.attrStateMachineRevisionId}get grantPrincipal(){return this.role.grantPrincipal}addToRolePolicy(statement){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_PolicyStatement(statement)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addToRolePolicy),error}this.role.addToPrincipalPolicy(statement)}validateStateMachineName(stateMachineName){if(!core_1().Token.isUnresolved(stateMachineName)){if(stateMachineName.length<1||stateMachineName.length>80)throw new Error(`State Machine name must be between 1 and 80 characters. Received: ${stateMachineName}`);if(!stateMachineName.match(/^[a-z0-9\+\!\@\.\(\)\-\=\_\']+$/i))throw new Error(`State Machine name must match "^[a-z0-9+!@.()-=_']+$/i". Received: ${stateMachineName}`)}}buildLoggingConfiguration(logOptions){return this.addToRolePolicy(new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,actions:["logs:CreateLogDelivery","logs:GetLogDelivery","logs:UpdateLogDelivery","logs:DeleteLogDelivery","logs:ListLogDeliveries","logs:PutResourcePolicy","logs:DescribeResourcePolicies","logs:DescribeLogGroups"],resources:["*"]})),{destinations:[{cloudWatchLogsLogGroup:{logGroupArn:logOptions.destination.logGroupArn}}],includeExecutionData:logOptions.includeExecutionData,level:logOptions.level||"ERROR"}}buildTracingConfiguration(isTracing){if(isTracing!==void 0)return isTracing&&this.addToRolePolicy(new(iam()).PolicyStatement({actions:["xray:PutTraceSegments","xray:PutTelemetryRecords","xray:GetSamplingRules","xray:GetSamplingTargets"],resources:["*"]})),{enabled:isTracing}}}exports.StateMachine=StateMachine,_a=JSII_RTTI_SYMBOL_1,StateMachine[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.StateMachine",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],StateMachine.prototype,"addToRolePolicy",null);class DefinitionBody{static fromFile(path,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromFile),error}return new FileDefinitionBody(path,options)}static fromString(definition){return new StringDefinitionBody(definition)}static fromChainable(chainable){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(chainable)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromChainable),error}return new ChainDefinitionBody(chainable)}}exports.DefinitionBody=DefinitionBody,_b=JSII_RTTI_SYMBOL_1,DefinitionBody[_b]={fqn:"aws-cdk-lib.aws_stepfunctions.DefinitionBody",version:"2.178.2"};class FileDefinitionBody extends DefinitionBody{constructor(path,options={}){super(),this.path=path,this.options=options;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_assets_AssetOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,FileDefinitionBody),error}}bind(scope,_sfnPrincipal,_sfnProps,_graph){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(_sfnPrincipal),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateMachineProps(_sfnProps),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(_graph)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const asset=new(s3_assets()).Asset(scope,"DefinitionBody",{path:this.path,...this.options});return{definitionS3Location:{bucket:asset.s3BucketName,key:asset.s3ObjectKey}}}}exports.FileDefinitionBody=FileDefinitionBody,_c=JSII_RTTI_SYMBOL_1,FileDefinitionBody[_c]={fqn:"aws-cdk-lib.aws_stepfunctions.FileDefinitionBody",version:"2.178.2"};class StringDefinitionBody extends DefinitionBody{constructor(body){super(),this.body=body}bind(_scope,_sfnPrincipal,_sfnProps,_graph){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(_sfnPrincipal),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateMachineProps(_sfnProps),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(_graph)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}return{definitionString:this.body}}}exports.StringDefinitionBody=StringDefinitionBody,_d=JSII_RTTI_SYMBOL_1,StringDefinitionBody[_d]={fqn:"aws-cdk-lib.aws_stepfunctions.StringDefinitionBody",version:"2.178.2"};class ChainDefinitionBody extends DefinitionBody{constructor(chainable){super(),this.chainable=chainable;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_IChainable(chainable)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,ChainDefinitionBody),error}}bind(scope,_sfnPrincipal,sfnProps,graph){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_iam_IPrincipal(_sfnPrincipal),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateMachineProps(sfnProps),jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_StateGraph(graph)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}const graphJson=graph.toGraphJson(sfnProps.queryLanguage);return{definitionString:core_1().Stack.of(scope).toJsonString({...graphJson,Comment:sfnProps.comment,QueryLanguage:sfnProps.queryLanguage})}}}exports.ChainDefinitionBody=ChainDefinitionBody,_e=JSII_RTTI_SYMBOL_1,ChainDefinitionBody[_e]={fqn:"aws-cdk-lib.aws_stepfunctions.ChainDefinitionBody",version:"2.178.2"};
