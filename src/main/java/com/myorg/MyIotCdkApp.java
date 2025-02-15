package com.myorg;

import software.amazon.awscdk.App;
import software.amazon.awscdk.StackProps;

public class MyIotCdkApp {
    public static void main(final String[] args) {
        App app = new App();
        new MyIotCdkStack(app, "MyIotCdkStack", StackProps.builder().build());
        app.synth();
    }
}

