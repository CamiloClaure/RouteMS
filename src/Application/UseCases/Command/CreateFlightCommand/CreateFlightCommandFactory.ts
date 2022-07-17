import { CreateFlightCommand } from './CreateFlightCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDFlightFactory';
import { FlightService } from '../../../Services/FlightService';

@Injectable()
export class CreateFlightCommandFactory<ICommandFactory> {
	private readonly flightService: FlightService;
	constructor(flightService: FlightService) {
		this.flightService = flightService;
	}
	makeCommand = (config: ICommandConfig) => {
		if (config.commandName == CreateFlightCommand.name) {
			return new CreateFlightCommand(config.args, new CRUDCommandFactory<any>(this.flightService));
		} else {
			throw new Error('Command not found!');
		}
	};
}
