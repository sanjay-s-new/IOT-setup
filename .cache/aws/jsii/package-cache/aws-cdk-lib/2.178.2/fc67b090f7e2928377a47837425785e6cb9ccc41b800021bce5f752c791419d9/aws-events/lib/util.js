"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeEventPattern=mergeEventPattern,exports.renderEventPattern=renderEventPattern;function mergeEventPattern(dest,src){return dest=dest||{},mergeObject(dest,src),dest;function mergeObject(destObj,srcObj){if(typeof srcObj!="object")throw new Error(`Invalid event pattern '${JSON.stringify(srcObj)}', expecting an object or an array`);for(const field of Object.keys(srcObj)){const srcValue=srcObj[field],destValue=destObj[field];if(srcValue!==void 0){if(typeof srcValue!="object")throw new Error(`Invalid event pattern field { ${field}: ${JSON.stringify(srcValue)} }. All fields must be arrays`);if(destObj[field]===void 0){destObj[field]=srcValue;continue}if(Array.isArray(srcValue)!==Array.isArray(destValue))throw new Error(`Invalid event pattern field ${field}. Type mismatch between existing pattern ${JSON.stringify(destValue)} and added pattern ${JSON.stringify(srcValue)}`);if(Array.isArray(srcValue)){const result=[...destValue,...srcValue],resultJson=result.map(i=>JSON.stringify(i));destObj[field]=result.filter((value,index)=>resultJson.indexOf(JSON.stringify(value))===index);continue}mergeObject(destObj[field],srcValue)}}}}function renderEventPattern(eventPattern){if(Object.keys(eventPattern).length===0)return;const out={};for(let key of Object.keys(eventPattern)){const value=eventPattern[key];key==="detailType"&&(key="detail-type"),out[key]=value}return out}
