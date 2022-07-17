import { IFlightService } from './IFlightService';
import { Injectable } from '@nestjs/common';
import { FlightDto } from '../Dto/FligthDto';
import { FlightBuilder } from '../../Domain/Builder/FlightBuilder';
import { RouteService } from './RouteService';
import { FlightRepository } from '../../Infrastructure/ORM/Repository/FlightRepository';

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

	async createFlight(flight: FlightDto): Promise<string> {
		const route = (await this.routeService.getRouteFromRouteName(flight.route)).result;
		const flightModel = new FlightBuilder()
			.setArrivalDate(flight.arrivalDate)
			.setDepartureDate(flight.departureDate)
			.setRoute(route)
			.build();
		flightModel.consolidateFlight();
		return this.flightRepository.createFlight(flightModel);
	}
}
