"use strict";var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.EcsRunTaskBase=void 0;const JSII_RTTI_SYMBOL_1=Symbol.for("jsii.rtti");var ec2=()=>{var tmp=require("../../../aws-ec2");return ec2=()=>tmp,tmp},iam=()=>{var tmp=require("../../../aws-iam");return iam=()=>tmp,tmp},sfn=()=>{var tmp=require("../../../aws-stepfunctions");return sfn=()=>tmp,tmp},cdk=()=>{var tmp=require("../../../core");return cdk=()=>tmp,tmp},resource_arn_suffix_1=()=>{var tmp=require("../resource-arn-suffix");return resource_arn_suffix_1=()=>tmp,tmp};class EcsRunTaskBase{constructor(props){if(this.props=props,this.connections=new(ec2()).Connections,this.integrationPattern=props.integrationPattern||sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,![sfn().ServiceIntegrationPattern.FIRE_AND_FORGET,sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN,sfn().ServiceIntegrationPattern.SYNC].includes(this.integrationPattern))throw new Error(`Invalid Service Integration Pattern: ${this.integrationPattern} is not supported to call ECS.`);if(this.integrationPattern===sfn().ServiceIntegrationPattern.WAIT_FOR_TASK_TOKEN&&!sfn().FieldUtils.containsTaskToken(props.containerOverrides?.map(override=>override.environment)))throw new Error("Task Token is required in at least one `containerOverrides.environment` for callback. Use JsonPath.taskToken to set the token.");for(const override of this.props.containerOverrides||[]){const name=override.containerDefinition.containerName;if(!cdk().Token.isUnresolved(name)&&!this.props.taskDefinition.node.tryFindChild(name))throw new Error(`Overrides mention container with name '${name}', but no such container in task definition`)}}bind(task){return this.networkConfiguration!==void 0&&(this.securityGroup===void 0&&(this.securityGroup=new(ec2()).SecurityGroup(task,"SecurityGroup",{vpc:this.props.cluster.vpc})),this.connections.addSecurityGroup(this.securityGroup)),{resourceArn:(0,resource_arn_suffix_1().getResourceArn)("ecs","runTask",this.integrationPattern),parameters:{Cluster:this.props.cluster.clusterArn,TaskDefinition:this.props.taskDefinition.taskDefinitionArn,NetworkConfiguration:this.networkConfiguration,Overrides:renderOverrides(this.props.containerOverrides),...this.props.parameters},policyStatements:this.makePolicyStatements(task)}}configureAwsVpcNetworking(vpc,assignPublicIp,subnetSelection,securityGroup){subnetSelection===void 0&&(subnetSelection={subnetType:assignPublicIp?ec2().SubnetType.PUBLIC:ec2().SubnetType.PRIVATE_WITH_EGRESS}),this.securityGroup=securityGroup,this.networkConfiguration={AwsvpcConfiguration:{AssignPublicIp:assignPublicIp!==void 0?assignPublicIp?"ENABLED":"DISABLED":void 0,Subnets:vpc.selectSubnets(subnetSelection).subnetIds,SecurityGroups:cdk().Lazy.list({produce:()=>[this.securityGroup.securityGroupId]})}}}makePolicyStatements(task){const stack=cdk().Stack.of(task),policyStatements=[new(iam()).PolicyStatement({actions:["ecs:RunTask"],resources:[this.props.taskDefinition.taskDefinitionArn]}),new(iam()).PolicyStatement({actions:["ecs:StopTask","ecs:DescribeTasks"],resources:["*"]}),new(iam()).PolicyStatement({actions:["iam:PassRole"],resources:cdk().Lazy.list({produce:()=>this.taskExecutionRoles().map(r=>r.roleArn)})})];return this.integrationPattern===sfn().ServiceIntegrationPattern.SYNC&&policyStatements.push(new(iam()).PolicyStatement({actions:["events:PutTargets","events:PutRule","events:DescribeRule"],resources:[stack.formatArn({service:"events",resource:"rule",resourceName:"StepFunctionsGetEventsForECSTaskRule"})]})),policyStatements}taskExecutionRoles(){const ret=new Array;return ret.push(this.props.taskDefinition.taskRole),this.props.taskDefinition.executionRole&&ret.push(this.props.taskDefinition.executionRole),ret}}exports.EcsRunTaskBase=EcsRunTaskBase,_a=JSII_RTTI_SYMBOL_1,EcsRunTaskBase[_a]={fqn:"aws-cdk-lib.aws_stepfunctions_tasks.EcsRunTaskBase",version:"2.178.2"};function renderOverrides(containerOverrides){if(!containerOverrides)return;const ret=new Array;for(const override of containerOverrides)ret.push({Name:override.containerDefinition.containerName,Command:override.command,Cpu:override.cpu,Memory:override.memoryLimit,MemoryReservation:override.memoryReservation,Environment:override.environment&&override.environment.map(e=>({Name:e.name,Value:e.value}))});return{ContainerOverrides:ret}}
