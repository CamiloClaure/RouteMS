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
    console.log('CreateFlightHandler');
    const routeQueryHandler = new RouteQueryHandlerFactory();
    const queryName = 'GetRouteByRouteNameQuery';
    const routeDto = new RouteDto();
    routeDto.name = this.flight.route;
    const queryConfig = {
      queryName,
      args: routeDto,
    };
    const query = routeQueryHandler.makeQuery(queryConfig);
    console.log(query);
    const routeModel = await query.execute();
    console.log({ routeModel });
    const flightBuilder = new FlightBuilder();
    const flight = flightBuilder
      .setArrivalDate(this.flight.departureDate)
      .setDepartureDate(this.flight.departureDate)
      .setRoute(routeModel.result)
      .build();

    const flightId = await this.flightRepository.createFlight(flight);

    return { flightId };
  };
}
