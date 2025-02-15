"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.StreamEventSource=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var s3_onfailuire_destination_1=()=>{var tmp=require("./s3-onfailuire-destination");return s3_onfailuire_destination_1=()=>tmp,tmp};class StreamEventSource{constructor(props){this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_event_sources_StreamEventSourceProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,StreamEventSource),error}if(props.provisionedPollerConfig){const{minimumPollers,maximumPollers}=props.provisionedPollerConfig;if(minimumPollers!=null&&(minimumPollers<1||minimumPollers>200))throw new Error("Minimum provisioned pollers must be between 1 and 200 inclusive");if(maximumPollers!=null&&(maximumPollers<1||maximumPollers>2e3))throw new Error("Maximum provisioned pollers must be between 1 and 2000 inclusive");if(minimumPollers!=null&&maximumPollers!=null&&minimumPollers>maximumPollers)throw new Error("Minimum provisioned pollers must be less than or equal to maximum provisioned pollers")}}enrichMappingOptions(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_lambda_EventSourceMappingOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.enrichMappingOptions),error}if(this.props.onFailure instanceof s3_onfailuire_destination_1().S3OnFailureDestination&&!options.supportS3OnFailureDestination)throw new Error("S3 onFailure Destination is not supported for this event source");return{...options,batchSize:this.props.batchSize||100,bisectBatchOnError:this.props.bisectBatchOnError,startingPosition:this.props.startingPosition,reportBatchItemFailures:this.props.reportBatchItemFailures,maxBatchingWindow:this.props.maxBatchingWindow,maxRecordAge:this.props.maxRecordAge,retryAttempts:this.props.retryAttempts,parallelizationFactor:this.props.parallelizationFactor,onFailure:this.props.onFailure,tumblingWindow:this.props.tumblingWindow,enabled:this.props.enabled,filters:this.props.filters,filterEncryption:this.props.filterEncryption}}}exports.StreamEventSource=StreamEventSource,_a=JSII_RTTI_SYMBOL_1,StreamEventSource[_a]={fqn:"aws-cdk-lib.aws_lambda_event_sources.StreamEventSource",version:"2.178.2"};
