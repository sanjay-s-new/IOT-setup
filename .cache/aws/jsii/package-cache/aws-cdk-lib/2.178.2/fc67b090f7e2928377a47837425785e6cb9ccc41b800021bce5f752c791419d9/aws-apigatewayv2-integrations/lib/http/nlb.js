"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HttpNlbIntegration=void 0;var jsiiDeprecationWarnings=()=>{var tmp=require("../../../.warnings.jsii.js");return jsiiDeprecationWarnings=()=>tmp,tmp};const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var integration_1=()=>{var tmp=require("./private/integration");return integration_1=()=>tmp,tmp},elbv2=()=>{var tmp=require("../../../aws-elasticloadbalancingv2");return elbv2=()=>tmp,tmp},errors_1=()=>{var tmp=require("../../../core/lib/errors");return errors_1=()=>tmp,tmp};class HttpNlbIntegration extends integration_1().HttpPrivateIntegration{constructor(id,listener,props={}){super(id),this.listener=listener,this.props=props;try{jsiiDeprecationWarnings().aws_cdk_lib_aws_elasticloadbalancingv2_INetworkListener(listener),jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_integrations_HttpNlbIntegrationProps(props)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,HttpNlbIntegration),error}}bind(options){try{jsiiDeprecationWarnings().aws_cdk_lib_aws_apigatewayv2_HttpRouteIntegrationBindOptions(options)}catch(error){throw process.env.JSII_DEBUG!=="1"&&error.name==="DeprecationError"&&Error.captureStackTrace(error,this.bind),error}let vpc=this.props.vpcLink?.vpc;if(!vpc&&this.listener instanceof elbv2().NetworkListener&&(vpc=this.listener.loadBalancer.vpc),!vpc)throw new(errors_1()).ValidationError("The vpcLink property must be specified when using an imported Network Listener.",options.scope);const vpcLink=this._configureVpcLink(options,{vpcLink:this.props.vpcLink,vpc});return{method:this.props.method??this.httpMethod,payloadFormatVersion:this.payloadFormatVersion,type:this.integrationType,connectionType:this.connectionType,connectionId:vpcLink.vpcLinkId,uri:this.listener.listenerArn,secureServerName:this.props.secureServerName,parameterMapping:this.props.parameterMapping,timeout:this.props.timeout}}}exports.HttpNlbIntegration=HttpNlbIntegration,_a=JSII_RTTI_SYMBOL_1,HttpNlbIntegration[_a]={fqn:"aws-cdk-lib.aws_apigatewayv2_integrations.HttpNlbIntegration",version:"2.178.2"};
