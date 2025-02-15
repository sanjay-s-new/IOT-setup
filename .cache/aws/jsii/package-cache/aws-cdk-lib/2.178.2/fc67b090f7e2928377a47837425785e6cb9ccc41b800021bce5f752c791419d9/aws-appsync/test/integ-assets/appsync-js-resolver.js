"use strict";var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var appsync_js_resolver_exports={};__export(appsync_js_resolver_exports,{request:()=>request,response:()=>response});module.exports=__toCommonJS(appsync_js_resolver_exports);var import_utils=require("@aws-appsync/utils");function request(ctx){const id=import_utils.util.autoId(),name=ctx.args.name;return ctx.args.input={id,name},{version:"2018-05-29",operation:"PutItem",key:{id:import_utils.util.dynamodb.toDynamoDB(ctx.args.input.id)},attributeValues:import_utils.util.dynamodb.toMapValues(ctx.args.input)}}function response(ctx){return ctx.result}0&&(module.exports={request,response});
