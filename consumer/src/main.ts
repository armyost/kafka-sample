import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          // clientId: 'ccloud-nodejs-client-9e5ae753-136c-4a34-bcb1-0fdfa8f0d579',
          brokers: ['pkc-921jm.us-east-2.aws.confluent.cloud:9092'], // Replace with your Confluent Kafka broker address(es)
          // Optional: Add SASL/SSL configuration for Confluent Cloud
          sasl: {
            mechanism: 'plain', // or 'scram-sha-256', 'scram-sha-512'
            username: 'XXXXXXXXXXX',
            password: 'XXXXXXXXXXXXXXXXXXXXXXXX',
          },
          ssl: true,
        },
        consumer: {
          groupId: 'armyost-consumer-group', // Unique consumer group ID
        },
      },
    },
  );
  await app.listen();
}
bootstrap();