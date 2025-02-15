"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.DockerCredentialUsage=exports.DockerCredential=void 0,exports.dockerCredentialsInstallCommands=dockerCredentialsInstallCommands;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var ec2=()=>{var tmp=require("../../aws-ec2");return ec2=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};class DockerCredential{static dockerHub(secret,opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_ISecret(secret),jsiiDeprecationWarnings().aws_cdk_lib_pipelines_ExternalDockerCredentialOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dockerHub),error}return new ExternalDockerCredential("https://index.docker.io/v1/",secret,opts)}static customRegistry(registryDomain,secret,opts={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_ISecret(secret),jsiiDeprecationWarnings().aws_cdk_lib_pipelines_ExternalDockerCredentialOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.customRegistry),error}return new ExternalDockerCredential(registryDomain,secret,opts)}static ecr(repositories,opts){try{jsiiDeprecationWarnings().aws_cdk_lib_pipelines_EcrDockerCredentialOptions(opts)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.ecr),error}return new EcrDockerCredential(repositories,opts??{})}constructor(usages){this.usages=usages}_applicableForUsage(usage){return!this.usages||this.usages.includes(usage)}}exports.DockerCredential=DockerCredential,_a=JSII_RTTI_SYMBOL_1,DockerCredential[_a]={fqn:"aws-cdk-lib.pipelines.DockerCredential",version:"2.178.2"};var DockerCredentialUsage;(function(DockerCredentialUsage2){DockerCredentialUsage2.SYNTH="SYNTH",DockerCredentialUsage2.SELF_UPDATE="SELF_UPDATE",DockerCredentialUsage2.ASSET_PUBLISHING="ASSET_PUBLISHING"})(DockerCredentialUsage||(exports.DockerCredentialUsage=DockerCredentialUsage={}));class ExternalDockerCredential extends DockerCredential{constructor(registryDomain,secret,opts){super(opts.usages),this.registryDomain=registryDomain,this.secret=secret,this.opts=opts}grantRead(grantee,usage){if(!this._applicableForUsage(usage))return;this.opts.assumeRole&&grantee.grantPrincipal.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["sts:AssumeRole"],resources:[this.opts.assumeRole.roleArn]}));const role=this.opts.assumeRole??grantee;this.secret.grantRead(role)}_renderCdkAssetsConfig(){return{[this.registryDomain]:{secretsManagerSecretId:this.secret.secretArn,secretsUsernameField:this.opts.secretUsernameField,secretsPasswordField:this.opts.secretPasswordField,assumeRoleArn:this.opts.assumeRole?.roleArn}}}}class EcrDockerCredential extends DockerCredential{constructor(repositories,opts){if(super(opts.usages),this.repositories=repositories,this.opts=opts,repositories.length===0)throw new Error("must supply at least one `ecr.IRepository` to create an `EcrDockerCredential`");this.registryDomain=core_1().Fn.select(0,core_1().Fn.split("/",repositories[0].repositoryUri))}grantRead(grantee,usage){if(!this._applicableForUsage(usage))return;this.opts.assumeRole&&grantee.grantPrincipal.addToPrincipalPolicy(new(iam()).PolicyStatement({actions:["sts:AssumeRole"],resources:[this.opts.assumeRole.roleArn]}));const role=this.opts.assumeRole??grantee;this.repositories.forEach(repo=>repo.grantPull(role))}_renderCdkAssetsConfig(){return{[this.registryDomain]:{ecrRepository:!0,assumeRoleArn:this.opts.assumeRole?.roleArn}}}}function dockerCredentialsInstallCommands(usage,registries,osType){const relevantRegistries=(registries??[]).filter(reg=>reg._applicableForUsage(usage));if(!relevantRegistries||relevantRegistries.length===0)return[];const cdkAssetsConfigFile={version:"1.0",domainCredentials:relevantRegistries.reduce(function(map,registry){return Object.assign(map,registry._renderCdkAssetsConfig()),map},{})},windowsCommands=["mkdir %USERPROFILE%\\.cdk",`echo '${JSON.stringify(cdkAssetsConfigFile)}' > %USERPROFILE%\\.cdk\\cdk-docker-creds.json`],linuxCommands=["mkdir $HOME/.cdk",`echo '${JSON.stringify(cdkAssetsConfigFile)}' > $HOME/.cdk/cdk-docker-creds.json`];return osType==="both"?[...windowsCommands.map(c=>`!WINDOWS!${c}`),...linuxCommands.map(c=>`!LINUX!${c}`)]:osType===ec2().OperatingSystemType.WINDOWS?windowsCommands:linuxCommands}
