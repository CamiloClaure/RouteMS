import { FlightDto } from '../../../../Application/Dto/FligthDto';
import { CRUDCommandFactory } from '../../../../Application/UseCases/Command/CRUDCommandHandler/CRUDFlightFactory';
import { CreateFlightHandler } from '../../../../Application/UseCases/Command/CRUDCommandHandler/CreateFlightHandler';
import { Flight } from '../../../../Domain/Model/Flight/Flight';
const flightDto = new FlightDto();
flightDto.id = '11';
flightDto.route = 'dsfs';
flightDto.departureDate = new Date();
flightDto.arrivalDate = new Date();
const commandConfig = {
  commandName: 'CreateFlightHandler',
  args: { flightDto },
};

const mockRepository = {
  createFlight: jest.fn(),
  updateFlight: jest.fn(),
  removeFlight: jest.fn(),
  FindByIdAsync: jest.fn(),
  CreateAsync: jest.fn(),
};
const crudCommandFactory = new CRUDCommandFactory(mockRepository);

describe('Creates a flight', () => {
  test('Should be a createFlightHandler', () => {
    const command = crudCommandFactory.makeCommand(commandConfig);
    expect(command).toBeInstanceOf(CreateFlightHandler);
  });
  test('Should be a createFlightHandler', () => {
    const command = crudCommandFactory.makeCommand(commandConfig);
    command.execute();
    expect(mockRepository.createFlight).toBeCalled();
  });
});
