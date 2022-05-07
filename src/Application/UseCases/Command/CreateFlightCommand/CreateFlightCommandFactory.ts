import { CreateFlightCommand } from './CreateFlightCommand'
import ICommandConfig from "../ICommandConfig";

export class CreateFlightCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateFlightCommand.name) {
            return new CreateFlightCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}