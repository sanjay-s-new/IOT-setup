"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodePipeline=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var fs=()=>{var tmp=require("fs");return fs=()=>tmp,tmp},path=()=>{var tmp=require("path");return path=()=>tmp,tmp},artifact_map_1=()=>{var tmp=require("./artifact-map");return artifact_map_1=()=>tmp,tmp},codebuild_step_1=()=>{var tmp=require("./codebuild-step");return codebuild_step_1=()=>tmp,tmp},codebuild_factory_1=()=>{var tmp=require("./private/codebuild-factory");return codebuild_factory_1=()=>tmp,tmp},outputs_1=()=>{var tmp=require("./private/outputs");return outputs_1=()=>tmp,tmp},stack_outputs_map_1=()=>{var tmp=require("./stack-outputs-map");return stack_outputs_map_1=()=>tmp,tmp},cb=()=>{var tmp=require("../../../aws-codebuild");return cb=()=>tmp,tmp},cp=()=>{var tmp=require("../../../aws-codepipeline");return cp=()=>tmp,tmp},cpa=()=>{var tmp=require("../../../aws-codepipeline-actions");return cpa=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},cxapi=()=>{var tmp=require("../../../cx-api");return cxapi=()=>tmp,tmp},blueprint_1=()=>{var tmp=require("../blueprint");return blueprint_1=()=>tmp,tmp},docker_credentials_1=()=>{var tmp=require("../docker-credentials");return docker_credentials_1=()=>tmp,tmp},helpers_internal_1=()=>{var tmp=require("../helpers-internal");return helpers_internal_1=()=>tmp,tmp},main_1=()=>{var tmp=require("../main");return main_1=()=>tmp,tmp},asset_singleton_role_1=()=>{var tmp=require("../private/asset-singleton-role");return asset_singleton_role_1=()=>tmp,tmp},cached_fnsub_1=()=>{var tmp=require("../private/cached-fnsub");return cached_fnsub_1=()=>tmp,tmp},cli_version_1=()=>{var tmp=require("../private/cli-version");return cli_version_1=()=>tmp,tmp},construct_internals_1=()=>{var tmp=require("../private/construct-internals");return construct_internals_1=()=>tmp,tmp},default_codebuild_image_1=()=>{var tmp=require("../private/default-codebuild-image");return default_codebuild_image_1=()=>tmp,tmp},fs_1=()=>{var tmp=require("../private/fs");return fs_1=()=>tmp,tmp},identifiers_1=()=>{var tmp=require("../private/identifiers");return identifiers_1=()=>tmp,tmp},javascript_1=()=>{var tmp=require("../private/javascript");return javascript_1=()=>tmp,tmp},template_configuration_1=()=>{var tmp=require("../private/template-configuration");return template_configuration_1=()=>tmp,tmp};class CodePipeline extends main_1().PipelineBase{constructor(scope,id,props){super(scope,id,props),this.props=props,this.artifacts=new(artifact_map_1()).ArtifactMap,this.cachedFnSub=new(cached_fnsub_1()).CachedFnSub,this.assetCodeBuildRoles=new Map;try{jsiiDeprecationWarnings().aws_cdk_lib_pipelines_CodePipelineProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CodePipeline),error}this.selfMutationEnabled=props.selfMutation??!0,this.dockerCredentials=props.dockerCredentials??[],this.singlePublisherPerAssetType=!(props.publishAssetsInParallel??!0),this.cliVersion=props.cliVersion??(0,cli_version_1().preferredCliVersion)(),this.useChangeSets=props.useChangeSets??!0,this.stackOutputs=new(stack_outputs_map_1()).StackOutputsMap(this)}get synthProject(){if(!this._synthProject)throw new Error("Call pipeline.buildPipeline() before reading this property");return this._synthProject}get selfMutationProject(){if(!this._pipeline)throw new Error("Call pipeline.buildPipeline() before reading this property");if(!this._selfMutationProject)throw new Error("No selfMutationProject since the selfMutation property was set to false");return this._selfMutationProject}get pipeline(){if(!this._pipeline)throw new Error("Pipeline not created yet");return this._pipeline}doBuildPipeline(){if(this._pipeline)throw new Error("Pipeline already created");if(this._myCxAsmRoot=path().resolve((0,construct_internals_1().assemblyBuilderOf)((0,construct_internals_1().appOf)(this)).outdir),this.props.codePipeline){if(this.props.pipelineName)throw new Error("Cannot set 'pipelineName' if an existing CodePipeline is given using 'codePipeline'");if(this.props.crossAccountKeys!==void 0)throw new Error("Cannot set 'crossAccountKeys' if an existing CodePipeline is given using 'codePipeline'");if(this.props.enableKeyRotation!==void 0)throw new Error("Cannot set 'enableKeyRotation' if an existing CodePipeline is given using 'codePipeline'");if(this.props.crossRegionReplicationBuckets!==void 0)throw new Error("Cannot set 'crossRegionReplicationBuckets' if an existing CodePipeline is given using 'codePipeline'");if(this.props.reuseCrossRegionSupportStacks!==void 0)throw new Error("Cannot set 'reuseCrossRegionSupportStacks' if an existing CodePipeline is given using 'codePipeline'");if(this.props.role!==void 0)throw new Error("Cannot set 'role' if an existing CodePipeline is given using 'codePipeline'");if(this.props.artifactBucket!==void 0)throw new Error("Cannot set 'artifactBucket' if an existing CodePipeline is given using 'codePipeline'");this._pipeline=this.props.codePipeline}else this._pipeline=new(cp()).Pipeline(this,"Pipeline",{pipelineName:this.props.pipelineName,pipelineType:cp().PipelineType.V1,crossAccountKeys:this.props.crossAccountKeys??!1,crossRegionReplicationBuckets:this.props.crossRegionReplicationBuckets,reuseCrossRegionSupportStacks:this.props.reuseCrossRegionSupportStacks,restartExecutionOnUpdate:!0,role:this.props.role,enableKeyRotation:this.props.enableKeyRotation,artifactBucket:this.props.artifactBucket});const graphFromBp=new(helpers_internal_1()).PipelineGraph(this,{selfMutation:this.selfMutationEnabled,singlePublisherPerAssetType:this.singlePublisherPerAssetType,prepareStep:this.useChangeSets});this._cloudAssemblyFileSet=graphFromBp.cloudAssemblyFileSet,this.pipelineStagesAndActionsFromGraph(graphFromBp);const dotFile=`${core_1().Names.uniqueId(this)}.dot`;fs().writeFileSync(path().join(this.myCxAsmRoot,dotFile),graphFromBp.graph.renderDot().replace(/input\.dot/,dotFile),{encoding:"utf-8"})}get myCxAsmRoot(){if(!this._myCxAsmRoot)throw new Error("Can't read 'myCxAsmRoot' if build deployment not called yet");return this._myCxAsmRoot}get assetsScope(){return(0,construct_internals_1().obtainScope)(this,"Assets")}pipelineStagesAndActionsFromGraph(structure){let beforeSelfMutation=this.selfMutationEnabled;for(const stageNode of(0,javascript_1().flatten)(structure.graph.sortedChildren())){if(!(0,helpers_internal_1().isGraph)(stageNode))throw new Error(`Top-level children must be graphs, got '${stageNode}'`);const chunks=chunkTranches(50,stageNode.sortedLeaves()),actionsOverflowStage=chunks.length>1;for(const[i,tranches]of(0,javascript_1().enumerate)(chunks)){const stageName=actionsOverflowStage?`${stageNode.id}.${i+1}`:stageNode.id,pipelineStage=this.pipeline.addStage({stageName}),sharedParent=new(helpers_internal_1()).GraphNodeCollection((0,javascript_1().flatten)(tranches)).commonAncestor();let runOrder=1;for(const tranche of tranches){const runOrdersConsumed=[0];for(const node of tranche){const factory=this.actionFromNode(node),nodeType=this.nodeTypeFromNode(node),name=(0,identifiers_1().actionName)(node,sharedParent),variablesNamespace=node.data?.type==="step"?(0,outputs_1().namespaceStepOutputs)(node.data.step,pipelineStage,name):void 0,result=factory.produceAction(pipelineStage,{actionName:name,runOrder,artifacts:this.artifacts,scope:(0,construct_internals_1().obtainScope)(this.pipeline,stageName),fallbackArtifact:this._fallbackArtifact,pipeline:this,codeBuildDefaults:nodeType?this.codeBuildDefaultsFor(nodeType):void 0,beforeSelfMutation,variablesNamespace,stackOutputsMap:this.stackOutputs});node.data?.type==="self-update"&&(beforeSelfMutation=!1),this.postProcessNode(node,result),runOrdersConsumed.push(result.runOrdersConsumed)}runOrder+=Math.max(...runOrdersConsumed)}}}}postProcessNode(node,result){const nodeType=this.nodeTypeFromNode(node);if(result.project){const dockerUsage=dockerUsageFromCodeBuild(nodeType??CodeBuildProjectType.STEP);if(dockerUsage)for(const c of this.dockerCredentials)c.grantRead(result.project,dockerUsage);nodeType===CodeBuildProjectType.SYNTH&&(this._synthProject=result.project),nodeType===CodeBuildProjectType.SELF_MUTATE&&(this._selfMutationProject=result.project)}node.data?.type==="step"&&node.data.step.primaryOutput?.primaryOutput&&!this._fallbackArtifact&&(this._fallbackArtifact=this.artifacts.toCodePipeline(node.data.step.primaryOutput?.primaryOutput))}actionFromNode(node){switch(node.data?.type){case"group":case"stack-group":case void 0:throw new Error(`actionFromNode: did not expect to get group nodes: ${node.data?.type}`);case"self-update":return this.selfMutateAction();case"publish-assets":return this.publishAssetsAction(node,node.data.assets);case"prepare":return this.createChangeSetAction(node.data.stack);case"execute":return node.data.withoutChangeSet?this.executeDeploymentAction(node.data.stack,node.data.captureOutputs):this.executeChangeSetAction(node.data.stack,node.data.captureOutputs);case"step":return this.actionFromStep(node,node.data.step);default:throw new Error(`CodePipeline does not support graph nodes of type '${node.data?.type}'. You are probably using a feature this CDK Pipelines implementation does not support.`)}}actionFromStep(node,step){const nodeType=this.nodeTypeFromNode(node);if(isCodePipelineActionFactory(step))return step;if(step instanceof blueprint_1().ShellStep||step instanceof codebuild_step_1().CodeBuildStep){let constructId=nodeType===CodeBuildProjectType.SYNTH?"CdkBuildProject":step.id;return step instanceof codebuild_step_1().CodeBuildStep?codebuild_factory_1().CodeBuildFactory.fromCodeBuildStep(constructId,step):codebuild_factory_1().CodeBuildFactory.fromShellStep(constructId,step)}if(step instanceof blueprint_1().ManualApprovalStep)return{produceAction:(stage,options)=>(stage.addAction(new(cpa()).ManualApprovalAction({actionName:options.actionName,runOrder:options.runOrder,additionalInformation:step.comment})),{runOrdersConsumed:1})};throw new Error(`Deployment step '${step}' is not supported for CodePipeline-backed pipelines`)}createChangeSetAction(stack){const changeSetName="PipelineChange",templateArtifact=this.artifacts.toCodePipeline(this._cloudAssemblyFileSet),templateConfigurationPath=this.writeTemplateConfiguration(stack),region=stack.region!==core_1().Stack.of(this).region?stack.region:void 0,account=stack.account!==core_1().Stack.of(this).account?stack.account:void 0,relativeTemplatePath=path().relative(this.myCxAsmRoot,stack.absoluteTemplatePath);return{produceAction:(stage,options)=>(stage.addAction(new(cpa()).CloudFormationCreateReplaceChangeSetAction({actionName:options.actionName,runOrder:options.runOrder,changeSetName,stackName:stack.stackName,templatePath:templateArtifact.atPath((0,fs_1().toPosixPath)(relativeTemplatePath)),adminPermissions:!0,role:this.roleFromPlaceholderArn(this.pipeline,region,account,stack.assumeRoleArn),deploymentRole:this.roleFromPlaceholderArn(this.pipeline,region,account,stack.executionRoleArn),region,templateConfiguration:templateConfigurationPath?templateArtifact.atPath((0,fs_1().toPosixPath)(templateConfigurationPath)):void 0,cfnCapabilities:[core_1().CfnCapabilities.NAMED_IAM,core_1().CfnCapabilities.AUTO_EXPAND]})),{runOrdersConsumed:1})}}executeChangeSetAction(stack,captureOutputs){const changeSetName="PipelineChange",region=stack.region!==core_1().Stack.of(this).region?stack.region:void 0,account=stack.account!==core_1().Stack.of(this).account?stack.account:void 0;return{produceAction:(stage,options)=>(stage.addAction(new(cpa()).CloudFormationExecuteChangeSetAction({actionName:options.actionName,runOrder:options.runOrder,changeSetName,stackName:stack.stackName,role:this.roleFromPlaceholderArn(this.pipeline,region,account,stack.assumeRoleArn),region,variablesNamespace:captureOutputs?(0,identifiers_1().stackVariableNamespace)(stack):void 0})),{runOrdersConsumed:1})}}executeDeploymentAction(stack,captureOutputs){const templateArtifact=this.artifacts.toCodePipeline(this._cloudAssemblyFileSet),templateConfigurationPath=this.writeTemplateConfiguration(stack),region=stack.region!==core_1().Stack.of(this).region?stack.region:void 0,account=stack.account!==core_1().Stack.of(this).account?stack.account:void 0,relativeTemplatePath=path().relative(this.myCxAsmRoot,stack.absoluteTemplatePath);return{produceAction:(stage,options)=>(stage.addAction(new(cpa()).CloudFormationCreateUpdateStackAction({actionName:options.actionName,runOrder:options.runOrder,stackName:stack.stackName,templatePath:templateArtifact.atPath((0,fs_1().toPosixPath)(relativeTemplatePath)),adminPermissions:!0,role:this.roleFromPlaceholderArn(this.pipeline,region,account,stack.assumeRoleArn),deploymentRole:this.roleFromPlaceholderArn(this.pipeline,region,account,stack.executionRoleArn),region,templateConfiguration:templateConfigurationPath?templateArtifact.atPath((0,fs_1().toPosixPath)(templateConfigurationPath)):void 0,cfnCapabilities:[core_1().CfnCapabilities.NAMED_IAM,core_1().CfnCapabilities.AUTO_EXPAND],variablesNamespace:captureOutputs?(0,identifiers_1().stackVariableNamespace)(stack):void 0})),{runOrdersConsumed:1})}}selfMutateAction(){const installSuffix=this.cliVersion?`@${this.cliVersion}`:"",pipelineStack=core_1().Stack.of(this.pipeline),pipelineStackIdentifier=pipelineStack.node.path??pipelineStack.stackName,step=new(codebuild_step_1()).CodeBuildStep("SelfMutate",{projectName:(0,javascript_1().maybeSuffix)(this.props.pipelineName,"-selfupdate"),input:this._cloudAssemblyFileSet,installCommands:[`npm install -g aws-cdk${installSuffix}`],commands:[`cdk -a ${(0,fs_1().toPosixPath)((0,construct_internals_1().embeddedAsmPath)(this.pipeline))} deploy ${pipelineStackIdentifier} --require-approval=never --verbose`],rolePolicyStatements:[new(iam()).PolicyStatement({actions:["sts:AssumeRole"],resources:[`arn:*:iam::${core_1().Stack.of(this.pipeline).account}:role/*`],conditions:{"ForAnyValue:StringEquals":{"iam:ResourceTag/aws-cdk:bootstrap-role":["image-publishing","file-publishing","deploy"]}}}),new(iam()).PolicyStatement({actions:["cloudformation:DescribeStacks"],resources:["*"]}),new(iam()).PolicyStatement({actions:["s3:ListBucket"],resources:["*"]})]});return codebuild_factory_1().CodeBuildFactory.fromCodeBuildStep("SelfMutation",step,{additionalConstructLevel:!1,scope:(0,construct_internals_1().obtainScope)(this,"UpdatePipeline")})}publishAssetsAction(node,assets){const commands=assets.map(asset=>{const relativeAssetManifestPath=path().relative(this.myCxAsmRoot,asset.assetManifestPath);return`cdk-assets --path "${(0,fs_1().toPosixPath)(relativeAssetManifestPath)}" --verbose publish "${asset.assetSelector}"`}),assetType=assets[0].assetType;if(assets.some(a=>a.assetType!==assetType))throw new Error("All assets in a single publishing step must be of the same type");const role=this.obtainAssetCodeBuildRole(assets[0].assetType);for(const roleArn of assets.flatMap(a=>a.assetPublishingRoleArn?[a.assetPublishingRoleArn]:[]))role.addAssumeRole(this.cachedFnSub.fnSub(roleArn));const script=new(codebuild_step_1()).CodeBuildStep(node.id,{commands,installCommands:["npm install -g cdk-assets@latest"],input:this._cloudAssemblyFileSet,buildEnvironment:{privileged:assets.some(asset=>asset.assetType===blueprint_1().AssetType.DOCKER_IMAGE)||this.props.codeBuildDefaults?.buildEnvironment?.privileged},role});return codebuild_factory_1().CodeBuildFactory.fromCodeBuildStep(node.id,script,{additionalConstructLevel:!1,passBuildSpecViaCloudAssembly:this.singlePublisherPerAssetType,scope:this.assetsScope})}nodeTypeFromNode(node){if(node.data?.type==="step")return node.data?.isBuildStep?CodeBuildProjectType.SYNTH:CodeBuildProjectType.STEP;if(node.data?.type==="publish-assets")return CodeBuildProjectType.ASSETS;if(node.data?.type==="self-update")return CodeBuildProjectType.SELF_MUTATE}codeBuildDefaultsFor(nodeType){const defaultOptions={buildEnvironment:{buildImage:default_codebuild_image_1().CDKP_DEFAULT_CODEBUILD_IMAGE,computeType:cb().ComputeType.SMALL}},typeBasedCustomizations={[CodeBuildProjectType.SYNTH]:this.props.dockerEnabledForSynth?(0,codebuild_factory_1().mergeCodeBuildOptions)(this.props.synthCodeBuildDefaults,{buildEnvironment:{privileged:!0}}):this.props.synthCodeBuildDefaults,[CodeBuildProjectType.ASSETS]:this.props.assetPublishingCodeBuildDefaults,[CodeBuildProjectType.SELF_MUTATE]:this.props.dockerEnabledForSelfMutation?(0,codebuild_factory_1().mergeCodeBuildOptions)(this.props.selfMutationCodeBuildDefaults,{buildEnvironment:{privileged:!0}}):this.props.selfMutationCodeBuildDefaults,[CodeBuildProjectType.STEP]:{}},dockerUsage=dockerUsageFromCodeBuild(nodeType),dockerCommands=dockerUsage!==void 0?(0,docker_credentials_1().dockerCredentialsInstallCommands)(dockerUsage,this.dockerCredentials,"both"):[],typeBasedDockerCommands=dockerCommands.length>0?{partialBuildSpec:cb().BuildSpec.fromObject({version:"0.2",phases:{pre_build:{commands:dockerCommands}}})}:{};return(0,codebuild_factory_1().mergeCodeBuildOptions)(defaultOptions,this.props.codeBuildDefaults,typeBasedCustomizations[nodeType],typeBasedDockerCommands)}roleFromPlaceholderArn(scope,region,account,arn){if(!arn)return;const id=arn;let existingRole=scope.node.tryFindChild(`ImmutableRole${id}`);if(existingRole||(existingRole=scope.node.tryFindChild(id),existingRole))return existingRole;const arnToImport=cxapi().EnvironmentPlaceholders.replace(arn,{region:region??core_1().Aws.REGION,accountId:account??core_1().Aws.ACCOUNT_ID,partition:core_1().Aws.PARTITION});return iam().Role.fromRoleArn(scope,id,arnToImport,{mutable:!1,addGrantsToResources:!0})}writeTemplateConfiguration(stack){if(Object.keys(stack.tags).length===0)return;const absConfigPath=`${stack.absoluteTemplatePath}.config.json`,relativeConfigPath=path().relative(this.myCxAsmRoot,absConfigPath);return(0,template_configuration_1().writeTemplateConfiguration)(absConfigPath,{Tags:(0,javascript_1().noUndefined)(stack.tags)}),relativeConfigPath}obtainAssetCodeBuildRole(assetType){const existing=this.assetCodeBuildRoles.get(assetType);if(existing)return existing;const stack=core_1().Stack.of(this),assumePrincipal=core_1().FeatureFlags.of(this).isEnabled(cxapi().PIPELINE_REDUCE_ASSET_ROLE_TRUST_SCOPE)?new(iam()).CompositePrincipal(new(iam()).ServicePrincipal("codebuild.amazonaws.com")):new(iam()).CompositePrincipal(new(iam()).ServicePrincipal("codebuild.amazonaws.com"),new(iam()).AccountPrincipal(stack.account)),rolePrefix=assetType===blueprint_1().AssetType.DOCKER_IMAGE?"Docker":"File";let assetRole=new(asset_singleton_role_1()).AssetSingletonRole(this.assetsScope,`${rolePrefix}Role`,{roleName:core_1().PhysicalName.GENERATE_IF_NEEDED,assumedBy:assumePrincipal});return assetType===blueprint_1().AssetType.DOCKER_IMAGE&&this.dockerCredentials.forEach(reg=>reg.grantRead(assetRole,docker_credentials_1().DockerCredentialUsage.ASSET_PUBLISHING)),this.assetCodeBuildRoles.set(assetType,assetRole),assetRole}}exports.CodePipeline=CodePipeline,_a=JSII_RTTI_SYMBOL_1,CodePipeline[_a]={fqn:"aws-cdk-lib.pipelines.CodePipeline",version:"2.178.2"};function dockerUsageFromCodeBuild(cbt){switch(cbt){case CodeBuildProjectType.ASSETS:return docker_credentials_1().DockerCredentialUsage.ASSET_PUBLISHING;case CodeBuildProjectType.SELF_MUTATE:return docker_credentials_1().DockerCredentialUsage.SELF_UPDATE;case CodeBuildProjectType.SYNTH:return docker_credentials_1().DockerCredentialUsage.SYNTH;case CodeBuildProjectType.STEP:return}}var CodeBuildProjectType;(function(CodeBuildProjectType2){CodeBuildProjectType2.SYNTH="SYNTH",CodeBuildProjectType2.ASSETS="ASSETS",CodeBuildProjectType2.SELF_MUTATE="SELF_MUTATE",CodeBuildProjectType2.STEP="STEP"})(CodeBuildProjectType||(CodeBuildProjectType={}));function chunkTranches(n,xss){const ret=[];for(;xss.length>0;){const tranches=[];let count=0;for(;xss.length>0;){const xs=xss[0],spaceRemaining=n-count;if(xs.length<=spaceRemaining)tranches.push(xs),count+=xs.length,xss.shift();else{tranches.push(xs.splice(0,spaceRemaining)),count=n;break}}ret.push(tranches)}return ret}function isCodePipelineActionFactory(x){return!!x.produceAction}
