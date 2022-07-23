import ICommandConfig from '../ICommandConfig';
import { CreateFlightHandler } from './CreateFlightHandler';
import { FlightService } from '../../../Services/FlightService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class CRUDCommandFactory<ICommandFactory> {
	constructor(private flightService: FlightService) {}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateFlightHandler.name) {
			return new CreateFlightHandler(config.args, this.flightService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
