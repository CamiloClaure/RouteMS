import ICommandConfig from '../ICommandConfig';
import { CreateFlightHandler } from './CreateFlightHandler';
import { UpdateFlightHandler } from './UpdateFlightHandler';
import { IFlightRepository } from '../../../../Domain/Repositories/IFlightRepository';

export class CRUDCommandFactory<ICommandFactory> {
  constructor(private flightRepository: IFlightRepository) {
    console.log(flightRepository);
  }
  makeCommand = (config: ICommandConfig) => {
    if (config.commandName == CreateFlightHandler.name) {
      return new CreateFlightHandler(config.args, this.flightRepository);
    } else if (config.commandName == UpdateFlightHandler.name) {
      return new UpdateFlightHandler(config.args);
    } else {
      throw new Error('Command not found!');
    }
  };
}
