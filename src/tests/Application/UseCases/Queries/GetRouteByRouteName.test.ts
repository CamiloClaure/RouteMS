import { RouteDto } from '../../../../Application/Dto/RouteDto';
import { createMock } from 'ts-auto-mock';
import { RouteService } from '../../../../Application/Services/RouteService';
import { Route } from '../../../../Domain/Model/Route/Route';
import { RouteByNameQueryHandlerFactory } from '../../../../Application/UseCases/Queries/GetRouteByRouteNameHandler/RouteByNameQueryHandlerFactory';
import { GetRouteByRouteName } from '../../../../Application/UseCases/Queries/GetRouteByRouteNameHandler/GetRouteByRouteName';

const flightDto = new RouteDto();
flightDto.id = '11';
flightDto.name = 'CBBA';
const commandConfig = {
	queryName: 'GetRouteByRouteName',
	args: { flightDto },
};
const commandConfigWrong = {
	queryName: 'GetRouteByRouteNameWrong',
	args: { flightDto },
};
const routeService = createMock<RouteService>();
routeService.getRouteFromRouteName = (param) => {
	return Promise.resolve({ result: new Route('1234321') });
};

const routeByNameQueryHandlerFactory = new RouteByNameQueryHandlerFactory(routeService);

describe('Gets a Route', () => {
	test('Should be a createFlightCommand', () => {
		const command = routeByNameQueryHandlerFactory.makeCommand(commandConfig);
		expect(command).toBeInstanceOf(GetRouteByRouteName);
	});
	test('Should return an error', async () => {
		expect(() => {
			routeByNameQueryHandlerFactory.makeCommand(commandConfigWrong);
		}).toThrow('Command not found!');
	});
	test('Should get a route', async () => {
		const command = routeByNameQueryHandlerFactory.makeCommand(commandConfig);
		const result = await command.execute();
		expect(result.id).toEqual('1234321');
	});
});
