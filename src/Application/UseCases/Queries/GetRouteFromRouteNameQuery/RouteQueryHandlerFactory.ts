import { GetRouteByRouteNameQuery } from './GetRouteByRouteNameQuery';
import IQueryConfig from '../IQueryConfig';
import { RouteService } from '../../../Services/RouteService';

export class RouteQueryHandlerFactory<IQueryFactory> {
	private routeService: RouteService;
	constructor(routeService: RouteService) {
		this.routeService = routeService;
	}
	makeQuery = (config: IQueryConfig) => {
		if (config.queryName == GetRouteByRouteNameQuery.name) {
			return new GetRouteByRouteNameQuery(config.args, this.routeService);
		} else {
			throw new Error('Command not found!');
		}
	};
}
