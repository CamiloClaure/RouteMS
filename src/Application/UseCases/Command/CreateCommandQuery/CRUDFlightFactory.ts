import ICommandConfig from "../ICommandConfig";
import {CreateFlight} from "./CreateFlight";


export class CRUDCommandFactory<ICommandFactory> {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateFlight.name) {
            return new CreateFlight(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}