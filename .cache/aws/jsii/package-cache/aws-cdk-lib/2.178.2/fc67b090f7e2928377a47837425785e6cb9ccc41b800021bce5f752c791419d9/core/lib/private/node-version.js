"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.patch=exports.minor=exports.major=void 0;var process=()=>{var tmp=require("process");return process=()=>tmp,tmp};const[strMajor,strMinor,strPatch]=process().versions.node.split(".");exports.major=Number(strMajor),exports.minor=Number(strMinor),exports.patch=Number(strPatch);
