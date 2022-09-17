import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as amqplib from "amqplib";
import { createConnection } from "typeorm";
import * as fs from "fs";
import { Logger } from "@nestjs/common";

async function rabbitMQStuff(): Promise<void> {
	try {
		const connection = await amqplib.connect('amqp://guest:123456@143.244.148.116:5672');
		const channel = await connection.createChannel();
		const result = await channel.assertQueue("vuelo-creado");
		channel.consume("vuelo-creado", message => {
			const input = JSON.parse(message.content.toString())
			console.log(input);
		})
	}
	catch (e){
		console.error(e)
	}
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3001);
}
bootstrap();
