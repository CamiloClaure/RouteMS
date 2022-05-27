import IQueryConfig from '../IQueryConfig';
import { GetRouteByRouteName } from './GetRouteByRouteName';

export class RouteByNameQueryHandlerFactory<ICommandFactory> {
  makeCommand = (config: IQueryConfig) => {
    if (config.queryName == GetRouteByRouteName.name) {
      return new GetRouteByRouteName(config.args);
    } else {
      throw new Error('Command not found!');
    }
  };
}
