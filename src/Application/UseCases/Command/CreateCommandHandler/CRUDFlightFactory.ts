import ICommandConfig from "../ICommandConfig";
import {CreateFlightHandler} from "./CreateFlightHandler";


export class CRUDCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateFlightHandler.name) {
            return new CreateFlightHandler(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}