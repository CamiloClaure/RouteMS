import { FlightRepository } from '../../../../Infrastructure/ORM/Repository/FlightRepository';
import { FlightDto } from '../../../Dto/FligthDto';
import { FlightBuilder } from '../../../../Domain/Builder/FlightBuilder';
import { RouteQueryHandlerFactory } from '../../Queries/GetRouteFromRouteNameQuery/RouteQueryHandlerFactory';
import { RouteDto } from '../../../Dto/RouteDto';

export class UpdateFlightHandler<ICommand> {
  private flight: FlightDto;

  constructor(flight: FlightDto) {
    this.flight = flight;
  }

  public execute = async () => {
    console.log('update');
    return { flightId: '123123131' };
  };
}
