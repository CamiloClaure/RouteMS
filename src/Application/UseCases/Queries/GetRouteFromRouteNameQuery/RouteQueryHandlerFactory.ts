import { GetRouteByRouteNameQuery } from './GetRouteByRouteNameQuery';
import IQueryConfig from '../IQueryConfig';

export class RouteQueryHandlerFactory<IQueryFactory> {
  makeQuery = (config: IQueryConfig) => {
    if (config.queryName == GetRouteByRouteNameQuery.name) {
      return new GetRouteByRouteNameQuery(config.args);
    } else {
      throw new Error('Command not found!');
    }
  };
}
