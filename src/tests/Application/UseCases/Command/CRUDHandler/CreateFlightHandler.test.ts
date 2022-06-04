import { FlightDto } from '../../../../../Application/Dto/FligthDto';
import { CRUDCommandFactory } from '../../../../../Application/UseCases/Command/CRUDCommandHandler/CRUDFlightFactory';
import { CreateFlightHandler } from '../../../../../Application/UseCases/Command/CRUDCommandHandler/CreateFlightHandler';
import { FlightService } from '../../../../../Application/Services/FlightService';
import { createMock } from 'ts-auto-mock';
import { ICommandResponse } from '../../../../../Application/UseCases/Command/ICommandResponse';

const flightDto = new FlightDto();
flightDto.id = '11';
flightDto.route = 'dsfs';
flightDto.departureDate = new Date();
flightDto.arrivalDate = new Date();
const commandConfig = {
  commandName: 'CreateFlightHandler',
  args: { flightDto },
};
const flightService = createMock<FlightService>();
flightService.createFlight = (param) => {
  return Promise.resolve('11');
};

const crudCommandFactory = new CRUDCommandFactory(flightService);

describe('Creates a flight', () => {
  test('Should be a createFlightHandler', () => {
    const command = crudCommandFactory.makeCommand(commandConfig);
    expect(command).toBeInstanceOf(CreateFlightHandler);
  });
  test('Should execute createFlight', async () => {
    const command = crudCommandFactory.makeCommand(commandConfig);
    await expect(command.execute()).resolves.toEqual({ flightId: '11' });
  });
});
