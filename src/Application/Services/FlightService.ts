import { IFlightService } from './IFlightService';

export class FlightService implements IFlightService {
  getCodeFromAirport(): string {
    return 'this is a code';
  }
}
