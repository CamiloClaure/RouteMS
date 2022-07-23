import { IRouteService } from './IRouteService';
import { RouteQueryHandlerFactory } from '../UseCases/Queries/GetRouteFromRouteNameQuery/RouteQueryHandlerFactory';
import { RouteDto } from '../Dto/RouteDto';
import { Route } from '../../Domain/Model/Route/Route';
import { IQueryResponse } from '../UseCases/Queries/IQueryResponse';
import { Injectable } from '@nestjs/common';
import { RouteRepository } from '../../Infrastructure/ORM/Repository/RouteRepository';
import { RouteBuilder } from '../../Domain/Builder/RouteBuilder';

@Injectable()
export class RouteService implements IRouteService {
	private routeRepository: RouteRepository;
	constructor(routeRepository: RouteRepository) {
		this.routeRepository = routeRepository;
	}
	async getRouteFromRouteName(routeName: string): Promise<IQueryResponse<Route>> {
		const routeEntity = await this.routeRepository.FindByNameAsync(routeName);
		return {
			result: new RouteBuilder(new Route(routeEntity.id)).setName(routeEntity.name).build(),
		};
	}
}
