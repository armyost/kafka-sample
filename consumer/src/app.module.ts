import { Module } from '@nestjs/common';
import { KafkaConsumerController } from './kafka-consumer.controller';

@Module({
  imports: [],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class AppModule {}
