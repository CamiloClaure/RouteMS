import { FlightDto } from '../Dto/FligthDto';

export interface IFlightService {
	getCodeFromAirport(): string;
	createFlight(flight: FlightDto): Promise<string>;
}
