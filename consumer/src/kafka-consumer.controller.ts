import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, KafkaContext } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  @MessagePattern('topic_armyost') // Replace with your Kafka topic name
  async handleMyTopicMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    console.log(`Received message`, message);
    // Process the message here
  }

  // You can add more @MessagePattern decorators for other topics
//   @MessagePattern('another-topic')
//   async handleAnotherTopicMessage(@Payload() data: any) {
//     console.log('Received message from another-topic:', data);
//   }
}