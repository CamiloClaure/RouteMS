import IQuery from '../IQuery';
import { RouteByNameQueryHandlerFactory } from '../GetRouteByRouteNameHandler/RouteByNameQueryHandlerFactory';
import { FlightDto } from '../../../Dto/FligthDto';
import { RouteDto } from '../../../Dto/RouteDto';
export class GetRouteByRouteNameQuery implements IQuery {
  private route: RouteDto;
  private name = '';

  constructor(flight: RouteDto) {
    this.route = flight;
  }

  public execute = async () => {
    const queryFactory = new RouteByNameQueryHandlerFactory();
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
