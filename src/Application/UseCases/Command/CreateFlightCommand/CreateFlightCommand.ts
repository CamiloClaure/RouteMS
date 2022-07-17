import ICommand from '../ICommand';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDFlightFactory';
import { FlightDto } from '../../../Dto/FligthDto';
import { Injectable } from '@nestjs/common';

Injectable();
export class CreateFlightCommand implements ICommand {
	private readonly flight: FlightDto;
	private name = '';

	constructor(flight: FlightDto, private readonly crudCommandFactory: CRUDCommandFactory<any>) {
		this.flight = flight;
	}

	public execute = async () => {
		console.log('creating command');

		const commandName = 'CreateFlightHandler';

		const config = {
			commandName,
			args: this.flight,
		};
		const flightId = await this.crudCommandFactory.makeCommand(config).execute();
		return { result: flightId };
	};
}
