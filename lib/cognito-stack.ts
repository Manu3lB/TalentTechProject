import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class CognitoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, 'MovingCompanyUserPool', {
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: 'Verify your email for our Moving Service!',
        emailBody: 'Hello {username}, please verify your email using this code: {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      signInAliases: { email: true },
    });

    const client = userPool.addClient('MovingCompanyClient', {
      authFlows: { userPassword: true, userSrp: true },
    });

    new cdk.CfnOutput(this, 'UserPoolId', { value: userPool.userPoolId });
    new cdk.CfnOutput(this, 'UserPoolClientId', { value: client.userPoolClientId });
  }
}
