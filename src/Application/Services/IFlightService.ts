import { Flight } from '../../Domain/Model/Flight/Flight';
import { FlightDto } from '../Dto/FligthDto';

export interface IFlightService {
	getCodeFromAirport(): string;
	createFlight(flight: FlightDto): Promise<string>;
}
