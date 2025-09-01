import { Controller, Post, Body } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service';

@Controller('messages')
export class AppController {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  @Post('send')
  async sendMessageToKafka(@Body() message: any) {
    const topic = 'topic_armyost'; // Your target Kafka topic
    await this.kafkaProducerService.sendMessage(topic, message);
    return { status: 'Message sent to Kafka' };
  }
}