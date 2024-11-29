import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'MovingCompanyApi', {
      restApiName: 'Moving Company Service',
      description: 'API for managing moving services.',
    });

    const movesResource = api.root.addResource('moves');
    movesResource.addMethod('POST'); // Register a move
    movesResource.addMethod('GET'); // Get move status

    const trucksResource = api.root.addResource('trucks');
    trucksResource.addMethod('POST'); // Assign a truck to a move
  }
}