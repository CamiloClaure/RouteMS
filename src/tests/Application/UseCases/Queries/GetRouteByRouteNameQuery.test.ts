import { RouteDto } from '../../../../Application/Dto/RouteDto';
import { createMock } from 'ts-auto-mock';
import { RouteService } from '../../../../Application/Services/RouteService';
import { Route } from '../../../../Domain/Model/Route/Route';
import { RouteByNameQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetRouteByRouteNameHandler/RouteByNameQueryHandlerFactory';
import { GetRouteByRouteName } from '../../../../Application/UseCases/Queries/GetRouteByRouteNameHandler/GetRouteByRouteName';
import { RouteQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetRouteFromRouteNameQuery/RouteQueryHandlerFactory';
import { GetRouteByRouteNameQuery } from '../../../../Application/UseCases/Queries/GetRouteFromRouteNameQuery/GetRouteByRouteNameQuery';

const flightDto = new RouteDto();
flightDto.id = '11';
flightDto.name = 'CBBA';
const commandConfig = {
	queryName: 'GetRouteByRouteNameQuery',
	args: { flightDto },
};
const commandConfigWrong = {
	queryName: 'GetRouteByRouteNameQueryWrong',
	args: { flightDto },
};
const routeService = createMock<RouteService>();
routeService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: new Route('1234321') });
};

const routeQueryHandlerFactory = new RouteQueryHandlerFactory(routeService);

describe('Gets a Route', () => {
	test('Should be a createFlightCommand', () => {
		const command = routeQueryHandlerFactory.makeQuery(commandConfig);
		expect(command).toBeInstanceOf(GetRouteByRouteNameQuery);
	});
	test('Should return an error', async () => {
		expect(() => {
			routeQueryHandlerFactory.makeQuery(commandConfigWrong);
		}).toThrow('Command not found!');
	});
	test('Should get a route', async () => {
		const command = routeQueryHandlerFactory.makeQuery(commandConfig);
		const result = await command.execute();
		expect(result.result.id).toEqual('1234321');
	});
});
