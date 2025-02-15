"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionVersionUpgrade=exports.Function=exports.RecursiveLoop=exports.LoggingFormat=exports.LogFormat=exports.ApplicationLogLevel=exports.SystemLogLevel=exports.Tracing=void 0,exports.verifyCodeConfig=verifyCodeConfig;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var adot_layers_1=()=>{var tmp=require("./adot-layers");return adot_layers_1=()=>tmp,tmp},architecture_1=()=>{var tmp=require("./architecture");return architecture_1=()=>tmp,tmp},function_base_1=()=>{var tmp=require("./function-base");return function_base_1=()=>tmp,tmp},function_hash_1=()=>{var tmp=require("./function-hash");return function_hash_1=()=>tmp,tmp},handler_1=()=>{var tmp=require("./handler");return handler_1=()=>tmp,tmp},lambda_version_1=()=>{var tmp=require("./lambda-version");return lambda_version_1=()=>tmp,tmp},lambda_generated_1=()=>{var tmp=require("./lambda.generated");return lambda_generated_1=()=>tmp,tmp},layers_1=()=>{var tmp=require("./layers");return layers_1=()=>tmp,tmp},runtime_1=()=>{var tmp=require("./runtime");return runtime_1=()=>tmp,tmp},util_1=()=>{var tmp=require("./util");return util_1=()=>tmp,tmp},cloudwatch=()=>{var tmp=require("../../aws-cloudwatch");return cloudwatch=()=>tmp,tmp},aws_codeguruprofiler_1=()=>{var tmp=require("../../aws-codeguruprofiler");return aws_codeguruprofiler_1=()=>tmp,tmp},ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},efs=()=>{var tmp=require("../../aws-efs");return efs=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},logs=()=>{var tmp=require("../../aws-logs");return logs=()=>tmp,tmp},sqs=()=>{var tmp=require("../../aws-sqs");return sqs=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp},Tracing;(function(Tracing2){Tracing2.ACTIVE="Active",Tracing2.PASS_THROUGH="PassThrough",Tracing2.DISABLED="Disabled"})(Tracing||(exports.Tracing=Tracing={}));var SystemLogLevel;(function(SystemLogLevel2){SystemLogLevel2.INFO="INFO",SystemLogLevel2.DEBUG="DEBUG",SystemLogLevel2.WARN="WARN"})(SystemLogLevel||(exports.SystemLogLevel=SystemLogLevel={}));var ApplicationLogLevel;(function(ApplicationLogLevel2){ApplicationLogLevel2.INFO="INFO",ApplicationLogLevel2.DEBUG="DEBUG",ApplicationLogLevel2.WARN="WARN",ApplicationLogLevel2.TRACE="TRACE",ApplicationLogLevel2.ERROR="ERROR",ApplicationLogLevel2.FATAL="FATAL"})(ApplicationLogLevel||(exports.ApplicationLogLevel=ApplicationLogLevel={}));var LogFormat;(function(LogFormat2){LogFormat2.TEXT="Text",LogFormat2.JSON="JSON"})(LogFormat||(exports.LogFormat=LogFormat={}));var LoggingFormat;(function(LoggingFormat2){LoggingFormat2.TEXT="Text",LoggingFormat2.JSON="JSON"})(LoggingFormat||(exports.LoggingFormat=LoggingFormat={}));var RecursiveLoop;(function(RecursiveLoop2){RecursiveLoop2.ALLOW="Allow",RecursiveLoop2.TERMINATE="Terminate"})(RecursiveLoop||(exports.RecursiveLoop=RecursiveLoop={}));class Function extends function_base_1().FunctionBase{get currentVersion(){if(this._currentVersion)return this._currentVersion;this._warnIfCurrentVersionCalled&&this.warnInvokeFunctionPermissions(this),this._currentVersion=new(lambda_version_1()).Version(this,"CurrentVersion",{lambda:this,...this.currentVersionOptions});const cfn=this._currentVersion.node.defaultChild,originalLogicalId=this.stack.resolve(cfn.logicalId);return cfn.overrideLogicalId(core_1().Lazy.uncachedString({produce:()=>{const hash=(0,function_hash_1().calculateFunctionHash)(this,this.hashMixins.join(""));return`${(0,function_hash_1().trimFromStart)(originalLogicalId,223)}${hash}`}})),this._currentVersion}get resourceArnsForGrantInvoke(){return[this.functionArn,`${this.functionArn}:*`]}static classifyVersionProperty(propertyName,locked){this._VER_PROPS[propertyName]=locked}static fromFunctionName(scope,id,functionName){return Function.fromFunctionAttributes(scope,id,{functionArn:core_1().Stack.of(scope).formatArn({service:"lambda",resource:"function",resourceName:functionName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME}),sameEnvironment:!0})}static fromFunctionArn(scope,id,functionArn){return Function.fromFunctionAttributes(scope,id,{functionArn})}static fromFunctionAttributes(scope,id,attrs){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_FunctionAttributes(attrs)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromFunctionAttributes),error}const functionArn=attrs.functionArn,functionName=extractNameFromArn(attrs.functionArn),role=attrs.role;class Import extends function_base_1().FunctionBase{constructor(s,i){super(s,i,{environmentFromArn:functionArn}),this.functionName=functionName,this.functionArn=functionArn,this.role=role,this.permissionsNode=this.node,this.architecture=attrs.architecture??architecture_1().Architecture.X86_64,this.resourceArnsForGrantInvoke=[this.functionArn,`${this.functionArn}:*`],this.canCreatePermissions=attrs.sameEnvironment??this._isStackAccount(),this._skipPermissions=attrs.skipPermissions??!1,this.grantPrincipal=role||new(iam()).UnknownPrincipal({resource:this}),attrs.securityGroup?this._connections=new(ec2()).Connections({securityGroups:[attrs.securityGroup]}):attrs.securityGroupId&&(this._connections=new(ec2()).Connections({securityGroups:[ec2().SecurityGroup.fromSecurityGroupId(scope,"SecurityGroup",attrs.securityGroupId)]}))}}return new Import(scope,id)}static metricAll(metricName,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAll),error}return new(cloudwatch()).Metric({namespace:"AWS/Lambda",metricName,...props})}static metricAllErrors(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllErrors),error}return this.metricAll("Errors",{statistic:"sum",...props})}static metricAllDuration(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllDuration),error}return this.metricAll("Duration",props)}static metricAllInvocations(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllInvocations),error}return this.metricAll("Invocations",{statistic:"sum",...props})}static metricAllThrottles(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllThrottles),error}return this.metricAll("Throttles",{statistic:"sum",...props})}static metricAllConcurrentExecutions(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllConcurrentExecutions),error}return this.metricAll("ConcurrentExecutions",{statistic:"max",...props})}static metricAllUnreservedConcurrentExecutions(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudwatch_MetricOptions(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.metricAllUnreservedConcurrentExecutions),error}return this.metricAll("UnreservedConcurrentExecutions",{statistic:"max",...props})}constructor(scope,id,props){super(scope,id,{physicalName:props.functionName}),this.permissionsNode=this.node,this.canCreatePermissions=!0,this._layers=[],this.environment={},this.hashMixins=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_FunctionProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Function),error}if((0,metadata_resource_1().addConstructMetadata)(this,props),props.functionName&&!core_1().Token.isUnresolved(props.functionName)){if(props.functionName.length>64)throw new(errors_1()).ValidationError(`Function name can not be longer than 64 characters but has ${props.functionName.length} characters.`,this);if(!/^[a-zA-Z0-9-_]+$/.test(props.functionName))throw new(errors_1()).ValidationError(`Function name ${props.functionName} can contain only letters, numbers, hyphens, or underscores with no spaces.`,this)}if(props.description&&!core_1().Token.isUnresolved(props.description)&&props.description.length>256)throw new(errors_1()).ValidationError(`Function description can not be longer than 256 characters but has ${props.description.length} characters.`,this);const managedPolicies=new Array;if(managedPolicies.push(iam().ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")),props.vpc&&managedPolicies.push(iam().ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaVPCAccessExecutionRole")),this.role=props.role||new(iam()).Role(this,"ServiceRole",{assumedBy:new(iam()).ServicePrincipal("lambda.amazonaws.com"),managedPolicies}),this.grantPrincipal=this.role,props.filesystem){const config=props.filesystem.config;if(!core_1().Token.isUnresolved(config.localMountPath)){if(!/^\/mnt\/[a-zA-Z0-9-_.]+$/.test(config.localMountPath))throw new(errors_1()).ValidationError(`Local mount path should match with ^/mnt/[a-zA-Z0-9-_.]+$ but given ${config.localMountPath}.`,this);if(config.localMountPath.length>160)throw new(errors_1()).ValidationError(`Local mount path can not be longer than 160 characters but has ${config.localMountPath.length} characters.`,this)}config.policies&&config.policies.forEach(p=>{this.role?.addToPrincipalPolicy(p)})}for(const statement of props.initialPolicy||[])this.role.addToPrincipalPolicy(statement);const code=props.code.bind(this);verifyCodeConfig(code,props);let profilingGroupEnvironmentVariables={};if(props.profilingGroup&&props.profiling!==!1)this.validateProfiling(props),props.profilingGroup.grantPublish(this.role),profilingGroupEnvironmentVariables={AWS_CODEGURU_PROFILER_GROUP_NAME:props.profilingGroup.profilingGroupName,AWS_CODEGURU_PROFILER_TARGET_REGION:props.profilingGroup.env.region,AWS_CODEGURU_PROFILER_GROUP_ARN:props.profilingGroup.profilingGroupArn,AWS_CODEGURU_PROFILER_ENABLED:"TRUE"};else if(props.profiling){this.validateProfiling(props);const profilingGroup=new(aws_codeguruprofiler_1()).ProfilingGroup(this,"ProfilingGroup",{computePlatform:aws_codeguruprofiler_1().ComputePlatform.AWS_LAMBDA});profilingGroup.grantPublish(this.role),profilingGroupEnvironmentVariables={AWS_CODEGURU_PROFILER_GROUP_NAME:profilingGroup.profilingGroupName,AWS_CODEGURU_PROFILER_TARGET_REGION:profilingGroup.env.region,AWS_CODEGURU_PROFILER_GROUP_ARN:profilingGroup.profilingGroupArn,AWS_CODEGURU_PROFILER_ENABLED:"TRUE"}}const env={...profilingGroupEnvironmentVariables,...props.environment};for(const[key,value]of Object.entries(env))this.addEnvironment(key,value);const dlqTopicOrQueue=this.buildDeadLetterQueue(props);dlqTopicOrQueue!==void 0&&(this.isQueue(dlqTopicOrQueue)?this.deadLetterQueue=dlqTopicOrQueue:this.deadLetterTopic=dlqTopicOrQueue);let fileSystemConfigs;if(props.filesystem&&(fileSystemConfigs=[{arn:props.filesystem.config.arn,localMountPath:props.filesystem.config.localMountPath}]),props.architecture&&props.architectures!==void 0)throw new(errors_1()).ValidationError("Either architecture or architectures must be specified but not both.",this);if(props.architectures&&props.architectures.length>1)throw new(errors_1()).ValidationError("Only one architecture must be specified.",this);if(this._architecture=props.architecture??(props.architectures&&props.architectures[0]),props.ephemeralStorageSize&&!props.ephemeralStorageSize.isUnresolved()&&(props.ephemeralStorageSize.toMebibytes()<512||props.ephemeralStorageSize.toMebibytes()>10240))throw new(errors_1()).ValidationError(`Ephemeral storage size must be between 512 and 10240 MB, received ${props.ephemeralStorageSize}.`,this);const resource=new(lambda_generated_1()).CfnFunction(this,"Resource",{functionName:this.physicalName,description:props.description,code:{s3Bucket:code.s3Location&&code.s3Location.bucketName,s3Key:code.s3Location&&code.s3Location.objectKey,s3ObjectVersion:code.s3Location&&code.s3Location.objectVersion,zipFile:code.inlineCode,imageUri:code.image?.imageUri,sourceKmsKeyArn:code.sourceKMSKeyArn},layers:core_1().Lazy.list({produce:()=>this.renderLayers()}),handler:props.handler===handler_1().Handler.FROM_IMAGE?void 0:props.handler,timeout:props.timeout&&props.timeout.toSeconds(),packageType:props.runtime===runtime_1().Runtime.FROM_IMAGE?"Image":void 0,runtime:props.runtime===runtime_1().Runtime.FROM_IMAGE?void 0:props.runtime.name,role:this.role.roleArn,environment:core_1().Lazy.uncachedAny({produce:()=>this.renderEnvironment()}),memorySize:props.memorySize,ephemeralStorage:props.ephemeralStorageSize?{size:props.ephemeralStorageSize.toMebibytes()}:void 0,vpcConfig:this.configureVpc(props),deadLetterConfig:this.buildDeadLetterConfig(dlqTopicOrQueue),reservedConcurrentExecutions:props.reservedConcurrentExecutions,imageConfig:undefinedIfNoKeys({command:code.image?.cmd,entryPoint:code.image?.entrypoint,workingDirectory:code.image?.workingDirectory}),kmsKeyArn:props.environmentEncryption?.keyArn,fileSystemConfigs,codeSigningConfigArn:props.codeSigningConfig?.codeSigningConfigArn,architectures:this._architecture?[this._architecture.name]:void 0,runtimeManagementConfig:props.runtimeManagementMode?.runtimeManagementConfig,snapStart:this.configureSnapStart(props),loggingConfig:this.getLoggingConfig(props),recursiveLoop:props.recursiveLoop});if((props.tracing!==void 0||props.adotInstrumentation!==void 0)&&(resource.tracingConfig=this.buildTracingConfig(props.tracing??Tracing.ACTIVE)),this._logGroup=props.logGroup,resource.node.addDependency(this.role),this.functionName=this.getResourceNameAttribute(resource.ref),this.functionArn=this.getResourceArnAttribute(resource.attrArn,{service:"lambda",resource:"function",resourceName:this.physicalName,arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME}),this.runtime=props.runtime,this.timeout=props.timeout,this.architecture=props.architecture??architecture_1().Architecture.X86_64,props.layers){if(props.runtime===runtime_1().Runtime.FROM_IMAGE)throw new(errors_1()).ValidationError("Layers are not supported for container image functions",this);this.addLayers(...props.layers)}for(const event of props.events||[])this.addEventSource(event);if(props.logRetention){if(props.logGroup)throw new(errors_1()).ValidationError("CDK does not support setting logRetention and logGroup",this);const logRetention=new(logs()).LogRetention(this,"LogRetention",{logGroupName:`/aws/lambda/${this.functionName}`,retention:props.logRetention,role:props.logRetentionRole,logRetentionRetryOptions:props.logRetentionRetryOptions});this._logGroup=logs().LogGroup.fromLogGroupArn(this,"LogGroup",logRetention.logGroupArn),this._logRetention=logRetention}if(props.code.bindToResource(resource),(props.onFailure||props.onSuccess||props.maxEventAge||props.retryAttempts!==void 0)&&this.configureAsyncInvoke({onFailure:props.onFailure,onSuccess:props.onSuccess,maxEventAge:props.maxEventAge,retryAttempts:props.retryAttempts}),this.currentVersionOptions=props.currentVersionOptions,props.filesystem){if(!props.vpc)throw new(errors_1()).ValidationError("Cannot configure 'filesystem' without configuring a VPC.",this);const config=props.filesystem.config;config.dependency&&this.node.addDependency(...config.dependency),this.connections.securityGroups.forEach(sg=>{sg.node.findAll().forEach(child=>{child instanceof core_1().CfnResource&&child.cfnResourceType==="AWS::EC2::SecurityGroupEgress"&&resource.node.addDependency(child)})}),config.connections?.securityGroups.forEach(sg=>{sg.node.findAll().forEach(child=>{child instanceof core_1().CfnResource&&child.cfnResourceType==="AWS::EC2::SecurityGroupIngress"&&resource.node.addDependency(child)})})}this.configureLambdaInsights(props),this.configureAdotInstrumentation(props),this.configureParamsAndSecretsExtension(props)}addEnvironment(key,value,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_EnvironmentOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addEnvironment),error}if(["_HANDLER","_X_AMZN_TRACE_ID","AWS_DEFAULT_REGION","AWS_REGION","AWS_EXECUTION_ENV","AWS_LAMBDA_FUNCTION_NAME","AWS_LAMBDA_FUNCTION_MEMORY_SIZE","AWS_LAMBDA_FUNCTION_VERSION","AWS_LAMBDA_INITIALIZATION_TYPE","AWS_LAMBDA_LOG_GROUP_NAME","AWS_LAMBDA_LOG_STREAM_NAME","AWS_ACCESS_KEY","AWS_ACCESS_KEY_ID","AWS_SECRET_ACCESS_KEY","AWS_SESSION_TOKEN","AWS_LAMBDA_RUNTIME_API","LAMBDA_TASK_ROOT","LAMBDA_RUNTIME_DIR"].includes(key))throw new(errors_1()).ValidationError(`${key} environment variable is reserved by the lambda runtime and can not be set manually. See https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html`,this);return this.environment[key]={value,...options},this}getLoggingConfig(props){if(props.logFormat&&props.loggingFormat)throw new(errors_1()).ValidationError("Only define LogFormat or LoggingFormat, not both.",this);if(props.applicationLogLevel&&props.applicationLogLevelV2)throw new(errors_1()).ValidationError("Only define applicationLogLevel or applicationLogLevelV2, not both.",this);if(props.systemLogLevel&&props.systemLogLevelV2)throw new(errors_1()).ValidationError("Only define systemLogLevel or systemLogLevelV2, not both.",this);if(props.applicationLogLevel||props.applicationLogLevelV2||props.systemLogLevel||props.systemLogLevelV2){if(props.logFormat!==LogFormat.JSON&&props.loggingFormat===void 0)throw new(errors_1()).ValidationError(`To use ApplicationLogLevel and/or SystemLogLevel you must set LogFormat to '${LogFormat.JSON}', got '${props.logFormat}'.`,this);if(props.loggingFormat!==LoggingFormat.JSON&&props.logFormat===void 0)throw new(errors_1()).ValidationError(`To use ApplicationLogLevel and/or SystemLogLevel you must set LoggingFormat to '${LoggingFormat.JSON}', got '${props.loggingFormat}'.`,this)}let loggingConfig;if(props.logFormat||props.logGroup||props.loggingFormat)return loggingConfig={logFormat:props.logFormat||props.loggingFormat,systemLogLevel:props.systemLogLevel||props.systemLogLevelV2,applicationLogLevel:props.applicationLogLevel||props.applicationLogLevelV2,logGroup:props.logGroup?.logGroupName},loggingConfig}invalidateVersionBasedOn(x){if(core_1().Token.isUnresolved(x))throw new(errors_1()).ValidationError("invalidateVersionOn: input may not contain unresolved tokens",this);this.hashMixins.push(x)}addLayers(...layers){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_ILayerVersion(layers)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addLayers),error}for(const layer of layers){if(this._layers.length===5)throw new(errors_1()).ValidationError("Unable to add layer: this lambda function already uses 5 layers.",this);if(layer.compatibleRuntimes&&!layer.compatibleRuntimes.find(runtime=>runtime.runtimeEquals(this.runtime))){const runtimes=layer.compatibleRuntimes.map(runtime=>runtime.name).join(", ");throw new(errors_1()).ValidationError(`This lambda function uses a runtime that is incompatible with this layer (${this.runtime.name} is not in [${runtimes}])`,this)}this._layers.push(layer)}}addVersion(name,codeSha256,description,provisionedExecutions,asyncInvokeConfig={}){return new(lambda_version_1()).Version(this,"Version"+name,{lambda:this,codeSha256,description,provisionedConcurrentExecutions:provisionedExecutions,...asyncInvokeConfig})}addAlias(aliasName,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_AliasOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addAlias),error}return(0,util_1().addAlias)(this,this.currentVersion,aliasName,options)}get logGroup(){if(!this._logGroup){const logRetention=new(logs()).LogRetention(this,"LogRetention",{logGroupName:`/aws/lambda/${this.functionName}`,retention:logs().RetentionDays.INFINITE});this._logGroup=logs().LogGroup.fromLogGroupArn(this,`${this.node.id}-LogGroup`,logRetention.logGroupArn)}return this._logGroup}_checkEdgeCompatibility(){const envEntries=Object.entries(this.environment);for(const[key,config]of envEntries)config.removeInEdge&&(delete this.environment[key],core_1().Annotations.of(this).addInfo(`Removed ${key} environment variable for Lambda@Edge compatibility`));const envKeys=Object.keys(this.environment);if(envKeys.length!==0)throw new(errors_1()).ValidationError(`The function ${this.node.path} contains environment variables [${envKeys}] and is not compatible with Lambda@Edge. Environment variables can be marked for removal when used in Lambda@Edge by setting the 'removeInEdge' property in the 'addEnvironment()' API.`,this)}configureLambdaInsights(props){props.insightsVersion!==void 0&&(props.runtime!==runtime_1().Runtime.FROM_IMAGE&&this.addLayers(layers_1().LayerVersion.fromLayerVersionArn(this,"LambdaInsightsLayer",props.insightsVersion._bind(this,this).arn)),this.role?.addManagedPolicy(iam().ManagedPolicy.fromAwsManagedPolicyName("CloudWatchLambdaInsightsExecutionRolePolicy")))}configureAdotInstrumentation(props){if(props.adotInstrumentation!==void 0){if(props.runtime===runtime_1().Runtime.FROM_IMAGE)throw new(errors_1()).ValidationError("ADOT Lambda layer can't be configured with container image package type",this);if(this.runtime===runtime_1().Runtime.GO_1_X)throw new(errors_1()).ValidationError("Runtime go1.x is not supported by the ADOT Lambda Go SDK",this);if(this.runtime.family===runtime_1().RuntimeFamily.PYTHON&&props.adotInstrumentation.execWrapper.valueOf()!==adot_layers_1().AdotLambdaExecWrapper.INSTRUMENT_HANDLER)throw new(errors_1()).ValidationError("Python Adot Lambda layer requires AdotLambdaExecWrapper.INSTRUMENT_HANDLER",this);this.addLayers(layers_1().LayerVersion.fromLayerVersionArn(this,"AdotLayer",props.adotInstrumentation.layerVersion._bind(this).arn)),this.addEnvironment("AWS_LAMBDA_EXEC_WRAPPER",props.adotInstrumentation.execWrapper)}}configureParamsAndSecretsExtension(props){if(props.paramsAndSecrets===void 0)return;const layerVersion=props.paramsAndSecrets._bind(this,this);this.addLayers(layers_1().LayerVersion.fromLayerVersionArn(this,"ParamsAndSecretsLayer",layerVersion.arn)),Object.entries(layerVersion.environmentVars).forEach(([key,value])=>this.addEnvironment(key,value.toString()))}renderLayers(){if(!(!this._layers||this._layers.length===0))return core_1().FeatureFlags.of(this).isEnabled(cx_api_1().LAMBDA_RECOGNIZE_LAYER_VERSION)&&this._layers.sort(),this._layers.map(layer=>layer.layerVersionArn)}renderEnvironment(){if(!this.environment||Object.keys(this.environment).length===0)return;const variables={},keys=this._currentVersion?Object.keys(this.environment).sort():Object.keys(this.environment);for(const key of keys)variables[key]=this.environment[key].value;return{variables}}configureVpc(props){if(props.securityGroup&&props.securityGroups)throw new(errors_1()).ValidationError("Only one of the function props, securityGroup or securityGroups, is allowed",this);const hasSecurityGroups=props.securityGroups&&props.securityGroups.length>0;if(!props.vpc){if(props.allowAllOutbound!==void 0)throw new(errors_1()).ValidationError("Cannot configure 'allowAllOutbound' without configuring a VPC",this);if(props.securityGroup)throw new(errors_1()).ValidationError("Cannot configure 'securityGroup' without configuring a VPC",this);if(hasSecurityGroups)throw new(errors_1()).ValidationError("Cannot configure 'securityGroups' without configuring a VPC",this);if(props.vpcSubnets)throw new(errors_1()).ValidationError("Cannot configure 'vpcSubnets' without configuring a VPC",this);if(props.ipv6AllowedForDualStack)throw new(errors_1()).ValidationError("Cannot configure 'ipv6AllowedForDualStack' without configuring a VPC",this);if(props.allowAllIpv6Outbound!==void 0)throw new(errors_1()).ValidationError("Cannot configure 'allowAllIpv6Outbound' without configuring a VPC",this);return}if(props.allowAllOutbound!==void 0){if(props.securityGroup)throw new(errors_1()).ValidationError("Configure 'allowAllOutbound' directly on the supplied SecurityGroup.",this);if(hasSecurityGroups)throw new(errors_1()).ValidationError("Configure 'allowAllOutbound' directly on the supplied SecurityGroups.",this)}if(props.allowAllIpv6Outbound!==void 0){if(props.securityGroup)throw new(errors_1()).ValidationError("Configure 'allowAllIpv6Outbound' directly on the supplied SecurityGroup.",this);if(hasSecurityGroups)throw new(errors_1()).ValidationError("Configure 'allowAllIpv6Outbound' directly on the supplied SecurityGroups.",this)}let securityGroups;hasSecurityGroups?securityGroups=props.securityGroups:securityGroups=[props.securityGroup||new(ec2()).SecurityGroup(this,"SecurityGroup",{vpc:props.vpc,description:"Automatic security group for Lambda Function "+core_1().Names.uniqueId(this),allowAllOutbound:props.allowAllOutbound,allowAllIpv6Outbound:props.allowAllIpv6Outbound})],this._connections=new(ec2()).Connections({securityGroups}),props.filesystem&&props.filesystem.config.connections&&this.connections.allowTo(props.filesystem.config.connections,props.filesystem.config.connections.defaultPort??ec2().Port.tcp(efs().FileSystem.DEFAULT_PORT));const ipv6AllowedForDualStack=props.ipv6AllowedForDualStack,allowPublicSubnet=props.allowPublicSubnet??!1,selectedSubnets=props.vpc.selectSubnets(props.vpcSubnets),publicSubnetIds=new Set(props.vpc.publicSubnets.map(s=>s.subnetId));for(const subnetId of selectedSubnets.subnetIds)if(publicSubnetIds.has(subnetId)&&!allowPublicSubnet)throw new(errors_1()).ValidationError("Lambda Functions in a public subnet can NOT access the internet. If you are aware of this limitation and would still like to place the function in a public subnet, set `allowPublicSubnet` to true",this);return this.node.addDependency(selectedSubnets.internetConnectivityEstablished),props.ipv6AllowedForDualStack!==void 0?{ipv6AllowedForDualStack,subnetIds:selectedSubnets.subnetIds,securityGroupIds:securityGroups.map(sg=>sg.securityGroupId)}:{subnetIds:selectedSubnets.subnetIds,securityGroupIds:securityGroups.map(sg=>sg.securityGroupId)}}configureSnapStart(props){if(props.snapStart){if(core_1().Annotations.of(this).addWarningV2("@aws-cdk/aws-lambda:snapStartRequirePublish","SnapStart only supports published Lambda versions. Ignore if function already has published versions."),!props.runtime.supportsSnapStart)throw new(errors_1()).ValidationError(`SnapStart currently not supported by runtime ${props.runtime.name}`,this);if(props.filesystem)throw new(errors_1()).ValidationError("SnapStart is currently not supported using EFS",this);if(props.ephemeralStorageSize&&props.ephemeralStorageSize?.toMebibytes()>512)throw new(errors_1()).ValidationError("SnapStart is currently not supported using more than 512 MiB Ephemeral Storage",this);return props.snapStart._render()}}isQueue(deadLetterQueue){return deadLetterQueue.queueArn!==void 0}buildDeadLetterQueue(props){if(!props.deadLetterQueue&&!props.deadLetterQueueEnabled&&!props.deadLetterTopic)return;if(props.deadLetterQueue&&props.deadLetterQueueEnabled===!1)throw Error("deadLetterQueue defined but deadLetterQueueEnabled explicitly set to false");if(props.deadLetterTopic&&(props.deadLetterQueue||props.deadLetterQueueEnabled!==void 0))throw new(errors_1()).ValidationError("deadLetterQueue and deadLetterTopic cannot be specified together at the same time",this);let deadLetterQueue;return props.deadLetterTopic?(deadLetterQueue=props.deadLetterTopic,this.addToRolePolicy(new(iam()).PolicyStatement({actions:["sns:Publish"],resources:[deadLetterQueue.topicArn]}))):(deadLetterQueue=props.deadLetterQueue||new(sqs()).Queue(this,"DeadLetterQueue",{retentionPeriod:core_1().Duration.days(14)}),this.addToRolePolicy(new(iam()).PolicyStatement({actions:["sqs:SendMessage"],resources:[deadLetterQueue.queueArn]}))),deadLetterQueue}buildDeadLetterConfig(deadLetterQueue){if(deadLetterQueue)return{targetArn:this.isQueue(deadLetterQueue)?deadLetterQueue.queueArn:deadLetterQueue.topicArn}}buildTracingConfig(tracing){if(!(tracing===void 0||tracing===Tracing.DISABLED))return this.addToRolePolicy(new(iam()).PolicyStatement({actions:["xray:PutTraceSegments","xray:PutTelemetryRecords"],resources:["*"]})),{mode:tracing}}validateProfiling(props){if(!props.runtime.supportsCodeGuruProfiling)throw new(errors_1()).ValidationError(`CodeGuru profiling is not supported by runtime ${props.runtime.name}`,this);props.environment&&(props.environment.AWS_CODEGURU_PROFILER_GROUP_NAME||props.environment.AWS_CODEGURU_PROFILER_GROUP_ARN||props.environment.AWS_CODEGURU_PROFILER_TARGET_REGION||props.environment.AWS_CODEGURU_PROFILER_ENABLED)&&core_1().Annotations.of(this).addWarning("AWS_CODEGURU_PROFILER_GROUP_NAME, AWS_CODEGURU_PROFILER_GROUP_ARN, AWS_CODEGURU_PROFILER_TARGET_REGION, and AWS_CODEGURU_PROFILER_ENABLED should not be set when profiling options enabled")}}exports.Function=Function,_a=JSII_RTTI_SYMBOL_1,Function[_a]={fqn:"aws-cdk-lib.aws_lambda.Function",version:"2.178.2"},Function._VER_PROPS={},__decorate([(0,metadata_resource_1().MethodMetadata)()],Function.prototype,"addEnvironment",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Function.prototype,"invalidateVersionBasedOn",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Function.prototype,"addLayers",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Function.prototype,"addVersion",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],Function.prototype,"addAlias",null);function extractNameFromArn(arn){return core_1().Fn.select(6,core_1().Fn.split(":",arn))}function verifyCodeConfig(code,props){if([code.inlineCode,code.s3Location,code.image].filter(x=>!!x).length!==1)throw new(errors_1()).UnscopedValidationError('lambda.Code must specify exactly one of: "inlineCode", "s3Location", or "image"');if(!!code.image==(props.handler!==handler_1().Handler.FROM_IMAGE))throw new(errors_1()).UnscopedValidationError("handler must be `Handler.FROM_IMAGE` when using image asset for Lambda function");if(!!code.image==(props.runtime!==runtime_1().Runtime.FROM_IMAGE))throw new(errors_1()).UnscopedValidationError("runtime must be `Runtime.FROM_IMAGE` when using image asset for Lambda function");if(code.inlineCode&&!props.runtime.supportsInlineCode)throw new(errors_1()).UnscopedValidationError(`Inline source not allowed for ${props.runtime.name}`)}function undefinedIfNoKeys(struct){return Object.values(struct).every(val=>val===void 0)?void 0:struct}class FunctionVersionUpgrade{constructor(featureFlag,enabled=!0){this.featureFlag=featureFlag,this.enabled=enabled}visit(node){if(node instanceof Function&&this.enabled===core_1().FeatureFlags.of(node).isEnabled(this.featureFlag)){const cfnFunction=node.node.defaultChild,desc=cfnFunction.description?`${cfnFunction.description} `:"";cfnFunction.addPropertyOverride("Description",`${desc}version-hash:${(0,function_hash_1().calculateFunctionHash)(node)}`)}}}exports.FunctionVersionUpgrade=FunctionVersionUpgrade,_b=JSII_RTTI_SYMBOL_1,FunctionVersionUpgrade[_b]={fqn:"aws-cdk-lib.aws_lambda.FunctionVersionUpgrade",version:"2.178.2"};
