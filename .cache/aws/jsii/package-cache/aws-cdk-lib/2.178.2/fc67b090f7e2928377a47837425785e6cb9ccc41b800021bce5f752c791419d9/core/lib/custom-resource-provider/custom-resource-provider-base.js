"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CustomResourceProviderBase=void 0;const jsiiDeprecationWarnings=require("../../../.warnings.jsii.js"),JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti"),path=require("path"),constructs_1=require("constructs"),fs=require("fs-extra"),shared_1=require("./shared"),cxapi=require("../../../cx-api"),asset_staging_1=require("../asset-staging"),assets_1=require("../assets"),cfn_resource_1=require("../cfn-resource"),duration_1=require("../duration"),fs_1=require("../fs"),helpers_internal_1=require("../helpers-internal"),lazy_1=require("../lazy"),size_1=require("../size"),stack_1=require("../stack"),token_1=require("../token"),ENTRYPOINT_FILENAME="__entrypoint__",ENTRYPOINT_NODEJS_SOURCE=path.join(__dirname,"..","..","..","custom-resource-handlers","dist","core","nodejs-entrypoint-handler","index.js");class CustomResourceProviderBase extends constructs_1.Construct{get codeHash(){if(!this._codeHash)throw new Error("This custom resource uses inlineCode: true and does not have a codeHash");return this._codeHash}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings.aws_cdk_lib_CustomResourceProviderBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,CustomResourceProviderBase),error}const stack=stack_1.Stack.of(scope);if(!fs.existsSync(path.join(props.codeDirectory,"index.js")))throw new Error(`cannot find ${props.codeDirectory}/index.js`);if(props.policyStatements)for(const statement of props.policyStatements)this.addToRolePolicy(statement);const{code,codeHandler,metadata}=this.createCodePropAndMetadata(props,stack),config=(0,helpers_internal_1.getPrecreatedRoleConfig)(this,`${this.node.path}/Role`),assumeRolePolicyDoc=[{Action:"sts:AssumeRole",Effect:"Allow",Principal:{Service:"lambda.amazonaws.com"}}],managedPolicyArn="arn:${AWS::Partition}:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole";this.roleArn="",config.enabled&&(this.node.addValidation({validate:()=>(helpers_internal_1.PolicySynthesizer.getOrCreate(this).addRole(`${this.node.path}/Role`,{missing:!config.precreatedRoleName,roleName:config.precreatedRoleName??id+"Role",managedPolicies:[{managedPolicyArn}],policyStatements:this.policyStatements??[],assumeRolePolicy:assumeRolePolicyDoc}),[])}),this.roleArn=stack_1.Stack.of(this).formatArn({region:"",service:"iam",resource:"role",resourceName:config.precreatedRoleName})),config.preventSynthesis||(this.role=new cfn_resource_1.CfnResource(this,"Role",{type:"AWS::IAM::Role",properties:{AssumeRolePolicyDocument:{Version:"2012-10-17",Statement:assumeRolePolicyDoc},ManagedPolicyArns:[{"Fn::Sub":managedPolicyArn}],Policies:lazy_1.Lazy.any({produce:()=>this.renderPolicies()})}}),this.roleArn=token_1.Token.asString(this.role.getAtt("Arn")));const timeout=props.timeout??duration_1.Duration.minutes(15),memory=props.memorySize??size_1.Size.mebibytes(128),handler=new cfn_resource_1.CfnResource(this,"Handler",{type:"AWS::Lambda::Function",properties:{Code:code,Timeout:timeout.toSeconds(),MemorySize:memory.toMebibytes(),Handler:codeHandler,Role:this.roleArn,Runtime:props.runtimeName,Environment:this.renderEnvironmentVariables(props.environment),Description:props.description??void 0}});this.role&&handler.addDependency(this.role),metadata&&Object.entries(metadata).forEach(([k,v])=>handler.addMetadata(k,v)),this.serviceToken=token_1.Token.asString(handler.getAtt("Arn"))}addToRolePolicy(statement){this.policyStatements||(this.policyStatements=[]),this.policyStatements.push(statement)}renderPolicies(){return this.policyStatements?[{PolicyName:"Inline",PolicyDocument:{Version:"2012-10-17",Statement:this.policyStatements}}]:void 0}renderEnvironmentVariables(env){if(!env||Object.keys(env).length===0)return;env={...env},env.AWS_STS_REGIONAL_ENDPOINTS="regional";const variables={},keys=Object.keys(env).sort();for(const key of keys)variables[key]=env[key];return{Variables:variables}}createCodePropAndMetadata(props,stack){let codeHandler="index.handler";if(!this.node.tryGetContext(shared_1.INLINE_CUSTOM_RESOURCE_CONTEXT)){const stagingDirectory=fs_1.FileSystem.mkdtemp("cdk-custom-resource");fs.copySync(props.codeDirectory,stagingDirectory,{filter:(src,_dest)=>!src.endsWith(".ts")}),(props.useCfnResponseWrapper??!0)&&(fs.copyFileSync(ENTRYPOINT_NODEJS_SOURCE,path.join(stagingDirectory,`${ENTRYPOINT_FILENAME}.js`)),codeHandler=`${ENTRYPOINT_FILENAME}.handler`);const staging=new asset_staging_1.AssetStaging(this,"Staging",{sourcePath:stagingDirectory}),assetFileName=staging.relativeStagedPath(stack),asset=stack.synthesizer.addFileAsset({fileName:assetFileName,sourceHash:staging.assetHash,packaging:assets_1.FileAssetPackaging.ZIP_DIRECTORY});return this._codeHash=staging.assetHash,fs.rmSync(stagingDirectory,{recursive:!0,force:!0}),{code:{S3Bucket:asset.bucketName,S3Key:asset.objectKey},codeHandler,metadata:this.node.tryGetContext(cxapi.ASSET_RESOURCE_METADATA_ENABLED_CONTEXT)?{[cxapi.ASSET_RESOURCE_METADATA_PATH_KEY]:assetFileName,[cxapi.ASSET_RESOURCE_METADATA_PROPERTY_KEY]:"Code"}:void 0}}return{code:{ZipFile:fs.readFileSync(path.join(props.codeDirectory,"index.js"),"utf-8")},codeHandler}}}exports.CustomResourceProviderBase=CustomResourceProviderBase,_a=JSII_RTTI_SYMBOL_1,CustomResourceProviderBase[_a]={fqn:"aws-cdk-lib.CustomResourceProviderBase",version:"2.178.2"};
