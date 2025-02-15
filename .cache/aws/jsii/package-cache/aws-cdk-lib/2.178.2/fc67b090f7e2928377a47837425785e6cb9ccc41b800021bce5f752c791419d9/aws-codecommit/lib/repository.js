"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.RepositoryNotificationEvents=exports.RepositoryEventTrigger=exports.Repository=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var codecommit_generated_1=()=>{var tmp=require("./codecommit.generated");return codecommit_generated_1=()=>tmp,tmp},notifications=()=>{var tmp=require("../../aws-codestarnotifications");return notifications=()=>tmp,tmp},events=()=>{var tmp=require("../../aws-events");return events=()=>tmp,tmp},iam=()=>{var tmp=require("../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class RepositoryBase extends core_1().Resource{onEvent(id,options={}){const rule=new(events()).Rule(this,id,options);return rule.addEventPattern({source:["aws.codecommit"],resources:[this.repositoryArn]}),rule.addTarget(options.target),rule}onStateChange(id,options={}){const rule=this.onEvent(id,options);return rule.addEventPattern({detailType:["CodeCommit Repository State Change"]}),rule}onReferenceCreated(id,options={}){const rule=this.onStateChange(id,options);return rule.addEventPattern({detail:{event:["referenceCreated"]}}),rule}onReferenceUpdated(id,options={}){const rule=this.onStateChange(id,options);return rule.addEventPattern({detail:{event:["referenceCreated","referenceUpdated"]}}),rule}onReferenceDeleted(id,options={}){const rule=this.onStateChange(id,options);return rule.addEventPattern({detail:{event:["referenceDeleted"]}}),rule}onPullRequestStateChange(id,options={}){const rule=this.onEvent(id,options);return rule.addEventPattern({detailType:["CodeCommit Pull Request State Change"]}),rule}onCommentOnPullRequest(id,options={}){const rule=this.onEvent(id,options);return rule.addEventPattern({detailType:["CodeCommit Comment on Pull Request"]}),rule}onCommentOnCommit(id,options={}){const rule=this.onEvent(id,options);return rule.addEventPattern({detailType:["CodeCommit Comment on Commit"]}),rule}onCommit(id,options={}){const rule=this.onReferenceUpdated(id,options);return options.branches&&rule.addEventPattern({detail:{referenceName:options.branches}}),rule}grant(grantee,...actions){return iam().Grant.addToPrincipal({grantee,actions,resourceArns:[this.repositoryArn]})}grantPull(grantee){return this.grant(grantee,"codecommit:GitPull")}grantPullPush(grantee){return this.grantPull(grantee),this.grant(grantee,"codecommit:GitPush")}grantRead(grantee){return this.grantPull(grantee),this.grant(grantee,"codecommit:EvaluatePullRequestApprovalRules","codecommit:Get*","codecommit:Describe*")}notifyOn(id,target,options){return new(notifications()).NotificationRule(this,id,{...options,source:this,targets:[target]})}notifyOnPullRequestComment(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.PULL_REQUEST_COMMENT]})}notifyOnApprovalStatusChanged(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.APPROVAL_STATUS_CHANGED]})}notifyOnApprovalRuleOverridden(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.APPROVAL_RULE_OVERRIDDEN]})}notifyOnPullRequestCreated(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.PULL_REQUEST_CREATED]})}notifiyOnPullRequestMerged(id,target,options){return this.notifyOnPullRequestMerged(id,target,options)}notifyOnPullRequestMerged(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.PULL_REQUEST_MERGED]})}notifyOnBranchOrTagCreated(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.BRANCH_OR_TAG_CREATED]})}notifyOnBranchOrTagDeleted(id,target,options){return this.notifyOn(id,target,{...options,events:[RepositoryNotificationEvents.BRANCH_OR_TAG_DELETED]})}bindAsNotificationRuleSource(_scope){return{sourceArn:this.repositoryArn}}}class Repository extends RepositoryBase{static fromRepositoryArn(scope,id,repositoryArn){const stack=core_1().Stack.of(scope),arn=stack.splitArn(repositoryArn,core_1().ArnFormat.NO_RESOURCE_NAME),repositoryName=arn.resource,region=arn.region;class Import extends RepositoryBase{constructor(){super(...arguments),this.repositoryArn=repositoryArn,this.repositoryName=repositoryName,this.repositoryCloneUrlHttp=makeCloneUrl(stack,repositoryName,"https",region),this.repositoryCloneUrlSsh=makeCloneUrl(stack,repositoryName,"ssh",region),this.repositoryCloneUrlGrc=makeCloneUrl(stack,repositoryName,"grc",region)}}return new Import(scope,id,{account:arn.account,region})}static fromRepositoryName(scope,id,repositoryName){const stack=core_1().Stack.of(scope);class Import extends RepositoryBase{constructor(){super(...arguments),this.repositoryName=repositoryName,this.repositoryArn=core_1().Stack.of(scope).formatArn({service:"codecommit",resource:repositoryName}),this.repositoryCloneUrlHttp=makeCloneUrl(stack,repositoryName,"https"),this.repositoryCloneUrlSsh=makeCloneUrl(stack,repositoryName,"ssh"),this.repositoryCloneUrlGrc=makeCloneUrl(stack,repositoryName,"grc")}}return new Import(scope,id)}constructor(scope,id,props){super(scope,id,{physicalName:props.repositoryName}),this.triggers=new Array;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codecommit_RepositoryProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,Repository),error}(0,metadata_resource_1().addConstructMetadata)(this,props);const repository=new(codecommit_generated_1()).CfnRepository(this,"Resource",{repositoryName:props.repositoryName,repositoryDescription:props.description,triggers:core_1().Lazy.any({produce:()=>this.triggers},{omitEmptyArray:!0}),code:props.code?.bind(this)?.code,kmsKeyId:props.kmsKey?.keyArn});this.repositoryName=this.getResourceNameAttribute(repository.attrName),this.repositoryArn=this.getResourceArnAttribute(repository.attrArn,{service:"codecommit",resource:this.physicalName}),this.repositoryCloneUrlHttp=repository.attrCloneUrlHttp,this.repositoryCloneUrlSsh=repository.attrCloneUrlSsh,this.repositoryCloneUrlGrc=makeCloneUrl(core_1().Stack.of(this),this.repositoryName,"grc")}notify(arn,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_codecommit_RepositoryTriggerOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.notify),error}let evt=options&&options.events;evt&&evt.length>1&&evt.indexOf(RepositoryEventTrigger.ALL)>-1&&(evt=[RepositoryEventTrigger.ALL]);const customData=options&&options.customData,branches=options&&options.branches;let name=options&&options.name;if(name||(name=this.node.path+"/"+arn),this.triggers.find(prop=>prop.name===name))throw new Error(`Unable to set repository trigger named ${name} because trigger names must be unique`);return this.triggers.push({destinationArn:arn,name,customData,branches,events:evt||[RepositoryEventTrigger.ALL]}),this}}exports.Repository=Repository,_a=JSII_RTTI_SYMBOL_1,Repository[_a]={fqn:"aws-cdk-lib.aws_codecommit.Repository",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],Repository.prototype,"notify",null);var RepositoryEventTrigger;(function(RepositoryEventTrigger2){RepositoryEventTrigger2.ALL="all",RepositoryEventTrigger2.UPDATE_REF="updateReference",RepositoryEventTrigger2.CREATE_REF="createReference",RepositoryEventTrigger2.DELETE_REF="deleteReference"})(RepositoryEventTrigger||(exports.RepositoryEventTrigger=RepositoryEventTrigger={}));function makeCloneUrl(stack,repositoryName,protocol,region){switch(protocol){case"https":case"ssh":return`${protocol}://git-codecommit.${region??stack.region}.${stack.urlSuffix}/v1/repos/${repositoryName}`;case"grc":return`codecommit::${region??stack.region}://${repositoryName}`}}var RepositoryNotificationEvents;(function(RepositoryNotificationEvents2){RepositoryNotificationEvents2.COMMIT_COMMENT="codecommit-repository-comments-on-commits",RepositoryNotificationEvents2.PULL_REQUEST_COMMENT="codecommit-repository-comments-on-pull-requests",RepositoryNotificationEvents2.APPROVAL_STATUS_CHANGED="codecommit-repository-approvals-status-changed",RepositoryNotificationEvents2.APPROVAL_RULE_OVERRIDDEN="codecommit-repository-approvals-rule-override",RepositoryNotificationEvents2.PULL_REQUEST_CREATED="codecommit-repository-pull-request-created",RepositoryNotificationEvents2.PULL_REQUEST_SOURCE_UPDATED="codecommit-repository-pull-request-source-updated",RepositoryNotificationEvents2.PULL_REQUEST_STATUS_CHANGED="codecommit-repository-pull-request-status-changed",RepositoryNotificationEvents2.PULL_REQUEST_MERGED="codecommit-repository-pull-request-merged",RepositoryNotificationEvents2.BRANCH_OR_TAG_CREATED="codecommit-repository-branches-and-tags-created",RepositoryNotificationEvents2.BRANCH_OR_TAG_DELETED="codecommit-repository-branches-and-tags-deleted",RepositoryNotificationEvents2.BRANCH_OR_TAG_UPDATED="codecommit-repository-branches-and-tags-updated"})(RepositoryNotificationEvents||(exports.RepositoryNotificationEvents=RepositoryNotificationEvents={}));
