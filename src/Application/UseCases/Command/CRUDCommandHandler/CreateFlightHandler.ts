import {FlightRepository} from "../../../../Infrastructure/ORM/Repository/FlightRepository";
import {FlightDto} from "../../../Dto/FligthDto";
import {FlightBuilder} from "../../../../Domain/Builder/FlightBuilder";
import {RouteQueryHandlerFactory} from "../../Queries/GetRouteFromRouteNameQuery/RouteQueryHandlerFactory";
import {RouteDto} from "../../../Dto/RouteDto";


export class CreateFlightHandler<ICommand> {
    private flight:FlightDto;

    constructor(flight:FlightDto) {
        this.flight = flight
    }

    public execute = async () => {
        const routeQueryHandler = new RouteQueryHandlerFactory()
        const queryName = "GetRouteByRouteNameQuery"
        const routeDto = new RouteDto();
        routeDto.name = this.flight.route
        const queryConfig =  {
            queryName,
            args: routeDto
        }
        const query = routeQueryHandler.makeQuery(queryConfig);
        const routeModel = await query.execute()
        console.log({routeModel})
        const flightRepository = new FlightRepository();

        // TODO inyectar el repository
        // TODO agregar builder para flight
        let flightBuilder = new FlightBuilder()
        let flight = flightBuilder.setArrivalDate(this.flight.departureDate)
            .setDepartureDate(this.flight.departureDate)
            .setRoute(routeModel.result)
            .build()

        const flightId = await flightRepository.createFlight(flight);

        return { flightId }
    }
}
