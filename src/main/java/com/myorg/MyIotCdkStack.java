package com.myorg;

import software.amazon.awscdk.services.lambda.Code;
import software.amazon.awscdk.services.lambda.Function;
import software.amazon.awscdk.services.lambda.Runtime;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.constructs.Construct;

public class MyIotCdkStack extends Stack {
    private final Function lambdaFunction;  // Declare lambdaFunction

    public MyIotCdkStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        this.lambdaFunction = Function.Builder.create(this, "IoTLambdaFunction")
            .runtime(software.amazon.awscdk.services.lambda.Runtime.NODEJS_18_X)  // Fully qualify Runtime
            .handler("index.handler")
            .code(Code.fromAsset("lambda")) 
            .build();
    }
}
