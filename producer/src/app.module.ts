import { Module } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service';
import { AppController } from './app.controller'; // Example controller

@Module({
  imports: [],
  controllers: [AppController], // Example controller
  providers: [KafkaProducerService],
})
export class AppModule {}