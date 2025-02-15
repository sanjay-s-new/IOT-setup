"use strict";var _a,_b,_c,_d,_e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.S3ManifestItemReader=exports.S3CsvItemReader=exports.CsvHeaders=exports.CsvHeaderLocation=exports.S3JsonItemReader=exports.S3ObjectsItemReader=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var iam=()=>{var tmp=require("../../../../aws-iam");return iam=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../../core");return core_1=()=>tmp,tmp},fields_1=()=>{var tmp=require("../../fields");return fields_1=()=>tmp,tmp};class S3ObjectsItemReader{get bucket(){if(!this._bucket)throw new Error("`bucket` is undefined");return this._bucket}constructor(props){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_S3ObjectsItemReaderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3ObjectsItemReader),error}this._bucket=props.bucket,this.bucketNamePath=props.bucketNamePath,this.prefix=props.prefix,this.maxItems=props.maxItems,this.resource=core_1().Arn.format({region:"",account:"",partition:core_1().Aws.PARTITION,service:"states",resource:"s3",resourceName:"listObjectsV2",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME})}render(){return fields_1().FieldUtils.renderObject({Resource:this.resource,...this.maxItems&&{ReaderConfig:{MaxItems:this.maxItems}},Parameters:{...this._bucket&&{Bucket:this._bucket.bucketName},...this.bucketNamePath&&{Bucket:this.bucketNamePath},...this.prefix&&{Prefix:this.prefix}}})}providePolicyStatements(){return[new(iam()).PolicyStatement({actions:["s3:ListBucket"],resources:[this._bucket?this._bucket.bucketArn:"*"]})]}validateItemReader(){const errors=[];return this._bucket&&this.bucketNamePath?errors.push("Provide either `bucket` or `bucketNamePath`, but not both"):!this._bucket&&!this.bucketNamePath&&errors.push("Provide either `bucket` or `bucketNamePath`"),errors}}exports.S3ObjectsItemReader=S3ObjectsItemReader,_a=JSII_RTTI_SYMBOL_1,S3ObjectsItemReader[_a]={fqn:"aws-cdk-lib.aws_stepfunctions.S3ObjectsItemReader",version:"2.178.2"};class S3FileItemReader{get bucket(){if(!this._bucket)throw new Error("`bucket` is undefined");return this._bucket}constructor(props){this._bucket=props.bucket,this.bucketNamePath=props.bucketNamePath,this.key=props.key,this.maxItems=props.maxItems,this.resource=core_1().Arn.format({region:"",account:"",partition:core_1().Aws.PARTITION,service:"states",resource:"s3",resourceName:"getObject",arnFormat:core_1().ArnFormat.COLON_RESOURCE_NAME})}render(){return fields_1().FieldUtils.renderObject({Resource:this.resource,ReaderConfig:{InputType:this.inputType,...this.maxItems&&{MaxItems:this.maxItems}},Parameters:{...this._bucket&&{Bucket:this._bucket.bucketName},...this.bucketNamePath&&{Bucket:this.bucketNamePath},Key:this.key}})}providePolicyStatements(){if(!this._bucket)return[];const resource=core_1().Arn.format({region:"",account:"",partition:core_1().Aws.PARTITION,service:"s3",resource:this._bucket.bucketName,resourceName:"*"});return[new(iam()).PolicyStatement({actions:["s3:GetObject"],resources:[resource]})]}validateItemReader(){const errors=[];return this._bucket&&this.bucketNamePath?errors.push("Provide either `bucket` or `bucketNamePath`, but not both"):!this._bucket&&!this.bucketNamePath&&errors.push("Provide either `bucket` or `bucketNamePath`"),errors}}class S3JsonItemReader extends S3FileItemReader{constructor(){super(...arguments),this.inputType="JSON"}}exports.S3JsonItemReader=S3JsonItemReader,_b=JSII_RTTI_SYMBOL_1,S3JsonItemReader[_b]={fqn:"aws-cdk-lib.aws_stepfunctions.S3JsonItemReader",version:"2.178.2"};var CsvHeaderLocation;(function(CsvHeaderLocation2){CsvHeaderLocation2.FIRST_ROW="FIRST_ROW",CsvHeaderLocation2.GIVEN="GIVEN"})(CsvHeaderLocation||(exports.CsvHeaderLocation=CsvHeaderLocation={}));class CsvHeaders{static useFirstRow(){return new CsvHeaders(CsvHeaderLocation.FIRST_ROW)}static use(headers){return new CsvHeaders(CsvHeaderLocation.GIVEN,headers)}constructor(headerLocation,headers){this.headerLocation=headerLocation,this.headers=headers}}exports.CsvHeaders=CsvHeaders,_c=JSII_RTTI_SYMBOL_1,CsvHeaders[_c]={fqn:"aws-cdk-lib.aws_stepfunctions.CsvHeaders",version:"2.178.2"};class S3CsvItemReader extends S3FileItemReader{constructor(props){super(props),this.inputType="CSV";try{jsiiDeprecationWarnings().aws_cdk_lib_aws_stepfunctions_S3CsvItemReaderProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,S3CsvItemReader),error}this.csvHeaders=props.csvHeaders??CsvHeaders.useFirstRow()}render(){let rendered=super.render();return rendered.ReaderConfig=fields_1().FieldUtils.renderObject({...rendered.ReaderConfig,CSVHeaderLocation:this.csvHeaders.headerLocation,...this.csvHeaders.headers&&{CSVHeaders:this.csvHeaders.headers}}),rendered}}exports.S3CsvItemReader=S3CsvItemReader,_d=JSII_RTTI_SYMBOL_1,S3CsvItemReader[_d]={fqn:"aws-cdk-lib.aws_stepfunctions.S3CsvItemReader",version:"2.178.2"};class S3ManifestItemReader extends S3FileItemReader{constructor(){super(...arguments),this.inputType="MANIFEST"}}exports.S3ManifestItemReader=S3ManifestItemReader,_e=JSII_RTTI_SYMBOL_1,S3ManifestItemReader[_e]={fqn:"aws-cdk-lib.aws_stepfunctions.S3ManifestItemReader",version:"2.178.2"};
