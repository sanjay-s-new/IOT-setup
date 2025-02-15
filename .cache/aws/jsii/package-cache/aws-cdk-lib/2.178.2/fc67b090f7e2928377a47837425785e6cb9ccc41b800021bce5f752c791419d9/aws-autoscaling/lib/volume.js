"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EbsDeviceVolumeType=exports.BlockDeviceVolume=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");class BlockDeviceVolume{static ebs(volumeSize,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_EbsDeviceOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.ebs),error}return new this({...options,volumeSize})}static ebsFromSnapshot(snapshotId,options={}){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_EbsDeviceSnapshotOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.ebsFromSnapshot),error}return new this({...options,snapshotId})}static ephemeral(volumeIndex){if(volumeIndex<0)throw new Error(`volumeIndex must be a number starting from 0, got "${volumeIndex}"`);return new this(void 0,`ephemeral${volumeIndex}`)}static noDevice(){return this._NO_DEVICE}constructor(ebsDevice,virtualName){this.ebsDevice=ebsDevice,this.virtualName=virtualName;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_autoscaling_EbsDeviceProps(ebsDevice)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,BlockDeviceVolume),error}}}exports.BlockDeviceVolume=BlockDeviceVolume,_a=JSII_RTTI_SYMBOL_1,BlockDeviceVolume[_a]={fqn:"aws-cdk-lib.aws_autoscaling.BlockDeviceVolume",version:"2.178.2"},BlockDeviceVolume._NO_DEVICE=new BlockDeviceVolume;var EbsDeviceVolumeType;(function(EbsDeviceVolumeType2){EbsDeviceVolumeType2.STANDARD="standard",EbsDeviceVolumeType2.IO1="io1",EbsDeviceVolumeType2.GP2="gp2",EbsDeviceVolumeType2.GP3="gp3",EbsDeviceVolumeType2.ST1="st1",EbsDeviceVolumeType2.SC1="sc1"})(EbsDeviceVolumeType||(exports.EbsDeviceVolumeType=EbsDeviceVolumeType={}));
