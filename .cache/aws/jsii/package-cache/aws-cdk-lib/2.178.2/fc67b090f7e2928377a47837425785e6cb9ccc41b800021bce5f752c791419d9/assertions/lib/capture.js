"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Capture=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var _1=()=>{var tmp=require(".");return _1=()=>tmp,tmp},matcher_1=()=>{var tmp=require("./matcher");return matcher_1=()=>tmp,tmp},type_1=()=>{var tmp=require("./private/type");return type_1=()=>tmp,tmp};class Capture extends matcher_1().Matcher{constructor(pattern){super(),this.pattern=pattern,this._captured=[],this.idx=0,this.name="Capture"}test(actual){const result=new(matcher_1()).MatchResult(actual);if(actual==null)return result.recordFailure({matcher:this,path:[],message:`Can only capture non-nullish values. Found ${actual}`});if(this.pattern!==void 0){const innerResult=(matcher_1().Matcher.isMatcher(this.pattern)?this.pattern:_1().Match.objectLike(this.pattern)).test(actual);if(innerResult.hasFailed())return innerResult}return result.recordCapture({capture:this,value:actual}),result}next(){return this.idx<this._captured.length-1?(this.idx++,!0):!1}asString(){this.validate();const val=this._captured[this.idx];if((0,type_1().getType)(val)==="string")return val;this.reportIncorrectType("string")}asNumber(){this.validate();const val=this._captured[this.idx];if((0,type_1().getType)(val)==="number")return val;this.reportIncorrectType("number")}asBoolean(){this.validate();const val=this._captured[this.idx];if((0,type_1().getType)(val)==="boolean")return val;this.reportIncorrectType("boolean")}asArray(){this.validate();const val=this._captured[this.idx];if((0,type_1().getType)(val)==="array")return val;this.reportIncorrectType("array")}asObject(){this.validate();const val=this._captured[this.idx];if((0,type_1().getType)(val)==="object")return val;this.reportIncorrectType("object")}validate(){if(this._captured.length===0)throw new Error("No value captured")}reportIncorrectType(expected){throw new Error(`Captured value is expected to be ${expected} but found ${(0,type_1().getType)(this._captured[this.idx])}. Value is ${JSON.stringify(this._captured[this.idx],void 0,2)}`)}}exports.Capture=Capture,_a=JSII_RTTI_SYMBOL_1,Capture[_a]={fqn:"aws-cdk-lib.assertions.Capture",version:"2.178.2"};
