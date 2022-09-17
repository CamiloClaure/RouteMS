import { IFlightService } from './IFlightService';
import { Injectable } from '@nestjs/common';
import { FlightDto } from '../Dto/FligthDto';
import { FlightBuilder } from '../../Domain/Builder/FlightBuilder';
import { RouteService } from './RouteService';
import { FlightRepository } from '../../Infrastructure/ORM/Repository/FlightRepository';
import * as amqplib from 'amqplib';

@Injectable()
export class FlightService implements IFlightService {
	flightRepository: FlightRepository;
	routeService: RouteService;

	constructor(flightRepository: FlightRepository, routeService: RouteService) {
		this.flightRepository = flightRepository;
		this.routeService = routeService;
	}

	getCodeFromAirport(): string {
		return 'this is a code';
	}

	async rabbitMQStuff(data: string): Promise<void> {
		try {
			const msg = { test: "testing" }
			const connection = await amqplib.connect('amqp://guest:guest@20.169.83.87:5672');
			const channel = await connection.createChannel();
			const result = await channel.assertQueue("vuelo-creado");
			channel.sendToQueue("vuelo-creado", Buffer.from(JSON.stringify({ TestingRequest: { test: "testing" } })))
			console.log("job sent successfully");
		}
		catch (e){
			console.error(e)
		}
	}
	async createFlight(flight: FlightDto): Promise<string> {
		const route = (await this.routeService.getRouteFromRouteName(flight.route)).result;
		const flightModel = new FlightBuilder()
			.setArrivalDate(flight.arrivalDate)
			.setDepartureDate(flight.departureDate)
			.setRoute(route)
			.build();
		flightModel.consolidateFlight();
		const createdFlight = await this.flightRepository.createFlight(flightModel);
		this.rabbitMQStuff(createdFlight);
		return createdFlight
	}


}
