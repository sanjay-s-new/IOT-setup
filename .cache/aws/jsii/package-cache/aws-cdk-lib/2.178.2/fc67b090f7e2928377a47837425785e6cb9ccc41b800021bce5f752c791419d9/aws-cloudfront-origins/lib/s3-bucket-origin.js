"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3BucketOrigin=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var cloudfront=()=>{var tmp=require("../../aws-cloudfront");return cloudfront=()=>tmp,tmp},aws_cloudfront_1=()=>{var tmp=require("../../aws-cloudfront");return aws_cloudfront_1=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp};const BUCKET_ACTIONS={READ:[{action:"s3:GetObject"}],LIST:[{action:"s3:ListBucket",needsBucketArn:!0}],WRITE:[{action:"s3:PutObject"}],DELETE:[{action:"s3:DeleteObject"}]},KEY_ACTIONS={READ:["kms:Decrypt"],WRITE:["kms:Encrypt","kms:GenerateDataKey*"]};class S3BucketOrigin extends cloudfront().OriginBase{static withOriginAccessControl(bucket,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_origins_S3BucketOriginWithOACProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.withOriginAccessControl),error}return new S3BucketOriginWithOAC(bucket,props)}static withOriginAccessIdentity(bucket,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_origins_S3BucketOriginWithOAIProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.withOriginAccessIdentity),error}return new S3BucketOriginWithOAI(bucket,props)}static withBucketDefaults(bucket,props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_OriginProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.withBucketDefaults),error}return new class extends S3BucketOrigin{constructor(){super(bucket,{...props})}}}constructor(bucket,props){super(bucket.bucketRegionalDomainName,props);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_s3_IBucket(bucket),jsiiDeprecationWarnings().aws_cdk_lib_aws_cloudfront_origins_S3BucketOriginBaseProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3BucketOrigin),error}}_bind(scope,options){return super.bind(scope,options)}renderS3OriginConfig(){return{originAccessIdentity:""}}}exports.S3BucketOrigin=S3BucketOrigin,_a=JSII_RTTI_SYMBOL_1,S3BucketOrigin[_a]={fqn:"aws-cdk-lib.aws_cloudfront_origins.S3BucketOrigin",version:"2.178.2"};class S3BucketOriginWithOAC extends S3BucketOrigin{constructor(bucket,props){super(bucket,{...props}),this.bucket=bucket,this.originAccessControl=props?.originAccessControl,this.originAccessLevels=props?.originAccessLevels}bind(scope,options){this.originAccessControl||(this.originAccessControl=new(cloudfront()).S3OriginAccessControl(scope,"S3OriginAccessControl"));const distributionId=options.distributionId,accessLevels=new Set(this.originAccessLevels??[cloudfront().AccessLevel.READ]);accessLevels.has(aws_cloudfront_1().AccessLevel.LIST)&&core_1().Annotations.of(scope).addWarningV2("@aws-cdk/aws-cloudfront-origins:listBucketSecurityRisk",`When the origin with AccessLevel.LIST is associated to the default behavior, it is strongly recommended to ensure the distribution's defaultRootObject is specified,
See the "Setting up OAC with LIST permission" section of module's README for more info.`);const bucketPolicyActions=this.getBucketPolicyActions(accessLevels);if(this.grantDistributionAccessToBucket(distributionId,bucketPolicyActions).statementAdded||core_1().Annotations.of(scope).addWarningV2("@aws-cdk/aws-cloudfront-origins:updateImportedBucketPolicyOac",`Cannot update bucket policy of an imported bucket. You will need to update the policy manually instead.
See the "Setting up OAC with imported S3 buckets" section of module's README for more info.`),this.bucket.encryptionKey){const keyPolicyActions=this.getKeyPolicyActions(accessLevels);this.grantDistributionAccessToKey(keyPolicyActions,this.bucket.encryptionKey).statementAdded||core_1().Annotations.of(scope).addWarningV2("@aws-cdk/aws-cloudfront-origins:updateImportedKeyPolicyOac",`Cannot update key policy of an imported key. You will need to update the policy manually instead.
See the "Updating imported key policies" section of the module's README for more info.`)}const originBindConfig=this._bind(scope,options);return{...originBindConfig,originProperty:{...originBindConfig.originProperty,originAccessControlId:this.originAccessControl.originAccessControlId}}}getBucketPolicyActions(accessLevels){return[...accessLevels].flatMap(accessLevel=>BUCKET_ACTIONS[accessLevel]??[])}getKeyPolicyActions(accessLevels){return[...accessLevels].flatMap(accessLevel=>KEY_ACTIONS[accessLevel]??[])}grantDistributionAccessToBucket(distributionId,policyActions){const resources=[this.bucket.arnForObjects("*")];policyActions.some(pa=>pa.needsBucketArn)&&resources.push(this.bucket.bucketArn);const oacBucketPolicyStatement=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,principals:[new(iam()).ServicePrincipal("cloudfront.amazonaws.com")],actions:policyActions.map(pa=>pa.action),resources,conditions:{StringEquals:{"AWS:SourceArn":`arn:${core_1().Aws.PARTITION}:cloudfront::${core_1().Aws.ACCOUNT_ID}:distribution/${distributionId}`}}});return this.bucket.addToResourcePolicy(oacBucketPolicyStatement)}grantDistributionAccessToKey(actions,key){const oacKeyPolicyStatement=new(iam()).PolicyStatement({effect:iam().Effect.ALLOW,principals:[new(iam()).ServicePrincipal("cloudfront.amazonaws.com")],actions,resources:["*"],conditions:{ArnLike:{"AWS:SourceArn":`arn:${core_1().Aws.PARTITION}:cloudfront::${core_1().Aws.ACCOUNT_ID}:distribution/*`}}});return core_1().Annotations.of(key.node.scope).addWarningV2("@aws-cdk/aws-cloudfront-origins:wildcardKeyPolicyForOac",`To avoid a circular dependency between the KMS key, Bucket, and Distribution during the initial deployment, a wildcard is used in the Key policy condition to match all Distribution IDs.
After deploying once, it is strongly recommended to further scope down the policy for best security practices by following the guidance in the "Using OAC for a SSE-KMS encrypted S3 origin" section in the module README.`),key.addToResourcePolicy(oacKeyPolicyStatement)}}class S3BucketOriginWithOAI extends S3BucketOrigin{constructor(bucket,props){super(bucket,{...props}),this.bucket=bucket,this.originAccessIdentity=props?.originAccessIdentity}bind(scope,options){if(!this.originAccessIdentity){const bucketStack=core_1().Stack.of(this.bucket),bucketInDifferentStack=bucketStack!==core_1().Stack.of(scope),oaiScope=bucketInDifferentStack?bucketStack:scope,oaiId=bucketInDifferentStack?`${core_1().Names.uniqueId(scope)}S3Origin`:"S3Origin";this.originAccessIdentity=new(cloudfront()).OriginAccessIdentity(oaiScope,oaiId,{comment:`Identity for ${options.originId}`})}return this.bucket.addToResourcePolicy(new(iam()).PolicyStatement({resources:[this.bucket.arnForObjects("*")],actions:["s3:GetObject"],principals:[this.originAccessIdentity.grantPrincipal]})).statementAdded||core_1().Annotations.of(scope).addWarningV2("@aws-cdk/aws-cloudfront-origins:updateImportedBucketPolicyOai",`Cannot update bucket policy of an imported bucket. You will need to update the policy manually instead.
See the "Setting up OAI with imported S3 buckets (legacy)" section of module's README for more info.`),this._bind(scope,options)}renderS3OriginConfig(){if(!this.originAccessIdentity)throw new Error("Origin access identity cannot be undefined");return{originAccessIdentity:`origin-access-identity/cloudfront/${this.originAccessIdentity.originAccessIdentityId}`}}}
