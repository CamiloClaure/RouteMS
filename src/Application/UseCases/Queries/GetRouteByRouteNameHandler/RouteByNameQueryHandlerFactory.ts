import IQueryConfig from '../IQueryConfig';
import { GetRouteByRouteName } from './GetRouteByRouteName';
import { RouteService } from '../../../Services/RouteService';

export class RouteByNameQueryHandlerFactory<ICommandFactory> {
	routeService: RouteService;
	constructor(routeService: RouteService) {
		this.routeService = routeService;
	}
	makeCommand = (config: IQueryConfig) => {
		if (config.queryName == GetRouteByRouteName.name) {
			return new GetRouteByRouteName(config.args, this.routeService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
