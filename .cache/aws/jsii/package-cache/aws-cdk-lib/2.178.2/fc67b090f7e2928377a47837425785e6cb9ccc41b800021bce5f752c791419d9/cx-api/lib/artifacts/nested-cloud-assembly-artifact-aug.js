"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var nested_cloud_assembly_artifact_1=()=>{var tmp=require("./nested-cloud-assembly-artifact");return nested_cloud_assembly_artifact_1=()=>tmp,tmp},cloud_assembly_1=()=>{var tmp=require("../cloud-assembly");return cloud_assembly_1=()=>tmp,tmp};const cacheSym=Symbol();Object.defineProperty(nested_cloud_assembly_artifact_1().NestedCloudAssemblyArtifact.prototype,"nestedAssembly",{get(){return this[cacheSym]||(this[cacheSym]=new(cloud_assembly_1()).CloudAssembly(this.fullPath)),this[cacheSym]}});
