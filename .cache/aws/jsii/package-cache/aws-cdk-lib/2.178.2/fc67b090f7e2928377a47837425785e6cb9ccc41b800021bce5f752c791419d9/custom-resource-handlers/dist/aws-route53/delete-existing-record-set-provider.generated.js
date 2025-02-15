"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DeleteExistingRecordSetProvider=void 0;const path=require("path"),core_1=require("../../../core");class DeleteExistingRecordSetProvider extends core_1.CustomResourceProviderBase{static getOrCreate(scope,uniqueid,props){return this.getOrCreateProvider(scope,uniqueid,props).serviceToken}static getOrCreateProvider(scope,uniqueid,props){const id=`${uniqueid}CustomResourceProvider`,stack=core_1.Stack.of(scope);return stack.node.tryFindChild(id)??new DeleteExistingRecordSetProvider(stack,id,props)}constructor(scope,id,props){super(scope,id,{...props,codeDirectory:path.join(__dirname,"delete-existing-record-set-handler"),runtimeName:(0,core_1.determineLatestNodeRuntimeName)(scope)}),this.node.addMetadata("aws:cdk:is-custom-resource-handler-customResourceProvider",!0)}}exports.DeleteExistingRecordSetProvider=DeleteExistingRecordSetProvider;
