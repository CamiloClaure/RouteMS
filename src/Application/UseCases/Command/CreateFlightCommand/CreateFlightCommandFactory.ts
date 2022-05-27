import { CreateFlightCommand } from './CreateFlightCommand';
import ICommandConfig from '../ICommandConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateFlightCommandFactory<ICommandFactory> {
  makeCommand = (config: ICommandConfig) => {
    console.log("making command");
    if (config.commandName == CreateFlightCommand.name) {
      return new CreateFlightCommand(config.args);
    } else {
      throw new Error('Command not found!');
    }
  };
}
