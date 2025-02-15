"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpsRedirect=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},aws_certificatemanager_1=()=>{var tmp=require("../../aws-certificatemanager");return aws_certificatemanager_1=()=>tmp,tmp},aws_cloudfront_1=()=>{var tmp=require("../../aws-cloudfront");return aws_cloudfront_1=()=>tmp,tmp},aws_route53_1=()=>{var tmp=require("../../aws-route53");return aws_route53_1=()=>tmp,tmp},aws_route53_targets_1=()=>{var tmp=require("../../aws-route53-targets");return aws_route53_targets_1=()=>tmp,tmp},aws_s3_1=()=>{var tmp=require("../../aws-s3");return aws_s3_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../core/lib/errors");return errors_1=()=>tmp,tmp},helpers_internal_1=()=>{var tmp=require("../../core/lib/helpers-internal");return helpers_internal_1=()=>tmp,tmp},cx_api_1=()=>{var tmp=require("../../cx-api");return cx_api_1=()=>tmp,tmp};class HttpsRedirect extends constructs_1().Construct{constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_patterns_HttpsRedirectProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpsRedirect),error}const domainNames=props.recordNames??[props.zone.zoneName];if(props.certificate){const certificateRegion=core_1().Stack.of(this).splitArn(props.certificate.certificateArn,core_1().ArnFormat.SLASH_RESOURCE_NAME).region;if(!core_1().Token.isUnresolved(certificateRegion)&&certificateRegion!=="us-east-1")throw new(errors_1()).ValidationError(`The certificate must be in the us-east-1 region and the certificate you provided is in ${certificateRegion}.`,this)}const redirectCert=props.certificate??this.createCertificate(domainNames,props.zone),redirectBucket=new(aws_s3_1()).Bucket(this,"RedirectBucket",{websiteRedirect:{hostName:props.targetDomain,protocol:aws_s3_1().RedirectProtocol.HTTPS},removalPolicy:core_1().RemovalPolicy.DESTROY,blockPublicAccess:aws_s3_1().BlockPublicAccess.BLOCK_ALL}),redirectDist=new(aws_cloudfront_1()).CloudFrontWebDistribution(this,"RedirectDistribution",{defaultRootObject:"",originConfigs:[{behaviors:[{isDefaultBehavior:!0}],customOriginSource:{domainName:redirectBucket.bucketWebsiteDomainName,originProtocolPolicy:aws_cloudfront_1().OriginProtocolPolicy.HTTP_ONLY}}],viewerCertificate:aws_cloudfront_1().ViewerCertificate.fromAcmCertificate(redirectCert,{aliases:domainNames}),comment:`Redirect to ${props.targetDomain} from ${domainNames.join(", ")}`,priceClass:aws_cloudfront_1().PriceClass.PRICE_CLASS_ALL,viewerProtocolPolicy:aws_cloudfront_1().ViewerProtocolPolicy.REDIRECT_TO_HTTPS});domainNames.forEach(domainName=>{const hash=(0,helpers_internal_1().md5hash)(domainName).slice(0,6),aliasProps={recordName:domainName,zone:props.zone,target:aws_route53_1().RecordTarget.fromAlias(new(aws_route53_targets_1()).CloudFrontTarget(redirectDist))};new(aws_route53_1()).ARecord(this,`RedirectAliasRecord${hash}`,aliasProps),new(aws_route53_1()).AaaaRecord(this,`RedirectAliasRecordSix${hash}`,aliasProps)})}certificateScope(){const stack=core_1().Stack.of(this),parent=stack.node.scope;if(!parent)throw new(errors_1()).ValidationError(`Stack ${stack.stackId} must be created in the scope of an App or Stage`,this);if(core_1().Token.isUnresolved(stack.region))throw new(errors_1()).ValidationError(`When ${cx_api_1().ROUTE53_PATTERNS_USE_CERTIFICATE} is enabled, a region must be defined on the Stack`,this);if(stack.region!=="us-east-1"){const stackId=`certificate-redirect-stack-${stack.node.addr}`;return parent.node.tryFindChild(stackId)??new(core_1()).Stack(parent,stackId,{env:{region:"us-east-1",account:stack.account}})}return this}createCertificate(domainNames,zone){if(core_1().FeatureFlags.of(this).isEnabled(cx_api_1().ROUTE53_PATTERNS_USE_CERTIFICATE)){const id=this.certificateScope()===this?"RedirectCertificate":"RedirectCertificate"+this.node.addr;return new(aws_certificatemanager_1()).Certificate(this.certificateScope(),id,{domainName:domainNames[0],subjectAlternativeNames:domainNames,validation:aws_certificatemanager_1().CertificateValidation.fromDns(zone)})}else return new(aws_certificatemanager_1()).DnsValidatedCertificate(this,"RedirectCertificate",{domainName:domainNames[0],subjectAlternativeNames:domainNames,hostedZone:zone,region:"us-east-1"})}}exports.HttpsRedirect=HttpsRedirect,_a=JSII_RTTI_SYMBOL_1,HttpsRedirect[_a]={fqn:"aws-cdk-lib.aws_route53_patterns.HttpsRedirect",version:"2.178.2"};
