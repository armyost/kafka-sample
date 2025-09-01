import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  private readonly kafkaClient: ClientKafka;

  constructor() {
    this.kafkaClient = new ClientKafka({
      client: {
        // clientId: 'ccloud-nodejs-client-9e5ae753-136c-4a34-bcb1-0fdfa8f0d579',
        brokers: ['pkc-921jm.us-east-2.aws.confluent.cloud:9092'], // Replace with your Confluent Kafka broker address(es)
        // Optional: Add SASL/SSL configuration for Confluent Cloud
        sasl: {
          mechanism: 'plain', // or 'scram-sha-256', 'scram-sha-512'
          username: 'XXXXXXXXXXXX',
          password: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        },
        ssl: true,
      },
      producer: {
        allowAutoTopicCreation: false, // Set to false if topics are managed externally
      },
    });
  }

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  async sendMessage(topic: string, message: any): Promise<void> {
    // KafkaJS expects Buffer or string payloads. Stringify objects.
    const payload = JSON.stringify(message); 
    await this.kafkaClient.emit(topic, payload).toPromise(); 
  }
}