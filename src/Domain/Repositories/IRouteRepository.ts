import {Flight} from "../Model/Flight/Flight";
import {IRepository} from "../../SharedKernel/Core/IRepository";
import {Route} from "../Model/Route/Route";

export interface IRouteRepository extends IRepository<any, any> {
    createRoute(route: Route): Promise<any>
    updateRoute(route: Route): Promise<any>
    removeRoute(route: Route): Promise<any>
}