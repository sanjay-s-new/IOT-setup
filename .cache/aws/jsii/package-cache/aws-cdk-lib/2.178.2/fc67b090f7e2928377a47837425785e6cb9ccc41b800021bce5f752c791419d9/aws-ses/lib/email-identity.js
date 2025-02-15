"use strict";var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EmailIdentity=exports.EasyDkimSigningKeyLength=exports.DkimIdentity=exports.MailFromBehaviorOnMxFailure=exports.Identity=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var utils_1=()=>{var tmp=require("./private/utils");return utils_1=()=>tmp,tmp},ses_generated_1=()=>{var tmp=require("./ses.generated");return ses_generated_1=()=>tmp,tmp},aws_iam_1=()=>{var tmp=require("../../aws-iam");return aws_iam_1=()=>tmp,tmp},route53=()=>{var tmp=require("../../aws-route53");return route53=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class Identity{static email(email){return{value:email}}static domain(domain){return{value:domain}}static publicHostedZone(hostedZone){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_route53_IPublicHostedZone(hostedZone)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.publicHostedZone),error}return{value:hostedZone.zoneName,hostedZone}}}exports.Identity=Identity,_a=JSII_RTTI_SYMBOL_1,Identity[_a]={fqn:"aws-cdk-lib.aws_ses.Identity",version:"2.178.2"};var MailFromBehaviorOnMxFailure;(function(MailFromBehaviorOnMxFailure2){MailFromBehaviorOnMxFailure2.USE_DEFAULT_VALUE="USE_DEFAULT_VALUE",MailFromBehaviorOnMxFailure2.REJECT_MESSAGE="REJECT_MESSAGE"})(MailFromBehaviorOnMxFailure||(exports.MailFromBehaviorOnMxFailure=MailFromBehaviorOnMxFailure={}));class DkimIdentity{static easyDkim(signingKeyLength){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_EasyDkimSigningKeyLength(signingKeyLength)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.easyDkim),error}return new EasyDkim(signingKeyLength)}static byoDkim(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_ByoDkimOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.byoDkim),error}return new ByoDkim(options)}}exports.DkimIdentity=DkimIdentity,_b=JSII_RTTI_SYMBOL_1,DkimIdentity[_b]={fqn:"aws-cdk-lib.aws_ses.DkimIdentity",version:"2.178.2"};class EasyDkim extends DkimIdentity{constructor(signingKeyLength){super(),this.signingKeyLength=signingKeyLength}bind(emailIdentity,hostedZone){return hostedZone&&(new(route53()).CfnRecordSet(emailIdentity,"DkimDnsToken1",{hostedZoneId:hostedZone.hostedZoneId,name:core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenName1}),type:"CNAME",resourceRecords:[core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenValue1})],ttl:"1800"}),new(route53()).CfnRecordSet(emailIdentity,"DkimDnsToken2",{hostedZoneId:hostedZone.hostedZoneId,name:core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenName2}),type:"CNAME",resourceRecords:[core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenValue2})],ttl:"1800"}),new(route53()).CfnRecordSet(emailIdentity,"DkimDnsToken3",{hostedZoneId:hostedZone.hostedZoneId,name:core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenName3}),type:"CNAME",resourceRecords:[core_1().Lazy.string({produce:()=>emailIdentity.dkimDnsTokenValue3})],ttl:"1800"})),this.signingKeyLength?{nextSigningKeyLength:this.signingKeyLength}:void 0}}class ByoDkim extends DkimIdentity{constructor(options){super(),this.options=options}bind(emailIdentity,hostedZone){return hostedZone&&this.options.publicKey&&new(route53()).TxtRecord(emailIdentity,"DkimTxt",{zone:hostedZone,recordName:`${this.options.selector}._domainkey`,values:[`p=${this.options.publicKey}`]}),{domainSigningPrivateKey:this.options.privateKey.unsafeUnwrap(),domainSigningSelector:this.options.selector}}}var EasyDkimSigningKeyLength;(function(EasyDkimSigningKeyLength2){EasyDkimSigningKeyLength2.RSA_1024_BIT="RSA_1024_BIT",EasyDkimSigningKeyLength2.RSA_2048_BIT="RSA_2048_BIT"})(EasyDkimSigningKeyLength||(exports.EasyDkimSigningKeyLength=EasyDkimSigningKeyLength={}));class EmailIdentityBase extends core_1().Resource{grant(grantee,...actions){const resourceArns=[this.emailIdentityArn];return aws_iam_1().Grant.addToPrincipal({grantee,actions,resourceArns,scope:this})}grantSendEmail(grantee){return this.grant(grantee,"ses:SendEmail","ses:SendRawEmail")}}class EmailIdentity extends EmailIdentityBase{static fromEmailIdentityName(scope,id,emailIdentityName){class Import extends EmailIdentityBase{constructor(){super(...arguments),this.emailIdentityName=emailIdentityName,this.emailIdentityArn=this.stack.formatArn({service:"ses",resource:"identity",resourceName:this.emailIdentityName})}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id);try{jsiiDeprecationWarnings().aws_cdk_lib_aws_ses_EmailIdentityProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,EmailIdentity),error}(0,metadata_resource_1().addConstructMetadata)(this,props);const dkimIdentity=props.dkimIdentity??DkimIdentity.easyDkim(),identity=new(ses_generated_1()).CfnEmailIdentity(this,"Resource",{emailIdentity:props.identity.value,configurationSetAttributes:(0,utils_1().undefinedIfNoKeys)({configurationSetName:props.configurationSet?.configurationSetName}),dkimAttributes:(0,utils_1().undefinedIfNoKeys)({signingEnabled:props.dkimSigning}),dkimSigningAttributes:dkimIdentity.bind(this,props.identity.hostedZone),feedbackAttributes:(0,utils_1().undefinedIfNoKeys)({emailForwardingEnabled:props.feedbackForwarding}),mailFromAttributes:(0,utils_1().undefinedIfNoKeys)({mailFromDomain:props.mailFromDomain,behaviorOnMxFailure:props.mailFromBehaviorOnMxFailure})});props.mailFromDomain&&props.identity.hostedZone&&(new(route53()).MxRecord(this,"MailFromMxRecord",{zone:props.identity.hostedZone,recordName:props.mailFromDomain,values:[{priority:10,hostName:`feedback-smtp.${core_1().Stack.of(this).region}.amazonses.com`}]}),new(route53()).TxtRecord(this,"MailFromTxtRecord",{zone:props.identity.hostedZone,recordName:props.mailFromDomain,values:["v=spf1 include:amazonses.com ~all"]})),this.emailIdentityName=identity.ref,this.emailIdentityArn=this.stack.formatArn({service:"ses",resource:"identity",resourceName:this.emailIdentityName}),this.dkimDnsTokenName1=identity.attrDkimDnsTokenName1,this.dkimDnsTokenName2=identity.attrDkimDnsTokenName2,this.dkimDnsTokenName3=identity.attrDkimDnsTokenName3,this.dkimDnsTokenValue1=identity.attrDkimDnsTokenValue1,this.dkimDnsTokenValue2=identity.attrDkimDnsTokenValue2,this.dkimDnsTokenValue3=identity.attrDkimDnsTokenValue3,this.dkimRecords=[{name:this.dkimDnsTokenName1,value:this.dkimDnsTokenValue1},{name:this.dkimDnsTokenName2,value:this.dkimDnsTokenValue2},{name:this.dkimDnsTokenName3,value:this.dkimDnsTokenValue3}]}}exports.EmailIdentity=EmailIdentity,_c=JSII_RTTI_SYMBOL_1,EmailIdentity[_c]={fqn:"aws-cdk-lib.aws_ses.EmailIdentity",version:"2.178.2"};
