import { Route } from '../Model/Route/Route';
import { IRepository } from '../../SharedKernel/Core/IRepository';

interface IDestinationRepository extends IRepository<any, any> {
	updateDestination(destination: Route): Promise<any>;
	removeDestination(destination: Route): Promise<any>;
}
