"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeCodePipelineOutput=makeCodePipelineOutput,exports.namespaceStepOutputs=namespaceStepOutputs,exports.namespaceName=namespaceName;var helpers_internal_1=()=>{var tmp=require("../../helpers-internal");return helpers_internal_1=()=>tmp,tmp};const CODEPIPELINE_ENGINE_NAME="codepipeline";function makeCodePipelineOutput(step,variableName){return new(helpers_internal_1()).StepOutput(step,CODEPIPELINE_ENGINE_NAME,variableName).toString()}function namespaceStepOutputs(step,stage,name){let ret;for(const output of helpers_internal_1().StepOutput.producedStepOutputs(step)){if(ret=namespaceName(stage,name),output.engineName!==CODEPIPELINE_ENGINE_NAME)throw new Error(`Found unrecognized output type: ${output.engineName}`);if(typeof output.engineSpecificInformation!="string")throw new Error(`CodePipeline requires that 'engineSpecificInformation' is a string, got: ${JSON.stringify(output.engineSpecificInformation)}`);output.defineResolution(`#{${ret}.${output.engineSpecificInformation}}`)}return ret}function namespaceName(stage,name){return`${stage.stageName}/${name}`.replace(/[^a-zA-Z0-9@_-]/g,"@")}
