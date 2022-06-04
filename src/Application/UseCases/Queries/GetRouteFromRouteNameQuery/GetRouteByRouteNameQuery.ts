import IQuery from '../IQuery';
import { RouteByNameQueryHandlerFactory } from '../GetRouteByRouteNameHandler/RouteByNameQueryHandlerFactory';
import { RouteDto } from '../../../Dto/RouteDto';
import { Route } from '../../../../Domain/Model/Route/Route';
import { RouteService } from '../../../Services/RouteService';
export class GetRouteByRouteNameQuery implements IQuery<Route> {
  private route: RouteDto;
  private name = '';
  private routeService: RouteService;
  constructor(flight: RouteDto, routeService: RouteService) {
    this.route = flight;
    this.routeService = routeService;
  }

  public execute = async () => {
    const queryFactory = new RouteByNameQueryHandlerFactory(this.routeService);
    const queryName = 'GetRouteByRouteName';

    const config = {
      queryName,
      args: this.route,
    };
    const command = queryFactory.makeCommand(config);

    const results = await command.execute();
    return { result: results };
  };
}
