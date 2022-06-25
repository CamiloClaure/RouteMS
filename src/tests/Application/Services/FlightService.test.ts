import { createMock } from 'ts-auto-mock';
import { FlightService } from '../../../Application/Services/FlightService';
import { RouteService } from '../../../Application/Services/RouteService';
import { IFlightRepository } from '../../../Domain/Repositories/IFlightRepository';
import { FlightDto } from '../../../Application/Dto/FligthDto';
import { RouteBuilder } from '../../../Domain/Builder/RouteBuilder';
const flightDto = new FlightDto();
flightDto.id = '11';
flightDto.route = 'dsfs';
flightDto.departureDate = new Date();
flightDto.arrivalDate = new Date();

const routeModel = new RouteBuilder().setName('CBBA').build();

const routeService = createMock<RouteService>();
routeService.getRouteFromRouteName = (param) => {
  return Promise.resolve({ result: routeModel });
};
const flightRepository = createMock<IFlightRepository>();
flightRepository.createFlight = (param) => {
  return Promise.resolve('11');
};

const flightService = new FlightService(flightRepository, routeService);

describe('Flight Service', () => {
  test('Creates a flight', () => {
    expect(flightService.createFlight(flightDto)).resolves.toEqual('11');
  });
  test('Creates a flight', () => {
    expect(flightService.getCodeFromAirport()).toEqual('this is a code');
  });
});
