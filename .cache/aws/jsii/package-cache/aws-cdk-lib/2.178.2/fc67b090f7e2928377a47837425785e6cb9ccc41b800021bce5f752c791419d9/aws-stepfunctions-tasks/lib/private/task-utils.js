"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validatePatternSupported=validatePatternSupported,exports.integrationResourceArn=integrationResourceArn,exports.isJsonataExpression=isJsonataExpression,exports.isJsonPathOrJsonataExpression=isJsonPathOrJsonataExpression;var aws_stepfunctions_1=()=>{var tmp=require("../../../aws-stepfunctions");return aws_stepfunctions_1=()=>tmp,tmp},core_1=()=>{var tmp=require("../../../core");return core_1=()=>tmp,tmp};function validatePatternSupported(integrationPattern,supportedPatterns){if(!supportedPatterns.includes(integrationPattern))throw new Error(`Unsupported service integration pattern. Supported Patterns: ${supportedPatterns}. Received: ${integrationPattern}`)}const resourceArnSuffix={[aws_stepfunctions_1().IntegrationPattern.REQUEST_RESPONSE]:"",[aws_stepfunctions_1().IntegrationPattern.RUN_JOB]:".sync",[aws_stepfunctions_1().IntegrationPattern.WAIT_FOR_TASK_TOKEN]:".waitForTaskToken"};function integrationResourceArn(service,api,integrationPattern){if(!service||!api)throw new Error("Both 'service' and 'api' must be provided to build the resource ARN.");return`arn:${core_1().Aws.PARTITION}:states:::${service}:${api}`+(integrationPattern?resourceArnSuffix[integrationPattern]:"")}function isJsonataExpression(value){return/^{%(.*)%}$/.test(value)}function isJsonPathOrJsonataExpression(value){return aws_stepfunctions_1().JsonPath.isEncodedJsonPath(value)||isJsonataExpression(value)}
