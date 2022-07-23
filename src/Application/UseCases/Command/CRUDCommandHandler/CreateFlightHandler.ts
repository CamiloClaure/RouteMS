import { FlightDto } from '../../../Dto/FligthDto';
import { FlightService } from '../../../Services/FlightService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CreateFlightHandler<ICommand> {
	private readonly flight: FlightDto;
	private flightService: FlightService;

	constructor(flight: FlightDto, flightService: FlightService) {
		this.flight = flight;
		this.flightService = flightService;
	}

	public execute = async () => {
		const flightId = await this.flightService.createFlight(this.flight);
		return { flightId };
	};
}
