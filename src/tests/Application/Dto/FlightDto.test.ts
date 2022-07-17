import { FlightDto } from '../../../Application/Dto/FligthDto';

describe('Creating a FlightDto', () => {
	test('should create FlightDto', () => {
		const date = new Date('2020-12-12');
		const date2 = new Date('2021-01-01');
		const flight = new FlightDto();
		flight.id = '11';
		flight.departureDate = date;
		flight.arrivalDate = date2;
		flight.route = 'LP-SCZ';
		expect(flight.id).toBe('11');
		expect(flight.departureDate).toBe(date);
		expect(flight.arrivalDate).toBe(date2);
		expect(flight.route).toBe('LP-SCZ');
	});
});
