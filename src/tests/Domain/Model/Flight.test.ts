import { FlightCodeGenerated } from '../../../Domain/Event/FlightCodeGenerated';
import { FlightCodeValue } from '../../../Domain/ValueObjects/FlightCode';
import { Airport } from '../../../Domain/Model/Airport/Airport';
import { createMock } from 'ts-auto-mock';
import { FlightService } from '../../../Application/Services/FlightService';
import { Route } from '../../../Domain/Model/Route/Route';
import { Flight } from '../../../Domain/Model/Flight/Flight';
import { DateValue } from '../../../SharedKernel/ValueObjects/DateValue';
const date = new Date('2020-12-12');
const route = createMock<Route>();
route.name.Name = 'CBBASCZ';
describe('Creating a FlightCodeGenerated', () => {
  test('should create FlightCodeGenerated', () => {
    const flight = new Flight();
    flight.route = new Route();
    flight.arrivalDate = new DateValue(new Date());
    flight.departureDate = new DateValue(new Date());
    flight.consolidateFlight();
    expect(flight).not.toBe(null);
    expect(flight.domainEvents).toHaveLength(1);
  });
});
