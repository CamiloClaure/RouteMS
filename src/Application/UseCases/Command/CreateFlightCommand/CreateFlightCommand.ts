import ICommand from '../ICommand';
import { CRUDCommandFactory } from '../CRUDCommandHandler/CRUDFlightFactory';
import { FlightDto } from '../../../Dto/FligthDto';
import { log } from "util";
export class CreateFlightCommand implements ICommand {
  private flight: FlightDto;
  private name: string = '';

  constructor(flight: FlightDto) {
    this.flight = flight;
  }

  public execute = async () => {
    console.log("creating command");
    const crudCommandFactory = new CRUDCommandFactory();

    // const commandName = DomainGameCommands.CreateGame.name
    const commandName = 'CreateFlightHandler';

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
