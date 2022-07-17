import { createMock } from 'ts-auto-mock';
import { RouteService } from '../../../Application/Services/RouteService';
import { IFlightRepository } from '../../../Domain/Repositories/IFlightRepository';
import { FlightDto } from '../../../Application/Dto/FligthDto';
import { RouteRepository } from '../../../Infrastructure/ORM/Repository/RouteRepository';
import { Route } from '../../../Infrastructure/ORM/Entities/Route.entity';

const routeEntity = new Route('123');
routeEntity.name = 'CBBA';

const routeRepository = createMock<RouteRepository>();
routeRepository.FindByNameAsync = (param) => {
	return Promise.resolve(routeEntity);
};

const routeServiceTest = new RouteService(routeRepository);

describe('Route Service', () => {
	test('Gets a route based on its name', async () => {
		const name = await routeServiceTest.getRouteFromRouteName('CBBA');
		expect(name.result.name).toEqual({ Name: 'CBBA' });
	});
});
