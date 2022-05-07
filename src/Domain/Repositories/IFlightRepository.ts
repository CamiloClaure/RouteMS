import {Flight} from "../Model/Flight/Flight";
import {IRepository} from "../../SharedKernel/Core/IRepository";

export interface IFlightRepository extends IRepository<any, any> {
    createFlight(flight: Flight): Promise<any>
    updateFlight(flight: Flight): Promise<any>
    removeFlight(flight: Flight): Promise<any>
}