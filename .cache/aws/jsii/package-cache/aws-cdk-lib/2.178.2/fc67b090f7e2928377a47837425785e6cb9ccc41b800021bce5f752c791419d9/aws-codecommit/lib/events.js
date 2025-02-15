"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReferenceEvent=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var events=()=>{var tmp=require("../../aws-events");return events=()=>tmp,tmp};class ReferenceEvent{static get eventType(){return events().EventField.fromPath("$.detail.event")}static get repositoryName(){return events().EventField.fromPath("$.detail.repositoryName")}static get repositoryId(){return events().EventField.fromPath("$.detail.repositoryId")}static get referenceType(){return events().EventField.fromPath("$.detail.referenceType")}static get referenceName(){return events().EventField.fromPath("$.detail.referenceName")}static get referenceFullName(){return events().EventField.fromPath("$.detail.referenceFullName")}static get commitId(){return events().EventField.fromPath("$.detail.commitId")}constructor(){}}exports.ReferenceEvent=ReferenceEvent,_a=JSII_RTTI_SYMBOL_1,ReferenceEvent[_a]={fqn:"aws-cdk-lib.aws_codecommit.ReferenceEvent",version:"2.178.2"};
