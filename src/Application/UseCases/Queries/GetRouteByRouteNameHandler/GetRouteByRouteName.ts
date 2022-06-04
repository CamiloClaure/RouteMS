import { RouteDto } from '../../../Dto/RouteDto';
import { RouteService } from '../../../Services/RouteService';

export class GetRouteByRouteName<IQuery> {
  private route: RouteDto;
  private routeService: RouteService;

  constructor(route: RouteDto, routeService: RouteService) {
    this.route = route;
    this.routeService = routeService;
  }

  public execute = async () => {
    return (await this.routeService.getRouteFromRouteName(this.route.name))
      .result;
  };
}
