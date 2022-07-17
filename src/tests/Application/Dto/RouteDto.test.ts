import { RouteDto } from '../../../Application/Dto/RouteDto';

describe('Creating a RouteDto', () => {
	test('should create RouteDto', () => {
		const date = new Date('2020-12-12');
		const route = new RouteDto();
		route.id = '11';
		route.name = 'SCZCBBA';
		route.distance = 2323;
		route.time = date;
		route.origin = 'SCZ';
		route.destiny = 'CBBA';
		expect(route.id).toBe('11');
		expect(route.name).toBe('SCZCBBA');
		expect(route.distance).toBe(2323);
		expect(route.time).toBe(date);
		expect(route.origin).toBe('SCZ');
		expect(route.destiny).toBe('CBBA');
	});
});
