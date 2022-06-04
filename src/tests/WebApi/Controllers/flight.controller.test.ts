import { FlightController } from '../../../WebApi/Controllers/flight.controller';
import { createMock } from 'ts-auto-mock';
import { CreateFlightCommandFactory } from '../../../Application/UseCases/Command/CreateFlightCommand/CreateFlightCommandFactory';
import { FlightDto } from '../../../Application/Dto/FligthDto';
import { FlightService } from "../../../Application/Services/FlightService";

const commandConfig = {
  commandName: 'CreateFlightCommand',
  args: new FlightDto(),
};


describe('FlightController', () => {
  let flightController: FlightController;
  const flightService = createMock<FlightService>();
  const createFlightCommandFactory = new CreateFlightCommandFactory(flightService)

  test('does something', async () => {
    flightController = new FlightController(createFlightCommandFactory);
    const result = await flightController.createFlight(new FlightDto());
    expect(result).not.toBe(null);
  });
});
