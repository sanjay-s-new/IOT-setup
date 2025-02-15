"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrecreatedRole=void 0;var constructs_1=()=>{var tmp=require("constructs");return constructs_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp},helpers_internal_1=()=>{var tmp=require("../../../core/lib/helpers-internal");return helpers_internal_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class PrecreatedRole extends core_1().Resource{constructor(scope,id,props){super(scope,id,{account:props.role.env.account,region:props.role.env.region}),this.grantPrincipal=this,this.policyStatements=[],this.managedPolicies=[],(0,metadata_resource_1().addConstructMetadata)(this,props),this.role=props.role,this.assumeRoleAction=this.role.assumeRoleAction,this.policyFragment=this.role.policyFragment,this.principalAccount=this.role.principalAccount,this.roleArn=this.role.roleArn,this.roleName=this.role.roleName,this.stack=this.role.stack;const rolePath=props.rolePath??this.node.path;constructs_1().Dependable.implement(this,{dependencyRoots:[this.role]}),this.policySynthesizer=helpers_internal_1().PolicySynthesizer.getOrCreate(this),this.policySynthesizer.addRole(rolePath,{roleName:this.roleName,managedPolicies:this.managedPolicies,policyStatements:this.policyStatements,assumeRolePolicy:core_1().Stack.of(this).resolve(props.assumeRolePolicy?.toJSON()?.Statement),missing:props.missing})}attachInlinePolicy(policy){const statements=policy.document.toJSON()?.Statement;statements&&Array.isArray(statements)&&statements.forEach(statement=>{this.policyStatements.push(statement)})}addManagedPolicy(policy){this.managedPolicies.push(policy)}addToPolicy(statement){return this.policyStatements.push(statement.toStatementJson()),!1}addToPrincipalPolicy(statement){return this.addToPolicy(statement),{statementAdded:!0,policyDependable:new(constructs_1()).DependencyGroup}}grant(grantee,...actions){return this.role.grant(grantee,...actions)}grantPassRole(grantee){return this.role.grantPassRole(grantee)}grantAssumeRole(identity){return this.role.grantAssumeRole(identity)}}exports.PrecreatedRole=PrecreatedRole,__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"attachInlinePolicy",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"addManagedPolicy",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"addToPolicy",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"addToPrincipalPolicy",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"grant",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"grantPassRole",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],PrecreatedRole.prototype,"grantAssumeRole",null);
