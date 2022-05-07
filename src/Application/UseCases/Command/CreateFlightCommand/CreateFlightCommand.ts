import ICommand from "../ICommand";
import {Flight} from "../../../Dto/FligthDto";
import {CreateFlightCommandFactory} from "./CreateFlightCommandFactory";
import {CRUDCommandFactory} from "../CreateCommandQuery/CRUDFlightFactory";
export class CreateFlightCommand implements ICommand {
    private flight:Flight;
    private name: string = "";

    constructor(flight:Flight) {
        this.flight = flight
    }

    public execute = () => {
        const crudCommandFactory = new CRUDCommandFactory()

        // const commandName = DomainGameCommands.CreateGame.name
        const commandName = "CreateCommand"

        const config = {
            commandName,
            args: "CreateFlight"
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = command.execute()

        return results.status ?
            { status: true } :
            { status: false }
    }
}