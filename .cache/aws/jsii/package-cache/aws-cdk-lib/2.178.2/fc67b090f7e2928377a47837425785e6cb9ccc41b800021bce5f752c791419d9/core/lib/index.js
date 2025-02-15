"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.AspectPriority=void 0,Object.defineProperty(exports,_noFold="AspectPriority",{enumerable:!0,configurable:!0,get:()=>require("./aspect").AspectPriority}),exports.Aspects=void 0,Object.defineProperty(exports,_noFold="Aspects",{enumerable:!0,configurable:!0,get:()=>require("./aspect").Aspects}),exports.AspectApplication=void 0,Object.defineProperty(exports,_noFold="AspectApplication",{enumerable:!0,configurable:!0,get:()=>require("./aspect").AspectApplication}),exports.Tag=void 0,Object.defineProperty(exports,_noFold="Tag",{enumerable:!0,configurable:!0,get:()=>require("./tag-aspect").Tag}),exports.Tags=void 0,Object.defineProperty(exports,_noFold="Tags",{enumerable:!0,configurable:!0,get:()=>require("./tag-aspect").Tags}),exports.RemoveTag=void 0,Object.defineProperty(exports,_noFold="RemoveTag",{enumerable:!0,configurable:!0,get:()=>require("./tag-aspect").RemoveTag}),exports.TokenComparison=void 0,Object.defineProperty(exports,_noFold="TokenComparison",{enumerable:!0,configurable:!0,get:()=>require("./token").TokenComparison}),exports.Token=void 0,Object.defineProperty(exports,_noFold="Token",{enumerable:!0,configurable:!0,get:()=>require("./token").Token}),exports.Tokenization=void 0,Object.defineProperty(exports,_noFold="Tokenization",{enumerable:!0,configurable:!0,get:()=>require("./token").Tokenization}),exports.JsonNull=void 0,Object.defineProperty(exports,_noFold="JsonNull",{enumerable:!0,configurable:!0,get:()=>require("./token").JsonNull}),exports.isResolvableObject=void 0,Object.defineProperty(exports,_noFold="isResolvableObject",{enumerable:!0,configurable:!0,get:()=>require("./token").isResolvableObject}),exports.withResolved=void 0,Object.defineProperty(exports,_noFold="withResolved",{enumerable:!0,configurable:!0,get:()=>require("./token").withResolved}),exports.StringConcat=void 0,Object.defineProperty(exports,_noFold="StringConcat",{enumerable:!0,configurable:!0,get:()=>require("./resolvable").StringConcat}),exports.DefaultTokenResolver=void 0,Object.defineProperty(exports,_noFold="DefaultTokenResolver",{enumerable:!0,configurable:!0,get:()=>require("./resolvable").DefaultTokenResolver}),exports.ResolutionTypeHint=void 0,Object.defineProperty(exports,_noFold="ResolutionTypeHint",{enumerable:!0,configurable:!0,get:()=>require("./type-hints").ResolutionTypeHint}),exports.Lazy=void 0,Object.defineProperty(exports,_noFold="Lazy",{enumerable:!0,configurable:!0,get:()=>require("./lazy").Lazy}),exports.TagManager=void 0,Object.defineProperty(exports,_noFold="TagManager",{enumerable:!0,configurable:!0,get:()=>require("./tag-manager").TagManager}),exports.TokenizedStringFragments=void 0,Object.defineProperty(exports,_noFold="TokenizedStringFragments",{enumerable:!0,configurable:!0,get:()=>require("./string-fragments").TokenizedStringFragments}),exports.isReusableStackSynthesizer=void 0,Object.defineProperty(exports,_noFold="isReusableStackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").isReusableStackSynthesizer}),exports.BOOTSTRAP_QUALIFIER_CONTEXT=void 0,Object.defineProperty(exports,_noFold="BOOTSTRAP_QUALIFIER_CONTEXT",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").BOOTSTRAP_QUALIFIER_CONTEXT}),exports.DefaultStackSynthesizer=void 0,Object.defineProperty(exports,_noFold="DefaultStackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").DefaultStackSynthesizer}),exports.LegacyStackSynthesizer=void 0,Object.defineProperty(exports,_noFold="LegacyStackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").LegacyStackSynthesizer}),exports.BootstraplessSynthesizer=void 0,Object.defineProperty(exports,_noFold="BootstraplessSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").BootstraplessSynthesizer}),exports.NestedStackSynthesizer=void 0,Object.defineProperty(exports,_noFold="NestedStackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").NestedStackSynthesizer}),exports.StackSynthesizer=void 0,Object.defineProperty(exports,_noFold="StackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").StackSynthesizer}),exports.CliCredentialsStackSynthesizer=void 0,Object.defineProperty(exports,_noFold="CliCredentialsStackSynthesizer",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").CliCredentialsStackSynthesizer}),exports.AssetManifestBuilder=void 0,Object.defineProperty(exports,_noFold="AssetManifestBuilder",{enumerable:!0,configurable:!0,get:()=>require("./stack-synthesizers").AssetManifestBuilder}),exports.Reference=void 0,Object.defineProperty(exports,_noFold="Reference",{enumerable:!0,configurable:!0,get:()=>require("./reference").Reference}),exports.CfnCondition=void 0,Object.defineProperty(exports,_noFold="CfnCondition",{enumerable:!0,configurable:!0,get:()=>require("./cfn-condition").CfnCondition}),exports.Fn=void 0,Object.defineProperty(exports,_noFold="Fn",{enumerable:!0,configurable:!0,get:()=>require("./cfn-fn").Fn}),exports.CfnHook=void 0,Object.defineProperty(exports,_noFold="CfnHook",{enumerable:!0,configurable:!0,get:()=>require("./cfn-hook").CfnHook}),exports.CfnTrafficRoutingType=void 0,Object.defineProperty(exports,_noFold="CfnTrafficRoutingType",{enumerable:!0,configurable:!0,get:()=>require("./cfn-codedeploy-blue-green-hook").CfnTrafficRoutingType}),exports.CfnCodeDeployBlueGreenHook=void 0,Object.defineProperty(exports,_noFold="CfnCodeDeployBlueGreenHook",{enumerable:!0,configurable:!0,get:()=>require("./cfn-codedeploy-blue-green-hook").CfnCodeDeployBlueGreenHook}),exports.CfnInclude=void 0,Object.defineProperty(exports,_noFold="CfnInclude",{enumerable:!0,configurable:!0,get:()=>require("./cfn-include").CfnInclude}),exports.CfnMapping=void 0,Object.defineProperty(exports,_noFold="CfnMapping",{enumerable:!0,configurable:!0,get:()=>require("./cfn-mapping").CfnMapping}),exports.CfnOutput=void 0,Object.defineProperty(exports,_noFold="CfnOutput",{enumerable:!0,configurable:!0,get:()=>require("./cfn-output").CfnOutput}),exports.CfnParameter=void 0,Object.defineProperty(exports,_noFold="CfnParameter",{enumerable:!0,configurable:!0,get:()=>require("./cfn-parameter").CfnParameter}),exports.Aws=void 0,Object.defineProperty(exports,_noFold="Aws",{enumerable:!0,configurable:!0,get:()=>require("./cfn-pseudo").Aws}),exports.ScopedAws=void 0,Object.defineProperty(exports,_noFold="ScopedAws",{enumerable:!0,configurable:!0,get:()=>require("./cfn-pseudo").ScopedAws}),exports.CfnResource=void 0,Object.defineProperty(exports,_noFold="CfnResource",{enumerable:!0,configurable:!0,get:()=>require("./cfn-resource").CfnResource}),exports.TagType=void 0,Object.defineProperty(exports,_noFold="TagType",{enumerable:!0,configurable:!0,get:()=>require("./cfn-resource").TagType}),exports.CfnDeletionPolicy=void 0,Object.defineProperty(exports,_noFold="CfnDeletionPolicy",{enumerable:!0,configurable:!0,get:()=>require("./cfn-resource-policy").CfnDeletionPolicy}),exports.CfnRule=void 0,Object.defineProperty(exports,_noFold="CfnRule",{enumerable:!0,configurable:!0,get:()=>require("./cfn-rule").CfnRule}),exports.STACK_RESOURCE_LIMIT_CONTEXT=void 0,Object.defineProperty(exports,_noFold="STACK_RESOURCE_LIMIT_CONTEXT",{enumerable:!0,configurable:!0,get:()=>require("./stack").STACK_RESOURCE_LIMIT_CONTEXT}),exports.Stack=void 0,Object.defineProperty(exports,_noFold="Stack",{enumerable:!0,configurable:!0,get:()=>require("./stack").Stack}),exports.rootPathTo=void 0,Object.defineProperty(exports,_noFold="rootPathTo",{enumerable:!0,configurable:!0,get:()=>require("./stack").rootPathTo}),exports.Stage=void 0,Object.defineProperty(exports,_noFold="Stage",{enumerable:!0,configurable:!0,get:()=>require("./stage").Stage}),exports.CfnElement=void 0,Object.defineProperty(exports,_noFold="CfnElement",{enumerable:!0,configurable:!0,get:()=>require("./cfn-element").CfnElement}),exports.CfnRefElement=void 0,Object.defineProperty(exports,_noFold="CfnRefElement",{enumerable:!0,configurable:!0,get:()=>require("./cfn-element").CfnRefElement}),exports.CfnDynamicReference=void 0,Object.defineProperty(exports,_noFold="CfnDynamicReference",{enumerable:!0,configurable:!0,get:()=>require("./cfn-dynamic-reference").CfnDynamicReference}),exports.CfnDynamicReferenceService=void 0,Object.defineProperty(exports,_noFold="CfnDynamicReferenceService",{enumerable:!0,configurable:!0,get:()=>require("./cfn-dynamic-reference").CfnDynamicReferenceService}),exports.CfnJson=void 0,Object.defineProperty(exports,_noFold="CfnJson",{enumerable:!0,configurable:!0,get:()=>require("./cfn-json").CfnJson}),exports.RemovalPolicy=void 0,Object.defineProperty(exports,_noFold="RemovalPolicy",{enumerable:!0,configurable:!0,get:()=>require("./removal-policy").RemovalPolicy}),exports.ArnFormat=void 0,Object.defineProperty(exports,_noFold="ArnFormat",{enumerable:!0,configurable:!0,get:()=>require("./arn").ArnFormat}),exports.Arn=void 0,Object.defineProperty(exports,_noFold="Arn",{enumerable:!0,configurable:!0,get:()=>require("./arn").Arn}),exports.Duration=void 0,Object.defineProperty(exports,_noFold="Duration",{enumerable:!0,configurable:!0,get:()=>require("./duration").Duration}),exports.Expiration=void 0,Object.defineProperty(exports,_noFold="Expiration",{enumerable:!0,configurable:!0,get:()=>require("./expiration").Expiration}),exports.Size=void 0,Object.defineProperty(exports,_noFold="Size",{enumerable:!0,configurable:!0,get:()=>require("./size").Size}),exports.SizeRoundingBehavior=void 0,Object.defineProperty(exports,_noFold="SizeRoundingBehavior",{enumerable:!0,configurable:!0,get:()=>require("./size").SizeRoundingBehavior}),exports.captureStackTrace=void 0,Object.defineProperty(exports,_noFold="captureStackTrace",{enumerable:!0,configurable:!0,get:()=>require("./stack-trace").captureStackTrace}),exports.Errors=void 0,Object.defineProperty(exports,_noFold="Errors",{enumerable:!0,configurable:!0,get:()=>require("./errors").Errors}),exports.ValidationError=void 0,Object.defineProperty(exports,_noFold="ValidationError",{enumerable:!0,configurable:!0,get:()=>require("./errors").ValidationError}),exports.UnscopedValidationError=void 0,Object.defineProperty(exports,_noFold="UnscopedValidationError",{enumerable:!0,configurable:!0,get:()=>require("./errors").UnscopedValidationError}),exports.App=void 0,Object.defineProperty(exports,_noFold="App",{enumerable:!0,configurable:!0,get:()=>require("./app").App}),exports.attachCustomSynthesis=void 0,Object.defineProperty(exports,_noFold="attachCustomSynthesis",{enumerable:!0,configurable:!0,get:()=>require("./app").attachCustomSynthesis}),exports.ContextProvider=void 0,Object.defineProperty(exports,_noFold="ContextProvider",{enumerable:!0,configurable:!0,get:()=>require("./context-provider").ContextProvider}),exports.Annotations=void 0,Object.defineProperty(exports,_noFold="Annotations",{enumerable:!0,configurable:!0,get:()=>require("./annotations").Annotations}),exports.stringToCloudFormation=void 0,Object.defineProperty(exports,_noFold="stringToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").stringToCloudFormation}),exports.booleanToCloudFormation=void 0,Object.defineProperty(exports,_noFold="booleanToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").booleanToCloudFormation}),exports.objectToCloudFormation=void 0,Object.defineProperty(exports,_noFold="objectToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").objectToCloudFormation}),exports.numberToCloudFormation=void 0,Object.defineProperty(exports,_noFold="numberToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").numberToCloudFormation}),exports.ValidationResult=void 0,Object.defineProperty(exports,_noFold="ValidationResult",{enumerable:!0,configurable:!0,get:()=>require("./runtime").ValidationResult}),exports.ValidationResults=void 0,Object.defineProperty(exports,_noFold="ValidationResults",{enumerable:!0,configurable:!0,get:()=>require("./runtime").ValidationResults}),exports.VALIDATION_SUCCESS=void 0,Object.defineProperty(exports,_noFold="VALIDATION_SUCCESS",{enumerable:!0,configurable:!0,get:()=>require("./runtime").VALIDATION_SUCCESS}),exports.dateToCloudFormation=void 0,Object.defineProperty(exports,_noFold="dateToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").dateToCloudFormation}),exports.cfnTagToCloudFormation=void 0,Object.defineProperty(exports,_noFold="cfnTagToCloudFormation",{enumerable:!0,configurable:!0,get:()=>require("./runtime").cfnTagToCloudFormation}),exports.listMapper=void 0,Object.defineProperty(exports,_noFold="listMapper",{enumerable:!0,configurable:!0,get:()=>require("./runtime").listMapper}),exports.hashMapper=void 0,Object.defineProperty(exports,_noFold="hashMapper",{enumerable:!0,configurable:!0,get:()=>require("./runtime").hashMapper}),exports.unionMapper=void 0,Object.defineProperty(exports,_noFold="unionMapper",{enumerable:!0,configurable:!0,get:()=>require("./runtime").unionMapper}),exports.canInspect=void 0,Object.defineProperty(exports,_noFold="canInspect",{enumerable:!0,configurable:!0,get:()=>require("./runtime").canInspect}),exports.validateString=void 0,Object.defineProperty(exports,_noFold="validateString",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateString}),exports.validateNumber=void 0,Object.defineProperty(exports,_noFold="validateNumber",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateNumber}),exports.validateBoolean=void 0,Object.defineProperty(exports,_noFold="validateBoolean",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateBoolean}),exports.validateDate=void 0,Object.defineProperty(exports,_noFold="validateDate",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateDate}),exports.validateObject=void 0,Object.defineProperty(exports,_noFold="validateObject",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateObject}),exports.validateCfnTag=void 0,Object.defineProperty(exports,_noFold="validateCfnTag",{enumerable:!0,configurable:!0,get:()=>require("./runtime").validateCfnTag}),exports.listValidator=void 0,Object.defineProperty(exports,_noFold="listValidator",{enumerable:!0,configurable:!0,get:()=>require("./runtime").listValidator}),exports.hashValidator=void 0,Object.defineProperty(exports,_noFold="hashValidator",{enumerable:!0,configurable:!0,get:()=>require("./runtime").hashValidator}),exports.propertyValidator=void 0,Object.defineProperty(exports,_noFold="propertyValidator",{enumerable:!0,configurable:!0,get:()=>require("./runtime").propertyValidator}),exports.requiredValidator=void 0,Object.defineProperty(exports,_noFold="requiredValidator",{enumerable:!0,configurable:!0,get:()=>require("./runtime").requiredValidator}),exports.requireProperty=void 0,Object.defineProperty(exports,_noFold="requireProperty",{enumerable:!0,configurable:!0,get:()=>require("./runtime").requireProperty}),exports.unionValidator=void 0,Object.defineProperty(exports,_noFold="unionValidator",{enumerable:!0,configurable:!0,get:()=>require("./runtime").unionValidator}),exports.SecretValue=void 0,Object.defineProperty(exports,_noFold="SecretValue",{enumerable:!0,configurable:!0,get:()=>require("./secret-value").SecretValue}),exports.Resource=void 0,Object.defineProperty(exports,_noFold="Resource",{enumerable:!0,configurable:!0,get:()=>require("./resource").Resource}),exports.PhysicalName=void 0,Object.defineProperty(exports,_noFold="PhysicalName",{enumerable:!0,configurable:!0,get:()=>require("./physical-name").PhysicalName}),exports.AssetHashType=void 0,Object.defineProperty(exports,_noFold="AssetHashType",{enumerable:!0,configurable:!0,get:()=>require("./assets").AssetHashType}),exports.FileAssetPackaging=void 0,Object.defineProperty(exports,_noFold="FileAssetPackaging",{enumerable:!0,configurable:!0,get:()=>require("./assets").FileAssetPackaging}),exports.TreeInspector=void 0,Object.defineProperty(exports,_noFold="TreeInspector",{enumerable:!0,configurable:!0,get:()=>require("./tree").TreeInspector}),exports.AssetStaging=void 0,Object.defineProperty(exports,_noFold="AssetStaging",{enumerable:!0,configurable:!0,get:()=>require("./asset-staging").AssetStaging}),exports.DockerBuildSecret=void 0,Object.defineProperty(exports,_noFold="DockerBuildSecret",{enumerable:!0,configurable:!0,get:()=>require("./bundling").DockerBuildSecret}),exports.BundlingOutput=void 0,Object.defineProperty(exports,_noFold="BundlingOutput",{enumerable:!0,configurable:!0,get:()=>require("./bundling").BundlingOutput}),exports.BundlingFileAccess=void 0,Object.defineProperty(exports,_noFold="BundlingFileAccess",{enumerable:!0,configurable:!0,get:()=>require("./bundling").BundlingFileAccess}),exports.BundlingDockerImage=void 0,Object.defineProperty(exports,_noFold="BundlingDockerImage",{enumerable:!0,configurable:!0,get:()=>require("./bundling").BundlingDockerImage}),exports.DockerImage=void 0,Object.defineProperty(exports,_noFold="DockerImage",{enumerable:!0,configurable:!0,get:()=>require("./bundling").DockerImage}),exports.DockerVolumeConsistency=void 0,Object.defineProperty(exports,_noFold="DockerVolumeConsistency",{enumerable:!0,configurable:!0,get:()=>require("./bundling").DockerVolumeConsistency}),exports.FileSystem=void 0,Object.defineProperty(exports,_noFold="FileSystem",{enumerable:!0,configurable:!0,get:()=>require("./fs").FileSystem}),exports.IgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="IgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./fs").IgnoreStrategy}),exports.GlobIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="GlobIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./fs").GlobIgnoreStrategy}),exports.GitIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="GitIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./fs").GitIgnoreStrategy}),exports.DockerIgnoreStrategy=void 0,Object.defineProperty(exports,_noFold="DockerIgnoreStrategy",{enumerable:!0,configurable:!0,get:()=>require("./fs").DockerIgnoreStrategy}),exports.SymlinkFollowMode=void 0,Object.defineProperty(exports,_noFold="SymlinkFollowMode",{enumerable:!0,configurable:!0,get:()=>require("./fs").SymlinkFollowMode}),exports.IgnoreMode=void 0,Object.defineProperty(exports,_noFold="IgnoreMode",{enumerable:!0,configurable:!0,get:()=>require("./fs").IgnoreMode}),exports.CustomResource=void 0,Object.defineProperty(exports,_noFold="CustomResource",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource").CustomResource}),exports.NestedStack=void 0,Object.defineProperty(exports,_noFold="NestedStack",{enumerable:!0,configurable:!0,get:()=>require("./nested-stack").NestedStack}),exports.CustomResourceProviderBase=void 0,Object.defineProperty(exports,_noFold="CustomResourceProviderBase",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource-provider").CustomResourceProviderBase}),exports.CustomResourceProviderRuntime=void 0,Object.defineProperty(exports,_noFold="CustomResourceProviderRuntime",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource-provider").CustomResourceProviderRuntime}),exports.CustomResourceProvider=void 0,Object.defineProperty(exports,_noFold="CustomResourceProvider",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource-provider").CustomResourceProvider}),exports.determineLatestNodeRuntimeName=void 0,Object.defineProperty(exports,_noFold="determineLatestNodeRuntimeName",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource-provider").determineLatestNodeRuntimeName}),exports.INLINE_CUSTOM_RESOURCE_CONTEXT=void 0,Object.defineProperty(exports,_noFold="INLINE_CUSTOM_RESOURCE_CONTEXT",{enumerable:!0,configurable:!0,get:()=>require("./custom-resource-provider").INLINE_CUSTOM_RESOURCE_CONTEXT}),exports.CfnCapabilities=void 0,Object.defineProperty(exports,_noFold="CfnCapabilities",{enumerable:!0,configurable:!0,get:()=>require("./cfn-capabilities").CfnCapabilities}),exports.CfnCustomResource=void 0,Object.defineProperty(exports,_noFold="CfnCustomResource",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnCustomResource}),exports.CfnHookDefaultVersion=void 0,Object.defineProperty(exports,_noFold="CfnHookDefaultVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnHookDefaultVersion}),exports.CfnHookTypeConfig=void 0,Object.defineProperty(exports,_noFold="CfnHookTypeConfig",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnHookTypeConfig}),exports.CfnHookVersion=void 0,Object.defineProperty(exports,_noFold="CfnHookVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnHookVersion}),exports.CfnMacro=void 0,Object.defineProperty(exports,_noFold="CfnMacro",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnMacro}),exports.CfnModuleDefaultVersion=void 0,Object.defineProperty(exports,_noFold="CfnModuleDefaultVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnModuleDefaultVersion}),exports.CfnModuleVersion=void 0,Object.defineProperty(exports,_noFold="CfnModuleVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnModuleVersion}),exports.CfnPublicTypeVersion=void 0,Object.defineProperty(exports,_noFold="CfnPublicTypeVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnPublicTypeVersion}),exports.CfnPublisher=void 0,Object.defineProperty(exports,_noFold="CfnPublisher",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnPublisher}),exports.CfnResourceDefaultVersion=void 0,Object.defineProperty(exports,_noFold="CfnResourceDefaultVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnResourceDefaultVersion}),exports.CfnResourceVersion=void 0,Object.defineProperty(exports,_noFold="CfnResourceVersion",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnResourceVersion}),exports.CfnStack=void 0,Object.defineProperty(exports,_noFold="CfnStack",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnStack}),exports.CfnStackSet=void 0,Object.defineProperty(exports,_noFold="CfnStackSet",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnStackSet}),exports.CfnTypeActivation=void 0,Object.defineProperty(exports,_noFold="CfnTypeActivation",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnTypeActivation}),exports.CfnWaitCondition=void 0,Object.defineProperty(exports,_noFold="CfnWaitCondition",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnWaitCondition}),exports.CfnWaitConditionHandle=void 0,Object.defineProperty(exports,_noFold="CfnWaitConditionHandle",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnWaitConditionHandle}),exports.CfnGuardHook=void 0,Object.defineProperty(exports,_noFold="CfnGuardHook",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnGuardHook}),exports.CfnLambdaHook=void 0,Object.defineProperty(exports,_noFold="CfnLambdaHook",{enumerable:!0,configurable:!0,get:()=>require("./cloudformation.generated").CfnLambdaHook}),exports.FeatureFlags=void 0,Object.defineProperty(exports,_noFold="FeatureFlags",{enumerable:!0,configurable:!0,get:()=>require("./feature-flags").FeatureFlags}),exports.PERMISSIONS_BOUNDARY_CONTEXT_KEY=void 0,Object.defineProperty(exports,_noFold="PERMISSIONS_BOUNDARY_CONTEXT_KEY",{enumerable:!0,configurable:!0,get:()=>require("./permissions-boundary").PERMISSIONS_BOUNDARY_CONTEXT_KEY}),exports.PermissionsBoundary=void 0,Object.defineProperty(exports,_noFold="PermissionsBoundary",{enumerable:!0,configurable:!0,get:()=>require("./permissions-boundary").PermissionsBoundary}),exports.PolicyValidationReportStatusBeta1=void 0,Object.defineProperty(exports,_noFold="PolicyValidationReportStatusBeta1",{enumerable:!0,configurable:!0,get:()=>require("./validation").PolicyValidationReportStatusBeta1}),exports.Intrinsic=void 0,Object.defineProperty(exports,_noFold="Intrinsic",{enumerable:!0,configurable:!0,get:()=>require("./private/intrinsic").Intrinsic}),exports.Names=void 0,Object.defineProperty(exports,_noFold="Names",{enumerable:!0,configurable:!0,get:()=>require("./names").Names}),exports.TimeZone=void 0,Object.defineProperty(exports,_noFold="TimeZone",{enumerable:!0,configurable:!0,get:()=>require("./time-zone").TimeZone});
