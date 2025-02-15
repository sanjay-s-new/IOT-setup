"use strict";var __createBinding=exports&&exports.__createBinding||(Object.create?function(o,m,k,k2){k2===void 0&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable))&&(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){k2===void 0&&(k2=k),o[k2]=m[k]}),__exportStar=exports&&exports.__exportStar||function(m,exports2){for(var p in m)p!=="default"&&!Object.prototype.hasOwnProperty.call(exports2,p)&&__createBinding(exports2,m,p)};Object.defineProperty(exports,"__esModule",{value:!0});var _noFold;exports.AutoScalingGroupRequireImdsv2Aspect=void 0,Object.defineProperty(exports,_noFold="AutoScalingGroupRequireImdsv2Aspect",{enumerable:!0,configurable:!0,get:()=>require("./aspects").AutoScalingGroupRequireImdsv2Aspect}),exports.Monitoring=void 0,Object.defineProperty(exports,_noFold="Monitoring",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").Monitoring}),exports.OnDemandAllocationStrategy=void 0,Object.defineProperty(exports,_noFold="OnDemandAllocationStrategy",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").OnDemandAllocationStrategy}),exports.SpotAllocationStrategy=void 0,Object.defineProperty(exports,_noFold="SpotAllocationStrategy",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").SpotAllocationStrategy}),exports.Signals=void 0,Object.defineProperty(exports,_noFold="Signals",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").Signals}),exports.UpdatePolicy=void 0,Object.defineProperty(exports,_noFold="UpdatePolicy",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").UpdatePolicy}),exports.GroupMetrics=void 0,Object.defineProperty(exports,_noFold="GroupMetrics",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").GroupMetrics}),exports.GroupMetric=void 0,Object.defineProperty(exports,_noFold="GroupMetric",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").GroupMetric}),exports.CapacityDistributionStrategy=void 0,Object.defineProperty(exports,_noFold="CapacityDistributionStrategy",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").CapacityDistributionStrategy}),exports.AutoScalingGroup=void 0,Object.defineProperty(exports,_noFold="AutoScalingGroup",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").AutoScalingGroup}),exports.UpdateType=void 0,Object.defineProperty(exports,_noFold="UpdateType",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").UpdateType}),exports.ScalingEvent=void 0,Object.defineProperty(exports,_noFold="ScalingEvent",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").ScalingEvent}),exports.ScalingEvents=void 0,Object.defineProperty(exports,_noFold="ScalingEvents",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").ScalingEvents}),exports.ScalingProcess=void 0,Object.defineProperty(exports,_noFold="ScalingProcess",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").ScalingProcess}),exports.HealthCheck=void 0,Object.defineProperty(exports,_noFold="HealthCheck",{enumerable:!0,configurable:!0,get:()=>require("./auto-scaling-group").HealthCheck}),exports.Schedule=void 0,Object.defineProperty(exports,_noFold="Schedule",{enumerable:!0,configurable:!0,get:()=>require("./schedule").Schedule}),exports.LifecycleHook=void 0,Object.defineProperty(exports,_noFold="LifecycleHook",{enumerable:!0,configurable:!0,get:()=>require("./lifecycle-hook").LifecycleHook}),exports.DefaultResult=void 0,Object.defineProperty(exports,_noFold="DefaultResult",{enumerable:!0,configurable:!0,get:()=>require("./lifecycle-hook").DefaultResult}),exports.LifecycleTransition=void 0,Object.defineProperty(exports,_noFold="LifecycleTransition",{enumerable:!0,configurable:!0,get:()=>require("./lifecycle-hook").LifecycleTransition}),exports.ScheduledAction=void 0,Object.defineProperty(exports,_noFold="ScheduledAction",{enumerable:!0,configurable:!0,get:()=>require("./scheduled-action").ScheduledAction}),exports.StepScalingAction=void 0,Object.defineProperty(exports,_noFold="StepScalingAction",{enumerable:!0,configurable:!0,get:()=>require("./step-scaling-action").StepScalingAction}),exports.AdjustmentType=void 0,Object.defineProperty(exports,_noFold="AdjustmentType",{enumerable:!0,configurable:!0,get:()=>require("./step-scaling-action").AdjustmentType}),exports.MetricAggregationType=void 0,Object.defineProperty(exports,_noFold="MetricAggregationType",{enumerable:!0,configurable:!0,get:()=>require("./step-scaling-action").MetricAggregationType}),exports.StepScalingPolicy=void 0,Object.defineProperty(exports,_noFold="StepScalingPolicy",{enumerable:!0,configurable:!0,get:()=>require("./step-scaling-policy").StepScalingPolicy}),exports.TargetTrackingScalingPolicy=void 0,Object.defineProperty(exports,_noFold="TargetTrackingScalingPolicy",{enumerable:!0,configurable:!0,get:()=>require("./target-tracking-scaling-policy").TargetTrackingScalingPolicy}),exports.PredefinedMetric=void 0,Object.defineProperty(exports,_noFold="PredefinedMetric",{enumerable:!0,configurable:!0,get:()=>require("./target-tracking-scaling-policy").PredefinedMetric}),exports.TerminationPolicy=void 0,Object.defineProperty(exports,_noFold="TerminationPolicy",{enumerable:!0,configurable:!0,get:()=>require("./termination-policy").TerminationPolicy}),exports.BlockDeviceVolume=void 0,Object.defineProperty(exports,_noFold="BlockDeviceVolume",{enumerable:!0,configurable:!0,get:()=>require("./volume").BlockDeviceVolume}),exports.EbsDeviceVolumeType=void 0,Object.defineProperty(exports,_noFold="EbsDeviceVolumeType",{enumerable:!0,configurable:!0,get:()=>require("./volume").EbsDeviceVolumeType}),exports.WarmPool=void 0,Object.defineProperty(exports,_noFold="WarmPool",{enumerable:!0,configurable:!0,get:()=>require("./warm-pool").WarmPool}),exports.PoolState=void 0,Object.defineProperty(exports,_noFold="PoolState",{enumerable:!0,configurable:!0,get:()=>require("./warm-pool").PoolState}),exports.CfnAutoScalingGroup=void 0,Object.defineProperty(exports,_noFold="CfnAutoScalingGroup",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnAutoScalingGroup}),exports.CfnLaunchConfiguration=void 0,Object.defineProperty(exports,_noFold="CfnLaunchConfiguration",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnLaunchConfiguration}),exports.CfnLifecycleHook=void 0,Object.defineProperty(exports,_noFold="CfnLifecycleHook",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnLifecycleHook}),exports.CfnScalingPolicy=void 0,Object.defineProperty(exports,_noFold="CfnScalingPolicy",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnScalingPolicy}),exports.CfnScheduledAction=void 0,Object.defineProperty(exports,_noFold="CfnScheduledAction",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnScheduledAction}),exports.CfnWarmPool=void 0,Object.defineProperty(exports,_noFold="CfnWarmPool",{enumerable:!0,configurable:!0,get:()=>require("./autoscaling.generated").CfnWarmPool});
