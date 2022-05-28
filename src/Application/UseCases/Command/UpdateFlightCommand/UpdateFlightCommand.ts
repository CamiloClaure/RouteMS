import ICommand from '../ICommand';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDFlightFactory';
import { FlightDto } from '../../../Dto/FligthDto';
import { FlightRepository } from '../../../../Infrastructure/ORM/Repository/FlightRepository';

export class UpdateFlightCommand implements ICommand {
  private flight: FlightDto;
  private name = '';

  constructor(flight: FlightDto) {
    this.flight = flight;
  }

  public execute = async () => {
    const crudCommandFactory = new CRUDCommandFactory(new FlightRepository());

    const commandName = 'UpdateFlightHandler';

    const config = {
      commandName,
      args: this.flight,
    };
    const command = crudCommandFactory.makeCommand(config);

    const results = await command.execute();
    console.log(results);
    return results ? { result: results } : { result: false };
  };
}
