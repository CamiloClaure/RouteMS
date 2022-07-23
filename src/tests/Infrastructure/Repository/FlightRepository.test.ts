import { FlightRepository } from '../../../Infrastructure/ORM/Repository/FlightRepository';
import { Flight } from '../../../Domain/Model/Flight/Flight';

const flightRepository = new FlightRepository();
describe('Flight Service', () => {
	test('Creates a flight', async () => {
		const result = await flightRepository.CreateAsync('123');
		expect(result).toBe(undefined);
	});
	test('Removes a flight', async () => {
		const result = await flightRepository.removeFlight(new Flight());
		expect(result).toBe(undefined);
	});
	test('Finds a flight', async () => {
		const result = await flightRepository.FindByIdAsync('123');
		expect(result).toBe(undefined);
	});
	test('Updates a flight', async () => {
		const result = await flightRepository.updateFlight(new Flight());
		expect(result).toBe(undefined);
	});
});
