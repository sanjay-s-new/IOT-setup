"use strict";var __decorate=exports&&exports.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},_a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.BackupPlan=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var backup_generated_1=()=>{var tmp=require("./backup.generated");return backup_generated_1=()=>tmp,tmp},rule_1=()=>{var tmp=require("./rule");return rule_1=()=>tmp,tmp},selection_1=()=>{var tmp=require("./selection");return selection_1=()=>tmp,tmp},vault_1=()=>{var tmp=require("./vault");return vault_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../core");return core_1=()=>tmp,tmp},metadata_resource_1=()=>{var tmp=require("../../core/lib/metadata-resource");return metadata_resource_1=()=>tmp,tmp};class BackupPlan extends core_1().Resource{static fromBackupPlanId(scope,id,backupPlanId){class Import extends core_1().Resource{constructor(){super(...arguments),this.backupPlanId=backupPlanId}}return new Import(scope,id)}static daily35DayRetention(scope,id,backupVault){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_IBackupVault(backupVault)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.daily35DayRetention),error}const plan=new BackupPlan(scope,id,{backupVault});return plan.addRule(rule_1().BackupPlanRule.daily()),plan}static dailyMonthly1YearRetention(scope,id,backupVault){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_IBackupVault(backupVault)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dailyMonthly1YearRetention),error}const plan=new BackupPlan(scope,id,{backupVault});return plan.addRule(rule_1().BackupPlanRule.daily()),plan.addRule(rule_1().BackupPlanRule.monthly1Year()),plan}static dailyWeeklyMonthly5YearRetention(scope,id,backupVault){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_IBackupVault(backupVault)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dailyWeeklyMonthly5YearRetention),error}const plan=new BackupPlan(scope,id,{backupVault});return plan.addRule(rule_1().BackupPlanRule.daily()),plan.addRule(rule_1().BackupPlanRule.weekly()),plan.addRule(rule_1().BackupPlanRule.monthly5Year()),plan}static dailyWeeklyMonthly7YearRetention(scope,id,backupVault){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_IBackupVault(backupVault)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.dailyWeeklyMonthly7YearRetention),error}const plan=new BackupPlan(scope,id,{backupVault});return plan.addRule(rule_1().BackupPlanRule.daily()),plan.addRule(rule_1().BackupPlanRule.weekly()),plan.addRule(rule_1().BackupPlanRule.monthly7Year()),plan}constructor(scope,id,props={}){super(scope,id),this.rules=[];try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_BackupPlanProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BackupPlan),error}(0,metadata_resource_1().addConstructMetadata)(this,props);const plan=new(backup_generated_1()).CfnBackupPlan(this,"Resource",{backupPlan:{advancedBackupSettings:this.advancedBackupSettings(props),backupPlanName:props.backupPlanName||id,backupPlanRule:core_1().Lazy.any({produce:()=>this.rules},{omitEmptyArray:!0})}});this.backupPlanId=plan.attrBackupPlanId,this.backupPlanArn=plan.attrBackupPlanArn,this.versionId=plan.attrVersionId,this._backupVault=props.backupVault;for(const rule of props.backupPlanRules||[])this.addRule(rule);this.node.addValidation({validate:()=>this.validatePlan()})}advancedBackupSettings(props){if(props.windowsVss)return[{backupOptions:{WindowsVSS:"enabled"},resourceType:"EC2"}]}addRule(rule){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_BackupPlanRule(rule)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addRule),error}let vault;rule.props.backupVault?vault=rule.props.backupVault:this._backupVault?vault=this._backupVault:(this._backupVault=new(vault_1()).BackupVault(this,"Vault"),vault=this._backupVault),this.rules.push({completionWindowMinutes:rule.props.completionWindow?.toMinutes(),lifecycle:(rule.props.deleteAfter||rule.props.moveToColdStorageAfter)&&{deleteAfterDays:rule.props.deleteAfter?.toDays(),moveToColdStorageAfterDays:rule.props.moveToColdStorageAfter?.toDays()},ruleName:rule.props.ruleName??`${this.node.id}Rule${this.rules.length}`,scheduleExpression:rule.props.scheduleExpression?.expressionString,startWindowMinutes:rule.props.startWindow?.toMinutes(),enableContinuousBackup:rule.props.enableContinuousBackup,targetBackupVault:vault.backupVaultName,copyActions:rule.props.copyActions?.map(this.planCopyActions),recoveryPointTags:rule.props.recoveryPointTags})}planCopyActions(props){return{destinationBackupVaultArn:props.destinationBackupVault.backupVaultArn,lifecycle:(props.deleteAfter||props.moveToColdStorageAfter)&&{deleteAfterDays:props.deleteAfter?.toDays(),moveToColdStorageAfterDays:props.moveToColdStorageAfter?.toDays()}}}get backupVault(){if(!this._backupVault)throw new Error("No backup vault!");return this._backupVault}addSelection(id,options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_backup_BackupSelectionOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.addSelection),error}return new(selection_1()).BackupSelection(this,id,{backupPlan:this,...options})}validatePlan(){return this.rules.length===0?["A backup plan must have at least 1 rule."]:[]}}exports.BackupPlan=BackupPlan,_a=JSII_RTTI_SYMBOL_1,BackupPlan[_a]={fqn:"aws-cdk-lib.aws_backup.BackupPlan",version:"2.178.2"},__decorate([(0,metadata_resource_1().MethodMetadata)()],BackupPlan.prototype,"addRule",null),__decorate([(0,metadata_resource_1().MethodMetadata)()],BackupPlan.prototype,"addSelection",null);
