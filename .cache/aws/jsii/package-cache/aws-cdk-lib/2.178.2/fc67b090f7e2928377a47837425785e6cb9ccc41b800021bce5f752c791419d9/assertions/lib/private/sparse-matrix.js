"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SparseMatrix=void 0;class SparseMatrix{constructor(){this.matrix=new Map}get(row,col){return this.matrix.get(row)?.get(col)}row(row){return Array.from(this.matrix.get(row)?.entries()??[])}set(row,col,value){let r=this.matrix.get(row);r||(r=new Map,this.matrix.set(row,r)),r.set(col,value)}}exports.SparseMatrix=SparseMatrix;
