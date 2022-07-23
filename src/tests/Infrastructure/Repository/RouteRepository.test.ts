import { FlightRepository } from '../../../Infrastructure/ORM/Repository/FlightRepository';
import { Flight } from '../../../Domain/Model/Flight/Flight';
import { RouteRepository } from '../../../Infrastructure/ORM/Repository/RouteRepository';
import { Route } from '../../../Domain/Model/Route/Route';

const flightRepository = new RouteRepository();
describe('Flight Service', () => {
	test('Creates a flight', async () => {
		const result = await flightRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a flight', async () => {
		const result = await flightRepository.removeRoute(new Route());
		expect(result).toBe(undefined);
	});
	test('Updates a flight', async () => {
		const result = await flightRepository.updateRoute(new Route());
		expect(result).toBe(undefined);
	});
	test('Updates a flight', async () => {
		const result = await flightRepository.createRoute(new Route());
		expect(result).toBe(undefined);
	});
});
