import {IFlightRepository} from "../../../Domain/Repositories/IFlightRepository";
import {Flight as FlightDomain}  from "../../../Domain/Model/Flight/Flight";
import {Flight}  from "../Entities/Flight";
import {IBussinessRule} from "../../../SharedKernel/Core/IBussinessRule";
import {DomainEvent} from "../../../SharedKernel/Core/DomainEvent";
import {getManager} from "typeorm";
import {Route} from "../Entities/Route";

// @ts-ignore
export class FlightRepository implements IFlightRepository{

    CreateAsync(obj: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    FindByIdAsync(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    createFlight(flightDomain: FlightDomain): Promise<any> {
        // TODO abstraer la conexion cosa que quede funcion tipo new Model("Flight"); model.save(flight)
        // la logica del constructor tiene la instanciacion del repositorio objetivo
        let flight = new Flight()
        flight.id = flightDomain.id;
        flight.route = new Route(flightDomain.route.id).id;
        flight.arrivalDate = flightDomain.arrivalDate.date;
        flight.departureDate = flightDomain.departureDate.date;
        const status = getManager().getRepository('Flight')
            .save(flight)
            .then(flight => {
                console.log(`flight added success: ${flight.id}`)
                return flight.id
            })
            .catch(err => {
                console.log(`error adding flight: ${err}`)
                return null
            })
        return Promise.resolve(status);

    }

    removeFlight(flight: FlightDomain): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateFlight(flight: FlightDomain): Promise<any> {
        return Promise.resolve(undefined);
    }


    // TODO por que tengo que implementar los metodos de Entity y el proyecto del docente no
    AddDomainEvent(event: DomainEvent): void {
    }

    protected CheckRule(rule: IBussinessRule): void {
    }

    ClearDomainEvents(): void {
    }

    private _domainEvents: DomainEvent[];
    private _id: any;
    // @ts-ignore
    get id(): any {
    }

}