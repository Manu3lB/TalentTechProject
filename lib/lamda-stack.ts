import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const authFunction = new lambda.Function(this, 'AuthFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'auth.handler',
      code: lambda.Code.fromAsset('lambda/auth'),
      environment: {
        USER_POOL_ID: 'your-user-pool-id',
        CLIENT_ID: 'your-client-id',
      },
    });

    new cdk.CfnOutput(this, 'AuthFunctionArn', { value: authFunction.functionArn });
  }
}