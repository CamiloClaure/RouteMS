import {FlightRepository} from "../../../../Infrastructure/ORM/Repository/FlightRepository";
import {Flight} from "../../../../Domain/Model/Flight/Flight";
import {FlightDto} from "../../../Dto/FligthDto";
import {FlightBuilder} from "../../../../Domain/Builder/FlightBuilder";
import {Route} from "../../../../Domain/Model/Route/Route";
import {RouteBuilder} from "../../../../Domain/Builder/RouteBuilder";
import {RouteDto} from "../../../Dto/RouteDto";
import {RouteRepository} from "../../../../Infrastructure/ORM/Repository/RouteRepository";


export class GetRouteByRouteName<IQuery> {
    private route:RouteDto;

    constructor(route:RouteDto) {
        this.route = route
    }

    public execute = async () => {
        const routeEntity = await new RouteRepository().FindByNameAsync(this.route.name)
        return new RouteBuilder(new Route(routeEntity.id)).setName(routeEntity.name).build()
    }
}
