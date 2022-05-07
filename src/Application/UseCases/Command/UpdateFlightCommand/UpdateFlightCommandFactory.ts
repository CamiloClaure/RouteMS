import ICommandConfig from "../ICommandConfig";
import {UpdateFlightHandler} from "../CRUDCommandHandler/UpdateFlightHandler";
import {UpdateFlightCommand} from "./UpdateFlightCommand";

export class UpdateFlightCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == UpdateFlightCommand.name) {
            return new UpdateFlightCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}