"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ELBMetrics=void 0;class ELBMetrics{static backendConnectionErrorsSum(dimensions){return{namespace:"AWS/ELB",metricName:"BackendConnectionErrors",dimensionsMap:dimensions,statistic:"Sum"}}static desyncMitigationModeNonCompliantRequestCountSum(dimensions){return{namespace:"AWS/ELB",metricName:"DesyncMitigationMode_NonCompliant_Request_Count",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeBackend2XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_Backend_2XX",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeBackend3XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_Backend_3XX",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeBackend4XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_Backend_4XX",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeBackend5XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_Backend_5XX",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeElb4XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_ELB_4XX",dimensionsMap:dimensions,statistic:"Sum"}}static httpCodeElb5XxSum(dimensions){return{namespace:"AWS/ELB",metricName:"HTTPCode_ELB_5XX",dimensionsMap:dimensions,statistic:"Sum"}}static healthyHostCountAverage(dimensions){return{namespace:"AWS/ELB",metricName:"HealthyHostCount",dimensionsMap:dimensions,statistic:"Average"}}static latencyAverage(dimensions){return{namespace:"AWS/ELB",metricName:"Latency",dimensionsMap:dimensions,statistic:"Average"}}static requestCountSum(dimensions){return{namespace:"AWS/ELB",metricName:"RequestCount",dimensionsMap:dimensions,statistic:"Sum"}}static spilloverCountSum(dimensions){return{namespace:"AWS/ELB",metricName:"SpilloverCount",dimensionsMap:dimensions,statistic:"Sum"}}static surgeQueueLengthAverage(dimensions){return{namespace:"AWS/ELB",metricName:"SurgeQueueLength",dimensionsMap:dimensions,statistic:"Average"}}static unHealthyHostCountAverage(dimensions){return{namespace:"AWS/ELB",metricName:"UnHealthyHostCount",dimensionsMap:dimensions,statistic:"Average"}}}exports.ELBMetrics=ELBMetrics;
