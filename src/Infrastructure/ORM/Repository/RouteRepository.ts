import {IFlightRepository} from "../../../Domain/Repositories/IFlightRepository";
import {Flight as FlightDomain}  from "../../../Domain/Model/Flight/Flight";
import {Flight}  from "../Entities/Flight";
import {IBussinessRule} from "../../../SharedKernel/Core/IBussinessRule";
import {DomainEvent} from "../../../SharedKernel/Core/DomainEvent";
import {getManager} from "typeorm";
import {IRouteRepository} from "../../../Domain/Repositories/IRouteRepository";
import {Route} from "../../../Domain/Model/Route/Route";

// @ts-ignore
export class RouteRepository implements IRouteRepository{

    CreateAsync(obj: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    FindByIdAsync(id: any): Promise<any> {
        return getManager().getRepository('Route').findOne({
            id: id
        })
    }
    FindByNameAsync(name: any): Promise<any> {
        return getManager().getRepository('Route').findOne({
            name: name
        })
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

    createRoute(route: Route): Promise<any> {
        return Promise.resolve(undefined);
    }

    removeRoute(route: Route): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateRoute(route: Route): Promise<any> {
        return Promise.resolve(undefined);
    }

}