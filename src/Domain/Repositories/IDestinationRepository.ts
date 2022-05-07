import {Destination} from "../Model/Destination/Destination";
import {IRepository} from "../../SharedKernel/Core/IRepository";

interface IDestinationRepository extends IRepository<any, any> {
    updateDestination(destination: Destination): Promise<any>
    removeDestination(destination: Destination): Promise<any>
}