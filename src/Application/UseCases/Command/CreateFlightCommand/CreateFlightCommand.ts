import ICommand from "../ICommand";
import {CRUDCommandFactory} from "../CreateCommandHandler/CRUDFlightFactory";
import {FlightDto} from "../../../Dto/FligthDto";
export class CreateFlightCommand implements ICommand {
    private flight:FlightDto;
    private name: string = "";

    constructor(flight:FlightDto) {
        this.flight = flight
    }

    public execute = async () => {
        const crudCommandFactory = new CRUDCommandFactory()

        // const commandName = DomainGameCommands.CreateGame.name
        const commandName = "CreateFlightHandler"

        const config = {
            commandName,
            args: this.flight
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = await command.execute()

        return results.status ?
            { status: true } :
            { status: false }
    }
}