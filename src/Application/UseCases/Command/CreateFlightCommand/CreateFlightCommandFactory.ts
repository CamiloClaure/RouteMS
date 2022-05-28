import { CreateFlightCommand } from './CreateFlightCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDFlightFactory';
import { FlightRepository } from '../../../../Infrastructure/ORM/Repository/FlightRepository';

@Injectable()
export class CreateFlightCommandFactory<ICommandFactory> {
  makeCommand = (config: ICommandConfig) => {
    console.log('making command');
    if (config.commandName == CreateFlightCommand.name) {
      return new CreateFlightCommand(
        config.args,
        new CRUDCommandFactory<any>(new FlightRepository()),
      );
    } else {
      throw new Error('Command not found!');
    }
  };
}
