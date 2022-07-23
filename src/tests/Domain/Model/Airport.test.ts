import { FlightCodeGenerated } from '../../../Domain/Event/FlightCodeGenerated';
import { FlightCodeValue } from '../../../Domain/ValueObjects/FlightCode';
import { Airport } from '../../../Domain/Model/Airport/Airport';
import { createMock } from 'ts-auto-mock';
import { FlightService } from '../../../Application/Services/FlightService';
import { Route } from '../../../Domain/Model/Route/Route';
const date = new Date('2020-12-25T00:00:00');
const route = createMock<Route>();
route.name.Name = 'CBBASCZ';
describe('Creating a FlightCodeGenerated', () => {
	test('should create FlightCodeGenerated det', () => {
		const airport = new Airport('Viru Viru');
		expect(airport).not.toBe(null);
		const flightCode = airport.getFlightCode(date, route);
		expect(flightCode).toBe('25-CBBASCZ');
	});
});
