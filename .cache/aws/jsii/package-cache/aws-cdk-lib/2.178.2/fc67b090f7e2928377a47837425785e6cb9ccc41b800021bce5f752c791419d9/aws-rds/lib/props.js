"use strict";var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.PerformanceInsightRetention=exports.SnapshotCredentials=exports.Credentials=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class Credentials{static fromGeneratedSecret(username,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_CredentialsBaseOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromGeneratedSecret),error}return{...options,username,usernameAsString:!0}}static fromPassword(username,password){try{jsiiDeprecationWarnings().aws_cdk_lib_SecretValue(password)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromPassword),error}return{username,password,usernameAsString:!0}}static fromUsername(username,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_CredentialsFromUsernameOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromUsername),error}return{...options,username}}static fromSecret(secret,username){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_ISecret(secret)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSecret),error}return{username:username??secret.secretValueFromJson("username").unsafeUnwrap(),password:secret.secretValueFromJson("password"),encryptionKey:secret.encryptionKey,secret}}}exports.Credentials=Credentials,_a=JSII_RTTI_SYMBOL_1,Credentials[_a]={fqn:"aws-cdk-lib.aws_rds.Credentials",version:"2.178.2"};class SnapshotCredentials{static fromGeneratedSecret(username,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_SnapshotCredentialsFromGeneratedPasswordOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromGeneratedSecret),error}return{...options,generatePassword:!0,replaceOnPasswordCriteriaChanges:!0,username}}static fromGeneratedPassword(username,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_rds_SnapshotCredentialsFromGeneratedPasswordOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromGeneratedPassword),error}return{...options,generatePassword:!0,username}}static fromPassword(password){try{jsiiDeprecationWarnings().aws_cdk_lib_SecretValue(password)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromPassword),error}return{generatePassword:!1,password}}static fromSecret(secret){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_secretsmanager_ISecret(secret)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.fromSecret),error}return{generatePassword:!1,password:secret.secretValueFromJson("password"),secret}}}exports.SnapshotCredentials=SnapshotCredentials,_b=JSII_RTTI_SYMBOL_1,SnapshotCredentials[_b]={fqn:"aws-cdk-lib.aws_rds.SnapshotCredentials",version:"2.178.2"};var PerformanceInsightRetention;(function(PerformanceInsightRetention2){PerformanceInsightRetention2[PerformanceInsightRetention2.DEFAULT=7]="DEFAULT",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_1=31]="MONTHS_1",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_2=62]="MONTHS_2",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_3=93]="MONTHS_3",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_4=124]="MONTHS_4",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_5=155]="MONTHS_5",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_6=186]="MONTHS_6",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_7=217]="MONTHS_7",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_8=248]="MONTHS_8",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_9=279]="MONTHS_9",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_10=310]="MONTHS_10",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_11=341]="MONTHS_11",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_12=372]="MONTHS_12",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_13=403]="MONTHS_13",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_14=434]="MONTHS_14",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_15=465]="MONTHS_15",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_16=496]="MONTHS_16",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_17=527]="MONTHS_17",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_18=558]="MONTHS_18",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_19=589]="MONTHS_19",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_20=620]="MONTHS_20",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_21=651]="MONTHS_21",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_22=682]="MONTHS_22",PerformanceInsightRetention2[PerformanceInsightRetention2.MONTHS_23=713]="MONTHS_23",PerformanceInsightRetention2[PerformanceInsightRetention2.LONG_TERM=731]="LONG_TERM"})(PerformanceInsightRetention||(exports.PerformanceInsightRetention=PerformanceInsightRetention={}));
