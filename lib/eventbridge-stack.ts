import * as cdk from 'aws-cdk-lib';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import { Construct } from 'constructs';

export class EventBridgeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bus = new events.EventBus(this, 'MovingCompanyBus', {
      eventBusName: 'MovingCompanyEventBus',
    });

    const moveRegisteredRule = new events.Rule(this, 'MoveRegisteredRule', {
      eventBus: bus,
      eventPattern: {
        detailType: ['MoveRegistered'],
      },
    });

    moveRegisteredRule.addTarget(
      new targets.LambdaFunction(/* Target Lambda Function */)
    );
  }
}