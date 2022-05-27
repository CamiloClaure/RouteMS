import { FlightDto } from '../../../../Application/Dto/FligthDto';
import { CreateFlightCommandFactory } from '../../../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { CreateFlightCommand } from '../../../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommand';
let flightDto = new FlightDto();
flightDto.id = '11';
flightDto.route = 'dsfs';
flightDto.departureDate = new Date();
flightDto.arrivalDate = new Date();
const commandConfig = {
  commandName: 'CreateFlightCommand',
  args: { flightDto },
};
const createFlightCommandFactory = new CreateFlightCommandFactory();

describe('Creates a flight', () => {
  test('Should be a createFlightCommand', () => {
    const command = createFlightCommandFactory.makeCommand(commandConfig);
    expect(command).toBeInstanceOf(CreateFlightCommand);
  });
});
