import { FlightDto } from '../../../../../Application/Dto/FligthDto';
import { CreateFlightCommandFactory } from '../../../../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { CreateFlightCommand } from '../../../../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommand';
import { createMock } from 'ts-auto-mock';
import { FlightService } from '../../../../../Application/Services/FlightService';
const flightDto = new FlightDto();
flightDto.id = '11';
flightDto.route = 'dsfs';
flightDto.departureDate = new Date();
flightDto.arrivalDate = new Date();
const commandConfig = {
  commandName: 'CreateFlightCommand',
  args: { flightDto },
};
const flightService = createMock<FlightService>();
flightService.createFlight = (param) => {
  return Promise.resolve('11');
};

const createFlightCommandFactory = new CreateFlightCommandFactory(
  flightService,
);

describe('Creates a flight', () => {
  test('Should be a createFlightCommand', () => {
    const command = createFlightCommandFactory.makeCommand(commandConfig);
    expect(command).toBeInstanceOf(CreateFlightCommand);
  });
});
