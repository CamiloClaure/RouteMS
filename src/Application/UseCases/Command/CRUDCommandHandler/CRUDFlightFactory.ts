import ICommandConfig from "../ICommandConfig";
import {CreateFlightHandler} from "./CreateFlightHandler";
import {UpdateFlightHandler} from "./UpdateFlightHandler";


export class CRUDCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateFlightHandler.name) {
            return new CreateFlightHandler(config.args)
        } else if (config.commandName == UpdateFlightHandler.name) {
            return new UpdateFlightHandler(config.args)
        }else {
            throw new Error('Command not found!')
        }
    }
}