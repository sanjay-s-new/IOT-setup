"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var cw=()=>{var tmp=require("../../aws-cloudwatch");return cw=()=>tmp,tmp},queue_base_1=()=>{var tmp=require("./queue-base");return queue_base_1=()=>tmp,tmp};queue_base_1().QueueBase.prototype.metric=function(metricName,props){return new(cw()).Metric({namespace:"AWS/SQS",metricName,dimensionsMap:{QueueName:this.queueName},...props}).attachTo(this)},queue_base_1().QueueBase.prototype.metricApproximateAgeOfOldestMessage=function(props){return this.metric("ApproximateAgeOfOldestMessage",{statistic:"Maximum",...props})},queue_base_1().QueueBase.prototype.metricApproximateNumberOfMessagesDelayed=function(props){return this.metric("ApproximateNumberOfMessagesDelayed",{statistic:"Maximum",...props})},queue_base_1().QueueBase.prototype.metricApproximateNumberOfMessagesNotVisible=function(props){return this.metric("ApproximateNumberOfMessagesNotVisible",{statistic:"Maximum",...props})},queue_base_1().QueueBase.prototype.metricApproximateNumberOfMessagesVisible=function(props){return this.metric("ApproximateNumberOfMessagesVisible",{statistic:"Maximum",...props})},queue_base_1().QueueBase.prototype.metricNumberOfEmptyReceives=function(props){return this.metric("NumberOfEmptyReceives",{statistic:"Sum",...props})},queue_base_1().QueueBase.prototype.metricNumberOfMessagesDeleted=function(props){return this.metric("NumberOfMessagesDeleted",{statistic:"Sum",...props})},queue_base_1().QueueBase.prototype.metricNumberOfMessagesReceived=function(props){return this.metric("NumberOfMessagesReceived",{statistic:"Sum",...props})},queue_base_1().QueueBase.prototype.metricNumberOfMessagesSent=function(props){return this.metric("NumberOfMessagesSent",{statistic:"Sum",...props})},queue_base_1().QueueBase.prototype.metricSentMessageSize=function(props){return this.metric("SentMessageSize",{statistic:"Average",...props})};
