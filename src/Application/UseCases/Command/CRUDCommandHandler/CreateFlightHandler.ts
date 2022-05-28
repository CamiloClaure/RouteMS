import { FlightRepository } from '../../../../Infrastructure/ORM/Repository/FlightRepository';
import { FlightDto } from '../../../Dto/FligthDto';
import { FlightBuilder } from '../../../../Domain/Builder/FlightBuilder';
import { RouteQueryHandlerFactory } from '../../Queries/GetRouteFromRouteNameQuery/RouteQueryHandlerFactory';
import { RouteDto } from '../../../Dto/RouteDto';
import { IFlightRepository } from '../../../../Domain/Repositories/IFlightRepository';

export class CreateFlightHandler<ICommand> {
  private flight: FlightDto;
  private flightRepository: IFlightRepository;

  constructor(flight: FlightDto, flightRepository: IFlightRepository) {
    this.flight = flight;
    this.flightRepository = flightRepository;
  }

  public execute = async () => {
    const routeQueryHandler = new RouteQueryHandlerFactory();
    const queryName = 'GetRouteByRouteNameQuery';
    const routeDto = new RouteDto();
    routeDto.name = this.flight.route;
    const queryConfig = {
      queryName,
      args: routeDto,
    };
    const query = routeQueryHandler.makeQuery(queryConfig);
    const routeModel = await query.execute();
    const flightBuilder = new FlightBuilder();
    const flightModel = flightBuilder
      .setArrivalDate(this.flight.arrivalDate)
      .setDepartureDate(this.flight.departureDate)
      .setRoute(routeModel.result)
      .build();
    flightModel.consolidateFlight();
    const flightId = await this.flightRepository.createFlight(flightModel);

    return { flightId };
  };
}
