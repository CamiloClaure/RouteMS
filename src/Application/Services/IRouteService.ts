import { Route } from '../../Domain/Model/Route/Route';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';

export interface IRouteService {
  getRouteFromRouteName: (routeName: string) => Promise<IQueryResponse<Route>>;
}
